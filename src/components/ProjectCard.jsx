import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


function ProjectCard(props) {

 
  const handleNavigation = () => navigate(`/project/${props.id}`);

  return (
    <div className="h-40 h-auto project-card">
      <div className='cursor-pointer' onClick={handleNavigation}>
        <div className="flex-row flex justify-between items-center">
          <p className="text-2xl pb-2">{props.name}</p>
          <div className="cursor-pointer size-auto mb-2 p-2 border-[2px] border-gray-600/60 rounded-full hover:bg-gradient-to-tr from-gray-700/20 to-gray-500/50">
            <FaArrowRightLong />
          </div>
        </div>

        <div className="flex-row flex flex-wrap gap-[6px]">
          {props.skills.map((skill, index) => (
            <div key={index} className="h-min w-auto bg-black/20 border-gray-500/70 border-[1px] rounded-md px-2 py-[2px]">
              <p className="text-sm">{skill}</p>
            </div>
          ))}
        </div>
        <img
          src={props.image}
          className="object-cover p-1 rounded-[15px] mt-3 h-[250px] w-screen"
          alt="project"
        />
      </div  >
      
    </div>
  );
}

export default ProjectCard;
