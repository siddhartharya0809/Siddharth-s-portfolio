import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-6">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Myself</h2>
          <p className="py-2 text-gray-600 font-medium">
            Namaste I&#39;m a web developer with a zest for innovation and a
            taste for life. I&#39;m always experimenting with the latest tech
            and sharpening my skills. When I&#39;m not lost in lines of code,
            you can find me cooking delicious meals or passionately cheering for
            my favorite cricket and basketball teams.
          </p>
          <p className="py-2 text-gray-600 font-medium">
            I have a curious mind that&#39;s why I&#39;m all about learning and
            having a great time, even if I occasionally turn things into a
            delightful mess. Whether it&#39;s coding wizardry or cooking
            escapades, I&#39;m always up for an exciting challenge!
          </p>

          <Link href="/#projects">
            <p className="py-2 uppercase text-gray-600 font-semibold underline cursor-pointer">
              Wanna see my work 👇
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
