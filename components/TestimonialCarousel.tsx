"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  speaker: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Thank you very much to M/s NM Events for organizing everything to our satisfaction in my cousin sister wedding.They are very professional and more than friendly.They performed beyond our expectation.They have taken utmost care of the smallest of the small things and have arranged everything which we have asked on the spot within seconds. Beautiful decoration .",
    speaker: "Yash",
  },
  {
    id: 2,
    quote:
      "Nm Company done order in my relative function with complete event with tent house to catering services. He done event so wonderful flower decorations and so tasty items. I am very happy with her services. I appreciate him for he done wonderful arrangements.",
    speaker: "Rajesh",
  },
  {
    id: 3,
    quote:
      "I would Like to thank you N.M Company for the wonderful food you prepared and served on our wedding day. i had many appreciations our guest they told to me nice food you will arranged food was tasty and spicy everyone are liked thank you and your team incredible catering at the wedding thank you so much once again.",
    speaker: "Anand",
  },
  {
    id: 4,
    quote:
      "The management seems very understanding and friendly.Everyone loved the stage. Thanks a lot !",
    speaker: "Jawad",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getTestimonialStyle = (index: number): string => {
    if (index === currentIndex) {
      return "opacity-100 scale-100 translate-x-0 z-20";
    } else if (
      index ===
      (currentIndex - 1 + testimonials.length) % testimonials.length
    ) {
      return "opacity-30 scale-75 -translate-x-full z-10";
    } else if (index === (currentIndex + 1) % testimonials.length) {
      return "opacity-30 scale-75 translate-x-full z-10";
    }
    return "opacity-0 scale-50 z-0";
  };

  return (
    <div className="bg-transparent pt-4 sm:pt-4 md:pt-10 px-4 sm:px-6 md:px-8">
      <div className=" mx-auto">
       

        {/* Carousel */}
        <div className="w-[40vh] md:w-[200vh] relative h-[400px]  md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mb-10">
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full max-w-lg transform transition-all duration-700 ease-in-out ${getTestimonialStyle(
                  index
                )}`}
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12">
                  <blockquote className="text-sm sm:text-md md:text-xl lg:text-2xl text-black italic">
                    <span className="text-[#F3831C] text-sm sm:text-md md:text-xl lg:text-2xl font-serif">
                      &quot;
                    </span>
                    {testimonial.quote}
                    <span className="text-[#F3831C] text-sm sm:text-md md:text-xl lg:text-2xl font-serif">
                      &quot;
                    </span>
                  </blockquote>
                  <p className="mt-6 text-gray-400">— {testimonial.speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mb-10 sm:mb-12">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3831C] hover:bg-gray-400 text-white flex items-center justify-center text-2xl z-30 transition-colors duration-300"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3831C] hover:bg-gray-400 text-white flex items-center justify-center text-2xl z-30 transition-colors duration-300"
          >
            ›
          </button>
        </div>

      </div>
    </div>
  );
};

export default TestimonialCarousel;