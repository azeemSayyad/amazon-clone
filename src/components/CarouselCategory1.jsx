import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = ({li}) => {
  return (
    <div className="flex items-center bg-white  max-w-[1475px] maxi:m-auto my-4 p-4">
      <Swiper className=""
        spaceBetween={10}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
      >
      {li.map((img,i)=>(
        <SwiperSlide key={i} className="cursor-pointer ">
            <img className=" object-cover h-[235px]" src={img} alt="product" />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
