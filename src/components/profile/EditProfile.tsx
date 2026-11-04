import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateUser, useSession } from "@/lib/auth-client";
import { Pencil } from "lucide-react";
import { toast } from "../ui/toast";
export function EditProfile() {
  const session = useSession();
  const handelUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(fromData.entries()) as {
      name: string;
      image: string;
    };
    const { data, error } = await updateUser({
      ...newData,
    });
    if (data?.status) {
      toast.add({
        type: "success",
        description: "Update profile successfully!",
      });
    }
    if (error) {
      toast.add({
        type: "error",
        description: error.message,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-800/80 bg-white/80 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-all hover:bg-white hover:shadow-sm active:scale-[0.98]"
          >
            <Pencil className="w-4 h-4" strokeWidth={2.2} />
            Edit Profile
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handelUpdateProfile}>
          <FieldGroup>
            <Field className="my-2">
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue={`${session.data?.user.name}`}
              />
            </Field>
            <Field className="my-2">
              <Label htmlFor="image">Image</Label>
              <Input
                type="url"
                id="image"
                name="image"
                defaultValue={`${session.data?.user.image}`}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <DialogClose render={<Button type="submit">Save changes</Button>} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
