import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function SignupPage() {
  return (
    <section className="px-5 md:mx-0">
      <div className="max-w-[600px] bg-[#F7F6EF]  mx-auto my-8 md:my-12 lg:my-16 border border-gray-200 rounded-xl p-6 md:p-8 lg:p-12 ">
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
              <Input
                id="fieldgroup-name"
                placeholder="Jordan Lee"
                required={true}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
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
            <Field>
              <FieldLabel htmlFor="image">Image Url</FieldLabel>
              <Input
                name="image"
                id="image"
                type="url"
                placeholder="image.example.com"
              />
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
         <p className="text-[13px] text-center text-[#189346] mt-3">
            <Link href={'/signin'}>Already have an account? SignIn </Link>
         </p>
      </div>
    </section>
  );
}
