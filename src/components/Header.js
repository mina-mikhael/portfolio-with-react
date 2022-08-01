import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1> Mina Mikhael</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}> Projects </Link>
      <Link to={"/about"}> About</Link>
      <Link to={"/contact"}> Contact Me</Link>
    </div>
  );
};

export default Header;
