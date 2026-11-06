import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Event } from "@/types/event";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { getJwtTokenFromClient } from "@/lib/getJwtTokenFromClient";
import { Spinner } from "@/components/ui/spinner";
const Delete = ({ event }: { event: Event }) => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();
  const handelDelete = async () => {
    setIsLoading(true);
    const token = await getJwtTokenFromClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/delete/${event._id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const result = await res.json();
    if (result.deletedCount > 0) {
      route.refresh();
      setIsLoading(false);
      toast.add({
        type: "success",
        description: "Event delete successfully!",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#b91c1c]  hover:bg-red-50 transition-colors cursor-pointer mt-1">
        {" "}
        <Trash2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" /> Delete
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently from you account
            and our database!
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handelDelete} className={"bg-red-500 "}>
          {isLoading ? (
            <span>
              {" "}
              <Spinner /> Deleting..{" "}
            </span>
          ) : (
            "Delete"
          )}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Delete;
