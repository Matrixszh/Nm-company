"use client";
import NavBar from "@/components/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import LogoSlider from "@/components/LogoSlider";
import { Footer } from "@/components/Footer";
import AppointmentForm from "./AppointmentForm";
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
      style={{ backgroundImage: "url('/background.jpg')" }} id="history"
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
            preload="none"
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 md:hidden"
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
          <span> Get In Touch , </span> Let's Make Your <span className="text-[#F3831C]">Event</span>  Happen
          </p>
            <p className="text-md md:text-lg lg:text-2xl font-regular text-center text-white md:max-w-[80vw] max-w-[90vw]" id="intro_content">
            Have questions or need a quote? Reach out to our team for expert advice and customized solutions for your next event.
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
                Contact Us
              </button>
          </div>
          </div>
        </section>
      </main>




      

      <section
        className="relative  flex flex-col items-center text-white mt-16 justify-center"
        id="form_sec"
      >
        <div className="mb-4">
          <span className="text-sm px-6 py-2 bg-none text-white rounded-full border border-2">
            CONTACT
          </span>
        </div>
        <h2
          className="text-3xl text-white md:text-5xl font-regular mt-6 mb-4 text-center"
          id="form_heading"
        >
          Fill Out The Form
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="form_section"
        >
          Provide your details, and our team will reach out with the perfect event solutions for you!
        </p>
        <AppointmentForm/>
      </section>
      

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
