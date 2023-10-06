import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Login() {
  const tip = "Don't have account?";
  return (
    <div className="flex flex-col items-center h-screen">
      <Icon width="40" icon="ri:openai-fill" className="mt-10" />
      <h1 className="mt-20 font-semibold text-3xl text-center">Welcome back</h1>
      <Input placeholder="Email address" className="mt-6 w-80" />
      <Button className="w-80 mt-4">Continue</Button>
      <div className="text-gray-500 mt-6">
        {tip}
        <Link
          href="/account/sign-up"
          className="text-primary ml-2 cursor-pointer"
        >
          Sign up
        </Link>
      </div>
      <div className="flex-1"></div>
      <div className="mb-4">
        <Link href="/terms" className="cursor-pointer mr-2 text-primary">
          Terms of use
        </Link>
        |
        <Link
          href="/terms/privacy"
          className="cursor-pointer ml-2 text-primary"
        >
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
