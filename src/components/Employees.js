import React from "react";
import Image from "next/image";

export default function Employees() {
  return (
    <div className="flex flex-col max-w-full   xl:flex-row xl:h-[803px] md:h-[1165px] h-[1239px]  items-center justify-between p-10 bg-[#F3F4F5]">
      {/* Container for Text */}
      <div className="xl:w-1/2 md:w-full  xl:pl-32 ">
        <div className="max-w-md text-left md:self-start md:ml-0">
          <hr className="w-36 border-black mb-4" />
          <h2 className="text-3xl font-bold text-black leading-tight xl:text-[40px] xl:font-inter xl:font-semibold xl:leading-[48px] xl:tracking-[-0.02em]">
            Together let's build a successful
            <br /> product
          </h2>
          <p className="text-gray-600 mt-4 xl:font-medium xl:font-montserrat xl:text-base">
            Our freelance platform helps connect experienced designers,
            developers, graphics illustrators, and tech professionals with
            talented teams that work together effortlessly.
          </p>
          <button className="mt-6 bg-[#2A04B4] text-white font-medium font-montserrat text-base px-6 py-3 rounded-lg flex items-center gap-2">
            Get Started <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Container for  desktop and tablet Image */}

      {/* Container for desktop and tablet Image */}
      <div className="xl:w-[950px] xl:pr-32  xl:mt-0 hidden sm:hidden md:block lg:block">
        <Image
          src="/employeesbg.svg"
          alt="Desktop Banner"
          width={1600} // Increased for higher resolution
          height={600}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Container for mobile image */}
      <div className="mt-6 block sm:block md:hidden xl:hidden">
        <Image
          src="/employeesbgm.svg"
          alt="Mobile Banner"
          width={1600} // Increased for higher resolution
          height={600}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}
