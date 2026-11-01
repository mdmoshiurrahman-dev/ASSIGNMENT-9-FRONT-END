export default function GalleryBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#fbfdf7] via-[#f3f9eb] to-[#e4f3d4] border-b border-[#e1ebd2]">
      {/* Decorative Bottom-Left Leaf Vector */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none z-10">
        <svg
          className="w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 text-[#5aa326]"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-10, 10)">
            {/* Main leaf */}
            <path
              d="M10 110C25 80 40 45 32 10C58 40 62 82 35 110Z"
              fill="#5da829"
            />
            <path
              d="M10 110C22 75 32 40 32 10"
              stroke="#8de347"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Small leaf */}
            <path
              d="M5 110C18 90 28 65 22 45C38 60 42 90 20 110Z"
              fill="#74bf34"
              opacity="0.85"
            />
          </g>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#09261a] tracking-tight leading-[1.12]">
            Moment of {' '}
            <span className="relative  inline-block text-[#15803d]">
              Kindness
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-[105%] h-3 sm:h-3.5 pointer-events-none"
                viewBox="0 0 180 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C45 3.5 110 3 176 10"
                  stroke="#78c720"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-600 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-lg">
            A collection of our community service, activities and meaningful
            moments
          </p>
        </div>
      </div>
    </section>
  );
}
