import Image from "next/image";

export default function Layout() {
  return (
    <div className="lg:min-h-screen py-10 px-4 mx-auto lg:max-w-7xl lg:mx-32 max-w-full md:mx-9">
      {/* Popular Customer Demand Section */}
      <div className="text-gray-900 mt-10 lg:mt-20">
        <h2 className="lg:text-2xl text-base md:text-xl font-semibold pl-1 font-inter leading-[32px] tracking-[-0.02em]">
          Popular Customer Demand
        </h2>
        <p className="lg:text-sm text-xs font-medium font-montserrat pl-1 leading-[20px] text-gray-500">
          Over 50 satisfied businesses
        </p>

        {/* Added px-4 only for mobile, removed it on lg screens */}
        <div className="flex flex-wrap md:grid-cols-2 lg:flex lg:flex-nowrap items-center  mt-8 gap-4 lg:gap-12 md:gap-5 ">
          {/* Cards */}
          {[
            {
              text: "Business Growth",
              color: "bg-purple-300",
              icon: "/proicon1.png",
            },
            { text: "Graphics", color: "bg-orange-200", icon: "/proicon5.png" },
            {
              text: "Product Design",
              color: "bg-cyan-200",
              icon: "/proicon4.png",
            },
            {
              text: "Development",
              color: "bg-yellow-200",
              icon: "/proicon3.png",
            },
            {
              text: "Customer Service",
              color: "bg-red-300",
              icon: "/proicon2.png",
            },
          ].map((item, index) => (
            <span
              key={index}
              className={`${item.color} text-black px-4  py-2 lg:py-2 lg:px-6 md:py-2 md:px-5 rounded-full  w-fit md:w-fit flex items-center `}
            >
              {/* Icon */}
              <span className="p-2 rounded-full flex-shrink-0  -ml-2 lg:-ml-5">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={30}
                  height={30}
                  className="object-contain rounded-full  md:w-[40px]  md:h-[40px] lg:w-[57px] lg:h-[57px]"
                />
              </span>
              <span className="text-sm sm:font-montserrat  sm:font-normal  sm:text-base font-medium whitespace-nowrap">
                {item.text}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-full lg:w-full h-auto mt-11 lg:mt-20 rounded-2xl overflow-hidden">
        {/* Image for Desktop and Tablet */}
        <div className="hidden md:block">
          <Image
            src="/destopbanner.svg"
            alt="Desktop Banner"
            width={1200} // ✅ Set fixed width
            height={400} // ✅ Set fixed height
            style={{ width: "100%", height: "auto" }} // ✅ Make it responsive
            className="object-cover"
          />
        </div>

        {/* Image for Mobile */}
        <div className="block md:hidden">
          <Image
            src="/mobilebanner.svg"
            alt="Mobile Banner"
            width={600} // ✅ Set fixed width
            height={300} // ✅ Set fixed height
            style={{ width: "100%", height: "auto" }} // ✅ Make it responsive
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
