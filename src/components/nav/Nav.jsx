/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiBookBookmark, BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [isActive, setIsActive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={isActive === "#" ? "active" : ""}
        onClick={() => {
          setIsActive("#");
        }}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isActive === "#about" ? "active" : ""}
        onClick={() => {
          setIsActive("#about");
        }}>
        <BiUser />
      </a>
      <a
        href="#experience"
        className={isActive === "#experience" ? "active" : ""}
        onClick={() => {
          setIsActive("#experience");
        }}>
        <BiBookBookmark />
      </a>
      <a
        href="#services"
        className={isActive === "#services" ? "active" : ""}
        onClick={() => {
          setIsActive("#services");
        }}>
        <RiServiceLine />
      </a>
      <a
        href="#contacts"
        className={isActive === "#contacts" ? "active" : ""}
        onClick={() => {
          setIsActive("#contacts");
        }}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
