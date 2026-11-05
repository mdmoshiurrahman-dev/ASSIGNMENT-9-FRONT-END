import ProfileCard from "@/components/profile/ProfileCard";
import CreatedEvents from "@/components/profile/create/CreatedEvents";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Suspense } from "react";
import ProfileSkeleton from "@/components/profile/skeleton/ProfileSkeleton";
import { IEventRes } from "@/types/event";
import JoinedEvents from "../../components/profile/join/JoinedEvents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getJwtTokenFromServer } from "@/lib/getJwtTokenFromServer";
async function ProfileContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const token = await getJwtTokenFromServer();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${apiUrl}/get-created-events/${session?.user.email}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const createdEventData: IEventRes = await res.json();

  const joinedDataRes = await fetch(
    `${apiUrl}/get-joined-event/${session?.user.email}`,{
      headers:{
        authorization:`Bearer ${token}`
      }
    }
  );
  const joinedData: IEventRes = await joinedDataRes?.json();

  return (
    <>
      <ProfileCard />
      <Tabs defaultValue="create" className="w-full">
        <TabsList variant={"line"} className={"container mx-auto"}>
          <TabsTrigger value="create" className={"text-xl font-bold"}>
            Created
          </TabsTrigger>
          <TabsTrigger value="joined" className={"text-xl font-bold"}>
            Joined
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <CreatedEvents createdEventData={createdEventData} />
        </TabsContent>
        <TabsContent value="joined">
          <JoinedEvents events={joinedData} />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen dark:bg-[#101812] transition duration-300 bg-[#fcfbf9]/60">
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileContent />
      </Suspense>
    </div>
  );
}
