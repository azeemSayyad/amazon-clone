import React from "react";
import HomeCard from "./HomeCard";

import card1 from "../Images/homePage_grid_1.jpeg";
import card2 from "../Images/home_grid_2.jpg";
import card3 from "../Images/home_grid_3.jpg";
import card4 from "../Images/home_grid_4.jpg";
import card5 from "../Images/home_grid_5.jpg";
import card6 from "../Images/home_grid_6.jpg";
import card7 from "../Images/home_grid_7.jpg";
import card8 from "../Images/home_grid_8.jpg";
import card9 from "../Images/home_grid_9.jpeg";

const HomePageCard = () => {
  return (
    <div className=" grid grid-cols-3 lg:grid-cols-4 -mt-60 min-w-[1000px] max-w-[1500px] maxi:-mt-[15rem] maxi:m-auto">
      <HomeCard
        title={"this is title 1"}
        img={card1}
        terms={"nothing to show 1"}
      />
      <HomeCard
        title={"this is title 2"}
        img={card2}
        terms={"nothing to show 2"}
      />
      <HomeCard
        title={"this is title 3"}
        img={card3}
        terms={"nothing to show 3"}
      />
      <HomeCard
        title={"this is title 4"}
        img={card4}
        terms={"nothing to show 4"}
      />
      <HomeCard
        title={"this is title 4"}
        img={card5}
        terms={"nothing to show 4"}
      />
      <HomeCard
        title={"this is title 4"}
        img={card6}
        terms={"nothing to show 4"}
      />
      <HomeCard
        title={"this is title 4"}
        img={card7}
        terms={"nothing to show 4"}
      />
      <HomeCard
        title={"this is title 4"}
        img={card8}
        terms={"nothing to show 4"}
      />
      <div className="flex lg:hidden">
        <div className="h-[420px] bg-white z-30 m-3">
          <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
          Shop deals in Fashion
          </div>
          <div className="h-[300px] m-4">
            <img
              className="h-[100%] w-[100%] object-cover"
              src={card9}
              alt="Home card"
            />
          </div>
          <div className="text-xs xl:text-sm text-blue-400 ml-4">See all details</div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
