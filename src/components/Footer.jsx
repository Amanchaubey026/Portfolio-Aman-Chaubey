// import React from 'react'
import "../styles/footer.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IoMailUnreadOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            1200 hours coding, solid grasp data structures, algorithms; devoted
            100+ hours mastering foundational concepts.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <IoMailUnreadOutline />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-suscribe">
            <button>Suscribe</button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          {" "}
          © 2024 Aman Chaubey. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Connect with me  :-</p>
          <a
            style={{ color: "white" }}
            target="_blank"
            className="linkdin"
            href="https://www.linkedin.com/in/aman-c-0a9ab6136/"
          >
            <CiLinkedin />
          </a>
          <a
            style={{ color: "white" }}
            target="_blank"
            className="github"
            href="https://github.com/Amanchaubey026"
          >
            <FaGithub />
          </a>
          <a
            style={{ color: "white" }}
            target="_blank"
            className="x"
            href="https://twitter.com/AmanCha01282213"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
