import { Gallery } from "@/types/gallaryImage";
import Cart from "./Cart";
import { Suspense } from "react";

 async function GalleryGrid() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery-image`);
  const galleryImage: Gallery[] = await res.json();
  return (
    <section className="w-full  py-12 md:py-16 bg-[#f9faf7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  container mx-auto px-3">
        {galleryImage.map((i) => (
          <Cart key={i._id} image={i} />
        ))}
      </div>
    </section>
  );
}


const GalleryGridMain = ()=>{
 return (
  <Suspense fallback = {'Loading...'}>

    <GalleryGrid/>
  </Suspense>
 )
}
export default GalleryGridMain