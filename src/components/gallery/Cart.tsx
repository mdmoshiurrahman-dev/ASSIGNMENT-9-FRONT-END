import { Gallery } from "@/types/gallaryImage";
import Image from "next/image";
import React from "react";

const Cart = ({ image }: { image: Gallery }) => {
  return (
   <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
  <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
    <Image
      src={image.event_cover_image}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      alt={image.event_title || "Event cover"}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
  </div>
</div>

  );
};

export default Cart;
