"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer2() {
  return (
    <footer className="bg-[#A75E80]">


      {/* Bottom Bar */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} NMCompany. All rights reserved.</p>
          <p>NM Company</p>
        </div>
      </div>
    </footer>
  );
}