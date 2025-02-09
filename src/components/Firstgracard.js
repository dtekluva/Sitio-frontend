import React from "react";
import Image from "next/image"; // ✅ Import Image from Next.js

export default function Firstgracard() {
  return (
    <div className=" py-10 px-4 mx-auto lg:max-w-7xl lg:-mt-14 lg:mx-32 max-w-full md:mx-9">
      <div className=" mt-10 lg:mt-10">
        <p className="text-xl font-medium text-[#5A5C60] font-inter leading-[28px] tracking-[-0.02em]">
          Graphics Design & Branding
        </p>

        {/* Banner Section */}
        <div className="w-full lg:w-full h-auto mt-6 lg:mt-5 rounded-2xl overflow-x-auto">
          {/* Wrapper to enable horizontal scrolling on mobile */}
          <div className="w-[1200px] md:w-full">
            <Image
              src="/gracard.svg"
              alt="Desktop Banner"
              width={1200}
              height={400}
              style={{ width: "100%", height: "auto" }} // ✅ Make it responsive
              className="object-cover"
            />
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
      <div className="text-[#5A5C60] mt-10 md:mt-24 lg:mt-28">
        <p className="text-xl font-inter font-medium leading-[28px] tracking-[-0.02em] text-[#5A5C60]">
          Business Identity & Logo Design
        </p>

        <div className="w-full lg:w-full h-auto mt-5 lg:mt-5  rounded-2xl overflow-x-auto">
          {/* Wrapper to enable horizontal scrolling on mobile */}
          <div className="w-[1200px] md:w-full">
            <Image
              src="/busidentitycard.svg"
              alt="Desktop Banner"
              width={1200}
              height={400}
              style={{ width: "100%", height: "auto" }} // ✅ Make it responsive
              className="object-cover"
            />
          </div>
          <p className="text-[#222124] font-montserrat font-medium italic text-base leading-[24px] mt-6 lg:hidden ">
            "We specialize in crafting a distinctive and memorable brand
            identity for your business. From designing an impactful logo to
            choosing the right color palette, typography, and visual elements,
            we ensure every aspect of your brand reflects your values and
            resonates with your target audience. Our goal is to help your
            business stand out in a crowded market, build trust with customers,
            and create a lasting impression that drives growth and success."
          </p>
        </div>
      </div>
    </div>
  );
}
