const GallerySkeleton = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f9faf7] dark:bg-[#101812]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 container mx-auto px-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl bg-white shadow-sm animate-pulse"
          >
            <div className="w-full aspect-4/3 bg-zinc-200" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySkeleton;