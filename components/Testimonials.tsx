import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Wedding",
      description: "Very Professional And Freindly",
      backDescription:
        "Thank you very much to M/s NM Events for organizing everything to our satisfaction in my cousin sister wedding.They are very professional and more than friendly.They performed beyond our expectation.They have taken utmost care of the smallest of the small things and have arranged everything which we have asked on the spot within seconds. Beautiful decoration .",
      badge: "Yash",
      image: "/img1.jpg",
    },
    {
      title: "Tent House",
      description: "Wonderful Decorations And Food",
      backDescription:
        "Nm Company done order in my relative function with complete event with tent house to catering services. He done event so wonderful flower decorations and so tasty items. I am very happy with her services. I appreciate him for he done wonderful arrangements.",
      badge: "Rajesh",
      image: "/img2.jpg",
    },
    {
      title: "Wedding",
      description: "Incredible Management and Catering ",
      backDescription:
        "I would Like to thank you N.M Company for the wonderful food you prepared and served on our wedding day. i had many appreciations our guest they told to me nice food you will arranged food was tasty and spicy everyone are liked thank you and your team incredible catering at the wedding thank you so much once again.",
      badge: "Anand",
      image: "/img3.jpg",
    },
    {
      title: "Event",
      description: "Brilliant management",
      backDescription:
        "The management seems very understanding and friendly.Everyone loved the stage. Thanks a lot !",
      badge: "Jawad",
      image: "/img1.jpg",
    },
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {testimonials.map((card, index) => (
          <CarouselItem
            key={index}
            className="basis-[80%] sm:basis-1/2 lg:basis-1/3"
          >
            <ReactCardFlip
              isFlipped={flippedStates[index]}
              flipDirection="horizontal"
            >
              {/* Front Face */}
              <Card className="rounded-lg border-none mt-10 relative overflow-hidden h-[80vh] md:h-[75vh]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={800}
                  quality={100}
                  className="w-full h-full rounded-lg object-cover"
                />
                <CardContent className="absolute bottom-0 left-0 z-10 w-full p-0">
                  <div className="w-full h-48 bg-white/5 backdrop-blur-md flex flex-col rounded-b-lg p-6 justify-between">
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center">
                        <p className="md:text-xl text-lg px-6 py-1 bg-white text-[#F3831C] rounded-lg">
                          {card.badge}
                        </p>
                        <p className="md:text-2xl text-2xl font-bold text-white">
                          {card.title}
                        </p>
                      </div>
                      <div className="h-12">
                        <p className="md:text-lg text-lg font-normal text-white line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        className="mt-4 px-6 py-2 bg-[#F3831C] text-white rounded hover:bg-[#ffa857] transition-colors"
                        onClick={() => handleFlip(index)}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Back Face */}
              <Card className="rounded-lg border-none mt-10 relative overflow-hidden h-[80vh] md:h-[75vh] bg-black/20">
                <CardContent className="absolute top-0 left-0 z-10 h-full w-full p-6">
                  <div className="w-full h-full bg-white/30 backdrop-blur-md flex flex-col rounded-lg p-6">
                    <div className="flex-1 space-y-6">
                      <div className="flex gap-4 items-center">
                        <p className="md:text-3xl text-2xl px-6 py-1 bg-white text-[#F3831C] rounded-lg">
                          {card.badge}
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="md:text-lg text-lg text-white font-normal">
                          "{card.backDescription}"
                        </p>
                      </div>
                    </div>
                    <button
                      className="px-6 py-2 bg-[#F3831C] text-white rounded hover:bg-[#ffa857] transition-colors"
                      onClick={() => handleFlip(index)}
                    >
                      Back
                    </button>
                  </div>
                </CardContent>
              </Card>
            </ReactCardFlip>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent md:flex hidden" />
      <CarouselNext className="bg-transparent md:flex hidden" />
    </Carousel>
  );
};

export default Testimonials;
