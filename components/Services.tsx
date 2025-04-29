import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
    icon: <FaRegLightbulb size={40} />, // Concept Planning
    title: "Concept Planning",
    description: "We help bring your vision to life with detailed planning and creative direction.",
  },
  {
    id: 2,
    icon: <FaClipboardCheck size={40} />, // Vendor Management
    title: "Vendor Management",
    description: "We coordinate and manage all vendor bookings to ensure a seamless experience.",
  },
  {
    id: 3,
    icon: <FaMusic size={40} />, // Artist & Entertainment
    title: "Artist & Entertainment",
    description: "From DJs to live bands, we handle all your entertainment needs.",
  },
  {
    id: 4,
    icon: <FaPaintBrush size={40} />, // Decor & Styling
    title: "Decor & Styling",
    description: "Elegant setups, floral arrangements, and themed styling done to perfection.",
  },
  {
    id: 5,
    icon: <FaEnvelopeOpenText size={40} />, // Invite/E-invite
    title: "Invite / E-invite",
    description: "Custom-designed printed and digital invites that reflect your event's essence.",
  },
  {
    id: 6,
    icon: <FaUtensils size={40} />, // Catering
    title: "Catering",
    description: "A range of delicious cuisines curated to satisfy every palate.",
  },
  {
    id: 7,
    icon: <FaCameraRetro size={40} />, // Photography/Videography
    title: "Photography & Videography",
    description: "Capturing your moments with creativity and clarity for lasting memories.",
  },
];


const Card = ({
  icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    gsap.set(card, {
      clipPath: "inset(0 0 100% 0)",
      opacity: 0,
      y: 50,
    });

    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => {
        gsap.to(card, {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          y: 0,
          duration: 1.3,
          delay: index * 0.3,
          ease: "power3.out",
        });
      },
      once: true,
    });
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="w-full bg-[#004692] p-10 rounded-md text-center text-white h-[400px] flex flex-col items-center justify-start gap-6"
    >
      <div className="bg-[#FF8B00] rounded-full p-4 inline-block">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* Desktop - Grid Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:p-4 w-full">
        {cardData.map((card, index) => (
          <Card 
            key={card.id} 
            icon={card.icon} 
            title={card.title} 
            description={card.description}
            index={index}
          />
        ))}
      </div>


      {/* Mobile - Swiper Carousel */}
      <div className="md:hidden w-full px-4 h-[5vh] -mb-[50vh]">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={card.id}>
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
