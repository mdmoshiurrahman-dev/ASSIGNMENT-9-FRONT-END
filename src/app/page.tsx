import Navbar from "@/components/nav/Navbar";
import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";
import GallerySection from "@/components/home/GallerySection";
import Newsletter from "@/components/home/Newsletter";
import UpcomingEvents from "@/components/upcoming-events/UpcomingEvents";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8faf8] text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Banner />
      <Suspense fallback={"Loading..."}>
        <UpcomingEvents />
      </Suspense>
      <HowItWorks />
      <Suspense fallback={"Loading..."}>
        <GallerySection />
      </Suspense>
      <Newsletter />
    </div>
  );
}
