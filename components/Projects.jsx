import Image from "next/image";
import Link from "next/link";
import React from "react";

import ebuy from "../public/assets/projects/ebuy.png";
import infintyScroll from "../public/assets/projects/infinty_scroll.png";
import splitScreen from "../public/assets/projects/split_screen.png";
import todo from "../public/assets/projects/todo.png";
import visionPro from "../public/assets/projects/apple-vision-pro.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Which I made</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Apple Vision Pro - Clone"
            backgroundImg={visionPro}
            projectUrl="/visionPro"
            tech="HTML, CSS, JS, GSAP"
            liveUrl={"https://siddhartharya0809.github.io/apple-vision-pro/"}
          />

          <ProjectItem
            title="Ebuy Ecom App"
            backgroundImg={ebuy}
            projectUrl="/ebuy"
            tech="HTML, CSS, JS, React JS."
            liveUrl="https://ebuy-v3.netlify.app/"
          />
          <ProjectItem
            title="React Infinity Scroll"
            backgroundImg={infintyScroll}
            projectUrl="/infinityScroll"
            tech="HTML, CSS, JS, React JS."
            liveUrl="https://infinityscrollapp.netlify.app/"
          />
          <ProjectItem
            title="Split Screen UI"
            backgroundImg={splitScreen}
            projectUrl="/splitScreen"
            tech="HTML, CSS, JS"
            liveUrl="https://siddhartharya0809.github.io/Split-Screen-UI/"
          />
          <ProjectItem
            title="TODO App"
            backgroundImg={todo}
            projectUrl="/todoApp"
            tech="HTML, CSS, JS"
            liveUrl="https://siddhartharya0809.github.io/TodoApp/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
