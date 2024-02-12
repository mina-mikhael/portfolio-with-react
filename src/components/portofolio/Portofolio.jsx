import React from "react";
import "./portofolio.css";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.jpg";
import img6 from "../../assets/image6.jpg";

const Portofolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={img1} alt="project 1" />
          </div>
          <h3> Photo Gallery with SwiperJS</h3>
          <div className="portofolio__item-cta">
            <a
              href="https://github.com/mina-mikhael/photo-gallery"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://photo-gallery-pearl-tau.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Project Link
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={img2} alt="weather app" />
          </div>
          <h3>Weather App</h3>
          <div className="portofolio__item-cta">
            <a
              href="https://github.com/rpm-team-2022/weather-app"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://weather-app-rpm.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Project Link
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={img3} alt="project 1" />
          </div>
          <h3>PokeDex Game</h3>
          <div className="portofolio__item-cta">
            <a
              href="https://github.com/mina-mikhael/pokemon-simple-game"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://pokedex-self-seven.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Project Link
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={img4} alt="project 1" />
          </div>
          <h3>Recipe Finder</h3>
          <div className="portofolio__item-cta">
            <a
              href="https://github.com/mina-mikhael/recipe_finder"
              target="_blank"
              rel="noreferrer"
              className="btn">
              Github
            </a>
            <a
              href="https://recipe-finder-bay.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Project Link
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={img5} alt="project 1" />
          </div>
          <h3>Future project placeholder</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/alien_pixels"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Project Link
            </a>
          </div>
        </article>
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={img6} alt="project 1" />
          </div>
          <h3>Future project placeholder</h3>
          <div className="portofolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://dribble.com/alien_pixels"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary">
              Project Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portofolio;
