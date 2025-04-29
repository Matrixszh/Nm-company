import React from 'react';

const MarqueeText : React.FC = () => {

  return (

      <div className="overflow-hidden bg-transparent py-1 lg:py-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                <span className="text-white text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  Services
                </span>
                <span className="text-[#F3831C] text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  .
                </span>
              </React.Fragment>
              
            ))}
        </div>
      </div>
  );
};

export default MarqueeText;
