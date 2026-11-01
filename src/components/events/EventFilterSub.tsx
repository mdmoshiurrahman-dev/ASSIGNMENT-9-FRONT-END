"use client";
import React from "react";
import DisplayEvents from "./DisplayEvents";
import { Heart, LayoutGrid, Leaf, MoreHorizontal, Trash2 } from "lucide-react";
import { FilterCategory } from "./EventFilter";
import {  IEventRes } from "@/types/event";
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
const EventFilterSub = ({eventData}:{eventData:IEventRes}) => {
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
              return (
                <React.Fragment key={cat.id}>
                  <button
                    type="button"
                    // ${
                    //     ? "bg-[#0c4a2a] text-white shadow-sm"
                    //     : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80"
                    // }
                    className={`group shrink-0 inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none `}
                  >
                    <Icon
                      // ${
                      //     isActive
                      //       ? "text-white fill-white"
                      //       : cat.id === "donation"
                      //         ? "text-[#165a31] fill-[#165a31]"
                      //         : "text-[#165a31]"
                      //   }
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-105 `}
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
      <DisplayEvents eventData = {eventData} />
    </div>
  );
};

export default EventFilterSub;
