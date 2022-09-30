import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>redux</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>AJAX</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Context API</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Jest</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Cypress</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            {/* end of frontend */}
          </div>
        </div>
        <div className="experience__backend">
          <h3>backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Knex</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>Restful API</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>SQLite3</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="expeience__details-icon" />
              <div>
                <h4>back-end testing</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
