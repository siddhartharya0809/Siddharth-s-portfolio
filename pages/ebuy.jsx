import Image from "next/image";
import React from "react";

import ebuyImg from "../public/assets/projects/ebuy.png";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ebuyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ebuy - Ecommerce App</h2>
          <h3>React JS / Material UI / Netlify</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <ol>
            <li>
              Developed user-friendly e-commerce website using ReactJS and
              Styled Components.
            </li>
            <li>
              Implemented multi-page functionality and routing, resulting in a
              dynamic and seamless user experience.
            </li>
            <li>
              Achieved a 90% mobile responsiveness score on Google&#39;s
              Mobile-Friendly Test by optimizing the website&#39;s design for
              mobile devices.
            </li>
            <li>
              Delivered a website with a fast load time and an emphasis on user
              experience (UI/UX), resulting in an overall satisfaction rate of
              95% from users.
            </li>
            <li>
              Features: Responsive, Fast(went from 20% to 87%), User friendly
              (UI/UX).
            </li>
            <li>
              Tech: HTML CSS, ReactJS, JavaScript, Material-UI, Styled
              Components.
            </li>
          </ol>
          <a
            href="https://github.com/siddhartharya0809/ebuy"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://ebuy-v3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Netlify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Router
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

export default crypto;
