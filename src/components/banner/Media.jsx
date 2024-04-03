import React from 'react'
import { FaTwitter, FaLinkedinIn, FaReact,FaNode,FaHackerrank ,FaGithub } from "react-icons/fa";
import { SiExpress ,SiMongodb } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNode />
            </span>
            <span className="bannerIcon">
              <SiMongodb  />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media
