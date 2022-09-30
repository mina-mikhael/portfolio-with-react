import React from "react";
import "./header.css";
import resume from "../../assets/mina_mikhael_resume.pdf";
import me from "../../assets/me.png";
//icons imports
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Mina Mikhael</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <div className="cta">
          <a href={resume} download className="btn">
            My Resume
          </a>
          <a href="#contacts" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/mina-s-mikhael"
            target="_blank"
            rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/mina-mikhael" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="https://twitter.com/mina_s_mikhael" target="_blank" rel="noreferrer">
            <BsTwitter />
          </a>
        </div>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
