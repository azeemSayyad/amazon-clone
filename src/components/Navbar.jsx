

// import amazon from "../Images/amazon1.png";
// import flag from "../Images/IndiaFlag.webp";

import { CiLocationOn } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";

const  amazon =  "";
const  flag =  "";

const Navbar = () => {

  const [isInputClicked,setIsInputClicked] = useState();


  return (
    <header className=" min-w-[1000px]">
      <div className=" z-40 flex justify-between items-center bg-gray-900 h-[55px] w-full px-2  font-[14px]">
        {/**Nav div left */}
        <div className="flex justify-between items-center gap-3 px-3">
          {/**amazon logo */}
          <div className={` max-w-[100px] w-auto hover:border border-white cursor-pointer `}>
            <img src={amazon} alt="amazon" />
          </div>

          {/**Location */}
          <div className={`flex w-auto hover:border border-white cursor-pointer `}>
            <div className=" text-white mt-1  mr-1">
              <CiLocationOn fontSize={"25px"} className="" color="white" />
            </div>
            <div className="">
              <p className="text-white text-sm">Hello</p>
              <p className={`font-semibold text-[0.7rem] text-white`}>
                Select your address
              </p>
            </div>
          </div>
        </div>

        {/**Search Bar */}
        <div className={`flex w-full max-w-[400px] `}>
          <div className={`max-w-[200px] `}>
            <select className=" w-full p-2 bg-gray-200 rounded-[3px] rounded-br-none rounded-tr-none  ">
              <option>All</option>
              <option>Devices</option>
              <option>Fashion</option>
            </select>
          </div>

          <div onClick={()=>setIsInputClicked(true)} className={`flex  w-full lg1:max-w-[500px] `}>
            <input className="p-1 w-full " placeholder="Search Amazon.in" />
          </div>

          {/**Input recommendations */}
          {isInputClicked && (
            <div className="bg-white text-black font-semibold relative top-[10rem] left-[10rem] w-[400px] z-50">
              <div className="flex gap-3 hover:bg-gray-300 p-4 w-full">
                <CgSearch fontSize={"15px"}/>
                <p>Iphone 15 plus</p>
              </div>
              <div className="flex gap-3 hover:bg-gray-300 p-4">
                <CgSearch fontSize={"15px"}/>
                <p>Men's Footwear</p>
              </div>
              <div className="flex gap-3 hover:bg-gray-300 p-4">
                <CgSearch fontSize={"15px"}/>
                <p>Best Gaming Laptop under 15K</p>
              </div>
              <button onClick={()=>setIsInputClicked(false)} className="bg-red w-[100px] p-3">Close</button>
            </div>
          )}

          <div className={`flex max-w-[100px] `}>
            <div className="flex  w-full items-center justify-center px-[1em] bg-orange-300 rounded-sm rounded-tl-none rounded-bl-none">
              <AiOutlineSearch fontSize={"1.5em"} className="" />
            </div>
          </div>
        </div>

        {/**Nav div Right */}
        <div className="flex gap-4 mr-3">
          {/**Language setup */}
          <div className="hidden lg1:flex hover:border border-white cursor-pointer">
            <div className=" mt-[12px]">
              <img width={"20em"} src={flag} alt="flag" />
            </div>

            <div>
              <select className=" text-[1em] ml-[1px] py-[5px] w-[3em] h-[27px] bg-inherit text-white font-bold   ">
                <option className="text-black">EN</option>
                <option className="text-black">HN</option>
                <option className="text-black">TL</option>
              </select>
            </div>
          </div>

          {/**Account login */}
          <div className={`w-auto hover:border border-white cursor-pointer`}>
            <p className="font-semibold text-white text-[0.8em]">
              Hello, sign in
            </p>
            <p className="font-semibold text-white text-[1em]">
              Account & List
            </p>
          </div>

          {/**ORders */}
          <div className={` sm2:block hover:border border-white cursor-pointer`}>
            <p className=" font-semibold text-white text-[0.8em]">Returns</p>
            <p className="font-semibold text-white text-[1em]">& Orders</p>
          </div>

          {/**Cart */}
          <div className={`flex hover:border border-white cursor-pointer`}>
            <div>
              <AiOutlineShoppingCart fontSize={"2em"} color="white" />
            </div>
            <div>
              <p className=" text-white">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
