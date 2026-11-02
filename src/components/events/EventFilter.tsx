import { IEventRes } from "@/types/event";
import EventFilterSub from "./EventFilterSub";
import { Suspense } from "react";
import EventGridSkeleton from "./skelon/EventGridSkeleton ";

export interface FilterCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

async function EventFilter() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-events`);
  const eventData: IEventRes = await res.json();
  return <EventFilterSub eventData={eventData} />;
}

const EventFilterMain = () => {
  return (
    <Suspense fallback={<EventGridSkeleton/>}>
      <EventFilter />;
    </Suspense>
  );
};

export default EventFilterMain;
