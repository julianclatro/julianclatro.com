import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Menu, Footer, Slider, Image } from '~/components'
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

  const itemStyle = "hover:text-blue-500"
  return (
    <html lang="en" className="bg-slate-200 overscroll-none">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* <div className="sm:max-w-screen-lg max-w-screen-sm w-full mx-auto">
        <div className="bg-slate-50 border border-slate-900 rounded-[8px]">
          <div className="p-[10px] border-b border-1 rounded-t-[7px] h-[6vh]">
            <Menu />
          </div>
          <div className="px-[40px] py-[20px] h-[84vh] overflow-y-scroll scroll-smooth">
            <Outlet />
          </div>
          <div className="p-[10px] border-t border-1 h-[5.5vh]">
            <Footer />
          </div>
          </div>
        </div> */}
        <div className="sm:max-w-screen-lg max-w-screen-sm w-full mx-auto mt-10">
          <div className="tk-forma-djr-display font-bold text-5xl">Julian Clatro</div>
          <div>Hacker & Designer</div>
          <div>Shipping software at <a href="https://hacksur.com" className="text-sky-600 underline">hacksur</a></div>
          <div className="mt-10">
            <div className="text-xl">Ongoing projects: </div>
            <div><a href="https://nobak.net" className="text-l">NOBAK</a></div>
            <div><a href="https://funskill.cc">Funskill</a></div>
            <div><a href="https://filmara.org">Filmara</a></div>
          </div>
          <div className="mt-10">
            <div className="text-xl">Past projects: </div>
            <div>
              <a href="https://datasa.info" className="text-l">datasa</a>
              {/* <div>Datos Socioambientales</div> */}
            </div>
          </div>
          <div className="mt-10">
            <div>
              Social Networks
            </div>
            <div className="flex flex-column space-x-[20px] items-end h-full">
              <a className={itemStyle} href="https://discordapp.com/users/838749542685474816">Discord</a>
              <a className={itemStyle} href="https://github.com/julianclatro">Github</a>
              <a className={itemStyle} href="https://dribbble.com/julianclatro">Dribble</a>
              {/* <a className={itemStyle} href="https://figma.com/@julianclatro">Figma</a> */}
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
