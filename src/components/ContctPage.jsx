import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";


function ContctPage() {
  return (
    <div className="container max-w-3xl mx-auto justify-center p-5 pt-14 content-center z-50  ">
      <div
        className="bg-gradient-to-br from-gray-500/30 to-gray-500/20
border-white/5 border-2 rounded-xl shadow p-5  items-center justify-center flex-items-center flex flex-col py-20" 
      >
        <p className="text-2xl font-medium pb-2 ">Send an Email</p>
        <div className="items-center justify-center flex-items-center flex flex-col">
        <a href="mailto:vidmalpulindu@gmail.com" target="_blank">
            <div
              className="flex gap-2 items-center border-[1.7px] rounded-full px-3 py-1 border-gray-700 cursor-pointer hover:bg-gray-500/50 bg-gray-500/10 my-5 w-fit hover:scale-95"
            >
              <p className="text-lg">vidmalpulindu@gmail.com</p>
              <FaExternalLinkAlt />
            </div>
          </a>
          <a href="mailto:contact@pulinduvidmal.com" target="_blank">
            <div
              className="flex gap-2 items-center border-[1.7px] rounded-full px-3 py-1 border-gray-700 cursor-pointer hover:bg-gray-500/50 bg-gray-500/10 w-fit hover:scale-95"
            >
              <p className="text-lg">contact@pulinduvidmal.com</p>
              <FaExternalLinkAlt />
            </div>
          </a>
        </div>
      </div>
      
      
    </div>
  );
}

export default ContctPage;
