import React from 'react';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({}) => {
  const itemStyle = "hover:text-blue-500"
  return (
    <div className="flex flex-column justify-end space-x-[20px] items-end h-full">
      <a className={itemStyle} href="https://discordapp.com/users/838749542685474816">Discord</a>
      <a className={itemStyle} href="">Github</a>
      <a className={itemStyle} href="">Dribble</a>
    </div>
  );
};
