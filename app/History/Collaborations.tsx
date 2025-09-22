import React from "react";
import { data } from "@/data/Collaborations";

export const Collaborations = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 w-full px-5 mt-10">
      {data.map((collab) => (
        <div
          key={collab.id}
          className="relative w-full lg:w-[45vw] lg:h-[45vh] md:w-[35vw] md:h-[20vh] h-[54vw]"
        >
          <video
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            controls
            loop
            muted
            autoPlay
            playsInline
          >
            <source src={collab.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};
