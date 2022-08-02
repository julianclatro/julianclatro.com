const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

module.exports = {
  apps: [
    {
      name: 'Remix',
      script: 'npm run dev:remix',
      ignore_watch: ['.'],
      env: {
        ...result.parsed,
        NODE_ENV: 'development',
      },
    },
    {
      name: "Tailwind",
      script: "tailwindcss -o app/tailwind.css -i styles/tailwind.css --watch --jit -c tailwind.config.js",
      ignore_watch: ["."],  
      env: {
        NODE_ENV: process.env.NODE_ENV ?? "development",
      },
    },
    {
      name: 'Server',
      script: 'node build-server.mjs',
      watch: ['./build/'],
      autorestart: false,
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    },
    {
      name: 'Wrangler',
      script: 'npx wrangler pages dev ./public --binding $(cat .env)',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        BROWSER: 'none',
      },
    },
  ],
};
