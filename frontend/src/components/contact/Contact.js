import React from "react";
import ContactForm from "./contactForm/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="row container-fluid">
      <div className="col-lg-6 title-div">
        <h1 className="about-header">Let's get in touch</h1>
        <svg className="svg-rect">
          <rect height="30px" width="100%" />
        </svg>
        <h4 className="about-subheader">
          It would make my day to hear from you.
        </h4>
        <section className="contact-info-section">
          <b className="contact-info">Email</b>
          <br />
          <a href="mailto:sandrakhalek@hotmail.com">sandrakhalek@hotmail.com</a>
          <br />
          <br />
          <b className="contact-info">Phone</b>
          <br />
          <a href="tel:+96171759243">+961 71759243</a>
        </section>
      </div>
      <div className="col-lg-6">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
