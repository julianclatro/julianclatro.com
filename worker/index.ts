// @ts-ignore
import * as build from "../build/index.js"
import { createFetchHandler } from "./adapter"

// import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages"
// import { createCloudflareKVSessionStorage } from "@remix-run/cloudflare-pages"


const handleFetch = createFetchHandler({
  build,
  getLoadContext(request: Request, env: any, context: any) {
    return {
      ...context,
      env,
    }
  },
})


const worker: ExportedHandler = {
  fetch: handleFetch,
}

export default worker