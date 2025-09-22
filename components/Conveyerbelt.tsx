import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ConveyorBelt = () => {
  const beltOneImages = [
    "/img1.jpg",
    "/img6.jpeg",
    "/img3.jpg",
    "/img4.JPG",
    "/img5.JPG",
  ];

  const beltTwoImages = [
    "/img5.JPG",
    "/img4.JPG",
    "/img8.png",
    "/img7.jpeg",
    "/img1.jpg",
  ];

  // Triple the images to ensure smooth continuous movement
  const duplicatedBeltOneImages = [...beltOneImages, ...beltOneImages, ...beltOneImages];
  const duplicatedBeltTwoImages = [...beltTwoImages, ...beltTwoImages, ...beltTwoImages];

  return (
    <div className="relative w-full py-16 text-white">


      {/* Conveyor Belts Container */}
      <div className="space-y-12 py-8">
        {/* Belt One - Moving Left */}
        <div className="relative w-full overflow-hidden">
        <Marquee speed={70}>
          <div className="flex whitespace-nowrap">
            {duplicatedBeltOneImages.map((img, index) => (
              <div 
                key={`belt1-${index}`} 
                className="w-[20%] px-1"
              >
                <Image
                  src={img}
                  alt={`Belt 1 Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover lg:w-[50vh] w-[35vh] h-full"
                />
              </div>
            ))}
          </div>
          </Marquee>
        </div>

        {/* Belt Two - Moving Right */}
        <div className="relative w-full overflow-hidden">
        <Marquee direction="right" speed={70}>
          <div className="flex whitespace-nowrap">
            {duplicatedBeltTwoImages.map((img, index) => (
              <div 
                key={`belt2-${index}`} 
                className="w-[20%] px-1"
              >
                <Image
                  src={img}
                  alt={`Belt 2 Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover lg:w-[50vh] w-[35vh] h-full"
                />
              </div>
            ))}
          </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ConveyorBelt