import React from 'react';


export const Card: React.FC<ProjectCard> = ({ data }) => {
  const { name, tags, image_url} = data
  return (
    <div className="rounded-[8px] border border-gray-500 h-full sm:w-[320px]">
      <div className="p-[20px]">
        <div className='text-xs text-gray-600'>
          Project Name
        </div>
        <div className='text-lg text-blue-500'>
          {name}
        </div>
        <div className='text-xs text-gray-600 mb-[8px]'>
          tags
        </div>
        <div className="flex flex-row space-x-[4px] text-xs">
          {
            tags.map((item: any, key: number) => {
              return <div key={key} className="bg-sky-400 text-stone-700 px-[8px] py-[4px] rounded-lg">{item}</div>
            })
          }
        </div>
        {/* <div className='text-lg text-blue-500'>
          <a href={website}>{website}</a>
        </div> */}
      </div>
    </div>
  );
};
