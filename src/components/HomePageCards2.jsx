import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";
import card3 from "../Images/card3.jpg";
import card4 from "../Images/card4.jpg";
import card5 from "../Images/card5.jpg";
import card6 from "../Images/card6.jpg";
import card7 from "../Images/card7.jpg";
import card8 from "../Images/card8.jpg";

import img1 from "../Images/product_0_small.jpg";
import img2 from "../Images/product_1_small.jpg";
import img3 from "../Images/product_2_small.jpg";
import img4 from "../Images/product_3_small.jpg";
import img5 from "../Images/product_4_small.jpg";
import img6 from "../Images/product_5_small.jpg";
import img7 from "../Images/product_6_small.jpg";
import img8 from "../Images/product_7_small.jpg";
import img9 from "../Images/product_8_small.jpg";

import category0 from "../Images/category_0.jpg";
import category1 from "../Images/category_1.jpg";
import category2 from "../Images/category_2.jpg";
import category3 from "../Images/category_3.jpg";
import category4 from "../Images/category_4.jpg";
import category5 from "../Images/category_5.jpg";

import CarouselCategory from "./CarouselCategory1";

import HomeCard from "./HomeCard";

const HomePageCards2 = () => {

    const carousel1 = [category0,category1,category2,category3,category4,category5];
    const carousel2 = [img1,img2,img3,img4,img5,img6,img7,img8,img9];

  return (
    <>
        <CarouselCategory li={carousel1}/>
      <div className=" grid grid-cols-3 lg:grid-cols-4 min-w-[1000px] max-w-[1500px] maxi:m-auto">
        <HomeCard title={"Home refresh ideas"} img={card1} terms={"Shop Now"} />
        <HomeCard
          title={"trackers and smartwatches"}
          img={card2}
          terms={"Shop Now"}
        />
        <HomeCard
          title={"Create with strip lights"}
          img={card3}
          terms={"Shop Now"}
        />
        <div className="hidden lg:block">
          <div className="h-[420px] bg-white z-30 m-3">
            <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
              Kindle E readers
            </div>
            <div className="h-[300px] m-4">
              <img
                className="h-[100%] w-[100%] object-cover"
                src={card4}
                alt="Home card"
              />
            </div>
            <div className="text-xs xl:text-sm text-blue-400 ml-4">
              Shop Now
            </div>
          </div>
        </div>
      </div>

      <CarouselCategory li={carousel2}/>

      <div className=" grid grid-cols-3 lg:grid-cols-4 min-w-[1000px] max-w-[1500px] maxi:m-auto">
        <HomeCard
          title={"For your Fitness Needs"}
          img={card5}
          terms={"Shop Now"}
        />
        <HomeCard
          title={"New arrivals in Toys"}
          img={card6}
          terms={"Shop Now"}
        />
        <HomeCard title={"Toys Under $30"} img={card7} terms={"Shop Now"} />
        <div className="hidden lg:flex">
          <div className="h-[420px] bg-white z-30 m-3">
            <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
              My name is Adil
            </div>
            <div className="h-[300px] m-4">
              <img
                className="h-[100%] w-[100%] object-cover"
                src={card8}
                alt="Home card"
              />
            </div>
            <div className="text-xs xl:text-sm text-blue-400 ml-4">
              Shop Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageCards2;
