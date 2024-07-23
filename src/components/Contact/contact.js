import React, { useRef } from "react";
import "./contact.css";
import adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import Walmart from "../../assets/walmart.png";
import microsoft from "../../assets/microsoft.png";

import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
//import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xysy9wh", "template_3imllm7", form.current, {
        publicKey: "h0_zLbEOtaxctnph9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the oppourtunity to work with a diverse group of companies.
          some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={adobe} alt="Client" className="clientImg" />
          <img src={facebook} alt="Client" className="clientImg" />
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={microsoft} alt="Client" className="clientImg" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppourtunities
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Yor Email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="link"></img>
            <img src={InstagramIcon} alt="InstagramIcon" className="link"></img>
            <img src={TwitterIcon} alt="TwitterIcon" className="link"></img>
            <img src={YoutubeIcon} alt="YoutubeIcon" className="link"></img>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
 

