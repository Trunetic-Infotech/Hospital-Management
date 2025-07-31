import React from "react";
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Features from "./Features";
import Why from "./Why";
import Blogs from "./Blogs";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="w-full  ">
      <Navbar />

      <Home />
      <About />
      <Features />
      <Faq />
      <Why />
      <Blogs />

      <Footer />
    </div>
  );
};

export default Main;
