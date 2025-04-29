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
          For over two decades, NM Company has been a cornerstone of Hyderabad’s event industry, evolving from a modest production house into Telangana’s premier event powerhouse with one of the largest inventories in the region. Our legacy is built on trust, creativity, and flawless execution, making us the preferred choice for iconic weddings and grand celebrations.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;