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
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="A MultiFunction ToDo App"
            backgroundImg={todo}
            projectUrl="/todoApp"
            tech="HTML, CSS, JS"
            liveUrl="https://siddhartharya0809.github.io/TodoApp/"
          />
          <ProjectItem
            title="Ebuy Ecommerce App"
            backgroundImg={ebuy}
            projectUrl="/ebuy"
            tech="HTML, CSS, JS, React JS,and many more."
            liveUrl="https://ebuy-v3.netlify.app/"
          />
          <ProjectItem
            title="React Infinity Scroll"
            backgroundImg={infintyScroll}
            projectUrl="/infinityScroll"
            tech="HTML, CSS, JS, React JS, API, and many more."
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
            title="Apple Vision Pro - Clone"
            backgroundImg={visionPro}
            projectUrl="/visionPro"
            tech="HTML, CSS, JS, GSAP"
            liveUrl={"https://siddhartharya0809.github.io/apple-vision-pro/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
