import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, liveUrl }) => {
  return (
    <div className="relative flex flex- items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#4e54c8] to-[#8f94fb]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>

        <div className="flex space-x-4 justify-center ">
          <Link href={projectUrl}>
            <p className="text-center p-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
          <p className="text-center p-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            <a href={liveUrl}>Live Link</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
