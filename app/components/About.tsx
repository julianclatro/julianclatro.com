import React from 'react';
// import {getMDXComponent} from 'mdx-bundler/client'
// import * as aboutText from "~/texts/about.mdx";
// import { frontmatter, code } from '~/texts/demo'
import Component from "~/texts/about.md";
type AboutProps = {};

export const About: React.FC<AboutProps> = ({}) => {

  return (
    <>
      <div className="prose md:prose-lg lg:prose-xl">
        <Component />
      </div>
    </>
  );
};
