"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";
export default function SigninPage() {
  const router = useRouter();
  const handelSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fromDataObj = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
      rememberMe?: string;
    };
    const { data, error } = await signIn.email({
      email: fromDataObj.email,
      password: fromDataObj.password,
      rememberMe: fromDataObj.rememberMe === "on" ? true : false,
    });
    if (data?.user) {
      toast.add({
        type: "success",
        description: "Logged in successfully",
      });
      router.push("/");
    } else {
      toast.add({
        type: "error",
        description: error?.message,
      });
    }
  };
  return (
    <section className="dark:bg-[#101812]">
    <div className="px-5  md:mx-0">
        <div className="max-w-[600px] dark:bg-[#1B271E] bg-[#F7F6EF]  mx-auto my-8 md:my-12 lg:my-16 border border-gray-200 rounded-xl p-6 md:p-8 lg:p-12 ">
        <form onSubmit={handelSignIn}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                required
                type="email"
                placeholder="name@example.com"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                required
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                title="Must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
              />
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="terms-checkbox-basic"
                name="rememberMe"
                className={"border border-green-600"}
              />
              <FieldLabel
                htmlFor="terms-checkbox-basic"
                className="text-gray-500"
              >
                Remember me
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Button type="reset" variant="outline">
                Reset
              </Button>
              <Button type="submit" className="bg-[#189346]">
                Submit
              </Button>
            </Field>
          </FieldGroup>
        </form>
        <div className="border-t border-gray-400 pt-5 mt-5">
          <button className="w-full bg-[#189346] cursor-pointer rounded-xl text-white p-3">
            <FaGoogle className="inline" /> Google
          </button>
        </div>
        <p className="text-[13px] text-center mt-5">
          Don&apos;t have an account?{" "}
          <span className="text-green-600 hover:underline">
            <Link href={"/signup"}> SignUp </Link>
          </span>
        </p>
      </div>
    </div>
    </section>
  );
}
