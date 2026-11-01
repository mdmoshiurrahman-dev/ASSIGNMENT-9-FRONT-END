import { GalleryImage } from "@/types/galleryItems";
import Image from "next/image";
import React from "react";

const GalleryCart = ({ item }: { item: GalleryImage }) => {
  return (
    <div className="bg-white p-3">
      <div className="group relative aspect-square w-full   overflow-hidden bg-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
        <Image
          src={item.event_cover_image}
          alt={"gallery image"}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default GalleryCart;
