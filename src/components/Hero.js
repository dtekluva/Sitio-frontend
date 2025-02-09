"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Button from "./Button";

export default function Hero() {
  const [mobile, setMobile] = useState(false);
  // State to track background position
  const [position, setPosition] = useState(15); // Initial position is 15%

  const moveBackgroundRight = () => {
    // Increment position by 5% for each click
    setPosition((prevPosition) => prevPosition + 10); // Move 5% to the right on each call
  };

  return (
    <>
      <main className="max-w-full bg-[#232222] p-6 o lg:mt-0 sm:p-4 lg:h-[98vh] sm:overflow-hidden">
        <div className="bg-[#121212] lg:w-fit lg:mx-32  md:mx-9   lg:mt-14 md:mt-8 md:pb-0 md:mb-0 lg:p-0 lg:pb-0 lg:py-0 lg:mb-0">
          <div
            className="absolute inset-0 bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/s.svg')",
              backgroundSize: "28%", // Default for desktop
              backgroundPosition: "150px 10px", // Default for desktop
              mixBlendMode: "lighten",
            }}
          >
            <style jsx>{`
              /* For small screens (mobile) */
              @media (max-width: 768px) {
                div {
                  background-size: 58% !important; /* Reduce size */
                  background-position: 20px 50px !important; /* Adjust position */
                  mix-blend-mode: lighten; /* Corrected syntax */
                }
              }

              /* For tablets (769px to 1024px) */
              @media (min-width: 769px) and (max-width: 1024px) {
                div {
                  background-size: 35% !important; /* Slightly larger than mobile */
                  background-position: 60px 45px !important; /* Adjust position for tablets */
                  mix-blend-mode: lighten;
                }
              }
            `}</style>
          </div>
          {/* Navbar, First Content, and Second Content all in the same div */}
          <div className="flex flex-col gap-12">
            {/* Navbar */}
            <nav className="flex max-w-full  lg:w-fit  md:bg-[#121212] lg:bg-[#121212] bg-[#232222] justify-between lg:px-0 items-center  md:py-0 lg:space-x-96 lg:py-0">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={220} // Base width
                  height={250} // Base height
                  className="h-auto w-[280px] sm:w-[205px] md:w-[290px]  lg:w-[370px] !important object-contain lg:top-0"
                />
              </Link>

              {/* Mobile Menu Toggle (Hamburger) */}
              {/* Mobile Menu Toggle (Hamburger) - Only Visible on Small Screens */}
              <div className="relative md:hidden lg:hidden text-white">
                {" "}
                {/* Hide on md and lg */}
                {mobile ? (
                  <img
                    src="/closeicon.png"
                    alt="Close Icon"
                    className="w-[25px] h-[25px] fixed top-6 right-7 cursor-pointer z-[99999]"
                    onClick={() => setMobile(false)}
                  />
                ) : (
                  <HiOutlineMenuAlt1
                    className="text-[45px] top-6 right-7 cursor-pointer z-[99999]"
                    onClick={() => setMobile(true)}
                  />
                )}
              </div>

              {/* Navigation Links */}
              <ul
                className={`${
                  mobile ? "flex" : "hidden"
                } fixed top-0 right-0 w-1/2 pl-5 text-[#F5F5F5] py-24 bg-[#232222]  z-[10000] flex-col gap-12 transition-transform duration-300
  md:flex md:flex-row md:static md:bg-transparent md:py-0 md:w-auto md:gap-10
  lg:flex lg:flex-row lg:relative lg:bg-inherit lg:w-auto lg:items-center lg:top-0`}
              >
                <li className=" font-inter font-medium text-base">HOME</li>
                <li className=" font-inter font-medium text-base">ABOUT</li>
                <li className=" font-inter font-medium whitespace-nowrap text-base">
                  OUR SERVICE
                </li>
                <li className=" font-inter font-medium text-base">CLIENTS</li>
              </ul>
            </nav>

            <div className="space-y-4 lg:mt-5">
              {/* First Content */}
              <div className="flex flex-col  md:flex-row lg:space-x-24 md:space-x-7 font-bold ">
                {/* Text Section */}
                <div className="flex flex-col">
                  <h1
                    className="text-white 
             lg:font-[Bahnschrift] lg:font-bold lg:text-[47px] lg:leading-[64px] lg:tracking-[-0.02em]
             md:font-[Abhaya Libre] md:font-semibold md:text-[28px] md:leading-[35px] md:tracking-[-0.02em]
             font-[Abhaya Libre] font-semibold text-[30px] leading-[42px] tracking-[-0.02em]"
                  >
                    SPEARHEADING YOUR <br />
                    BRAND’S DIGITAL <br />
                    TRANSFORMATION THROUGH <br />
                    THOUGHTFUL DESIGN
                  </h1>

                  {/* Mobile Button */}
                  <div className="block md:hidden lg:hidden mt-4 text-sm font-inter font-medium ">
                    <Button text="SEND US A MESSAGE" />
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-row  flex-nowrap lg:pl-1 md:pb-0 justify-end gap-3 mt-10 md:mt-0 ">
                  <Image
                    src="/heroimg1.svg"
                    alt="Image 1"
                    width={70}
                    height={75}
                    className="object-cover w-[70px] sm:w-[80px] md:w-[90px] lg:w-[150px]"
                  />
                  <Image
                    src="/heroimg2.svg"
                    alt="Image 2"
                    width={70}
                    height={75}
                    className="object-cover w-[70px] sm:w-[80px] md:w-[90px] lg:w-[150px]"
                  />
                  <Image
                    src="/heroimg3.svg"
                    alt="Image 3"
                    width={70}
                    height={75}
                    className="object-cover w-[70px] sm:w-[80px] md:w-[90px] lg:w-[150px]"
                  />
                </div>
              </div>

              {/* End of First Content */}

              {/* second content */}
              <div className="flex flex-col md:flex-row md:space-x-11 lg:gap-x-32 ">
                {/* Button Section */}
                <div className="flex md:w-auto gap-4 ">
                  {/* Desktop Button aligned with second row images */}
                  <div className="hidden lg:block whitespace-nowrap">
                    <Button text="SEND US A MESSAGE" />
                  </div>
                  {/* Tablet Button */}
                  <div className="ml-auto hidden md:block lg:hidden whitespace-nowrap">
                    <Button text="SEND US A MESSAGE" className="w-45" />
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-row flex-nowrap lg:pl-3 mt-0 items-center justify-end gap-3  md:mt-0  md:justify-start">
                  <Image
                    src="/heroimg4.svg"
                    alt="Image 4"
                    width={120}
                    height={90}
                    className="object-cover w-[170px] h-[115px]  sm:h-full md:w-[200px] lg:w-[400px]"
                  />
                  <Image
                    src="/heroimg5.svg"
                    alt="Image 5"
                    width={70}
                    height={70}
                    className="object-cover w-[70px] sm:w-[80px] md:w-[90px] lg:w-[150px]"
                  />
                  <Image
                    src="/heroimg6.svg"
                    alt="Image 6"
                    width={70}
                    height={70}
                    className="object-cover w-[70px] sm:w-[80px] md:w-[90px] lg:w-[150px]"
                  />
                </div>
              </div>

              {/* End of Second Content */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
