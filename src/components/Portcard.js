"use client"; // Ensures client-side rendering only

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Portcard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="max-w-full bg-[#222124] mt-4 lg:mt-10  lg:h-[92vh] md:h-[47vh] pb-0 py-10 ">
      <div className="lg:mx-32 mt-4 md:mx-9 mx-5 ">
        <div className="ml-4 lg:ml-0 md:ml-0" >
        <h1 className="text-xl leading-[28px]  font-inter font-medium text-[#CBCBCB] tracking-[-0.02em]">
          Website & Applications Design
        </h1>
        <p className="text-[#CBCBCB] leading-[20px] text-[14px] font-normal  md:text-base lg:text-base font-montserrat">
          We design clean, user-friendly websites and apps that look great and
          work even better. Simple, modern, and tailored just for you!
        </p>
    </div>
        <div className="w-full lg:w-full h-auto mt-5 lg:mt-5 rounded-2xl">
          {/* Prevent hydration error by rendering images only after mounting */}
          {isMounted && (
            <>
              <div className="hidden md:block">
                <Image
                  src="/postcardbg.svg"
                  alt="Postcard Banner"
                  width={1200}
                  height={400}
                  className="object-cover w-full h-auto"
                  priority // ✅ Ensures faster loading
                />
              </div>

              <div className="lg:hidden md:hidden px-4">
                <Image
                  src="/sponsorsbg2m.svg"
                  alt="Sponsor Banner"
                  width={650} // ✅ Adjust width to fit better
                  height={300} // ✅ Adjust height accordingly
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Moved this outside isMounted to avoid unnecessary conditional rendering */}
      <div className="max-w-full bg-[#000000] mt-14 py-10 md:mt-10 text-white lg:mt-16">
        <div className="hidden md:block lg:mx-32 md:mx-9">
          <Image
            src="/sponsorsbg.svg"
            alt="Sponsor Banner"
            width={1200} // ✅ Adjusted size
            height={400}
            className="object-cover w-full h-auto"
            priority
          />
        </div>

        <div className=" md:hidden lg:hidden px-4">
          <Image
            src="/sponsorscardm.svg"
            alt="sponsorscardm Banner"
            width={1200} // ✅ Adjusted size
            height={400}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
