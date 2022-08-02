import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

import esbuild from 'esbuild';

import NodeModulesPolyfill from '@esbuild-plugins/node-modules-polyfill';
const { NodeModulesPolyfillPlugin } = NodeModulesPolyfill;

async function build() {
  const mode = process.env.NODE_ENV
    ? process.env.NODE_ENV.toLowerCase()
    : 'development';

  const version = process.env.VERSION
    ? process.env.VERSION
    : new Date().toISOString();
  if (!process.env.SESSION_SECRET) {
    throw new Error('SESSION_SECRET is required');
  }

  console.log(`Building Worker in ${mode} mode for version ${version}`);

  const startTime = Date.now();
  const result = await esbuild.build({
    entryPoints: ['./worker/index.ts'],
    bundle: true,
    minify: mode === 'production',
    sourcemap: mode !== 'production',
    incremental: mode !== 'production',
    format: 'esm',
    metafile: true,
    mainFields: ['module', 'main'],
    external:
      mode === 'production'
        ? ['*.development.js']
        : ['*.production.js', '*.production.min.js'],
    define: {
      process: JSON.stringify({
        env: {
          NODE_ENV: mode,
          VERSION: version,
        },
      }),
    },
    outfile: './public/_worker.js',
    plugins: [
      NodeModulesPolyfillPlugin(),
      ],
  });
  const endTime = Date.now();

  console.log(`Built in ${endTime - startTime}ms`);

  if (mode === 'production') {
    console.log(await esbuild.analyzeMetafile(result.metafile));
  }

  process.exit(0);
}

build().catch((e) => console.error('Unknown error caught during build:', e));
