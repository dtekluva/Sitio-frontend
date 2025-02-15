import React from "react";
import Image from "next/image"; // ✅ Import Image from Next.js

export default function Firstgracard() {
  return (
    <main className="bg-[#FFFFFF]  h-[1100px]  xl:h-[1600px] md:h-[874px] sm:overflow-hidden flex justify-center items-center">
   
    <div className=" py-10  xl:w-[1200px] xl:h-[1600px] md:w-[718px] md:h-[874px] md:p-0  p-4 xl:mt-24 xl:mx-36 xl:p-0 max-w-full md:mx-14">
      <p className="text-xl font-medium text-[#5A5C60] font-inter leading-[28px] tracking-[-0.02em]">
        Graphics Design & Branding
      </p>
      <div className=" mt-4 xl:mt-5">
        {/* Banner Section */}
        <div className="xl:h-[1372px] h-[1020px] xl:p-0 overflow-x-auto xl:overflow-hidden overflow-y-hidden ">
  <div className="grid grid-cols-4 md:grid-cols-4 xl:grid-cols-4 gap-4 min-w-[900px] md:min-w-full ">
    {/* First Row */}
    <img src="graphicards4.jpg" alt="first" className="col-span-1 rounded-lg bg-cover" />
    <img src="/graphicards3.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards2.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards1.jpg" alt="" className="col-span-1 rounded-lg object-cover" />

    {/* Second Row */}
    <img src="/graphicards7.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards9.jpg" alt="" className="col-span-1 rounded-lg xl:object-cover xl:-mt-[105px] md:-mt-[65px] -mt-[80px] " />
    <img src="/graphicards10.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards14.jpg" alt="" className="col-span-1 rounded-lg object-cover xl:-mt-[105px] md:-mt-[65px] -mt-[80px]" />

    {/* Third Row */}
    <img src="/graphicards5.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards13.jpg" alt="" className="col-span-1 rounded-lg object-cover xl:-mt-[125px] md:-mt-[70px] -mt-[95px]" />
    <img src="/graphicards15.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards16.jpg" alt="" className="col-span-1 rounded-lg object-cover xl:-mt-[125px] md:-mt-[70px] -mt-[95px]" />

    {/* Fourth Row */}
    <img src="/graphicards12.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards11.jpg" alt="" className="col-span-1 rounded-lg object-cover xl:-mt-[70px] md:-mt-[40px] -mt-[60px]" />
    <img src="/graphicards8.jpg" alt="" className="col-span-1 rounded-lg object-cover" />
    <img src="/graphicards6.jpg" alt="" className="col-span-1 rounded-lg object-cover xl:-mt-[70px] md:-mt-[40px] -mt-[60px]" />
  </div>
</div>

      

        <p className="text-[#222124] font-montserrat font-medium italic text-base leading-[24px] mt-6 hidden lg:block">
          "We specialize in crafting a distinctive and memorable brand identity
          for your business. From designing an impactful logo to choosing the
          right color palette, typography, and visual elements, we ensure every
          aspect of your brand reflects your values and resonates with your
          target audience. Our goal is to help your business stand out in a
          crowded market, build trust with customers, and create a lasting
          impression that drives growth and success."
        </p>
      </div>
      </div>
      </main>
  );
}


