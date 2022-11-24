import { useParams, useMatches } from '@remix-run/react';

export default function ProjectId() {
  const { projectId } = useParams();

  console.log('params', projectId)

  const { projects } = useMatches().find(
    (m) => m.pathname === `/projects`
  )?.data as {
    projects: any;
  };
  const { name, website, description } = projects.find((e: any) => e.path === projectId);

  
  return <div>
    <div>{name}</div>
    <div>{description}</div>
    <div className='text-xs text-gray-600'>
      Website
    </div>
    <div className='text-lg text-blue-500'>
      <a href={website}>{website}</a>
    </div>
  </div>
}

