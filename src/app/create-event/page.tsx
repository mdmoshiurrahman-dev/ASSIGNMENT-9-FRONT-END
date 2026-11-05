import CreateEventBanner from "@/components/create-event/CreateEventBanner";
import CreateEventFrom from "@/components/create-event/CreateEventFrom";
export default function CreateEventPage() {
  return (
    <div className="min-h-screen dark:bg-[#101812] transition duration-300 bg-[#f8faf8] text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col justify-between">
      <div>
        <CreateEventBanner />

        <CreateEventFrom />
      </div>
    </div>
  );
}
