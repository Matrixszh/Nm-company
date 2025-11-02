"use client";

import { Tabs } from "@/components/ui/glowing-effect";

// Example image data for each tab
const tabData = [
  {
    title: "Product",
    value: "product",
    image: { src: "/img1.jpg", alt: "Product Image" }
  },
  {
    title: "Services",
    value: "services",
    image: { src: "/img2.jpg", alt: "Services Image" }
  },
  {
    title: "Playground",
    value: "playground",
    image: { src: "/img3.jpg", alt: "Playground Image" }
  },
  {
    title: "Content",
    value: "content",
    image: { src: "/img4.JPG", alt: "Content Image" }
  },

];

export function TabsDemo() {
  const tabs = tabData.map(tab => ({
    title: tab.title,
    value: tab.value,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-4xl md:text-4xl font-bold text-white bg-[#A75E80]">
        <p className="pb-4 ">{tab.title} Tab</p>
        <img
          src={tab.image.src}
          alt={tab.image.alt}
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[90%] absolute -bottom-15 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    )
  }));

  return (
    <div className="px-4 h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
