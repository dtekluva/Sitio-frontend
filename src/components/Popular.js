import Image from "next/image";

export default function Layout() {
  return (
    <div className="xl:h-[675px] xl:w-[1200px] py-10 p-4 px-4  md:[834px] mx-auto xl:mx-36 max-w-full md:mx-14 xl:p-0 md:p-0">
      {/* Popular Customer Demand Section */}
      <div className="text-gray-900 mt-10 xl:mt-20 ">
        <h2 className="xl:text-2xl text-base md:text-xl font-semibold pl-1 font-inter leading-[32px] tracking-[-0.02em]">
          Popular Customer Demand
        </h2>
        <p className="xl:text-sm text-xs font-medium font-montserrat pl-1 leading-[20px] text-gray-500">
          Over 50 satisfied businesses
        </p>

        {/* Categories */}
        <div className="flex flex-wrap md:grid-cols-2 xl:flex xl:flex-nowrap items-center mt-8 gap-4 xl:gap-9  md:gap-5">
          {[
            { text: "Business Growth", color: "bg-purple-300", icon: "/proicon1.png" },
            { text: "Graphics", color: "bg-orange-200", icon: "/proicon5.png", height:"20" },
            { text: "Product Design", color: "bg-cyan-200", icon: "/proicon4.png" },
            { text: "Development", color: "bg-yellow-200", icon: "/proicon3.png" },
            { text: "Customer Service", color: "bg-red-300", icon: "/proicon2.png" },
          ].map((item, index) => (
            <span
              key={index}
              className={`${item.color} text-black px-4 py-2 xl:w-[241px] xl:h-[84px] md:py-2 md:px-5 rounded-full w-fit md:w-fit flex items-center`}
            >
              <span className="p-2 rounded-full flex-shrink-0 -ml-2 xl:-ml-5">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={24}
                  height={24}
                  className="object-contain rounded-full bg-white md:w-[40px] md:h-[40px] xl:w-[35px] xl:h-[35px]"
                />
              </span>
              <span className="text-sm font-montserrat xl:text-base font-bold sm:text-base whitespace-nowrap">
                {item.text}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Section with Image Grid */}
      <div className="max-w-screen-xl xl:w-[1200px] p-4 px-5 w-[350px] md:w-[718px] md:h-[378px] xl:h-[426px] h-[665px]  rounded-[16px] border-[2px] xl:p-0 mt-10 xl:rounded-[25px] xl:border-[3px] border-[#AE9BF3] overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:p-0 md:grid-cols-2 md:p-0 gap-6  items-center">
          {/* Left Section - Text */}
          <div className="xl:p-8 md:p-6 md:-mt-96  xl:-mt-40">
            <div className="xl:w-[93px] xl:h-[28px] gap-28">
              <h4 className="text-[#5A5C60] xl:text-xl font-inter font-medium xl:tracking-[-0.02em]">
                Meet Sitio
              </h4>
            </div>
            <div className="xl:w-[518px] xl:h-[240px] mt-10 md:mt-2">
              <p className="xl:text-3xl text-xl font-inter font-semibold text-[#000000] xl:tracking-[-0.02em]">
                Transforming ideas into impactful, tailored digital solutions. Our agency specializes in creating engaging websites, standout
                graphic designs, and custom business identity assets.
              </p>
            </div>
          </div>

          {/* Right Section - Responsive Image Grid */}
          <div className="grid xl:grid-cols-3 grid-cols-2 md:grid-cols-2 gap-4">
            <Image src="/poppcard6.svg" alt="Creative design" width={200} height={224} className="bg-cover xl:left-[646px] rounded-xl" />
            <Image src="/poppcard5.svg" alt="Taro Donut" width={200} height={224} className="bg-contain xl:h-[281px] xl:w-[200px] xl:-top-[51px] xl:left-[864px] rounded-xl border" />
            <Image src="/poppcard4.svg" alt="Creative design" width={300} height={200} className="object-cover border rounded-xl xl:-top-[10px] xl:left-[1082px] xl:h-[224px] xl:w-[200px]" />
            <Image src="/poppcard3.svg" alt="Coaching" width={200} height={224} className="bg-contain xl:-mt-16 xl:left-[646px] border rounded-xl" />
            <Image src="/poppcard2.svg" alt="Streetwear" width={200} height={224} className="bg-contain xl:h-[224px] xl:-mt-16 top-[250px] xl:w-[200px] xl:left-[864px] rounded-xl" />
            <Image src="/poppcard1.svg" alt="Coming Soon" width={200} height={224} className="bg-contain xl:-mt-16 top-[232px] xl:left-[1082px] border rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
