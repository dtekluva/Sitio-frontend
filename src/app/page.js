"use client";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Gotyou from "@/components/Gotyou";
import Firstgracard from "@/components/Firstgracard";
import Grasection from "@/components/Grasection";
import Portcard from "@/components/Portcard";
import Employees from "@/components/Employees";
import Footer from "@/components/Footer";



export default function Page() {
  return (
    <>
      <main className="max-w-[100%]  h-[100%] bg-white">
        {/* Shared container for consistent margin */}
          <Hero />
          <Popular />
          <Gotyou />
          <Firstgracard />
          <Grasection />
          <Portcard />
          <Employees />
          <Footer />
          
          
      </main>
    </>
  );
};


         
          