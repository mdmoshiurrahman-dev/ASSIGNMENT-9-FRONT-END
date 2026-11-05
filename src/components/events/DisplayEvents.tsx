import React from "react";
import EventCart from "../home/EventCart";
import { IEventRes } from "@/types/event";

const DisplayEvents = ({ eventData }: { eventData: IEventRes }) => {
  return (
    <div className="grid grid-cols-1 dark:bg-[#101812] p-4 md:grid-cols-2 gap-4 mb-5 md:mb-8 lg:mb-12  lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {eventData.map((e) => (
        <EventCart key={e._id} event={e} />
      ))}
    </div>
  );
};

export default DisplayEvents;
