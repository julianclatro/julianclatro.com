import type { LoaderFunction } from "@remix-run/cloudflare";
import { Outlet, Link, useLoaderData } from "@remix-run/react"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/cloudflare"; // or "@remix-run/cloudflare"
import { Card } from '~/components';

type LoaderData = { projects: Project[] } ;

export const loader: LoaderFunction = async ({ context, request }) => {
  const projects: Project[] = [
    { name: 'Wally', description: '', image_url: '', website: 'https://wally.digital', tags: [ 'Remix', 'React', 'Workers'], path: 'wally' },
    { name: 'Wally Design System', description: '', image_url: '', website: 'https://design.wally.digital', tags: [ 'Storybook', 'React', 'Tailwind', 'Workers'], path: 'wally_design_system' },
    { name: 'Hacksur', description: '', image_url: '', website: 'https://hacksur.com', tags: [ 'React', 'Workers'], path: 'hacksur' },
    { name: 'Datasa', description: '', image_url: '', website: 'https://datasa.info', tags: [ 'Remix', 'React', 'Tailwind', 'Workers'], path: 'datasa' }
  ]
  return { projects };

};


const Projects = () => {
  const { projects } = useLoaderData()
  
  return (<>
  <div className="text-[24px] font-bold mb-[24px]">Projects</div>
  <div className="flex flex-row space-x-[40px]">
    <div className="flex flex-col space-y-[12px]">
      {projects.map((project: Project, key: number) => {
        return <Link key={key} to={`${project.path}`}><Card data={project} key={key} /></Link>
      })}
    </div>
    <Outlet />
  </div>
</>)
}
export default Projects