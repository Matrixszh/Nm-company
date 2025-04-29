import React from "react";
import Image from "next/image";
import nmlogo from "../public/nmlogo.png";
import { ProfilePhoto } from "./ProfilePhoto";
import Link from "next/link";
export const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5 pt-10 lg:px-16 gap-14">
      <div className="flex flex-col gap-6  lg:items-start items-center">
        <h1 className="flex gap-2 font-regular text-2xl lg:text-3xl">
          Meet{" "}
          <span className="flex flex-col items-center">
            <p>NM Company</p>
          </span>{" "}
        </h1>
        <p
          className="text-lg lg:text-lg lg:pr-14 text-justify text-center  px-2 tracking-tight"
          style={{ lineHeight: "1.85" }}
        >
          Crafting Unforgettable Celebrations
          For over two decades, NM Company has been a cornerstone of Hyderabad’s event industry, evolving from a modest production house into Telangana’s premier event powerhouse with one of the largest inventories in the region.
          <span className="hidden lg:flex lg:pt-4 tracking-tight">
          Our legacy is built on trust, creativity, and flawless execution, making us the preferred choice for iconic weddings and grand celebrations
          </span>
        </p>
        <Link href="/History">
      <button className="px-6 py-2 bg-custom-gradient text-white rounded-full shadow-md hover:bg-none hover:text-white border border-1 transition duration-300">
        Know More
      </button>
    </Link>
      </div>
      <div className="">
        <ProfilePhoto />
        <Image
          src={nmlogo}
          alt="nmlogo"
          className=" lg:hidden w-[70vw] shadow-2xl"
        />
      </div>
    </div>
  );
};