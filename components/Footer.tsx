import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import logoImage from "../public/dollar1.png"; // Adjust path as needed

export const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-50 px-4 text-white py-2">
      
      <div className="flex  flex-col justify-between px-6 gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Contact Information */}
          <div className="flex flex-col items-center md:items-start gap-1 text-white mb-6 md:mb-0">
            <span className="text-sm md:text-sm">nmcompany@email.com</span>
          </div>

          {/* Center Section - Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100} // Adjust size as needed
              height={80}
              priority
            />
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl hover:text-[#F3831C]" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Group"
            >
              <FaFacebook className="text-2xl hover:text-[#F3831C]" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl hover:text-[#F3831C]" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl hover:text-[#F3831C]" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok className="text-2xl hover:text-[#F3831C]" />
            </a>
          </div>
        </div>

        <div className="text-center text-white text-xs">
          © 2024 Creative Funding™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
