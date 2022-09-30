import React from "react";
//components imports
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portofolio from "./components/portofolio/Portofolio";
import Testemonial from "./components/testemonial/Testemonial";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portofolio />
        <Testemonial />
        <Contacts />
        <Footer />
      </>
    </div>
  );
};

export default App;
