import React from 'react';
import { Link } from "@remix-run/react";
type MenuProps = {};

export const Menu: React.FC<MenuProps> = ({}) => {
  const itemStyle = "hover:text-blue-500"
  const soonStyle = "hidden sm:block text-gray-400 cursor-not-allowed"
  return (
    <div className="flex flex-column justify-between items-baseline">
      <div>
        <Link to="" className="font-forma-djr-display text-2xl tracking-wider">Julian Clatro</Link>        
      </div>
      <div className="flex space-x-[20px] flex-column">
        <Link to="about" className={itemStyle}>About</Link>
        <Link to="libraries" className={itemStyle}>Libraries</Link>
        <Link to="projects" className={itemStyle}>Projects</Link>
        <div className={soonStyle}>Blog</div>
        <div className={soonStyle}>Awards</div>
      </div>
    </div>
  );
};
