import type { LoaderFunction } from "@remix-run/cloudflare";
import { Outlet, Link, useLoaderData } from "@remix-run/react"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/cloudflare"; // or "@remix-run/cloudflare"
import { Card, Slider, Image } from '~/components';

type LoaderData = { projects: Project[] } ;
const gallery = ["https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e8e241d315b7b5adcb_3%20(2).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e7c938da49fe4fdb79_4%20(1).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e7f7fb6bfca20a18bd_5%20(1).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e60c3ba46b580806e4_6%20(1).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e6024e1ae3f421ee38_7%20(1).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e60ccb3132b3165605_8%20(1).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e60ccb313180165604_9%20(1).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947e5c84f227c7cadaa2d_10%20(1).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947ea24c9fb494ade57f9_2%20(2).png",
"https://assets.website-files.com/62ea95eedf96d876cdc904ef/636947eadcc08ef31289387c_1%20(2).png"]
export const loader: LoaderFunction = async ({ context, request }) => {
  const projects: Project[] = [
    { name: 'Wally', description: '', image_url: '', website: 'https://wally.digital', tags: [ 'Remix', 'React', 'Workers', 'SQL'], path: 'wally',
    gallery: gallery
  },
    { name: 'Wally Design System', description: '', image_url: '', website: 'https://design.wally.digital', tags: [ 'Storybook', 'React', 'Tailwind', 'Workers'], path: 'wally_design_system' },
    { name: 'Hacksur', description: '', image_url: '', website: 'https://hacksur.com', tags: [ 'React', 'Workers', 'Vanilla'], path: 'hacksur' },
    { name: 'Datasa', description: '', image_url: '', website: 'https://datasa.info', tags: [ 'Remix', 'React', 'Tailwind', 'Workers'], path: 'datasa' }
  ]
  return { projects };
};


const Projects = () => {
  const { projects } = useLoaderData()
  
  
  return (<div>

  <div className="text-[24px] font-bold mb-[24px]">Projects</div>
  <div className="flex flex-row space-x-[40px]">
    <div className="flex flex-col space-y-[12px]">
      {projects.map((project: Project, key: number) => {
        return <Link key={key} to={`${project.path}`}><Card data={project} key={key} /></Link>
      })}
    </div>
    <Outlet />
  </div>
</div>)
}
export default Projects
