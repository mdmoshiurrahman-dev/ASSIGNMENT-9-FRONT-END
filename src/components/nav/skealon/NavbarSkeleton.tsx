import React from "react";

const NavbarSkeleton = () => {
  return (
    <header className="relative w-full z-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 animate-pulse">
          {/* Logo Skeleton */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-200" />
            <div className="h-7 w-32 rounded-md bg-zinc-200" />
          </div>

          {/* Desktop Navigation Skeleton */}
          <nav className="hidden md:flex items-center gap-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`h-9 rounded-full bg-zinc-200 ${
                  item === 2 ? "w-32" : "w-20"
                }`}
              />
            ))}
          </nav>

          {/* Desktop Actions Skeleton */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            {/* Theme Toggle */}
            <div className="w-10 h-9 rounded-full bg-zinc-200" />

            {/* Profile Avatar */}
            <div className="w-9 h-9 rounded-full bg-zinc-200" />

            {/* Authentication Button */}
            <div className="w-24 h-10 rounded-full bg-zinc-200" />
          </div>

          {/* Mobile Menu Skeleton */}
          <div className="flex sm:hidden items-center">
            <div className="w-10 h-10 rounded-lg bg-zinc-200" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarSkeleton;
