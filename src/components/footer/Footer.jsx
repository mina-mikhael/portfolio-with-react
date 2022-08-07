/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mina Mikhael
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portofolio</a>
        </li>
        <li>
          <a href="#testemonial">Testimonials</a>
        </li>
        <li>
          <a href="contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://linkedin.com" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="http://github.com" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mina Mikhael</small>
      </div>
    </footer>
  );
};

export default Footer;
