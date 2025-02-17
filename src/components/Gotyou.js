import React from "react";

export default function Gotyou() {
  return (
    <main id="services" className=" p-4 px-4 h-[710px]  xl:h-[650px] md:h-[444px]  sm:overflow-hidden xl:flex justify-center items-center">
   
    <div className="xl:w-[1200px]  xl:h-[507px] md:h-[408px] md:w-[718px]justify-center md:mt-10  xl:mt-20 py-10 px-4 p-4 xl:p-0 md:p-0   xl:mx-36 max-w-full md:mx-14">
      {/*  flex items-start xl:min-h-screen xl:items-center mx-auto justify-center xl:max-w-7xl xl:mx-32 max-w-full md:mx-9 */}
      <div className="text-center  "> 
        {/* Heading */}
        <div className="text-3xl xl:text-5xl text-[#222124] font-semibold mb-8 xl:-mt-4 ">
          We Got You
        </div>

        {/* Cards */}
        <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 xl:gap-7 xl:mx-0 md:gap-4">
          {/* Card 1 */}
          <div className="bg-gray-50 p-4 lg:p-8 md:p-5 rounded-2xl s transition xl:h-[440px] xl:w-[380px]">
            {/* Flex container for small screens, block for larger screens */}
            <div className="flex  items-center mb-0 sm:flex lg:block md:block">
              {/* Icon remains in its original position */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg mb-4 xl:w-20 xl:h-20">
                <img
                  src="/goticon1.png"
                  alt="Customer Service"
                  className="h-8 w-8 xl:h-12 xl:w-12"
                />
              </div>

              {/* Heading beside the icon on small screens */}
              <h2
                className="xl:text-3xl text-[#222124] font-bold xl:font-bold xl:font-inter xl:leading-[36px] xl:tracking-[-0.02em] 
             text-left xl:mt-10 pl-5 xl:pl-0 md:pl-0 sm:ml-4 xl:ml-0 md:ml-0 
             whitespace-nowrap md:whitespace-normal lg:whitespace-normal 
             md:text-[18px] md:font-extrabold md:leading-[28px] 
             sm:text-[16px] sm:leading-[28px] font-inter"
              >
                24hrs Customer
                <br className="hidden md:block lg:block" />{" "}
                {/* Line break visible only on md and lg */}
                Service
              </h2>
            </div>

            {/* Description */}
            <p className="text-base font-medium font-montserrat leading-[24px] text-[#5A5C60] xl:mt-3 text-left">
              Experience the difference with our customer service.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-4 lg:p-8 md:p-5 rounded-2xl transition xl:h-[440px] xl:w-[380px]">
            {/* Flex container for small screens, block for larger screens */}
            <div className="flex   items-center mb-0 sm:flex lg:block md:block">
              {/* Icon remains in its original position */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg mb-4 xl:w-20 xl:h-20">
                <img
                  src="/goticon2.png"
                  alt="Customer Service"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
              </div>

              {/* Heading beside the icon on small screens */}
              <h2
                className="xl:text-3xl text-[#222124] font-bold xl:font-bold xl:font-inter xl:leading-[36px] xl:tracking-[-0.02em] 
             text-left xl:mt-10 pl-5 xl:pl-0 md:pl-0 sm:ml-4 xl:ml-0 md:ml-0 
             md:whitespace-normal lg:whitespace-normal 
             md:text-[18px] md:font-extrabold md:leading-[28px] 
             sm:text-[16px] sm:leading-[28px] font-inter"
              >
                Business website & app at its very best
              </h2>
            </div>

            {/* Description */}
            <p className="text-base font-medium font-montserrat leading-[24px] text-[#5A5C60] xl:mt-3 text-left">
              More than just a reliable e-commerce platform.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-4 xl:p-8 md:p-5 rounded-2xl  transition xl:h-[440px] xl:w-[380px]">
            {/* Flex container for small screens, block for larger screens */}
            <div className="flex   items-center mb-0 sm:flex lg:block md:block">
              {/* Icon remains in its original position */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg mb-4 xl:w-20 xl:h-20">
                <img
                  src="/goticon3.png"
                  alt="Customer Service"
                  className="h-8 w-8 xl:h-12 xl:w-12"
                />
              </div>

              {/* Heading beside the icon on small screens */}
              <h2 className="xl:text-3xl text-[#222124] font-bold xl:font-bold xl:font-inter xl:leading-[36px] xl:tracking-[-0.02em] 
             text-left xl:mt-10 pl-5 xl:pl-0 md:pl-0 sm:ml-4 xl:ml-0 md:ml-0 
             whitespace-nowrap md:whitespace-normal xl:whitespace-normal 
             md:text-[18px] md:font-extrabold md:leading-[28px] 
             sm:text-[16px] sm:leading-[28px] font-inter">
                Let your brand
                <br className="hidden md:block xl:block" />{" "}
                {/* Line break visible only on md and lg */}
                be known
              </h2>
            </div>

            {/* Description */}
            <p className="text-base text-[#5A5C60] font-medium font-montserrat leading-[24px]  xl:mt-3 text-left">
              Making every designs and development perfect for your brand.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
