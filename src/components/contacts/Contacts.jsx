import React, { useRef } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_d1cy4ac", "template_cawa15e", form.current, "eQ_cWMIS0bHCbKkF6");
    e.target.reset();
  };
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-item" />
            <h4>Email</h4>
            <h5>mina.s.mikhael@gmail.com</h5>
            <a href="mailto:mina.s.mikhael@gmail.com" target={"_blank"} rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiMessenger className="contact__option-item" />
            <h4>Messenger</h4>
            <h5>minaaa8</h5>
            <a href="https://m.me/minaaa8" target={"_blank"} rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-item" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=0014079842045"
              target={"_blank"}
              rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="7"
            placeholder="Please enter Your Message"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
