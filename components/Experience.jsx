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
    " Revamped the Land Rights Initiative (LRI) website, driving a 25% increase in website traffic and user engagement with timely updates and accurate information.",
    "Enhanced the LRI website's backend architecture in collaboration with a team, resulting in a 20% improvement in page load speeds.",
    "Researched Indian land laws and rigorously tested data validation processes, leading to the identification and resolution of potential data inconsistencies.",
    "Developed interactive GIS maps of Indian states and districts, providing user-friendly data visualization tools.",
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
