import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import {  CgProfile } from "react-icons/cg";
import { CiGlobe } from "react-icons/ci";

const NavMain = () => {
  const [isOpenSidePanel, setIsOpenSidePanel] = useState(false);

  return (
    <div className="bg-amazonclone-light_blue  z-50 ">
      <div className=" flex mx-4 space-x-3">
        <div
          onClick={() => setIsOpenSidePanel(!isOpenSidePanel)}
          className="flex items-center p-2 gap-2 text-white cursor-pointer hover:border border-white"
        >
          <RxHamburgerMenu className="mt-[0.2rem] " fontSize={"20px"} />
          <div className=" font-bold text-[15px]">All</div>
        </div>
        <div className="text-white text-[15px] p-2 font-semibold hover:border border-white cursor-pointer">
          Today's Deals
        </div>
        <div className="text-white text-[15px] p-2 font-semibold hover:border border-white cursor-pointer">
          Customer Service
        </div>
        <div className="text-white text-[15px] p-2 font-semibold hover:border border-white cursor-pointer">
          Registry
        </div>
        <div className="text-white text-[15px] p-2 font-semibold hover:border border-white cursor-pointer">
          Gift Cards
        </div>
        <div className="text-white text-[15px] p-2 font-semibold hover:border border-white cursor-pointer">
          Sells
        </div>
      </div>

      {isOpenSidePanel && (
        <div className="flex w-full  min-h-screen h-[80rem] absolute top-0 left-0">
          <div className="flex overflow-scroll flex-col z-50 w-[365px] bg-white">
            <div className=" bg-amazonclone-light_blue py-3 px-4 text-white fixed w-[365px]">
              <div className="flex gap-3 mx-4">
                <CgProfile fontSize={"30px"} />
                <p className=" font-bold text-lg">Hello, sign in</p>
              </div>
            </div>

            <div className=" mt-[55px]">
              {/** Content */}
              <div className="my-3">
                <p className="font-bold text-lg text-black pb-1 mx-8">
                  Digital Content & Devices
                </p>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Amazon Music</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Kindle E-readers & Books</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Amazon AppStore</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
              </div>

              <hr className="bg-gray-300 h-[1.8px]" />

              {/** Shop */}
              <div className="my-3">
                <p className="font-bold text-lg text-black pb-1 mx-8">
                Shop By Department
                </p>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className="text-gray-900 font-medium ">Electronics</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Computers</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className="text-gray-900 font-medium  ">Smart Home</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Arts & crafts</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
              </div>

              {/** Program Features*/}
              <div className="my-3">
                <p className="font-bold text-lg text-black pb-1 mx-8">
                  Programs & Features
                </p>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Gifts Cards</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Shop By Interest</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Amazon Live</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">International Shopping</p>
                    <MdKeyboardArrowRight fontSize={"24px"} />
                  </div>
                </div>
              </div>

              {/** Help and Settings */}
              <div className="my-3">
                <p className="font-bold text-lg text-black pb-1 mx-8">
                  Help & Settings
                </p>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-between mx-8">
                    <p className=" text-gray-900 font-medium  ">Your Account</p>
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-start gap-3 mx-8">
                  <CiGlobe fontSize={"20px"} />
                    <p className=" text-gray-900 font-medium  ">English</p>
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className="flex justify-start gap-3 mx-8">
                  <CiGlobe fontSize={"20px"} />
                    <p className=" text-gray-900 font-medium  ">United States</p>
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className=" mx-8">
                    <p className=" text-gray-900 font-medium  ">Customer Service</p>
                  </div>
                </div>
                <div className=" hover:bg-gray-200 hover:cursor-pointer py-3">
                  <div className=" mx-8">
                    <p className=" text-gray-900 font-medium  ">Sign in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setIsOpenSidePanel(!isOpenSidePanel)}
            className=" bg-gray-950 absolute top-0 h-full opacity-60 w-full z-40 min-w-[1000px] "
          >
            <div className=" relative top-0 left-0">
              <RxCross2
                className=" ml-[200px"
                fontSize={"40px"}
                style={{ color: "white" }}
                onClick={() => setIsOpenSidePanel(!isOpenSidePanel)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMain;
