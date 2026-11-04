"use client";

import { useSession } from "@/lib/auth-client";
import { FaPeopleRoof } from "react-icons/fa6";
import { toast } from "../ui/toast";
import { EventJoinNeeds } from "@/types/EventJoinRes";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export const JoinEventCard = ({ data }: { data: EventJoinNeeds }) => {
  const [button, setButton] = useState(false);
  const session = useSession();
  const joinEventDetails = {
    event_id: data.event_id,
    participant_email: session.data?.user.email,
  };
  console.log(joinEventDetails);
  const handleJoin = async () => {
    setButton(!button);
    const res = await fetch(`http://localhost:5000/join-event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinEventDetails),
    });
    const result = await res.json();
    if (result.status) {
      toast.add({
        type: "success",
        description: "Successfully joined the event!",
      });
    } else {
      toast.add({
        type: "error",
        description: "You have left this event!",
      });
    }
  };
  const isExits = data?.events?.some((x) => x === data.event_id) || button;

  return (
    <button
      onClick={handleJoin}
      className="px-4 py-2 flex justify-center items-center cursor-pointer lg:px-6 lg:py-3.5 text-[14px] lg:text-[14px] rounded-xl bg-green-600 mt-2 text-white"
    >
      {isExits ? (
        <span>
          <RxCross2 className="inline mr-1" /> Cancel
        </span>
      ) : (
        <span>
          <FaPeopleRoof className="inline mr-1" /> Join Event
        </span>
      )}
    </button>
  );
};

export default JoinEventCard;
