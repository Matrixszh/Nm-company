import React from "react";
import { data } from "@/data/Collaborations";

export const Collaborations = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 w-full px-5">
      {data.map((collab) => (
        <div
          key={collab.id}
          className="relative w-full lg:w-[45vw] lg:h-[45vh] md:w-[35vw] md:h-[20vh] h-[54vw]" // Adjust the height for mobile
        >
          <video
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            controls // Enables video controls like play/pause
            loop // Loops the video
            muted // Mutes the video by default
            autoPlay // Auto-plays the video
            playsInline // Ensures the video plays inline on mobile
          >
            <source src={collab.videoUrl} type="video/mp4" /> {/* Video URL should be defined in data */}
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};