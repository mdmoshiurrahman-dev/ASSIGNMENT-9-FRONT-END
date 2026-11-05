import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";
import GallerySection from "@/components/home/GallerySection";
import Newsletter from "@/components/home/Newsletter";
import { Suspense } from "react";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import UpcomingEventsSkeleton from "@/components/home/skelton/UpcomingEventsSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen   bg-[#f8faf8] text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Banner />
      <Suspense fallback={<UpcomingEventsSkeleton />}>
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
