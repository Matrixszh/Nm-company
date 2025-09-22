"use client";
import Testimonials from "@/components/Testimonials";
import NavBar from "../components/Navbar";
import {Services} from "../components/Services";
import {SpecialityComponent} from "../components/SpecialityComponent";
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

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();
  const scope = useRef(null);
  useGSAP(
    () => {
      t1.from("#intro_main", {
        yPercent: -100,
        duration: 1.3,
        opacity: 0,
        delay: 0.3,
      })
        .from("#intro_content", {
          yPercent: 100,
          duration: 1.0,
          opacity: 0,
          delay: 0.2,
        })
        .from("#intro_button", {
          yPercent: 100,
          duration: 1.0,
          opacity: 0,
          delay: 0.2,
        });

      // Loan Section Animation
      gsap.from("#loan_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#loan_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#loan_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#loan_sec",
          start: "top center",
        },
      });

      // Process Section Animation
      gsap.from("#process_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#process_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#process_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#process_sec",
          start: "top center",
        },
      });

      // Team Section Animation
      gsap.from("#team_content", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#team_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });

      // Speciality Section Animation
      gsap.from("#speciality_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#speciality_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#speciality_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#speciality_sec",
          start: "top center",
        },
      });

      // Testimonial Section Animation
      gsap.from("#testimonial_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#testimonial_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#testmonial_content", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#testimonial_sec",
          start: "top center",
        },
      });

      // Form Section Animation
      gsap.from("#form_heading", {
        yPercent: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#form_sec",
          start: "-230px center",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from("#form_section", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: "#form_sec",
          start: "top center",
        },
      });
    },
    { scope: scope }
  );

  return (
    <div
      ref={scope}
      className="relative min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <main className="overflow-hidden" ref={scope}>
      <section className="sticky top-0 z-10 h-screen overflow-hidden bg-black"
      id="home">
        <NavBar/>
          {/* Single video for both mobile and desktop */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40  "
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative flex flex-col items-center justify-center h-screen md:gap-[8vh] gap-[8vh]" >
          <p className="text-white md:text-7xl lg:text-7xl text-4xl text-center px-12 md:px-6" id="intro_main">
          <span> A One Stop </span><span className="text-[#F3831C]">Solution</span>  To All Your Event Needs
          </p>
            <p className="text-md md:text-lg lg:text-2xl font-regular text-center text-white md:max-w-[80vw] max-w-[90vw]" id="intro_content">
            Discover premium event supplies tailored to your needs. From décor to equipment, we provide top-quality resources to bring your vision to life.
          </p>

          <div id="intro_button">

          <Link href="/Form">
      <button className="px-6 py-3 bg-custom-gradient text-white rounded-full shadow-md hover:bg-none hover:text-white border border-1 transition duration-300">
        Contact Us
      </button>
    </Link>
          </div>
          </div>
        </section>
      </main>

      <section
        className="relative flex flex-col items-center text-white mt-16"
        id="loan_sec"
      >
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            HISTORY
          </span>
        </div>
        <h2
          className="text-3xl md:text-5xl font-regular mt-6 mb-4 text-center"
          id="loan_heading"
        >
          About Us
        </h2>

        <AboutUs />
      </section>

      <section
        className="relative  flex flex-col items-center text-white my-16 "
        id="speciality_sec"
      >
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            PRIORITIES
          </span>
        </div>
        <h2
          className="text-3xl md:text-5xl font-regular mt-6 mb-4 text-center"
          id="speciality_heading"
        >
          Why Choose Us
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="speciality_content"
        >
          Reliable, high-quality, and tailored to your needs—discover why event organizers trust us for seamless and stress-free event resource solutions.
        </p>
        <SpecialityComponent />
      </section>
      <MarqueeText/>
      <section
        className="min-h-screen relative flex flex-col justify-center items-center my-1 mt-[5vh] lg:my-16 lg:mb-[20vh] mb-[20vh] "
        id="process_sec"
      >
        
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            SERVICES
          </span>
        </div>
        <h2
          className="text-3xl text-white md:text-5xl font-regular mt-6 mb-4 text-center"
          id="process_heading"
        >
          Services We Offer
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="process_content"
        >
          From décor and furniture to lighting and staging, we provide top-tier event resources to bring your vision to life.
        </p>


        <Services />
        
      </section>


      <section
        className="relative flex flex-col items-center text-white -mt-[10vh]"
        id="team_sec"
      >
         <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            GALLERY
          </span>
        </div>
        <h2
          className="text-3xl text-white md:text-5xl font-regular mt-6 mb-4 text-center"
          id="team_content"
        >
          Our Projects
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="process_content"
        >
          Explore our gallery of past events, featuring our premium supplies and setups that brought unforgettable experiences to life.
        </p>

        <ConveyorBelt/>
      </section>

      
      <section
        className="relative  flex flex-col items-center text-white my-16 "
        id="testimonial_sec"
      >
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            AWARDS
          </span>
        </div>
        <h2
          className="text-3xl text-white md:text-5xl font-regular mt-6 mb-4 text-center"
          id="testimonial_heading"
        >
          Our Acheivements
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="testimonial_content"
        >
          Celebrating our journey of successful events, satisfied clients, and industry recognition as a trusted event resource provider.       
       </p>
        <ServicesSection/>
      </section>




      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            PROOF
          </span>
        </div>
        <h2
          className="text-3xl text-white md:text-5xl font-regular mt-6 mb-4 text-center"
          id="form_heading"
        >
          Testimonials
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="form_section"
        >
          Discover why we're the trusted choice for your Supplying needs
        </p>
        <TestimonialCarousel/>
      </section>
      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            INQUIRIES
          </span>
        </div>
        <h2
          className="text-3xl text-white md:text-5xl font-regular mt-6 mb-4 text-center"
          id="form_heading"
        >
          FAQ's
        </h2>
      </section>
      <AccordionInfo />      
      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            CLIENTALE
          </span>
        </div>
        <h2
          className="text-3xl text-white md:text-5xl font-regular mt-6 mb-4 text-center"
          id="form_heading"
        >
          Our Clients
        </h2>
        <LogoSlider />
        
      </section>
      <Footer />
    </div>
  );
}
