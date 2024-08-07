import React from "react";
import "./Homepage.css";
import LatestSpaces from "./LatestSpaces";
import Navbar from "../Navbar";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import HomepageEnd from "./HomepageEnd";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <div className="Homepage"> */}
      <LatestSpaces />
      <Categories />
      {/* </div> */}
      <HomepageEnd />
    </>
  );
};

export default Homepage;
