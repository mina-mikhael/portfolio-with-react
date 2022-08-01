import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//Components imports
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Home from "./components/HomePage";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
