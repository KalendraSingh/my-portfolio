import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import Resume from "../../assets/images/Kalendra-Singh-Resume-2024.pdf"

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.", "Content Writer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kalendra Singh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">

          I'm a Fullstack Web Trainee at NxtWave Disruptive Technology,
          specializing in Python with a 5-star rating on HackerRank. Knows Java, C++, and the MERN stack,
          I bring hands-on project experience in building dynamic web applications.
        </p>
        <div className='flex row items-center gap-3'>
          <p>My Resume:</p>
          <a href={Resume} download="Kalendra-Singh-Resume.pdf">
            <button className='bg-designColor p-3 w-40 h-15  rounded-full'>Download</button>
          </a>
        </div>
      </div>

      <Media />
    </div>
  );
}

export default LeftBanner