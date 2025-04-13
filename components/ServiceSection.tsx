'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import bath from '@/public/img3.jpg';
import renovation from '@/public/img1.jpg';
import consultation from '@/public/img2.jpg';
import kitchen from '@/public/img3.jpg';
import { motion, useInView } from 'framer-motion';

const services = [
  { name: 'Kitchen Remodelling', description: 'Kitchen design & décor services. ', image: kitchen },
  { name: 'Bathroom Remodelling', description: 'Design, Acessories and Lighting.', image: bath },
  { name: 'Consultation', description: 'Expert design advice & guidance.', image: consultation },
  { name: 'Renovations', description: 'Design coordination & execution.', image: renovation },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].name);

  const firstLineWords = ["Expertly", "crafting"];
  const secondLineWords = ["your", "dream"];

  // Ref for the heading animation
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="#" className="py-16 w-full px-5 sm:px-10 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        

        {/* Service images and descriptions */}
        <div className="flex w-full flex-row items-stretch rounded-2xl overflow-hidden mt-20">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto">
            {services.map((service) => (
              <div
                key={service.name}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeService === service.name ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            ))}
          </div>

          <div className="bg-white bg-opacity-45 w-full md:w-1/2 flex items-center">
            <div className="w-full bg-[#000000]/5 p-6 sm:p-8 flex flex-col justify-center">
              <ul>
                {services.map((service) => (
                  <li key={service.name} className="mb-6 last:mb-0">
                    <button
                      className="text-left w-full"
                      onMouseEnter={() => setActiveService(service.name)}
                    >
                      <span
                        className={`text-2xl font-Jost sm:text-2xl lg:text-3xl font-semibold relative ${
                          activeService === service.name ? 'text-[#F3831C]' : 'text-white '
                        }`}
                      >
                        {service.name}
                        <span
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#F3831C] transform origin-left transition-transform duration-300 ${
                            activeService === service.name ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        ></span>
                      </span>
                      <p className="text-gray-200 font-Jost text-lg sm:text-base mt-2">{service.description}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;