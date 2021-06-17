import React from "react";
import "./About.css";
import SlideDownArrow from "./slideDownArrow/SlideDownArrow";
import BackToTopArrow from "./backToTopArrow/BackToTopArrow";

function About() {
  return (
    <div className="container-fluid about-body">
      <figure className="center">
        <img
          src="../Ressources/Capture1.png"
          width="45%"
          alt="Sandra"
          className="about-img"
        />
      </figure>
      <br />
      <div className="center">
        <SlideDownArrow></SlideDownArrow>
      </div>
      <br />
      <br />
      <div className="row" style={{ letterSpacing: "0.1em" }}>
        <div className="personal-contact col-md-12 col-lg-6" >
          <h4 style={{ color: "#b24c63" }}>
            <b>Personal Contact</b>
          </h4>
          <br /> sandrakhalek@hotmail.com
          <br /> +961 71759243
          <br />
          <br />
          <br />
          <br />
          <a
            className="social-media-icon hoverbale"
            href="https://www.linkedin.com/in/sandra-abdel-khalek-437267199"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" bx bxl-linkedin bx-md" />
          </a>
          <a
            className="social-media-icon hoverbale"
            href="https://www.instagram.com/sandrakhalek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram bx-md" />
          </a>
        </div>
        <div className="about-parag-div col-md-12 col-lg-6 order-first order-lg-last">
          <p className="about-parag ">
            Hello, my name is Sandra AbdelKhalek and I'm a <b>multimedia</b> and{" "}
            <b>software</b> engineer based in Lebanon. I'm specialized in web
            design and developement.
            <br />
            <br /> Currently in my 4th year in college @ Antonine University
            where I'm exploring my passion about creating and developing
            functional and beautiful websites.
            <br /> In parallel, working in a software company as a junior
            developer, specifically with JAVA language.
          </p>
          <br />
          <a
            href="../Ressources/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv hoverbale"
          >
            Download Resume
            <i className="bx bxs-download" />
          </a>
        </div>
      </div>
      <BackToTopArrow></BackToTopArrow>
    </div>
  );
}

export default About;
