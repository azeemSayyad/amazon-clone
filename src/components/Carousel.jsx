import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import carousel1 from "../Images/carousel_1.jpg";
import carousel3 from "../Images/carousel_3.jpg";
import carousel4 from "../Images/carousel_4.jpg";
import carousel5 from "../Images/carousel_5.jpg";

import carouselVid from "../Images/carousel_vid.mp4";

const Carousel = () => {
  return (
    <div className="h-[500px] bg-black min-w-[1000px] max-w-[1500px] maxi:m-auto">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img className="w-full object-cover" src={carousel1} alt="c1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover" src={carousel3} alt="c1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover" src={carousel4} alt="c1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover" src={carousel5} alt="c1" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video className="w-full object-cover" controls muted="muted">
            <source src={carouselVid} type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>

      <div className="h-[50%] bg-gradient-to-b from-stone-900  via-gray-500 to-slate-200" />
    </div>
  );
};

export default Carousel;
