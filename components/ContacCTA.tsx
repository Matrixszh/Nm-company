import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const TeamSection = () => {
  


  return (
    <section id="team" className="py-10 ">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Architectural Image */}
          <div className="relative">
            <img 
              src="/img6.jpeg"
              alt="Architectural ceiling structure"
              className="w-full h-full rounded-xl object-cover min-h-[200px]"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="bg-none p-12 flex flex-col justify-center">
            <h1 className="text-5xl font-medium text-white mb-4 ">
              Can't get enough and want the full tour?
            </h1>
            <p className="text-gray-100 mb-8 text-lg">
              View all of our past work here
            </p>
            <div className="flex flex-justify">
              <Link href="/contact">
              <button className="px-4 py-2 bg-gradient-to-r from-black/80 to-pink-600/80 hover:bg-white transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;