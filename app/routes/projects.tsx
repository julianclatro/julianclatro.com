import type { LoaderFunction } from "@remix-run/cloudflare";
import { Outlet, Link, useLoaderData } from "@remix-run/react"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/cloudflare"; // or "@remix-run/cloudflare"

type Project = {
  name: string;
};

type LoaderData = { projects: Project[] } ;

export const loader: LoaderFunction = async ({ context, request }) => {
  return null
};

const Projects = () => <Outlet />

export default Projects