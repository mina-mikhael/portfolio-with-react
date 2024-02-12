import React from "react";
import "./about.css";
import me from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>BloomTech Institute Graduate</small>
              <br />
              <small>Web Developer at Next Ehealth 2022-current</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects</h5>
              <small>40+ projects</small>
            </article>
          </div>
          <div className="about__p">
            <p>
              Hi there! My name is <strong>Mina Mikhael</strong> and I'm a
              highly motivated Full Stack Web Developer.
            </p>
            <p>
              I build modern web applications using advanced libraries and
              frameworks such as React.js and Express.
            </p>
            <p>
              Additionally, I have proficiency in building responsive
              single-page web applications, SQL databases, APIs, and much more.
              Feel free to check out my recent projects below or connect with me
              to learn more.
            </p>
          </div>

          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
