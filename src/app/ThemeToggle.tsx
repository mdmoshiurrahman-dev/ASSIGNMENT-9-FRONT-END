"use client";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        type="button"
        className={`flex items-center transition duration-300 gap-1 p-1.5 text-zinc-600 hover:text-zinc-900 rounded-full  bg-[#2a4732] dark:bg-white`}
        title="Toggle Theme"
        aria-label="Toggle Theme"
      >
        <Sun
          className={`size-5 text-amber-500 fill-amber-400 scale-100   dark:scale-0`}
        />
        <BsFillMoonStarsFill
          className={`size-5 text-black dark:scale-100 scale-0`}
        />
      </button>
    </>
  );
};

export default ThemeToggle;
