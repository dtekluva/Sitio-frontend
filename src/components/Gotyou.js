import React from "react";

export default function Gotyou() {
  return (
    <div className="flex items-start lg:items-center justify-center lg:min-h-screen p-4 lg:mx-32 md:mx-9">
      <div className="text-center">
        {/* Heading */}
        <div className="text-3xl lg:text-5xl text-[#222124] font-semibold mb-8 lg:-mt-4 bg-gr">
          We Got You
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-9 md:gap-4">
          {/* Card 1 */}
          <div className="bg-gray-50 p-4 lg:p-8 md:p-5 rounded-2xl s transition lg:h-[400px] lg:w-[395px]">
            {/* Flex container for small screens, block for larger screens */}
            <div className="flex  items-center mb-0 sm:flex lg:block md:block">
              {/* Icon remains in its original position */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg mb-4 lg:w-20 lg:h-20">
                <img
                  src="/goticon1.png"
                  alt="Customer Service"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
              </div>

              {/* Heading beside the icon on small screens */}
              <h2
                className="lg:text-3xl text-[#222124] font-bold lg:font-bold lg:font-inter lg:leading-[36px] lg:tracking-[-0.02em] 
             text-left lg:mt-10 pl-5 lg:pl-0 md:pl-0 sm:ml-4 lg:ml-0 md:ml-0 
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
            <p className="text-base font-medium font-montserrat leading-[24px] text-[#5A5C60] lg:mt-3 text-left">
              Experience the difference with our customer service.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-4 lg:p-8 md:p-5 rounded-2xl transition lg:h-[400px] lg:w-[395px]">
            {/* Flex container for small screens, block for larger screens */}
            <div className="flex   items-center mb-0 sm:flex lg:block md:block">
              {/* Icon remains in its original position */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg mb-4 lg:w-20 lg:h-20">
                <img
                  src="/goticon2.png"
                  alt="Customer Service"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
              </div>

              {/* Heading beside the icon on small screens */}
              <h2
                className="lg:text-3xl text-[#222124] font-bold lg:font-bold lg:font-inter lg:leading-[36px] lg:tracking-[-0.02em] 
             text-left lg:mt-10 pl-5 lg:pl-0 md:pl-0 sm:ml-4 lg:ml-0 md:ml-0 
             md:whitespace-normal lg:whitespace-normal 
             md:text-[18px] md:font-extrabold md:leading-[28px] 
             sm:text-[16px] sm:leading-[28px] font-inter"
              >
                Business website & app at its very best
              </h2>
            </div>

            {/* Description */}
            <p className="text-base font-medium font-montserrat leading-[24px] text-[#5A5C60] lg:mt-3 text-left">
              More than just a reliable e-commerce platform.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-4 lg:p-8 md:p-5 rounded-2xl  transition lg:h-[400px] lg:w-[395px]">
            {/* Flex container for small screens, block for larger screens */}
            <div className="flex   items-center mb-0 sm:flex lg:block md:block">
              {/* Icon remains in its original position */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg mb-4 lg:w-20 lg:h-20">
                <img
                  src="/goticon3.png"
                  alt="Customer Service"
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
              </div>

              {/* Heading beside the icon on small screens */}
              <h2 className="lg:text-3xl text-[#222124] font-bold lg:font-bold lg:font-inter lg:leading-[36px] lg:tracking-[-0.02em] 
             text-left lg:mt-10 pl-5 lg:pl-0 md:pl-0 sm:ml-4 lg:ml-0 md:ml-0 
             whitespace-nowrap md:whitespace-normal lg:whitespace-normal 
             md:text-[18px] md:font-extrabold md:leading-[28px] 
             sm:text-[16px] sm:leading-[28px] font-inter">
                Let your brand
                <br className="hidden md:block lg:block" />{" "}
                {/* Line break visible only on md and lg */}
                be known
              </h2>
            </div>

            {/* Description */}
            <p className="text-base text-[#5A5C60] font-medium font-montserrat leading-[24px]  lg:mt-3 text-left">
              Making every designs and development perfect for your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
