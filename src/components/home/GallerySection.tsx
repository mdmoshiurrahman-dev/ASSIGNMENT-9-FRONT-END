import Link from "next/link";
import GalleryCart from "./GalleryCart";
import { ArrowRight } from "lucide-react";
import { GalleryImageArray } from "@/types/galleryItems";

export default async function GallerySection() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/old-gallery-image`,
  );
  const galleryItems: GalleryImageArray = await res.json();
  return (
    <section className="relative w-full py-12 md:py-16 dark:bg-[#101812] bg-[#f7f6f0] border-t border-zinc-200/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Heading and Tag */}
          <div className="lg:col-span-4 xl:col-span-3.5 space-y-4 sm:space-y-5">
            {/* Tag Badge */}
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#d8f993] text-[#13341b] tracking-wide shadow-sm">
                Our Gallery
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl dark:text-[#F3F5EF] sm:text-4xl lg:text-[44px] font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
              Moments of <br />
              Kindness
            </h2>

            {/* Description */}
            <p className="text-zinc-600 dark:text-[#B5C0B5] text-sm sm:text-base leading-relaxed max-w-sm">
              See how our community comes together for a better tomorrow.
            </p>

            {/* Outline CTA Button */}
            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center dark:border-[#3ac093] gap-2.5 border-2 border-[#0b3829] text-[#0b3829] hover:bg-[#0b3829] hover:text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 shadow-sm hover:shadow group"
              >
                <span className="dark:text-[#3ac093]">View Gallery</span>
                <ArrowRight className="w-4 h-4 dark:text-[#3ac093] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Photos Grid */}
          <div className="lg:col-span-8 xl:col-span-8.5 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 border-12 dark:border-[#1B271E] border-white">
              {galleryItems.map((item) => (
                <GalleryCart key={item._id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
