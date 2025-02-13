import React from "react";
import Image from "next/image";

export default function Grasection() {
  return (
    
    <div className="max-w-full mx-auto w-[718px]  h-[898px] p-4 px-5 xl:w-[1200px] xl:h-[1054px] xl:p-0 xl:px-0 md:p-0 md:mt-8 md:w-[718px] md:h-[830px] xl:mx-36">
  {/* Section Title */}
  <div className="mb-5">
    <h4 className="text-xl font-inter font-medium leading-[28px] tracking-[-0.02em] text-[#5A5C60]">
      Business Identity & Logo Design
    </h4>
  </div>

  {/* Image Container */}
  <div className="flex  gap-6  xl:-mt-[1px] p-0 overflow-x-auto sm:flex-nowrap md:p-0 xl:overflow-visible scrollbar-hide  sm:overflow-y-hidden">
    <div className="flex-shrink-0 w-[80vw] sm:w-[360px] xl:w-[588px]">
      <Image
        src="/businesscard2.jpg"
        alt="Business Card 2"
        width={588}
        height={992}
        className="w-full h-auto object-cover rounded-lg md:h-[618px] xl:h-[992px] xl:w-[588]"
      />
    </div>
    <div className="flex-shrink-0 w-[80vw] sm:w-[360px] xl:w-[588px]">
      <Image
        src="/businesscard1.jpg"
        alt="Business Card 1"
        width={588}
        height={992}
        className="w-full h-auto object-cover rounded-lg md:h-[618px] xl:h-[992px]"
      />
    </div>
    </div>
  

  
  

      {/* Description - Hidden on xl screens */}
      <p className="text-[#222124] mt-5 font-montserrat font-medium italic text-base leading-[24px]  xl:hidden ">
        "We specialize in crafting a distinctive and memorable brand identity
        for your business. From designing an impactful logo to choosing the
        right color palette, typography, and visual elements, we ensure every
        aspect of your brand reflects your values and resonates with your target
        audience. Our goal is to help your business stand out in a crowded
        market, build trust with customers, and create a lasting impression that
        drives growth and success."
      </p>
    </div>
  );
}
