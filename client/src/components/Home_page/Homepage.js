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
      <LatestSpaces />
      <Categories />
      <HomepageEnd />
    </>
  );
};

export default Homepage;
