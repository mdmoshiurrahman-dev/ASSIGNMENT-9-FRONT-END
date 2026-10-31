import { Play, ZoomIn } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GalleryItem } from "./GallerySection";

const GalleryCart = ({ item }: { item: GalleryItem }) => {
  return (
    <div className="bg-white p-3">
      <div
      key={item.id}
      className="group relative aspect-square w-full   overflow-hidden bg-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
      />

      {/* Dark subtle overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

      {/* Video Play Button for 4th Item */}
      {item.isVideo ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-sm text-[#0b3829] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300 pl-0.5">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#0b3829]" />
          </div>
        </div>
      ) : (
        /* Subtle Zoom Icon on Hover for Images */
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm text-zinc-900 flex items-center justify-center shadow-md">
            <ZoomIn className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default GalleryCart;
