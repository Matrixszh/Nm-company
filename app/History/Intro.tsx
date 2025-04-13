import Link from 'next/link';
import React from 'react';

const Intro= () => {
  return (
    <section className="relative w-full py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Heading */}
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full md:w-1/2">
          <h1 className="text-3xl lg:text-4xl text-center md:text-left font-medium leading-tight">
            Want to know <br />
            <span className="text-[#F3831C]">how</span> we built this<br />
            Empire <span className="text-[#F3831C]">?</span>
          </h1>
        </div>

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2">
          <p className="text-lg md:text-lg font-normal text-justify text-white">
            This podcast offers you an insight about the host Abdullah and his
            struggles to achieve what is now by measures the most immaculate
            form of success. Join Abdullah Ghaffar as he engages with the brightest minds in the real estate industry! Discover actionable tips, inspiring stories, and insider knowledge from top performers and experts in real estate investing and raising capital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;