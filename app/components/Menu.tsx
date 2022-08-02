import React from 'react';
import { Link } from "@remix-run/react";
type MenuProps = {};

export const Menu: React.FC<MenuProps> = ({}) => {
  const itemStyle = "hover:text-blue-500"
  return (
    <div className="flex flex-column justify-between items-baseline">
      <div>
        <span className="font-forma-djr-display text-2xl ">Julian Clatro</span>        
      </div>
      <div className="flex space-x-[20px] flex-column">
        <Link to="about" className={itemStyle}>About</Link>
        <Link to="projects" className={itemStyle}>Projects</Link>
        <div className={itemStyle}>Blog</div>
        <div className={itemStyle}>Awards</div>
      </div>
    </div>
  );
};
