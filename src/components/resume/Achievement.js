import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2020</p>
          <h2 className="text-4xl font-bold">Schooling</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="District Science Exhibition."
            subTitle="water harvesting "
            result="Success"
            des="selected in science exhibition first position at district level for
            water harvesting project presentation!"
          />
          <ResumeCard
            title="Scouts in Tritiya Swapan"
            subTitle="Scouts and Guides"
            result="Success"
            des="During the scouts in tritiya swapan build leadership,team management,diciplines!"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">College</h2>
        </div>
        <div className="mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="2nd Position at Engineering Day."
            subTitle="Generative Ai Project"
            result="Success"
            des="Demonstrated exceptional skills and innovation by earning the 2nd position at theEngineering Day Project Showcase!"
          />
          <ResumeCard
            title="Volunteering in College."
            subTitle="SRIMT,Lucknow"
            result="Success"
            des="Volunteering in college, a beacon of leadership, guiding teams and orchestrating memorable events.College volunteering, where leadership blooms, orchestrating events with passion and purpose!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
