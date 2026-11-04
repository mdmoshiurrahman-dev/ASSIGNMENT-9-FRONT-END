import { Calendar, } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center py-12 px-4 rounded-3xl bg-white border border-zinc-200/80 shadow-xs max-w-lg mx-auto">
      <Calendar className="w-12 h-12 mx-auto text-zinc-400 mb-3" />
      <h3 className="text-lg font-bold text-zinc-900 mb-1">
        No Events Created Yet
      </h3>
      <p className="text-sm text-zinc-600 mb-5">
        Host your own community initiative and invite volunteers to join!
      </p>
    </div>
  );
};

export default NotFound;
