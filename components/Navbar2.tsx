"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";

interface NavbarProps {
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isSiteNavActive, setIsSiteNavActive] = useState<boolean>(false);
  const [isSocialMediaActive, setIsSocialMediaActive] = useState<boolean>(false);
  const [isAllCasesActive, setIsAllCasesActive] = useState<boolean>(false);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const siteNavigationRef = useRef<HTMLElement>(null);
  const socialMediaRef = useRef<HTMLDivElement>(null);
  const allCasesRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const followUsRef = useRef<HTMLDivElement>(null);
  const allCasesLinkRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Page loader
  useEffect(() => {
    if (typeof document !== "undefined") {
      const handleLoad = () => {
        setIsPageLoaded(true);
      };

      if (document.readyState === "complete") {
        setIsPageLoaded(true);
        document.body.style.overflowY = "scroll";
      } else {
        window.addEventListener("load", handleLoad);
      }

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  // Equalizer
  useEffect(() => {
    const source = "/assets/audio/audio.mp3";
    const audio = new Audio(source);
    audio.loop = true;
    audio.volume = 0.1;
    audio.play().catch(() => {
      // Handle autoplay policy restrictions
      setIsPlaying(false);
    });
    
    audioRef.current = audio;

    const equalizerElement = document.querySelector(".equalizer");
    const equalizerClickHandler = () => {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
        equalizerElement?.classList.remove("paused");
      } else {
        audio.pause();
        setIsPlaying(false);
        equalizerElement?.classList.add("paused");
      }
    };

    if (equalizerElement) {
      equalizerElement.addEventListener("click", equalizerClickHandler);
    }

    // EQUALIZER ANIMATION
    const randomBetween = (range: [number, number]): number => {
      const [min, max] = range;
      return min < 0
        ? min + Math.random() * (Math.abs(min) + max)
        : min + Math.random() * max;
    };

    const equalizerAnimation = (speed: number, barsHeight: [number, number][]) => {
      animationIntervalRef.current = setInterval(() => {
        document.querySelectorAll(".equalizer span").forEach((span, i) => {
          (span as HTMLElement).style.height = `${randomBetween(barsHeight[i])}px`;
        });
      }, speed);
    };

    const barsHeight: [number, number][] = [
      [2, 13],
      [5, 22],
      [17, 8],
      [4, 18],
      [11, 3],
    ];

    equalizerAnimation(180, barsHeight);

    return () => {
      if (equalizerElement) {
        equalizerElement.removeEventListener("click", equalizerClickHandler);
      }
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
      audio.pause();
    };
  }, []);

  const handleTreeMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const ul = target.parentNode?.querySelector("ul") as HTMLElement;
    if (ul) {
      const isHidden = ul.style.height === "0px";
      ul.style.height = isHidden ? "90px" : "0px";
      ul.style.overflow = "hidden";
      ul.style.transition = "height 0.3s ease";
    }
  };

  const toggleBodyOverflow = () => {
    document.body.classList.toggle("overflow");
    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  const handleHamburgerClick = () => {
    setIsSiteNavActive(!isSiteNavActive);
    toggleBodyOverflow();
  };

  const handleFollowUsClick = () => {
    setIsSocialMediaActive(!isSocialMediaActive);
    toggleBodyOverflow();
  };

  const handleAllCasesClick = () => {
    setIsAllCasesActive(!isAllCasesActive);
    toggleBodyOverflow();
  };

  return (
    <>
      <div className={isPageLoaded ? "page-loaded" : ""}>
        {/* Preloader */}
        <div className="preloader fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="layer absolute inset-0 bg-black"></div>
          <div className="inner relative z-10 text-center text-white">
            <figure className="mb-4">
              <img src="/assets/images/preloader.gif" alt="Image" className="mx-auto" />
            </figure>
            <span className="text-lg font-light">Site Loading</span>
          </div>
        </div>

        {/* Page Transition */}
        <div className="page-transition fixed inset-0 z-40 pointer-events-none">
          <div className="layer absolute inset-0 bg-black"></div>
        </div>

        {/* Site Navigation */}
        <nav
          className={`site-navigation fixed inset-0 z-30 bg-black transform transition-transform duration-500 ${
            isSiteNavActive ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={siteNavigationRef}
        >
          <div className="layer absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>
          <div className="inner relative z-10 flex items-center justify-center h-full">
            <ul className="text-white text-center space-y-6">
              <li className="group">
                <Link href="/home" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  HOME
                </Link>
                <i
                  className="fas fa-caret-down ml-2 cursor-pointer hover:text-yellow-400"
                  onClick={handleTreeMenuClick}
                ></i>
                <small className="block text-sm text-gray-400 mt-1">First page</small>
                <ul className="mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out" 
                    style={{ height: "0px", overflow: "hidden", transition: "height 0.3s ease" }}>
                  <li>
                    <Link href="/home" className="text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                      HOME SLIDER
                    </Link>
                  </li>
                  <li>
                    <a href="index-video.html" className="text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                      HOME VIDEO
                    </a>
                  </li>
                  <li>
                    <Link href="/home-carousel" scroll={false} className="text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                      HOME CAROUSEL
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="studio.html" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  STUDIO
                </a>
                <small className="block text-sm text-gray-400 mt-1">All About Us</small>
              </li>
              <li className="group">
                <Link href="/home-carousel" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  SERVICES
                </Link>
                <i
                  className="fas fa-caret-down ml-2 cursor-pointer hover:text-yellow-400"
                  onClick={handleTreeMenuClick}
                ></i>
                <small className="block text-sm text-gray-400 mt-1">Services we provide</small>
                <ul className="mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out" 
                    style={{ height: "auto", overflow: "hidden", transition: "height 0.3s ease" }}>
                  <li>
                    <Link href="/Services/Services3" className="text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                      CREATING EXPERIENCES
                    </Link>
                  </li>
                  <li>
                    <a href="/Services/Services2" className="text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                      PROMOTING YOUR BRAND
                    </a>
                  </li>
                  <li>
                    <Link href="/Services/Services1" className="text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                      FROM BASE TO CONSISTENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/Services4" className="text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                      THROUGH THE LENS
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  BLOG
                </a>
                <small className="block text-sm text-gray-400 mt-1">Recent posts</small>
              </li>
              <li>
                <Link href="/contactUs" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  CONTACT
                </Link>
                <small className="block text-sm text-gray-400 mt-1">Say hello</small>
              </li>
              <li>
                <Link href="/login" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  LogIn/SignUp
                </Link>
                <small className="block text-sm text-gray-400 mt-1">Make account</small>
              </li>
            </ul>
          </div>
        </nav>

        {/* Social Media */}
        <div
          className={`social-media fixed inset-0 z-30 bg-black transform transition-transform duration-500 ${
            isSocialMediaActive ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={socialMediaRef}
        >
          <div className="layer absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>
          <div className="inner relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h5 className="text-2xl font-light mb-8">Social Share</h5>
              <ul className="flex space-x-6 justify-center">
                <li>
                  <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* All Cases */}
        <div
          className={`all-cases fixed inset-0 z-30 bg-black transform transition-transform duration-500 ${
            isAllCasesActive ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={allCasesRef}
        >
          <div className="layer absolute inset-0 bg-gradient-to-r from-black to-gray-900"></div>
          <div className="inner relative z-10 flex items-center justify-center h-full">
            <ul className="text-white text-center space-y-6">
              <li>
                <a href="#" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  Darkness
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  Goddess
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  Employee
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  Berry
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  Roosters
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl font-light hover:text-yellow-400 transition-colors">
                  Primero
                </a>
              </li>
            </ul>
          </div>
        </div>

        <main className="main-left-side flex min-h-screen">
          {/* Left Side */}
          <aside className="left-side fixed left-0 top-0 h-full w-20 bg-black z-20 flex flex-col items-center justify-between py-8">
            <div className="logo">
              <a href="/home">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Image" 
                  className="w-12 h-auto"
                />
              </a>
            </div>

            <div
              className={`hamburger cursor-pointer w-8 h-8 relative ${
                isSiteNavActive ? "active" : ""
              }`}
              id="hamburger"
              ref={hamburgerRef}
              onClick={handleHamburgerClick}
            >
              <div className="hamburger__line hamburger__line--01 absolute w-full h-0.5 bg-white transition-all duration-300 top-2">
                <div className="hamburger__line-in hamburger__line-in--01 w-full h-full bg-white"></div>
              </div>
              <div className="hamburger__line hamburger__line--02 absolute w-full h-0.5 bg-white transition-all duration-300 top-1/2 -translate-y-1/2">
                <div className="hamburger__line-in hamburger__line-in--02 w-full h-full bg-white"></div>
              </div>
              <div className="hamburger__line hamburger__line--03 absolute w-full h-0.5 bg-white transition-all duration-300 bottom-2">
                <div className="hamburger__line-in hamburger__line-in--03 w-full h-full bg-white"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross01 absolute w-full h-0.5 bg-white transition-all duration-300 top-1/2 -translate-y-1/2 rotate-45 opacity-0">
                <div className="hamburger__line-in hamburger__line-in--cross01 w-full h-full bg-white"></div>
              </div>
              <div className="hamburger__line hamburger__line--cross02 absolute w-full h-0.5 bg-white transition-all duration-300 top-1/2 -translate-y-1/2 -rotate-45 opacity-0">
                <div className="hamburger__line-in hamburger__line-in--cross02 w-full h-full bg-white"></div>
              </div>
            </div>

            <div
              className="follow-us text-white text-xs cursor-pointer hover:text-yellow-400 transition-colors transform -rotate-90 origin-center"
              ref={followUsRef}
              onClick={handleFollowUsClick}
            >
              FOLLOW US
            </div>

            <div className="equalizer flex items-end space-x-1 cursor-pointer group">
              <span className="w-1 bg-yellow-400 transition-all duration-200 h-2"></span>
              <span className="w-1 bg-yellow-400 transition-all duration-200 h-4"></span>
              <span className="w-1 bg-yellow-400 transition-all duration-200 h-3"></span>
              <span className="w-1 bg-yellow-400 transition-all duration-200 h-5"></span>
            </div>
          </aside>

          <div
            className="all-cases-link fixed right-8 top-1/2 -translate-y-1/2 z-20 text-white cursor-pointer hover:text-yellow-400 transition-colors"
            ref={allCasesLinkRef}
            onClick={handleAllCasesClick}
          >
            <span className="text-sm font-light">ALL CASES</span>
            <b className="text-2xl ml-2">+</b>
          </div>

          <div className="content ml-20 flex-1">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Navbar;