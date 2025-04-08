import { StaticImageData } from "next/image";
import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";

const LogoSlider = () => {
  interface Brand {
    image: StaticImageData;
  }

  const brands: Brand[] = [
    { image: logo },
    { image: logo },
    { image: logo },
    { image: logo },
    { image: logo },
    { image: logo },
    { image: logo },
    { image: logo },
  ];

  return (
    <div>
      <div className="slider-container overflow-hidden py-10">
        <div className="slider">
          {[...brands, ...brands, ...brands].map((data, index) => (
            <div
              key={index}
              className="slide flex items-center justify-center h-[10vh]  lg:h-[20vh] w-full px-4"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={data.image}
                  alt={`Brand ${(index % brands.length) + 1}`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
