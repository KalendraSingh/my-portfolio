import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >

      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Nxtwave Disruptive Technologies"
            subTitle="Industry Ready Certification in Full-Stack Development (2022 - Present)"
            result="Hyderabad"
            des="An intensive certification program offered by Nxtwave Disruptive Technologies in partnership with industry leaders, providing hands-on training and mentorship in full-stack development to prepare participants for careers in the tech industry."
          />
          <ResumeCard
            title="SUMMER INTERSHIP"
            subTitle="SR Institute of Technology (Jul'23-Sept'23)"
            result="Lucknow"
            des="A structured internship program at SR Institute of Technology, offering valuable practical experience and exposure to real-world projects in a react Js, Node js, Expressand MongoDB, fostering skill development and professional growth."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Development</h2>
        </div>
        <div className="mt-14 w-full h-[650px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Development"
            subTitle="React Js, JavaScript, HTML5, CSS3"
            result="Frontend"
            des="Focused training on modern frontend technologies including React Js, JavaScript, HTML5, and CSS3, equipping individuals with the skills necessary to build engaging and user-friendly interfaces for web applications."
          />
          <ResumeCard
            title="Backend Development"
            subTitle="Node Js, Express, MongoDB"
            result="Backend"
            des="Specialized instruction in backend technologies such as Node Js, Express, and MongoDB, providing a deep understanding of server-side development and database management for creating robust and scalable web applications."
          />
          
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
