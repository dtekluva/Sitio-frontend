"use client";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Gotyou from "@/components/Gotyou";
import Firstgracard from "@/components/Firstgracard";
import Portcard from "@/components/Portcard";
import Employees from "@/components/Employees";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <>
      <main className="max-w-[100%] mx-full h-full bg-white">
        {/* Shared container for consistent margin */}
        <div className="max-w-[100%]  sm:px-2  ">
          <Hero />
          <Popular />
          <Gotyou />
          <Firstgracard />
          <Portcard />
          <Employees />
          <Footer />
        </div>
      </main>
    </>
  );
};
