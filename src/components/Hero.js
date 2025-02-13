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
      <main className="max-w-full bg-[#232222] p-4 px-4 h-[720px]  xl:mt-0  xl:h-[810px] md:h-[644px] sm:overflow-hidden">
        <div className="bg-[#121212] w-full xl:max-w-[1200px] h-[412px]  xl:h-[737.08px] mx-auto xl:mx-32 md:mx-14 md:max-w-[730px] md:h-[602px] md:top-[42px]  xl:mt-24 md:mt-8 md:pb-0 md:mb-0 xl:p-0 xl:pb-0 xl:py-0 xl:mb-0">
          <div
            className="absolute inset-0 bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/s.svg')",
              backgroundSize: "35%", // Default for desktop
              backgroundPosition: "100px 0px", // Default for desktop
              mixBlendMode: "lighten",
            }}
          >
            <style jsx>{`
              /* For small screens (mobile) */
              @media (max-width: 768px) {
                div {
                  background-size: 59% !important; /* Reduce size */
                  background-position: 15px 45px !important; /* Adjust position */
                  mix-blend-mode: lighten; /* Corrected syntax */
                }
              }

              /* For tablets (769px to 1024px) */
              @media (min-width: 769px) and (max-width: 1024px) {
                div {
                  background-size: 45% !important; /* Slightly larger than mobile */
                  background-position: 40px 30px !important; /* Move left by 40px */
                  mix-blend-mode: lighten;
                }
              }
            `}</style>
          </div>
          {/* Navbar, First Content, and Second Content all in the same div */}
          <div className="flex flex-col gap-12">
            {/* Navbar */}
            <nav className="flex max-w-full  xl:w-fit justify-between  md:bg-[#121212]  bg-[#232222]  xl:px-0 items-center md:justify-between  md:py-0 xl:space-x-96 xl:py-0">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={220} // Base width
                  height={250} // Base height
                  className="h-auto w-[280px] sm:w-[205px] md:w-[290px]  xl:w-[400px]  object-contain xl:top-0"
                />
              </Link>

              {/* Mobile Menu Toggle (Hamburger) */}
              {/* Mobile Menu Toggle (Hamburger) - Only Visible on Small Screens */}
              <div className="relative md:hidden xl:hidden text-white">
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
                    className="text-[35px] top-6 right-7 cursor-pointer z-[99999]"
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
  xl:flex xl:flex-row xl:relative  xl:w-auto xl:items-center xl:top-0 xl:mr-7`}
              >
                <li className=" font-inter font-medium text-base">HOME</li>
                <li className=" font-inter font-medium text-base">ABOUT</li>
                <li className=" font-inter font-medium whitespace-nowrap text-base">
                  OUR SERVICE
                </li>
                <li className=" font-inter font-medium text-base">CLIENTS</li>
              </ul>
            </nav>

            <div className="xl:space-y-4 space-y-2 xl:mt-5 md:mt-16 ">
              {/* First Content */}
              <div className="flex flex-col   md:flex-row xl:justify-between md:justify-between font-bold  ">
                {/* Text Section */}
                <div className="flex flex-col">
                  <h1
                    className="text-white
             xl:font-[Bahnschrift] xl:font-bold xl:text-[45px] xl:leading-[64px] xl:tracking-[-0.02em]
             md:font-[Abhaya Libre] md:font-semibold md:text-[32px]  md:leading-[42px] md:tracking-[-0.02em]
             font-[Abhaya Libre] font-semibold text-[32px] leading-[42px] tracking-[-0.02em]"
                  >
                    SPEARHEADING YOUR <br />
                    BRAND’S DIGITAL <br />
                    TRANSFORMATION THROUGH <br />
                    THOUGHTFUL DESIGN
                  </h1>

                  {/* Mobile Button */}
                  <div className="block md:hidden xl:hidden mt-4 text-sm font-inter font-medium ">
                    <Button text="SEND US A MESSAGE" />
                  </div>
                </div>

                {/* for xl */}

                {/* Image Section */}
                <div className="flex flex-row  flex-nowrap xl:pl-1 justify-end gap-3 mt-10 md:pb-0 ">
                  <Image
                    src="/heroimg1.jpg"
                    alt="Image 1"
                    width={70}
                    height={75}
                    className="object-contain w-[70px] sm:w-[80px] md:w-[90px] xl:w-[150px]"
                  />
                  <Image
                    src="/heroimg2.jpg"
                    alt="Image 2"
                    width={70}
                    height={75}
                    className="object-contain w-[70px] sm:w-[80px] md:w-[90px] xl:w-[150px]"
                  />
                  <Image
                    src="/heroimg3.jpg"
                    alt="Image 3"
                    width={70}
                    height={75}
                    className="object-contain w-[70px] sm:w-[80px] md:w-[90px] xl:w-[150px]"
                  />
                </div>
              </div>

              {/* End of First Content */}

              {/* second content */}
              <div className="flex flex-col md:flex-row md:justify-between xl:justify-between ">
                {/* Button Section */}
                <div className="flex md:w-auto gap-4 ">
                  {/* Desktop Button aligned with second row images */}
                  <div className="hidden xl:block whitespace-nowrap">
                    <Button text="SEND US A MESSAGE" />
                  </div>
                  {/* Tablet Button */}
                  <div className="ml-auto hidden md:block xl:hidden whitespace-nowrap">
                    <Button text="SEND US A MESSAGE" className="w-45" />
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-row flex-nowrap xl:pl-3 mt-0 items-center justify-end gap-3 md:mt-0  md:justify-start">
                  <Image
                    src="/heroimg4.jpg"
                    alt="Image 4"
                    width={120}
                    height={90}
                    className="object-cover w-[170px] h-[115px] sm:h-full md:w-[200px] xl:h-[245px]  xl:w-[518px]"
                  />
                  <Image
                    src="/heroimg5.jpg"
                    alt="Image 5"
                    width={70}
                    height={70}
                    className="object-contain w-[70px] sm:w-[80px] md:w-[90px] xl:w-[150px]"
                  />
                  <Image
                    src="/heroimg6.jpg"
                    alt="Image 6"
                    width={70}
                    height={70}
                    className="object-contain w-[70px] sm:w-[80px] md:w-[90px] xl:w-[150px]"
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
