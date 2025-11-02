import React from "react";
import { projects } from "@/data/projects";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionInfo2 = () => {
  return (
    <div className="px-10">
      {projects.map((item, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="w-[100vw] border-t-2 border-gray-300"
        >
          <AccordionItem
            value={`${index}`}
            className="group group-data-[state=open]:bg-[#A75E80] hover:bg-[#A75E80]"
          >
            <AccordionTrigger className="text-black text-2xl [&>svg]:h-8 [&>svg]:w-8 group-data-[state=open]:bg-[#A75E80] group-data-[state=open]:text-white hover:text-white  px-10 md:pl-14 rounded-none">
              {item.heading}
            </AccordionTrigger>
            <AccordionContent className="group-data-[state=open]:bg-[#A75E80] group-data-[state=open]:text-white px-10 md:pl-14 ">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionInfo2;
