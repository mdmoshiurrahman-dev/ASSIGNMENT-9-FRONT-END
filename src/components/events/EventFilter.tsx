"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  Trash2,
  Leaf,
  Heart,
  MoreHorizontal,
} from "lucide-react";
import DisplayEvents from "./DisplayEvents";
import { EventItem } from "../upcoming-events/UpcomingEvents";

export interface FilterCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  hasDividerAfter?: boolean;
}

export interface EventFilterProps {
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  className?: string;
}
const events: EventItem[] = [
  {
    id: "1",
    title: "Tree Plantation Drive",
    category: "Plantation",
    location: "Dhanmondi, Dhaka",
    date: "Dec 10, 2026",
    joined: "120 Joined",
    image: "/images/events/tree-plantation.jpg",
    link: "/events/tree-plantation",
  },
  {
    id: "2",
    title: "Blanket Distribution",
    category: "Donation",
    location: "Mohammadpur, Dhaka",
    date: "Dec 14, 2026",
    joined: "85 Joined",
    image: "/images/events/blanket-distribution.jpg",
    link: "/events/blanket-distribution",
  },
  {
    id: "3",
    title: "Clean Our City",
    category: "Cleanup",
    location: "Mirpur 10, Dhaka",
    date: "Dec 20, 2026",
    joined: "67 Joined",
    image: "/images/events/city-cleanup.jpg",
    link: "/events/clean-our-city",
  },
  {
    id: "4",
    title: "Community Food Relief",
    category: "Food Drive",
    location: "Uttara, Dhaka",
    date: "Dec 24, 2026",
    joined: "142 Joined",
    image: "/images/events/food-drive.jpg",
    link: "/events/food-relief",
  },
  {
    id: "5",
    title: "Children Learning Camp",
    category: "Education",
    location: "Gulshan, Dhaka",
    date: "Jan 05, 2027",
    joined: "95 Joined",
    image: "/images/events/child-education.jpg",
    link: "/events/children-learning",
  },
];
const defaultCategories: FilterCategory[] = [
  {
    id: "all",
    name: "All Events",
    icon: LayoutGrid,
  },
  {
    id: "cleanup",
    name: "Cleanup",
    icon: Trash2,
  },
  {
    id: "plantation",
    name: "Plantation",
    icon: Leaf,
  },
  {
    id: "donation",
    name: "Donation",
    icon: Heart,
  },
  {
    id: "others",
    name: "Others",
    icon: MoreHorizontal,
  },
];

export default function EventFilter({
  activeCategory: controlledActiveCategory,
  onCategoryChange,
  searchQuery: controlledSearchQuery,
  onSearchChange,
  className = "",
}: EventFilterProps) {
  const [internalActiveCategory, setInternalActiveCategory] = useState("all");

  const activeCategory =
    controlledActiveCategory !== undefined
      ? controlledActiveCategory
      : internalActiveCategory;

  const handleCategoryClick = (categoryId: string) => {
    if (controlledActiveCategory === undefined) {
      setInternalActiveCategory(categoryId);
    }
    onCategoryChange?.(categoryId);
  };

  return (
    <div>
      <div
        className={`relative -top-7.5  w-full max-w-360  mx-auto px-4 sm:px-6 lg:px-8 z-10`}
      >
        <div className="bg-white rounded-2xl md:rounded-full border border-black/[0.08] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] p-2 sm:p-2.5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4 transition-all">
          {/* Categories Tab Group */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5 px-0.5">
            {defaultCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <React.Fragment key={cat.id}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`group shrink-0 inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#0c4a2a] text-white shadow-sm"
                        : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                        isActive
                          ? "text-white fill-white"
                          : cat.id === "donation"
                            ? "text-[#165a31] fill-[#165a31]"
                            : "text-[#165a31]"
                      }`}
                    />
                    <span>{cat.name}</span>
                  </button>
                  <div
                    className="h-4 sm:h-5 w-[1px] bg-zinc-200/90 mx-1 sm:mx-1.5 shrink-0 select-none"
                    aria-hidden="true"
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <DisplayEvents events={events} />
    </div>
  );
}
