"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import img1 from "@/public/img1.jpg";
import img2 from "@/public/img2.jpg";
import img3 from "@/public/img3.jpg";
import img4 from "@/public/img1.jpg"; // You might want to replace this if it's a duplicate
import Link from "next/link";

const About2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="About" className="py-16 px-5 sm:px-10 lg:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Carousel */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 1.0,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="w-full lg:w-1/2 rounded-2xl relative overflow-hidden"
            style={{ height: "500px" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img}
                  alt={`Interior design ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="animate-slow-zoom"
                />
              </div>
            ))}
          </motion.div>

          {/* Text block animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 1.2,
              duration: 0.8,
              type: "spring",
              stiffness: 50,
            }}
            className="w-full lg:w-1/3 text-justify"
          >
            <p className="text-white md:text-lg text-justify text-lg font-normal ">
              At <span className="text-[#F3831C]">EliteSpaces</span>, we
              specialize in transforming homes through expert kitchen and
              bathroom renovations, as well as stunning home additions. With a
              track record of over 100 successful projects, we take pride in
              creating functional, beautiful spaces tailored to our clients&apos;
              unique needs and lifestyles.
            </p>
            <p className="text-white md:text-lg text-justify text-lg font-normal mt-4">
              From concept to completion, our team of experienced professionals
              is dedicated to delivering top-quality craftsmanship and
              exceptional service on every project. Whether you&apos;re looking to
              upgrade your kitchen, refresh your bathroom, or expand your living
              space, EliteSpaces is committed to making your vision a reality.
            </p>
            <div className="mt-6 hidden lg:block">
  <Link href="/Form">
    <button className="px-6 py-1 bg-custom-gradient text-white rounded-full shadow-md hover:bg-none hover:text-white border border-1 transition duration-300">
      Contact Us
    </button>
  </Link>
</div>


          </motion.div>
          <div className="mt-6 flex sm:justify-center lg:block lg:hidden">
  <Link href="/Form">
    <button className="px-6 py-1 bg-custom-gradient text-white rounded-full shadow-md hover:bg-none hover:text-white border border-1 transition duration-300">
      Contact Us
    </button>
  </Link>
</div>
        </div>
      </div>
    </section>
  );
};

export default About2;
