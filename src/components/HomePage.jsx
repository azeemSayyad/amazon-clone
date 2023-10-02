import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import HomePageCard from "./HomePageCards";
import NavMain from "./NavMain";
import HomePageCards2 from "./HomePageCards2";

const HomePage = () => {
  return (
    <>
      <div className=" bg-amazonclone-background min-w-[1000px] mr-3">
        <Navbar />
        <NavMain/>
        <Carousel />
        <HomePageCard />
        <HomePageCards2/>
      </div>
    </>
  );
};

export default HomePage;
