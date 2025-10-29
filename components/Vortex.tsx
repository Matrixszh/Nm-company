import React from "react";
import { Vortex } from "../components/ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-full  rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="bg-gradient-to-r from-black/80 to-pink-600/80 bg-clip-text text-transparent text-6xl md:text-8xl font-medium text-center">
          NM Decore
        </h2>
        <p className="px-4 text-neutral-600 text-xl md:text-2xl max-w-xl mt-6 font-light text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-gradient-to-r from-black/80 to-pink-600/80 hover:bg-white transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2 bg-white hover:bg-white/50 transition duration-200 rounded-lg text-black shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}
