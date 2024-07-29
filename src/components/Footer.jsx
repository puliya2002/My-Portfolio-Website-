import React from "react";
import { NavLinks } from "../constants/index";
import { useNavigate } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();
  return (
    <section className="d-container text-center ">
      <ul className="flex mx-5 text-center justify-center opacity-65 text-xl pb-5 flex-wrap">
        {NavLinks.map((item, index) => (
          <li className="p-4 cursor-pointer" onClick={() => {navigate(item.url2); props.onNavClick(item.url)}}>{item.title}</li>
        ))}
      </ul>
      <hr className="opacity-20" />
      <div className="pt-6 flex justify-center opacity-65 text-xl pb-5 font-medium">
        <p>© {new Date().getFullYear()} Pulindu Vidmal. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
