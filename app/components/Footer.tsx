import React from 'react';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
  const itemStyle = "hover:text-blue-500"
  return (
    <div className="flex flex-column justify-between h-full">
      <div className="flex flex-column space-x-[20px] items-end h-full">
        <div className="text-gray-400 text-sm">version</div>
      </div>
      <div className="flex flex-column space-x-[20px] items-end h-full">
        <a className={itemStyle} href="https://discordapp.com/users/838749542685474816">Discord</a>
        <a className={itemStyle} href="https://github.com/julianclatro">Github</a>
        <a className={itemStyle} href="https://dribbble.com/julianclatro">Dribble</a>
        <a className={itemStyle} href="https://figma.com/@julianclatro">Figma</a>
      </div>
    </div>
  );
};
