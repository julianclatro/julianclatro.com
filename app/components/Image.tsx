import React from 'react';
import clsx from 'clsx';

type ImageProps = {
  imageUrl: string;
  customCss?: string;
  width?: string;
  height?: string;
};

export const Image: React.FC<ImageProps> = ({ imageUrl, customCss, width, height }) => {
  const style = clsx(
    'bg-cover bg-center w-full h-full object-center object-cover',
    `${customCss}`
  );

  return (
    <div className="w-[334px] h-[200px]">
      <img style={{ height: `${height}px`, width: `${width}px`}} className={style} src={imageUrl} alt=""/>
    </div>
  );
};
