"use client";
import Testimonials from "@/components/Testimonials";
import NavBar from "../../components/Navbar";
import {Services} from "../../components/Services";
import {SpecialityComponent} from "../../components/SpecialityComponent";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import LogoSlider from "@/components/LogoSlider";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { AboutUs } from "@/components/AboutUs";
import ConveyorBelt from "@/components/Conveyerbelt";
import ServicesSection from "@/components/ServiceSection";
import MarqueeText from "@/components/MarqueeText";
import AccordionInfo from "@/components/AccordianInfo";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ScrollCard from "@/components/ScrollCard";
import { VortexDemo } from "@/components/Vortex";
import GooeyNav from "@/components/GooeyNav";
import SpotlightCard from "@/components/SpotlightCard";
import { FaReact } from 'react-icons/fa';
import Policy from "@/components/Policy";
import { FocusCardsDemo } from "@/components/FocusCards";
import ContactCTA from "@/components/ContacCTA";
import { TabsDemo } from "@/components/GlowingEffect";
import ExpandableProjectsSection from "@/components/ExpandableProjectsSection";

export default function Home() {
 
const items = [
  { label: "Home", href: "/" },
  { label: "History", href: "/History" },
  { label: "Contact", href: "/Form" },
];
  return (
    <div
      
      className=" overflow-hidden"
    >
      <div className="py-4 item-center flex justify-center  bg-gradient-to-b from-black to-pink-600/80">
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>

      <section
        className="relative flex flex-col text-white bg-gradient-to-b from-white to-[#A75E80]/50 items-center text-white "
      >
        <VortexDemo />
      </section>

      <section
        className="relativeflex flex-row items-center text-white my-16 "
        id="speciality_sec"
      >
        
        <Policy/>
      </section>

      <section
        className="min-h-screen relative bg-[#A75E80]/20 flex flex-col justify-center items-center  "
        id="process_sec"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-medium text-gray-800 mb-4">
            Our <span className=" font-light text-[#A75E80]">Standouts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are committed to these core principles that guide every aspect of our work and ensure exceptional results for our clients.
          </p>
        </div>
        
        <FocusCardsDemo/>
        
      </section>


      <section
        className="relative flex flex-col bg-[#A75E80] items-center text-white"
        id="team_sec"
      >
         <ContactCTA/>
      </section>
      <section
        className="min-h-[150vh] relative bg-[#A75E80]/20 flex flex-col justify-center items-center  "
        id="process_sec"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-medium text-gray-800 mb-4">
            Our <span className=" font-light text-[#A75E80]">Standouts</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are committed to these core principles that guide every aspect of our work and ensure exceptional results for our clients.
          </p>
        </div>
        
        <TabsDemo/>
        
      </section>
      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        
        <ExpandableProjectsSection/>
      </section>

        
    </div>
  );
}
