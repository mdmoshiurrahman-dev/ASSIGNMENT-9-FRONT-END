"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Sun, Sparkles } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { toast } from "../ui/toast";
import { IoPerson } from "react-icons/io5";
import ThemeToggle from "@/app/ThemeToggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Upcoming Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const session = useSession();
  const handelSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.add({
            type: "success",
            description: "You have been safely logged out.",
          });
          if (pathName === "/") {
            router.push("/");
          } else {
            router.push("/signin");
          }
        },
      },
    });
  };
  return (
    <header className="relative w-full z-40 transition duration-300 dark:bg-[#19251c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 drop-shadow-sm"
              >
                {/* Heart Base with vibrant gradient */}
                <path
                  d="M20 35.5C20 35.5 5 25.5 5 14.5C5 8.7 9.5 4.5 15 4.5C18.2 4.5 20 6.5 20 6.5C20 6.5 21.8 4.5 25 4.5C30.5 4.5 35 8.7 35 14.5C35 25.5 20 35.5 20 35.5Z"
                  fill="url(#heart-gradient)"
                />
                {/* Inner leaf / ribbon fold */}
                <path
                  d="M20 7C20 7 22.5 5 25.5 5C30.5 5 34.5 9 34.5 14.5C34.5 24 22 32.5 20 34C21.8 28.5 24.5 20.5 22.5 15C21 11 19.5 8.5 20 7Z"
                  fill="#15803D"
                  opacity="0.3"
                />
                <path
                  d="M14.5 12.5C12.5 14.5 12.5 17.5 14 20L20 26L23 21C24.5 18.5 24.5 15.5 22.5 13.5C21 12 19 12.8 18.5 13.5C18 14.2 17 14.2 16.5 13.5C16 12.8 14 12 14.5 12.5Z"
                  fill="#ECFDF5"
                  opacity="0.95"
                />
                <defs>
                  <linearGradient
                    id="heart-gradient"
                    x1="5"
                    y1="4.5"
                    x2="35"
                    y2="35.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#22C55E" />
                    <stop offset="1" stopColor="#15803D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-2xl dark:text-[#F3F5EF] font-bold tracking-tight text-zinc-900 flex items-center">
              Social
              <span className="text-zinc-900 dark:text-[#F3F5EF]">Serve</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm dark:text-[#F3F5EF] font-medium transition-all px-4 py-1.5 rounded-full ${
                  pathName === item.href
                    ? "bg-[#dff3e3] text-zinc-900 dark:text-black font-semibold shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-black/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            <ThemeToggle />

            {/* User Profile */}
            <HoverCard>
              <HoverCardTrigger>
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 p-1 rounded-full hover:bg-black/5 transition-colors"
                  aria-label="User Account"
                >
                  <div className="relative flex justify-center items-center w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-xs bg-emerald-100">
                    {session.data?.user.image ? (
                      <Image
                        src={session.data?.user.image}
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <IoPerson className="size-8" />
                    )}
                  </div>
                </button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col gap-2">
                  <div>
                    <h2 className="font-bold">{session.data?.user.name}</h2>
                    <p className="text-[14px]">{session.data?.user.email}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={"/create-event"}>
                      <Button>Create Event</Button>
                    </Link>
                    <Link href={"/profile"}>
                      <Button>Manage Events</Button>
                    </Link>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            {session.isPending ? (
              <div className="py-5 px-11 bg-gray-300 rounded-full"></div>
            ) : session.data?.user ? (
              <button
                onClick={handelSignOut}
                className="inline-flex items-center gap-1.5 bg-red-500  text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                LogOut
              </button>
            ) : (
              <Link
                href={"/signin"}
                className="inline-flex items-center gap-1.5 bg-[#0a392c] hover:bg-[#0f4d3d] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                SignIn
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-black/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden dark:bg-[#19251c] bg-white/95 backdrop-blur-md border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-xl dark:text-[#F3F5EF] text-base font-medium ${
                  pathName === item.href
                    ? "bg-[#dff3e3] text-zinc-900 dark:text-black font-semibold"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-zinc-100 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className="relative  w-8 h-8 rounded-full overflow-hidden border border-emerald-400">
                  {session.data?.user.image ? (
                    <Image
                      src={session.data?.user.image}
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex justify-center items-center">
                      <IoPerson className="size-8" />
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium dark:text-[#F3F5EF] text-zinc-800">
                  {session.data?.user.name}
                </span>
              </div>
              <ThemeToggle />
            </div>
            <Link
              href={"/signin"}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0a392c] text-white py-2.5 rounded-full text-sm font-semibold shadow-sm"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
