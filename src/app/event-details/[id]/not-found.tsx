import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="text-2xl font-bold text-zinc-900 mb-2">Event Not Found</h2>
      <p className="text-zinc-500 mb-6 max-w-md">
        The event you are looking for does not exist or may have been removed.
      </p>
      <Link
        href="/events"
        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Browse All Events</span>
      </Link>
    </div>
  );
};

export default notFound;
