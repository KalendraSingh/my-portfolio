import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Achievement from '../certification/Achievement';
import Participation from "../certification/Participation"


const Certification = () => {
   const [achievementData, setAchievementData] = useState(true);
   const [participationData, setParticipationData] = useState(false);
  return (
    <section id="certificate" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Certifications of achievement & participations" des="Certifications"/>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
                setAchievementData(true) &
                setParticipationData(false)
            }
            className={`${
                achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievement
          </li>
          <li
            onClick={() =>
                setAchievementData(false) &
                setParticipationData(true)
            }
            className={`${
                participationData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Participations
          </li>
        </ul>
      </div>
      {achievementData && <Achievement />}
      {participationData && <Participation />}
 
    </section>
  );
}

export default Certification