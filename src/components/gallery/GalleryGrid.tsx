import { Gallery } from "@/types/gallaryImage";
import Cart from "./Cart";
import { Suspense } from "react";
import GallerySkeleton from "./skelon/GallerySkeleton";

async function GalleryGrid() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery-image`, {
    next: { revalidate: 7 * 24 * 60 * 60 },
  });
  const galleryImage: Gallery[] = await res.json();
  return (
    <section className="w-full  py-12 md:py-16 dark:bg-[#101812] bg-[#f9faf7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  container mx-auto px-3">
        {galleryImage.map((i) => (
          <Cart key={i._id} image={i} />
        ))}
      </div>
    </section>
  );
}

const GalleryGridMain = () => {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      <GalleryGrid />
    </Suspense>
  );
};
export default GalleryGridMain;
