import { useParams, useMatches } from '@remix-run/react';
import { Slider } from '~/components/Slider';
import { Image } from '~/components/Image';

export default function ProjectId() {
  const { projectId } = useParams();

  console.log('params', projectId)

  const { projects } = useMatches().find(
    (m) => m.pathname === `/projects`
  )?.data as {
    projects: any;
  };
  const { name, website, description, gallery } = projects.find((e: any) => e.path === projectId);
  let carousel;
  if (gallery) {
    carousel = gallery.map((item: string, key: number) => {
      return <Image key={key} imageUrl={item} />
    })
  }

  console.log('carousel', carousel)
  
  return <div className="max-w-xl w-full mx-auto">
    <div className="">
      <div>{name}</div>
      <div>{description}</div>
      <div className='text-xs text-gray-600'>
        Website
      </div>
      <div className='text-lg text-blue-500'>
        <a href={website}>{website}</a>
      </div>
      <div>
        <div>
        {carousel &&
          <Slider
          cards={carousel}
        />
      }
        </div>
      </div>
    </div>

  </div>
}

