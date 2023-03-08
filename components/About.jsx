import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 font-medium">
            I&#39;m a code-slinging web developer who loves to mix things up
            both on and off the screen. I&#39;m always experimenting with the
            latest tech and sharpening my skills. But when I&#39;m not coding,
            I&#39;m whipping up a culinary masterpiece or cheering on my
            favorite cricket and basketball teams.
          </p>
          <p className="py-2 text-gray-600 font-medium">
            I have a curious mind and a passion for learning, and I strive to
            create websites that are both fun and functional. So, whether
            I&#39;m coding like a pro or cooking like a chef, I&#39;m always
            ready for a good challenge.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-50% m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
