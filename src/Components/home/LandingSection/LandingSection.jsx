import React, { useEffect } from "react";
import gsap from "gsap";
import "../../../assests/homeStyles/LandingSection.css";

const LandingSection = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.to(".left", {
      duration: 2,
      delay: 0.8,
      width: "50%",
      ease: "power2.inOut",
    });
    gsap.to(".right", {
      duration: 2,
      delay: 0.6,
      width: "50%",
      ease: "power3.inOut",
    });
    gsap.from(".nav", {
      duration: 2,
      delay: 0.8,
      opacity: 0,
      ease: "expo.inOut",
    });
    gsap.from(".text h1", {
      duration: 2,
      delay: 0.6,
      x: 1000,
      ease: "circ.inOut",
    });
    gsap.from(".text p", {
      duration: 2,
      delay: 0.7,
      x: 1000,
      ease: "circ.inOut",
    });
    gsap.to(".karina", {
      duration: 2,
      delay: 1.5,
      width: "800px",
      ease: "power2.inOut",
    });
    gsap.from(".info", { duration: 2, delay: 1.5, y: 100, ease: "circ.inOut" });
    gsap.from(".name", {
      duration: 2,
      delay: 1.5,
      x: -600,
      ease: "circ.inOut",
    });
    gsap.from(".bottomnav ul li", {
      duration: 2,
      delay: 1,
      x: 1000,
      stagger: 0.08,
      ease: "circ.inOut",
    });
  }, []);

  return (
    <div className="body">
      <div className="wrapper">
        <div className="left"></div>
        <div className="right"></div>
        <div className="content">
          <div className="img-wrapper">
            <div className="karina"></div>
          </div>
          <div className="info">
            <ul>
              <li>insplash.com</li>
              <li>@ZARA tes</li>
              <li>ZARA tes.com</li>
            </ul>
          </div>
          <div className="text">
            <h1>ZARA Tes</h1>
            <p>Fashion Photographer</p>
          </div>
          <div className="name">ZARA Tes</div>
          <div className="bottomnav">
            <ul>
              <li>profile</li>
              <li>portfolio</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
