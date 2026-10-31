"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EventCart from "./home/EventCart";

export interface EventItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  joined: string;
  image: string;
  link: string;
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

const illustrator = () => {
  return (
    <div className=" sm:-left-6 w-[280px] sm:w-[320px] h-[160px] pointer-events-none opacity-45 select-none z-0">
      <svg
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        {/* Rolling Green Hills & Trees */}
        <path
          d="M0 160V120C18 116 35 110 52 114C70 118 85 130 105 125C125 120 142 108 165 115C185 122 200 135 225 132C250 129 270 120 295 124C308 126 315 130 320 132V160H0Z"
          fill="#789868"
          fillOpacity="0.4"
        />
        <path
          d="M0 160V135C30 130 65 138 95 132C130 125 160 138 190 135C220 132 250 128 280 134C298 138 312 142 320 145V160H0Z"
          fill="#547545"
          fillOpacity="0.5"
        />

        {/* Left Lush Trees */}
        <circle cx="28" cy="120" r="24" fill="#698758" fillOpacity="0.55" />
        <circle cx="50" cy="112" r="28" fill="#587848" fillOpacity="0.65" />
        <circle cx="75" cy="125" r="20" fill="#4b6b3b" fillOpacity="0.6" />
        <circle cx="15" cy="132" r="18" fill="#405d33" fillOpacity="0.7" />

        {/* Cityline / Monument Base */}
        <rect
          x="85"
          y="136"
          width="16"
          height="24"
          fill="#88a577"
          fillOpacity="0.4"
        />
        <rect
          x="98"
          y="142"
          width="22"
          height="18"
          fill="#789868"
          fillOpacity="0.35"
        />
        <rect
          x="126"
          y="132"
          width="14"
          height="28"
          fill="#6a895b"
          fillOpacity="0.4"
        />

        {/* National Martyrs' Memorial (Jatiyo Smriti Soudho) Spire Structure */}
        {/* Central triangular spire */}
        <polygon
          points="198,35 194,148 202,148"
          fill="#869e77"
          fillOpacity="0.8"
        />
        <polygon
          points="198,35 190,150 196,150"
          fill="#718c63"
          fillOpacity="0.85"
        />
        <polygon
          points="198,35 200,150 206,150"
          fill="#92aa82"
          fillOpacity="0.75"
        />
        {/* Outer Wall Layers */}
        <polygon
          points="198,58 178,150 186,150"
          fill="#6c885e"
          fillOpacity="0.7"
        />
        <polygon
          points="198,58 210,150 218,150"
          fill="#89a47a"
          fillOpacity="0.6"
        />
        <polygon
          points="198,82 165,150 174,150"
          fill="#5f7c52"
          fillOpacity="0.6"
        />
        <polygon
          points="198,82 222,150 231,150"
          fill="#829e74"
          fillOpacity="0.5"
        />
        <polygon
          points="198,105 152,150 162,150"
          fill="#547247"
          fillOpacity="0.5"
        />
        <polygon
          points="198,105 234,150 244,150"
          fill="#79966b"
          fillOpacity="0.45"
        />

        {/* Right Monument Background Trees & Tower */}
        <rect
          x="250"
          y="125"
          width="8"
          height="35"
          rx="1"
          fill="#718e62"
          fillOpacity="0.4"
        />
        <circle cx="270" cy="138" r="16" fill="#608053" fillOpacity="0.45" />
        <circle cx="292" cy="142" r="14" fill="#527045" fillOpacity="0.5" />
      </svg>
    </div>
  );
};

export default function UpcomingEvents() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-[#f7f6f0] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Layout: Left Column & Right Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Hero / Header Column */}
          <div className="lg:col-span-4 xl:col-span-3.5 relative flex flex-col">
            {/* Header Content */}
            <div>
              {/* Pill Badge */}
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#d8f993] text-[#13341b] tracking-wide shadow-sm">
                  Upcoming Events
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
                Be a Part of <br />
                Something Good
              </h2>

              {/* Description */}
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-sm">
                Discover and join the latest community service events in your
                area.
              </p>
            </div>
            {illustrator()}
          </div>

          {/* Right Carousel Column */}
          <div className="lg:col-span-8 xl:col-span-8.5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
              {events.map((event) => (
                <EventCart key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
