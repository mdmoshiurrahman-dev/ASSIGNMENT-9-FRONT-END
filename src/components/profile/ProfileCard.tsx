"use client";
import Image from "next/image";
import React from "react";
import { CalendarDays, Pencil, Users } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { IoPerson } from "react-icons/io5";
import { IEventRes } from "@/types/event";
const ProfileCard = ({ event }: { event: IEventRes }) => {
  const session = useSession();
  const user = session.data?.user;
  const stats = [
    {
      label: "Events Created",
      value: event?.length ?? 0,
      icon: <CalendarDays className="w-5 h-5" strokeWidth={2.2} />,
    },
    {
      label: "Events Joined",
      value: event.length || 0,
      icon: <Users className="w-5 h-5" strokeWidth={2.2} />,
    },
  ];
  const name = user?.name;
  const avatar = user?.image || "";
  const handleEditProfile = () => {
    toast.add({
      type: "info",
      description: "Profile editing is coming soon.",
    });
  };

  return (
    <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* Profile Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-[#e7f3d3]">
        {/* Decorative organic shapes */}
        <svg
          className="absolute -top-16 -left-10 w-72 h-72 text-[#dcefc0] pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M42.7 -65.2C55.9 -56.8 67.4 -45.6 73.6 -31.7C79.8 -17.8 80.7 -1.2 76.9 13.6C73.1 28.4 64.6 41.4 53.1 51.6C41.6 61.8 27.1 69.2 11.2 73.4C-4.7 77.6 -22 78.6 -36.4 72.1C-50.8 65.6 -62.3 51.6 -69.4 35.7C-76.5 19.8 -79.2 2 -76.1 -14.2C-73 -30.4 -64.1 -45 -51.4 -53.7C-38.7 -62.4 -22.2 -65.2 -5.6 -67.9C11 -70.6 27.7 -73.2 42.7 -65.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute -bottom-24 right-10 w-80 h-80 text-[#dff0c4] pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M39.5 -62.1C51.4 -54.3 61.5 -43.7 68.2 -30.6C74.9 -17.5 78.2 -1.9 75.5 12.4C72.8 26.7 64.1 39.7 52.6 49.9C41.1 60.1 26.8 67.5 11.4 71.6C-4 75.7 -20.5 76.5 -34.9 70.9C-49.3 65.3 -61.6 53.3 -68.9 38.6C-76.2 23.9 -78.5 6.5 -75.1 -9.4C-71.7 -25.3 -62.6 -39.7 -50.3 -47.9C-38 -56.1 -22.5 -58.1 -6.7 -60.3C9.1 -62.5 27.6 -70 39.5 -62.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10">
          <div className="shrink-0 w-32 flex justify-center items-center h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white overflow-hidden shadow-sm bg-emerald-100">
            {user?.image ? (
              <Image
                src={avatar}
                alt={name || "user logo"}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            ) : (
              <IoPerson className="md:size-25 size-17.5 lg:size-40" />
            )}
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                {name}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 max-w-xl">
              {user?.email}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-sm text-zinc-600">
              <span className="w-px h-4 bg-zinc-400/60" aria-hidden="true" />
              <span>
                Member since-{" "}
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "N/A"}
              </span>
            </div>

            <button
              type="button"
              onClick={handleEditProfile}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-white/80 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-all hover:bg-white hover:shadow-sm active:scale-[0.98]"
            >
              <Pencil className="w-4 h-4" strokeWidth={2.2} />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl border border-zinc-200/70 bg-white p-4 sm:p-5 shadow-xs"
          >
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#eef7dc] text-[#4d7c0f]">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-zinc-500">{stat.label}</p>
              <p className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileCard;
