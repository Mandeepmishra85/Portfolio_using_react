import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with fresh ideas for creating
        visually appealing and user friendly websites. I have a strongly
        understanding of design and keen eye for detail. I am<br/> proficient in
        HTML, CSS, & JS, as well as interested in designing.{" "}
      </span>
      <div className="skillBars">
       <div className="skillBar">
        <img src = {UIDesign} alt = 'UIDesign' className="skillBarImg"/>
        <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Keen to play with colors and shapes.</p>
        </div>
        </div> 
        <div className="skillBar">
        <img src = {WebDesign} alt = 'WebDesign' className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Website designing is in my DNA</p>
        </div>
        </div> 
        <div className="skillBar">
        <img src = {AppDesign} alt = 'AppDesign' className="skillBarImg"/>
        <div className="skillBarText">
            <h2>App Design</h2>
            <p>Learning App Designing these days.</p>
        </div>
        </div> 
      </div>
    </section>
  );
};

export default Skills;

