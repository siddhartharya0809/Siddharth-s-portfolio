import React from "react";

import cprLogo from "../public/assets/experience/CPR_logo.png";
import Image from "next/image";

const ExperienceSection = ({ title, company, date, description }) => {
  return (
    <div
      id="experience"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <h2 className="py-4">{title}</h2>
          <p className="py-2 text-gray-600 font-medium text-lg ">
            {company} | {date}
          </p>

          <ul className="list-disc ml-6 mt-2">
            {description.map((item, index) => (
              <li key={index} className="mt-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-50% m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={cprLogo} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const experienceDetails = [
    "Developed and maintained the Land Rights Initiative (LRI) website, ensuring it was regularly updated with accurate information.",
    "Collaborated with a team to design and improve the backend architecture of the LRI website, resulting in faster loading times.",
    "Conducted research on Indian land laws and performed thorough testing of data validation processes to identify and resolve any issues.",
    "Created interactive maps of Indian states and districts using GIS tools for data visualization purposes.",
  ];
  return (
    <div className="p-8">
      <ExperienceSection
        title="Research & Development Intern"
        company="Centre for Policy Research"
        date="May'21 - June'21"
        description={experienceDetails}
      />
    </div>
  );
}

export default App;
