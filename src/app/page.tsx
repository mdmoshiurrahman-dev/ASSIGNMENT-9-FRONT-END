import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import UpcomingEvents from "@/components/UpcomingEvents";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySection";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8faf8] text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
        <Banner />
        <UpcomingEvents />
        <HowItWorks />
        <GallerySection />
        <Newsletter />
    </div>
  );
}
