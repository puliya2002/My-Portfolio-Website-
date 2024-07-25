// ProjectPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectPage = () => {
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
        <div className="flex justify-between content-center items-center">
          <p className="text-2xl font-medium">{project.title}</p>
          <div className="flex gap-2 items-center">
            <p>Go to Git Hub Link </p>
            <FaExternalLinkAlt />
          </div>
        </div>
        <img src={project.image} alt={project.title} className="pt-5" />
        <div>
          <h2>Skills</h2>
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
