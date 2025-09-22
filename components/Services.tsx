import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import {
  FaRegLightbulb,
  FaClipboardCheck,
  FaMusic,
  FaPaintBrush,
  FaEnvelopeOpenText,
  FaUtensils,
  FaCameraRetro,
} from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    icon: <FaRegLightbulb size={30} />, // Concept Planning
    title: "Concept Planning",
  },
  {
    id: 2,
    icon: <FaClipboardCheck size={30} />, // Vendor Management
    title: "Vendor Management",
  },
  {
    id: 3,
    icon: <FaMusic size={30} />, // Artist & Entertainment
    title: "Artist & Entertainment",
  },
  {
    id: 4,
    icon: <FaPaintBrush size={30} />, // Decor & Styling
    title: "Decor & Styling",
  },
  {
    id: 5,
    icon: <FaEnvelopeOpenText size={30} />, // Invite/E-invite
    title: "Invite / E-invite",
  },
  {
    id: 6,
    icon: <FaUtensils size={30} />, // Catering
    title: "Catering",
  },
  {
    id: 7,
    icon: <FaCameraRetro size={30} />, // Photography/Videography
    title: "Photography & Videography",
  },
];

const Card = ({
  icon,
  title,
  index,
}: {
  icon: any;
  title: string;
  index: number;
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    gsap.set(card, {
      clipPath: "inset(0 0 100% 0)",
      opacity: 0,
      y: 20,
    });

    ScrollTrigger.create({
      trigger: card,
      start: "top 90%",
      onEnter: () => {
        gsap.to(card, {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
        });
      },
      once: true,
    });
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="w-full bg-none p-4  text-center text-white h-36 flex flex-col items-center justify-center gap-3"
    >
      <div className="bg-[#FF8B00] rounded-full p-3 inline-block">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* Desktop - Grid Layout (4 in a row) */}
      <div className="hidden lg:grid grid-cols-4 gap-4 px-4 md:p-4 w-full">
        {cardData.map((card, index) => (
          <Card 
            key={card.id} 
            icon={card.icon} 
            title={card.title}
            index={index}
          />
        ))}
      </div>
      
      {/* Tablet - Grid Layout (3 in a row) */}
      <div className="hidden md:grid lg:hidden grid-cols-3 gap-4 px-4 md:p-4 w-full">
        {cardData.map((card, index) => (
          <Card 
            key={card.id} 
            icon={card.icon} 
            title={card.title}
            index={index}
          />
        ))}
      </div>

      {/* Mobile - Grid Layout (3 in a row) */}
      <div className="grid md:hidden grid-cols-2 gap-2 px-2 w-full">
        {cardData.map((card, index) => (
          <div key={card.id} className="h-24">
            <div className=" rounded-md text-center text-white h-full flex flex-col items-center justify-center p-1">
              <div className="bg-[#FF8B00] rounded-full p-2 inline-block mb-1">
                {React.cloneElement(card.icon, { size: 30 })}
              </div>
              <h3 className="p-2 text-sm font-medium ">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};