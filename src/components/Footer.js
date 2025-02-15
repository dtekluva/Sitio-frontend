import React from "react";
import Image from "next/image";
import Button from "./Button";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-white xl:h-[1250px] md:h-[1197] h-[990px]">
      {/* Trusted Brands Section */}
      <div className="xl:mx-32">
        <div className="text-center py-12">
          <h2 className="xl:text-3xl text-xl md:text-3xl font-inter font-semibold xl:font-semibold  text-[#222124] tracking-[-0.02em] xl:leading-9 xl:mt-20">
            Trusted by freelancers and startup businesses
          </h2>
          <p className="text-base md:font-inter font-normal text-[#870EA2] mt-2 leading-6 tracking-[0em]">
            Be a part of our fast-growing community
          </p>

          {/* sponsors images */}
          <div className="flex justify-center items-center xl:gap-12 gap-6 md:gap-12 mt-6">
            <Image
              src="/freelan2.svg"
              alt="magneta"
              width={50}
              height={50}
              className="xl:w-[100px] xl:h-[100px] md:w-[100px] md:h-[100px]"
            />
            <Image
              src="/freelan4.svg"
              alt="OG"
              width={50}
              height={50}
              className="xl:w-[50px] xl:h-[50px]"
            />
            <Image
              src="/freelan1.svg"
              alt="Magenta"
              width={50}
              height={50}
              className="xl:w-[70px] xl:h-[70px] md:w-[100px] md:h-[100px]"
            />
            <Image
              src="/freelan3.svg"
              alt="Imperum"
              width={50}
              height={50}
              className="xl:w-[70px] xl:h-[70px] md:w-[100px] md:h-[100px]"
            />
            <Image
              src="/freelan5.svg"
              alt="Wyre"
              width={50}
              height={50}
              className="xl:w-[100px] xl:h-[100px] md:w-[100px] md:h-[100px]"
            />
          </div>
          {/* sponsors images */}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white max-w-full mt-12 flex flex-col lg:mt-64 items-center relative py-10">
        {/* CTA Banner inside Footer */}
        <div className="absolute -top-11 xl:-top-20 md:-top-16 md:py-9  bg-gradient-to-r from-[#FC00FF] to-[#02ACAE] text-white py-3 xl:py-10 px-6 rounded-lg w-[90%] xl:max-w-[1200px] flex flex-col xl:flex-row md:flex-row  items-center justify-between">
          <div>
            <h3 className="lg:text-2xl text-sm md:text-base md:font-inter md:font-semibold font-bold lg:leading-8 tracking-[-0.02em]">
              Good, Smart & Reliable Digital Solutions for Business Growth
            </h3>
            <div className="xl:text-sm leading-11 font-normal gap-1 font-roboto text-xs mt-2 lg:opacity-80 xl:space-x-4 flex flex-wrap items-center">
              <span className="flex items-center xl:space-x-2">
                <IoMdCheckmarkCircleOutline />
                <span>Web Design</span>
              </span>
              <span className="flex items-center xl:space-x-2">
                <IoMdCheckmarkCircleOutline />
                <span>E-commerce</span>
              </span>
              <span className="flex items-center xl:space-x-2">
                <IoMdCheckmarkCircleOutline />
                <span>Dashboard</span>
              </span>
              <span className="flex items-center xl:space-x-2">
                <IoMdCheckmarkCircleOutline />
                <span>Graphics</span>
              </span>
            </div>
          </div>
          {/* desktop button */}
          <Button
            text="SEND US A MESSAGE"
            className="border-2 border-white hidden xl:block md:hidden"
          />

          {/* tablet button */}
          <Button
            text="MESSAGE US"
            className="border-4 text-xs font-inter font-medium border-[#D6CDF9] xl:hidden md:block hidden whitespace-nowrap"
          />
        </div>

        <div className="lg:mx-40 w-full flex flex-col xl:mt-3600 mt-10 md:mt-20 ">
          <div className="mx-5 md:mx-10 ">
            {/* Brand Section */}
            <div className="flex items-center justify-between w-full mb-6">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={220}
                height={250}
                className="h-auto w-[280px] sm:w-[205px] md:w-[450px] xl:w-[400px] object-contain"
              />
              {/* mobile button */}
              <Button
                text="MESSAGE US"
                className="border-4 text-xs font-inter font-medium border-[#D6CDF9] xl:hidden md:hidden whitespace-nowrap"
              />
            </div>

            {/* Main Footer Content */}
            <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start w-full">
              {/* Links Section */}
              <div className="flex flex-wrap xl:flex-nowrap justify-between w-full xl:gap-20 md:gap-24">
                {/* Digital Design */}
                <div className="mb-5">
                  <h4 className="xl:text-2xl text-lg md:text-xl md:lading-28 font-semibold  font-inter leading-8 tracking-[-0.02em] text-white xl:pl-6 relative xl:whitespace-nowrap">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#3405E1] rounded-full hidden xl:block"></span>
                    Digital Design
                  </h4>

                  <ul className="xl:mt-8 md:mt-5  xl:text-base text-xs md:text-sm md:font-inter font-normal leading-6 opacity-80 xl:space-y-4 xl:pl-7 space-y-1 md:space-y-3 xl:whitespace-nowrap">
                    <li>Website Design</li>
                    <li>Logo Design</li>
                    <li>Business Identity Design</li>
                    <li>Mobile App Design</li>
                    <li>Flyers Design</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>

                {/* Development */}
                <div>
                  <h4 className="xl:text-2xl text-lg md:text-xl md:lading-28 font-semibold  font-inter leading-8 tracking-[-0.02em] text-white xl:pl-6 relative">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#3405E1] rounded-full hidden xl:block"></span>
                    Development
                  </h4>
                  <ul className="xl:mt-8 md:mt-5  xl:text-base text-xs md:text-sm md:font-inter font-normal leading-6 opacity-80 xl:space-y-4 xl:pl-7 space-y-1 md:space-y-3 xl:whitespace-nowrap">
                    <li>Website Development</li>
                    <li>WordPress Development</li>
                    <li>Webflow Development</li>
                    <li>Mobile Development</li>
                    <li>Custom Web Development</li>
                  </ul>
                </div>

                {/* Product Strategy */}
                <div className="md:hidden xl:block sm:block">
                  <h4 className="xl:text-2xl  text-lg md:text-xl md:lading-28 font-semibold  font-inter leading-8 tracking-[-0.02em] text-white xl:pl-6 relative whitespace-nowrap">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#3405E1] rounded-full hidden xl:block"></span>
                    Product Strategy
                  </h4>
                  <ul className="xl:mt-8 md:mt-5  xl:text-base text-xs md:text-sm md:font-inter font-normal leading-6 opacity-80 xl:space-y-4 xl:pl-7 space-y-1 md:space-y-3">
                    <li>Market Research</li>
                    <li>Customer Strategy</li>
                    <li>Business Strategy</li>
                    <li>Competitor Analysis</li>
                    <li>User Research</li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div>
                  <h4 className="xl:text-xl  xl:font-bold font-roboto font-bold text-sm ">
                    Let's do it!
                  </h4>
                  <div className="flex space-x-4 xl:mt-5 mt-2">
                    <Image
                      src="/soicon3.svg"
                      alt="social3 icon"
                      className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] xl:w-[30px] xl:h-[30px]"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/soicon1.svg"
                      alt="social1 icon"
                      className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] xl:w-[30px] xl:h-[30px]"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/soicon2.svg"
                      alt="social2 icon"
                      className="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] xl:w-[30px] xl:h-[30px]"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="md:hidden lg:block ">
                    <p className="xl:mt-10 mt-7 xl:text-xl xl:font-semibold xl:opacity-80 text-sm font-inter font-medium relative after:content-[''] after:w-16 after:h-[2px] xl:after:block after:bg-[#8568ED] after:mt-1 after:absolute after:left-0 after:hidden">
                      hello@sitiodesign.com
                    </p>
                    <p className="xl:mt-3 xl:text-xl xl:font-semibold xl:opacity-80 text-sm font-inter font-medium ">
                      +234 8160304426
                    </p>
                  </div>
                </div>

                <div className="md:block lg:hidden hidden">
                  <h4 className="xl:text-2xl  text-lg md:text-xl md:lading-28 font-semibold  font-inter leading-8 tracking-[-0.02em] text-white xl:pl-6 relative whitespace-nowrap">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-[#3405E1] rounded-full hidden xl:block"></span>
                    Product Strategy
                  </h4>
                  <ul className="lg:mt-8 md:mt-5  xl:text-base text-xs md:text-sm md:font-inter font-normal leading-6 opacity-80 xl:space-y-4 xl:pl-7 space-y-1 md:space-y-3">
                    <li>Market Research</li>
                    <li>Customer Strategy</li>
                    <li>Business Strategy</li>
                    <li>Competitor Analysis</li>
                    <li>User Research</li>
                  </ul>
                </div>

                <div className="md:block xl:hidden hidden md:mr-64 ">
                  <p className="text-sm font-inter font-medium relative after:content-[''] after:w-16 after:h-[2px] md:after:block after:bg-[#8568ED] after:mt-1 after:absolute after:left-0 after:hidden">
                    hello@sitiodesign.com
                  </p>
                  <p className="md:mt-4 text-sm font-inter font-medium ">
                    +234 8160304426
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t md:border-t border-[#E5E5E5] mt-8 pt-4 flex justify-between text-xs opacity-80">
              <div className="flex lg:space-x-60 text-xs font-normal justify-between w-full whitespace-nowrap">
                <div className="flex space-x-4 whitespace-nowrap">
                  <p>Privacy Policy</p>
                  <p>Terms of Use</p>
                </div>
                <p>© 2025 Sitio Inc. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
