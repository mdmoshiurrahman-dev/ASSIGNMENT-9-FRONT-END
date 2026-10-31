import Link from "next/link";
import GalleryCart from "./GalleryCart";
import { ArrowRight } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  isVideo?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Tree Planting Initiative",
    description: "Volunteers planting saplings to make our city greener.",
    image: "/images/events/tree-plantation.jpg",
  },
  {
    id: "2",
    title: "Community Relief Distribution",
    description:
      "Distributing essential supplies and grain to families in need.",
    image: "/images/events/food-drive.jpg",
  },
  {
    id: "3",
    title: "Smiles for Tomorrow",
    description:
      "Bringing joy and education to children in local neighborhoods.",
    image: "/images/events/child-education.jpg",
  },
  {
    id: "4",
    title: "Youth Clean & Serve Drive",
    description:
      "A community working side by side for a cleaner, kinder future.",
    image: "/images/events/city-cleanup.jpg",
    isVideo: true,
  },
    {
    id: "5",
    title: "Tree Planting Initiative",
    description: "Volunteers planting saplings to make our city greener.",
    image: "/images/events/tree-plantation.jpg",
  },
  {
    id: "6",
    title: "Community Relief Distribution",
    description:
      "Distributing essential supplies and grain to families in need.",
    image: "/images/events/food-drive.jpg",
  },
  {
    id: "7",
    title: "Smiles for Tomorrow",
    description:
      "Bringing joy and education to children in local neighborhoods.",
    image: "/images/events/child-education.jpg",
  },
  {
    id: "8",
    title: "Youth Clean & Serve Drive",
    description:
      "A community working side by side for a cleaner, kinder future.",
    image: "/images/events/city-cleanup.jpg",
    isVideo: true,
  },
];

export default function GallerySection() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-[#f7f6f0] border-t border-zinc-200/50 overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
              Moments of <br />
              Kindness
            </h2>

            {/* Description */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-sm">
              See how our community comes together for a better tomorrow.
            </p>

            {/* Outline CTA Button */}
            <div className="pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2.5 border-2 border-[#0b3829] text-[#0b3829] hover:bg-[#0b3829] hover:text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 shadow-sm hover:shadow group"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Photos Grid */}
          <div className="lg:col-span-8 xl:col-span-8.5 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {galleryItems.map((item) => (
               <GalleryCart key={item.id} item ={item}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
