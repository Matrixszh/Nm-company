"use client";
import Form from "@/components/Form";
import Testimonials from "@/components/Testimonials";
import Loans from "../components/Loans";
import NavBar from "../components/Navbar";
import ProgressBar from "../components/Progress";
import { SpecialityComponent } from "../components/SpecialityComponent";
import Teams from "../components/Team";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Image from "next/image";
import LogoSlider from "@/components/LogoSlider";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Footer } from "@/components/Footer";
import IntroCarousel from "@/components/IntroCarousel";
import Link from "next/link";
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
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 hidden md:block"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 md:hidden"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative flex flex-col items-center justify-center h-screen md:gap-[8vh] gap-[8vh]" >
          <p className="text-white md:text-7xl lg:text-7xl text-4xl text-center px-12 md:px-6" id="intro_main">
          <span> A One Stop </span><span className="text-[#F3831C]">Solution</span>  To All Your Event Needs
          </p>
            <p className="text-md md:text-lg lg:text-2xl font-semibold text-center text-white md:max-w-[80vw] max-w-[90vw]" id="intro_content">
            Stack leads with multiple pain points alongside me and make 50k in a month .
          </p>

          <div id="intro_button">

          <button
                className="px-6 py-3 bg-custom-gradient text-white rounded-full shadow-md hover:bg-none hover:text-white border border-1 transition duration-300"
                onClick={() =>
                  document
                    .getElementById("form_sec")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Request Funds Here
              </button>
          </div>
          </div>
        </section>
      </main>

      <section
        className="relative flex flex-col items-center text-white mt-16"
        id="loan_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            LOANS
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="loan_heading"
        >
          Type Of Loans We Offer
        </h2>

        <Loans />
      </section>

      {/* New Section */}
      <div className=" h-1 bg-gray-400 shadow-blurred-white mt-10"></div>
      <section
        className="relative  flex flex-col items-center text-white my-16 "
        id="speciality_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            WHY US
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="speciality_heading"
        >
          What Makes Us Different
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="speciality_content"
        >
          Discover why we're the trusted choice for your funding needs
        </p>
        <SpecialityComponent />
      </section>

      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section
        className="min-h-screen relative flex flex-col justify-center items-center lg:my-16 lg:mb-[20vh] mb-[40vh] my-16"
        id="process_sec"
      >
        <div className="mb-4 bg-custom-gradient px-6 py-2 rounded-full">
          <span className="text-white font-semibold rounded-full ">
            PROCESS
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-white text-center"
          id="process_heading"
        >
          Our Process Makes Funding Easy
        </h2>

        <ProgressBar />
        <div></div>
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white "></div>
      <section
        className="relative flex flex-col items-center text-white mt-16"
        id="team_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TEAM
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="team_content"
        >
          The Dream Team
        </h2>
        <Teams />
      </section>

      <div className=" h-1 bg-gray-400 shadow-blurred-white"></div>
      <section
        className="relative  flex flex-col items-center text-white my-16 "
        id="testimonial_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TESTIMONIAL
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="testimonial_heading"
        >
          What Clients Are Saying
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="testmonial_content"
        >
          Hear from our satisfied customers who have experienced the benfit of
          using our services and what their dreams have become
        </p>
        <Testimonials />
      </section>
      <div className=" h-1 bg-gray-400 shadow-blurred-white "></div>
      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            FORM
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="form_heading"
        >
          Step closer towards success
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="form_section"
        >
          Get started today by filling out our easy application form and take
          the first step toward your financial solution.
        </p>
        <Form />
      </section>
      <Footer />
    </div>
  );
}
