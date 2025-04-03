import React from "react";
import Image from "next/image";
import nmlogo from "../public/nmlogo.png";

export const ProfilePhoto = () => {
  return (
    <div className="hidden lg:block relative">
      

      <div
        className="shadow-2xl shadow-white z-10 relative"
        style={{
          background: "",
          width: "30vw", // Adjust width based on your design
        }}
      >
        <Image
          src={nmlogo}
          alt="nmlogo"
          className="rounded-lg z-10"
          style={{ width: "100%" }} // Image width is relative to the parent div
          priority
        />
      </div>

    </div>
  );
};