"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { gsap } from "gsap";
import Image from "next/image";
import { useRouter } from 'next/navigation';



const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  const items = [
    { item: "HOME", href: "/" },
    { item: "SERVICES", href: "/#process_sec" },
    { item: "HISTORY", href: "/History" },
    { item: "CONTACT", href: "/Form" },
  ];

  const toggleMenu = (href?: string) => {
    setIsMenuOpen((prev) => !prev);
    setIsBodyLocked((prev) => !prev);

    if (href) {
      router.push(href);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuItemsRef.current, {
        xPercent: 200,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(menuItemsRef.current, {
        xPercent: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isBodyLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBodyLocked]);

  return (
    <nav className="sticky top-[50px] left-0 right-0 bg-white bg-opacity-45 z-50 h-[50px] lg:h-[60px] shadow-md w-[90%] lg:w-[50%] rounded-full mx-auto">
      <div className="h-full flex items-center w-[100%] mx-auto">
        <div className="flex items-center lg:space-x-10 w-full lg:justify-center h-full rounded-full">
          {items.slice(0, 2).map((item, index) => (
            <div key={index} className="hidden lg:block w-full">
              <button
                className="text-lg text-white font-regular nav-font relative group w-full rounded-full h-[60px] overflow-hidden"
                onClick={() => router.push(item.href)}
              >
                <div className="absolute inset-0 bg-custom-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{item.item}</span>
              </button>
            </div>
          ))}
          <div className="lg:hidden pl-4">
            <button
              onClick={() => toggleMenu()}
              className="text-2xl text-white"
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <div className="flex-grow flex justify-center mx-4">
          <Link href="/" passHref>
            <div className="inline-block">
              <Image src="/logo.png" alt="logo" width={140} height={140} />
            </div>
          </Link>
        </div>

        <div className="flex items-center lg:space-x-10 w-full lg:justify-center h-full rounded-full">
          {items.slice(2).map((item, index) => (
            <div key={index} className="hidden lg:block w-full">
              <button
                className="text-lg text-white font-medium nav-font hover:bg-custom-gradient transition-colors w-full rounded-full h-[60px]"
                onClick={() => router.push(item.href)}
              >
                {item.item}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => toggleMenu()}
        ></div>
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 opacity-90 bg-gray-500 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-end p-4">
            <button
              onClick={() => toggleMenu()}
              className="text-2xl"
              aria-label="Close menu"
            >
              <IoMdClose className="text-[#F3831C] text-4xl" />
            </button>
          </div>

          <div className="flex flex-col gap-14 p-4">
            {items.map((item, index) => (
              <div className="relative" key={index}>
                <div
                  className="bg-custom-gradient absolute top-0 left-0 w-full h-full z-10 rounded-xl"
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                ></div>
                <button
                  className="text-left border-gray-400 text-xl text-black border px-4 rounded-xl shadow-lg py-1 font-regular bg-white w-full"
                  onClick={() => toggleMenu(item.href)}
                >
                  {item.item}
                </button>
              </div>
            ))}
          </div>

          <div className="p-4">
            <button
              className="w-full bg-custom-gradient border border-gray-300 py-3 rounded-xl text-lg font-regular text-white hover:border-white hover:bg-gray-600 hover:text-white transition duration-300"
              onClick={() => toggleMenu("/Form")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
