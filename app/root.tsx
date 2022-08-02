import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Menu, Footer } from '~/components'
import designStyle from './tailwind.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Julian Clatro",
  viewport: "width=device-width,initial-scale=1",
});
export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://use.typekit.net/qus5sww.css',
    },
    {
      rel: 'stylesheet',
      href: designStyle,
    }
  ];
};


export default function App() {
  return (
    <html lang="en" className="bg-slate-200 overscroll-none">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
      <div className="m-[2vh]">
        <div className="bg-slate-50 border border-slate-900 rounded-[8px]">
          <div className="p-[10px] border-b border-1 rounded-t-[7px] h-[6vh]">
            <Menu />
          </div>
          <div className="px-[10px] py-[20px] h-[84vh] overflow-y-scroll scroll-smooth">
            <Outlet />
          </div>
          <div className="p-[10px] border-t border-1 h-[5.5vh]">
            <Footer />
          </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
