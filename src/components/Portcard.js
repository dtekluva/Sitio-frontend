"use client"; // Ensures client-side rendering only

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Portcard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="max-w-full bg-[#222124] p-4 px-4 xl:px-0 md:px-0 mt-4 xl:mt-10 h-[1398px] xl:h-[672.75px] md:h-[510px] py-10">
    {/* Section Title */}
    <div className="xl:mx-36 md:mx-14">
      <div className="ml-4 xl:ml-0 md:ml-0 ">
        <h1 className="text-xl leading-[28px] font-inter font-medium text-[#CBCBCB] tracking-[-0.02em]">
          Website & Applications Design
        </h1>
        <p className="text-[#CBCBCB] leading-[20px] text-[14px] font-normal md:text-base xl:text-base font-montserrat">
          We design clean, user-friendly websites and apps that look great and work even better. Simple, modern, and tailored just for you!
        </p>
      </div>
  
      {/* Responsive Image Container */}
      <div className="mt-8 xl:w-[1200px] xl:h-[358px] w-[350.85px] h-[1,129.12px] md:w-[713.97px] md:h-[208px]">
        <div className="flex xl:flex-row md:flex-row flex-col gap-6 overflow-x-auto xl:overflow-visible md:overflow-visible scrollbar-hidden">
          {/* Card 1 */}
          <div className="xl:min-w-[387px] w-[349.85px] md:w-[224.85px] bg-[#F6EAE2] rounded-xl">
            <img src="/portcardss1.jpg" alt="Eventlixt Mobile App" className="rounded-lg w-full" />
          </div>
  
          {/* Card 2 */}
          <div className="xl:min-w-[387px] w-[349.85px] md:w-[224.85px] bg-[#EAEAEA] rounded-xl">
            <img src="/portcardss2.jpg" alt="Website Design" className="rounded-lg w-full" />
          </div>
  
          {/* Card 3 */}
          <div className="xl:min-w-[387px] w-[349.85px] md:w-[224.85px] bg-white rounded-xl">
            <img src="/portcardss3.jpg" alt="Drip Bagz Store" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </div>
    
    
  
  

      {/* Brand Logos */}

      <div className=" flex max-w-full bg-black py-8 xl:py-10 xl:mt-16 px-0 p-0 gap-14px mb-0 md:mt-10 mt-10   justify-center items-center md:gap-[47px]  xl:gap-[54px] flex-wrap">
        <Image
          src="/sponsorstag1.png"
          alt="Arcane"
          width={108.69}
          height={26.88}
        />
        <Image
          src="/sponsorstag2.png"
          alt="Brisk"
          width={53.27}
          height={19.2}
          className="md:hidden xl:block"
        />
        <Image
          src="/sponsorstag3.png"
          alt="Growth"
          width={90.36}
          height={20.18}
        />
        <Image
          src="/sponsorstag4.png"
          alt="Funnel"
          width={80.29}
          height={15.87}
        />
        <Image
          src="/sponsorstag5.png"
          alt="Asterisk"
          width={92}
          height={20.83}
        />
        <Image src="/sponsorstag6.png" alt="Xir" width={54} height={22.36} />
        <Image src="/sponsorstag7.png" alt="Chain" width={89} height={34.75}  className="md:hidden xl:block" />
        <Image
          src="/sponsorstag8.png"
          alt="Slim"
          width={68.88}
          height={34.08}
          className="md:hidden xl:block"
        />
        <Image src="/sponsorstag9.png" alt="Lonk" width={57} height={28.81} />
      </div>
</div>
  );
}






