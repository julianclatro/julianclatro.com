import { Outlet } from "@remix-run/react";
import { Link, useLoaderData } from "@remix-run/react"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/cloudflare"; // or "@remix-run/cloudflare"
import { Menu, Footer, About } from '~/components';
import * as firstPost from "./posts/first-post.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  // Return metadata about each of the posts for display on the Home page.
  // Referencing the posts here instead of in the Home component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // Home page.
  return json([
    postFromModule(firstPost),
  ]);
}

export default function Home() {
  const posts = useLoaderData();

  return (
    <div>
    <About />
    </div>
  );
}