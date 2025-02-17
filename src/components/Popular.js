import Image from "next/image";

export default function Layout() {
  return (
    <main
      id="about"
      className=" h-[1220px] p-8 xl:h-[810px] md:h-[808px] flex flex-col  xl:flex justify-center items-center"
    >
      <div className="xl:h-[675px] xl:w-[1200px] py-10 md:[834px] max-w-full md:mx-14 xl:p-0 md:p-0">
        {/* Popular Customer Demand Section */}
        <div className="text-gray-900 mt-10 xl:mt-20 ">
          <h2 className="xl:text-2xl text-base md:text-xl font-semibold pl-1 font-inter leading-[32px] tracking-[-0.02em]">
            Popular Customer Demand
          </h2>
          <p className="xl:text-sm text-xs font-medium font-montserrat pl-1 leading-[20px] text-gray-500">
            Over 50 satisfied businesses
          </p>

          {/* Categories */}
          <div className="flex flex-wrap md:grid-cols-2 xl:flex xl:flex-nowrap mt-8 gap-4 xl:gap-12 md:gap-5">
  {[
    { text: "Business Growth", color: "bg-purple-300", icon: "/proicon1.png", width: "xl:w-[220px]" }, // Unique width
    { text: "Graphics", color: "bg-orange-200", icon: "/proicon5.png", width: "xl:w-[160px]" }, // Graphics width
    { text: "Product Design", color: "bg-cyan-200", icon: "/proicon4.png", width: "xl:w-[205px]" },
    { text: "Development", color: "bg-yellow-200", icon: "/proicon3.png", width: "xl:w-[190px]" },
    { text: "Customer Service", color: "bg-red-300", icon: "/proicon2.png", width: "xl:w-[219px]" },
  ].map((item, index) => (
    <span
      key={index}
      className={`${item.color} text-black px-2 py-3 ${item.width} xl:h-[84px] md:px-4 md:py-3 rounded-full w-fit flex items-center`}
    >
      <span className="rounded-full flex-shrink-0 ">
        <Image
          src={item.icon}
          alt={item.text}
          width={28}
          height={28}
          className="object-contain rounded-full md:w-[40px] md:h-[40px] xl:w-[45px] xl:h-[45px]"
        />
      </span>
      <span className="text-sm font-montserrat  xl:text-sm font-bold sm:text-base whitespace-nowrap ml-3">
        {item.text}
      </span>
    </span>
  ))}
</div>
</div>

        {/* Main Section with Image Grid */}
        <div className="max-w-screen-xl xl:w-[1200px] p-4 px-5 w-[350px] md:w-[718px] md:h-[378px] md:p-0 xl:h-[380px] h-[665px]  rounded-[16px] border-[2px] xl:p-0 mt-10 xl:rounded-[25px] xl:border-[3px] border-[#AE9BF3] overflow-hidden">
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
                  Transforming ideas into impactful, tailored digital solutions.
                  Our agency specializes in creating engaging websites, standout
                  graphic designs, and custom business identity assets.
                </p>
              </div>
            </div>

            {/* Right Section - Responsive Image Grid */}
            <div className="grid xl:grid-cols-3 grid-cols-2 md:grid-cols-2 gap-4">
              <Image
                src="/poppcards1.jpg"
                alt="Creative design"
                width={200}
                height={224}
                className="bg-cover xl:left-[646px] rounded-xl"
              />
              <Image
                src="/poppcards2.jpg"
                alt="Taro Donut"
                width={200}
                height={224}
                className="bg-cover xl:h-[250px] xl:-mt-10 xl:w-[200px]  xl:left-[864px] rounded-xl "
              />
              <Image
                src="/poppcards3.jpg"
                alt="Creative design"
                width={300}
                height={200}
                className="object-cover  xl:-mt-4 rounded-xl xl:-top-[10px] xl:left-[1082px] xl:h-[224px] xl:w-[200px]"
              />
              <Image
                src="/poppcards4.jpg"
                alt="Coaching"
                width={200}
                height={224}
                className="bg-contain xl:-mt-6 xl:left-[646px] border rounded-xl"
              />
              <Image
                src="/poppcards5.jpg"
                alt="Streetwear"
                width={200}
                height={224}
                className="bg-contain xl:h-[224px] xl:-mt-2  top-[250px] xl:w-[200px] xl:left-[864px] rounded-xl"
              />
              <Image
                src="/poppcards6.jpg"
                alt="Coming Soon"
                width={200}
                height={224}
                className="bg-contain xl:-mt-3 top-[232px] xl:left-[1082px] border rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
