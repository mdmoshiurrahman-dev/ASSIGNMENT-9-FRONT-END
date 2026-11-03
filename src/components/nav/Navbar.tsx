"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Sun, Sparkles } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import { toast } from "../ui/toast";

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
    <header className="relative w-full z-40">
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
            <span className="text-2xl font-bold tracking-tight text-zinc-900 flex items-center">
              Social<span className="text-zinc-900">Serve</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all px-4 py-1.5 rounded-full ${
                  pathName === item.href
                    ? "bg-[#dff3e3] text-zinc-900 font-semibold shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-black/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-3 lg:gap-4">
            {/* Theme / Sparkle Toggle */}
            <button
              type="button"
              className="flex items-center gap-1 p-1.5 text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-black/5 transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <div className="relative flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-500 fill-amber-400" />
                <Sparkles className="w-2.5 h-2.5 text-amber-400 absolute -top-1 -right-1" />
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
            </button>

            {/* User Profile */}
            <Link href={"#"}>
              <button
                type="button"
                className="flex items-center gap-1.5 p-1 rounded-full hover:bg-black/5 transition-colors"
                aria-label="User Account"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-xs bg-emerald-100">
                  <Image
                    src="/images/avatars/user.jpg"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </Link>
            {/* Create Event Button */}
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
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-xl text-base font-medium ${
                  pathName === item.href
                    ? "bg-[#dff3e3] text-zinc-900 font-semibold"
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
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-emerald-400">
                  <Image
                    src="/images/avatars/user.jpg"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-zinc-800">
                  Profile
                </span>
              </div>
              <div className="flex items-center gap-1 text-amber-600">
                <Sun className="w-5 h-5 fill-amber-400" />
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0a392c] text-white py-2.5 rounded-full text-sm font-semibold shadow-sm"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
