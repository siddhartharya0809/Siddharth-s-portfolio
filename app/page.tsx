"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatinNavbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="mzx-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Client />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
