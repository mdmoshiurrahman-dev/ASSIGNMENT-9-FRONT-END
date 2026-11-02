"use client";

import { FaPeopleRoof } from "react-icons/fa6";

export const JoinEventCard = () => {
  return (
    <button className="px-4 py-2 flex justify-center items-center gap-2 cursor-pointer lg:px-6 lg:py-3.5 text-[14px] lg:text-[14px] rounded-xl bg-green-600 mt-2 text-white">
      <FaPeopleRoof className="inline" /> Join Event
    </button>
  );
};

export default JoinEventCard;
