import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ImageIcon,
  MapPin,
  Pencil,
  Sparkles,
  Tag,
} from "lucide-react";
import { Event } from "@/types/event";
const categories = [
  "Plantation",
  "Donation",
  "Cleanup",
  "Food Drive",
  "Education",
  "Healthcare",
  "Animal Welfare",
  "Community Service",
  "Disaster Relief",
  "Homeless Support",
  "Elderly Care",
  "Mental Health Support",
  "Blood Donation",
  "Mentorship",
  "Childcare Support",
  "Other",
];
const Edit = ({ event }: { event: Event }) => {
  const handelEventEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries()) as {
      event_title: string;
      category: string;
      location: string;
      event_date: string;
      time: string;
      event_cover_image?: string;
      event_description: string;
    };
    const finalData = { ...data, _id: event._id };
    const res = await fetch(`http://localhost:5000/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#1f4e30] hover:bg-[#dcf0d6] transition-colors cursor-pointer">
          <Pencil className="w-3.5 h-3.5 text-[#2d6a4f] shrink-0" /> Edit Event
        </DialogTrigger>
        <DialogContent className="max-w-lg sm:max-w-2xl max-h-[85vh] p-0 flex flex-col overflow-hidden">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Event Information</span>
            </DialogTitle>
            <DialogDescription>
              Fill in the necessary information below to organize your social
              impact event.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6 pb-6 pr-4 space-y-6">
            <form className="space-y-6" onSubmit={handelEventEdit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Event Title */}
                <div className="md:col-span-2 space-y-1.5">
                  <label
                    htmlFor="title"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Event Title <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      defaultValue={event.event_title}
                      type="text"
                      id="title"
                      name="event_title"
                      required
                      placeholder="e.g. Winter Blanket Distribution Drive"
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="category"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      defaultValue={event.category}
                      id="category"
                      name="category"
                      required
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="location"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Location / Area <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      defaultValue={event.location}
                      type="text"
                      id="location"
                      name="location"
                      required
                      placeholder="e.g. Dhanmondi, Dhaka"
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="date"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Event Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      onFocus={(e) => {
                        e.target.min = new Date().toISOString().split("T")[0];
                      }}
                      defaultValue={event.event_date}
                      type="date"
                      id="date"
                      name="event_date"
                      required
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="time"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Time <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      defaultValue={event.time}
                      type="time"
                      id="time"
                      name="time"
                      required
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Image URL / Banner */}
                <div className="space-y-1.5 md:col-span-2">
                  <label
                    htmlFor="imageUrl"
                    className="block text-xs sm:text-sm font-semibold text-zinc-800"
                  >
                    Event Cover Image URL
                  </label>
                  <div className="relative">
                    <ImageIcon className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      defaultValue={event.event_cover_image}
                      type="url"
                      id="imageUrl"
                      name="event_cover_image"
                      placeholder="https://example.com"
                      className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl pl-10 pr-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label
                  htmlFor="description"
                  className="block text-xs sm:text-sm font-semibold text-zinc-800"
                >
                  Event Description <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    defaultValue={event.event_description}
                    id="description"
                    name="event_description"
                    required
                    rows={4}
                    placeholder="Provide details about the event, objectives, what volunteers should bring, and meeting point..."
                    className="w-full bg-zinc-50/80 border border-zinc-200 rounded-xl p-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all resize-y"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Edit;
