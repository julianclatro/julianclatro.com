import React from 'react';


export const Card: React.FC<ProjectCard> = ({ data }) => {
  const { name, description, image_url, website} = data
  return (
    <div className="rounded-[8px] border border-gray-500 h-full sm:w-[320px]">
      <div className="p-[20px]">
        <div className='text-xs text-gray-600'>
          Project Name
        </div>
        <div className='text-lg text-blue-500'>
          {name}
        </div>
        <div className='text-xs text-gray-600'>
          Website
        </div>
        <div className='text-lg text-blue-500'>
          <a href={website}>{website}</a>
        </div>
      </div>
    </div>
  );
};
