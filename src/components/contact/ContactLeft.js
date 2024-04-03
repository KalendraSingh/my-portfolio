import React from 'react'
import { FaTwitter, FaLinkedinIn,FaGithub,FaHackerrank } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Kalendra Singh</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I'm a Fullstack Web Trainee at NxtWave Disruptive Technology,
         specializing in Python with a 5-star rating on HackerRank. Knows Java,
         C++, and the MERN stack, I bring hands-on project experience in building dynamic web applications..
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9170331589</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">bs.kalendrasingh@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
            <a href="https://www.hackerrank.com/profile/bs_kalendrasingh">
              <span className="bannerIcon">
                <FaHackerrank  />
              </span>
            </a>
            <a href="https://twitter.com/Kalendra2020">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/kalendra-singh-chauhan-9047a9225">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/KalendraSingh">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
      </div>
    </div>
  );
}

export default ContactLeft