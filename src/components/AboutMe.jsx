import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';



function AboutMe() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true


    })
  })

  return (
    <div className="d-container ">
      <h2 className="text-start pb-2" data-aos="fade-up">About Me</h2>
      <p className="text-3xl text-gray-300/70 mb-4 text-start font-regular" data-aos="fade-up">
        A creative, logical and ambitious Software Engineer undergraduate
        specializing in Web Development known for thinking outside the box and
        generating innovative ideas, thrive in collaborative environments,
        ensuring timely and excellent project delivery.
      </p>
     
    </div>
    
  );
}

export default AboutMe;
