import Image from "next/image";
import React from "react";
import infintyScrollImg from "../public/assets/projects/infinty_scroll.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const infinityScroll = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={infintyScrollImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Infinity Scroll</h2>
          <h3>React JS / TypeScript / Netlify</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-1 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <ol>
            <li>
              Designed a high-performance infinite scrolling page with a
              lightweight framework which Improved website performance by 30%.{" "}
            </li>
            <li>
              Implemented a seamless user experience, allowing for dynamic
              viewing and loading of cards while scrolling by implementing lazy
              loading for images and optimizing data fetching.
            </li>
            <li>
              Improved website performance by 25% by using ReactJS (v18),
              ViteJS, TypeScript, and React Query.{" "}
            </li>
            <li>
              Features: Infinitely loads a set of items or grid in react, View
              Card form, Fast server-side rendering, Used API to load data.
            </li>
            <li>
              Tech: JavaScript, ReactJS(version 18), ViteJS, TypeScript, React
              Query, CSS Vanilla, HTML, Rick and Morty API&#39;s.
            </li>
          </ol>
          <a
            href="https://github.com/siddhartharya0809/React-Infinity-Scroll"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://infinityscrollapp.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS (React Query)
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ViteJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS Vanilla
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Rick and Morty API
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

export default infinityScroll;
