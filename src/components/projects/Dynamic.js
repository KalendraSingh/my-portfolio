import React from 'react';
import ProjectsCard from './ProjectsCard';
import { projectData } from '../../data/projectData';

const Dynamic = () => {

  const dynamic = projectData.dynamic;
  

  return (
    <section
      id="projects"
      className="w-full py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {dynamic.map(rectitem => (
          <ProjectsCard
            key={rectitem.id}
            title={rectitem.title}
            des={rectitem.des}
            code={rectitem.code}
            link={rectitem.link}
            img={rectitem.img}
          />
        ))}
      </div>
    </section>
  );

}

export default Dynamic;
