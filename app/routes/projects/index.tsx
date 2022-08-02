import { Link, useMatches } from "@remix-run/react";
import { Card } from '~/components';

const projects: Project[] = [
  { name: 'Wally', description: '', image_url: '', website: 'https://wally.digital', tags: [] },
  { name: 'Wally Design System', description: '', image_url: '', website: 'https://design.wally.digital', tags: [] },
  { name: 'Hacksur', description: '', image_url: '', website: 'https://hacksur.com', tags: [] }
]

export default function Index() {
  return (
    <>
      <div className="flex flex-column space-x-[20px]">
        {projects.map((project: Project, key) => {
          return <Card data={project} key={key} />
        })}
      </div>
    </>
  );
}
