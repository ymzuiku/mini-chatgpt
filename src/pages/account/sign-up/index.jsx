import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SignUp() {
  const tip = "Already have an account?";
  return (
    <div className="flex flex-col items-center h-screen">
      <Icon width="40" icon="ri:openai-fill" className="mt-10" />
      <h1 className="mt-20 font-semibold text-3xl text-center">
        Create your account
      </h1>
      <p className="max-w-sm text-sm text-center mt-2">
        Note that phone verification may be required for signup. Your number
        will only be used to verify your identity for security purposes.
      </p>
      <Input placeholder="Email address" className="mt-6 w-80" />
      <Button className="w-80 mt-4">Continue</Button>
      <div className="text-gray-500 mt-6">
        {tip}
        <Link
          href="/account/login"
          className="text-primary ml-2 cursor-pointer"
        >
          Login
        </Link>
      </div>
      <div className="flex-1"></div>
      <div className="mb-4">
        <Link href="/none" className="cursor-pointer mr-2 text-primary">
          Terms of use
        </Link>
        |
        <Link href="/none" className="cursor-pointer ml-2 text-primary">
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
