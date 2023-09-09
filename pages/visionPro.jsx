import Image from "next/image";
import React from "react";
import visionPro from "../public/assets/projects/apple-vision-pro.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={visionPro}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Apple Vision Pro - Clone</h2>
          <h3>HTML | CSS | JavaScript | GSAP</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p></p>
          <h2>Project Overview: </h2>
        </div>

        <div className="col-span-4">
          <ol style={{ fontSize: "17px" }}>
            <li>
              Created a detailed clone of Apple Vision Pro showcasing
              proficiency in frontend web development.
            </li>
            <li>
              Utilized GSAP animations, ScrollTrigger, and Locomotive Scroll to
              craft engaging and interactive user experiences, highlighting
              expertise in modern web technologies.
            </li>
            <li>
              Seamlessly integrated videos and images to replicate product
              features, demonstrating meticulous attention to design accuracy.
            </li>
            <li>
              Published the project online
              (https://siddhartharya0809.github.io/apple-vision-pro/), allowing
              public access to showcase frontend development skills and UI
              design expertise.
            </li>
          </ol>
          <a
            href="https://github.com/siddhartharya0809/apple-vision-pro"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://siddhartharya0809.github.io/apple-vision-pro/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="pl-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 pl-5">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GSAP
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GitHub Pages
              </p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
