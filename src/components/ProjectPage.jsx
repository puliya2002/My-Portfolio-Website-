// ProjectPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";


const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const project = ProjectList.find((proj) => proj.id == id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container max-w-3xl mx-auto justify-center p-5 pt-14 content-center z-50">
      <div
        className="bg-gradient-to-br from-gray-500/30 to-gray-500/20
border-white/5 border-2 rounded-xl shadow p-5"
      >
        <div className="flex justify-items-end content-center justify-end gap-2">
          <a href={project.giturl} target="_blank">
            <div
              className={`${
                project.giturl ? "flex" : "hidden"
              } gap-2 items-center border-[1.7px] rounded-full px-3 py-1 border-gray-500 cursor-pointer hover:bg-gray-500/50 bg-gray-500/10`}
            >
              <p>Git Hub Link </p>
              <FaExternalLinkAlt />
            </div>
          </a>
          <a href={project.weburl} target="_blank">
            <div
              className={`${
                project.weburl ? "flex" : "hidden"
              } gap-2 items-center border-[1.7px] rounded-full px-3 py-1 border-gray-500 cursor-pointer hover:bg-gray-500/50 bg-gray-500/10`}
            >
              <p>Website Link </p>
              <FaExternalLinkAlt />
            </div>
          </a>
        </div>
        <div className=" content-center pb-6">
          <p className="text-2xl font-medium py-2 ">{project.title}</p>
          <p className="opacity-50">{project.description}</p>
        </div>

        <img
          alt={project.title}
          className=" rounded-lg"        
          src={project.ss}

          

        />

        <div className="flex pt-5 content-center justify-center gap-2">
          <a href={project.giturl} target="_blank">
            <div
              className={`${
                project.giturl ? "flex" : "hidden"
              } gap-2 items-center border-[1.7px] rounded-full px-3 py-1 border-gray-500 cursor-pointer hover:bg-gray-500/50 bg-gray-500/10`}
            >
              <p>Git Hub Link </p>
              <FaExternalLinkAlt />
            </div>
          </a>
          <a href={project.weburl} target="_blank">
            <div
              className={`${
                project.weburl ? "flex" : "hidden"
              } gap-2 items-center border-[1.7px] rounded-full px-3 py-1 border-gray-500 cursor-pointer hover:bg-gray-500/50 bg-gray-500/10`}
            >
              <p>Website Link </p>
              <FaExternalLinkAlt />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
