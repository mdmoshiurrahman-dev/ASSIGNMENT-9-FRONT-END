import { toast } from "@/components/ui/toast";
import { useSession } from "@/lib/auth-client";
import { Event } from "@/types/event";
import { Clock, MapPin, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoPerson } from "react-icons/io5";

const JoinedCart = ({ event }: { event: Event }) => {
  const route = useRouter();
  const eventDate = new Date(event.event_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const session = useSession();

  const deleteJoin = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/delete-joined-event/${session.data?.user.email}/${event._id}`,
      {
        method: "DELETE",
      },
    );

    const result = await res.json();
    if (result.modifiedCount > 0) {
      toast.add({
        type: "success",
        description: "Removed Successfully!",
      });
      route.refresh();
    }
  };

  return (
    <div
      key={event._id}
      className="group bg-white dark:bg-[#1B271E] rounded-3xl p-3.5 sm:p-4 border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={event.event_cover_image}
            alt={event.event_title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <h3
          title={event.event_title}
          className="text-base dark:text-[#F3F5EF] sm:text-[17px] font-bold text-zinc-900 mt-3.5 tracking-tight truncate"
        >
          {event.event_title}
        </h3>
        <div className="mt-1.5">
          <span className="inline-block bg-[#e7f7cf] text-[#3d6e15] text-xs font-semibold px-3 py-0.5 rounded-full">
            {event.category}
          </span>
        </div>

        {/* Date & Time */}
        <div className="flex items-center dark:text-[#B5C0B5] gap-2 text-xs font-medium text-zinc-700 mt-3">
          <Clock className="w-3.5 h-3.5 text-zinc-900 shrink-0 dark:text-white" />
          <span className="truncate">{eventDate}</span>
        </div>

        {/* Location */}
        <div className="flex dark:text-[#B5C0B5] items-center gap-2 text-xs font-medium text-zinc-700 mt-1.5">
          <MapPin className="w-3.5 h-3.5 dark:text-white text-zinc-900 shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>

        {/* Organizer & Status */}
        <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-zinc-100">
          <div className="flex items-center gap-2 min-w-0">
            <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-zinc-200 bg-zinc-100 flex items-center justify-center">
              {event.creator_image ? (
                <Image
                  src={event.creator_image}
                  alt={event.creator_name || "Organizer"}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              ) : (
                <IoPerson className="w-4 h-4 text-zinc-500" />
              )}
            </div>
            <div className="min-w-0">
              <span className="text-[10px] dark:text-white font-bold text-zinc-900 leading-tight block">
                Organizer by
              </span>
              <span className="text-[10px] dark:text-[#B5C0B5] text-zinc-500 leading-tight block truncate max-w-[85px] sm:max-w-[100px]">
                {event.creator_name }
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-4 space-y-2">
        <Link
          href={`/event-details/${event._id}`}
          className="w-full py-2.5 px-4 bg-[#1b4332] hover:bg-[#143527] text-white text-xs sm:text-sm font-semibold rounded-xl text-center block transition-colors shadow-xs active:scale-[0.99]"
        >
          View Details
        </Link>

        <button
          onClick={deleteJoin}
          type="button"
          className="w-full py-2 px-4 dark:bg-[#212020] dark:border-white bg-[#fdf2f2] hover:bg-[#fee2e2] text-[#dc2626] border border-[#fecaca]/70 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors active:scale-[0.99] cursor-pointer disabled:opacity-60"
        >
          <span>Remove from Joined</span>
          <Trash2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
        </button>
      </div>
    </div>
  );
};

export default JoinedCart;
