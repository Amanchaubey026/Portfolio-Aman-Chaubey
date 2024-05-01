// import React from 'react'
import "../styles/about.css";
import profilePicture from "../assets/proImage.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profilePicture} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Experienced and passionate web developer boasting over 1200 hours
              of hands-on coding experience, coupled with a robust foundation in
              data structures and algorithms, having dedicated over 100 hours to
              mastering these foundational concepts. Proficient in both
              front-end and back-end development, adeptly harnessing
              technologies like ReactJS, Node.js, JavaScript, ExpressJS, and
              MongoDB to craft dynamic and efficient web solutions.
            </p>
            <p>
              Notably, I have replicated popular websites, demonstrating my
              ability to understand and implement complex functionalities
              effectively. Additionally, my collaborative spirit shines through
              in successful project collaborations, where I have seamlessly
              integrated with teams to achieve shared goals.
            </p>
          </div>
          <div id="skills" className="about-skills">
            <h1>Skills</h1>
            <div className="about-skill"> <p>HTML</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"> <p>CSS</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"> <p>React JS</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"> <p>Javacript</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"> <p>Node JS</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"> <p>Redux</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"> <p>Express JS</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"> <p>MongoDB</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"> <p>Chakra UI</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"> <p>Github</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"> <p>Vs code</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"> <p>Vercel</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"> <p>Netlify</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
