import { Icon } from "@iconify/react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function AButton({ children, className, href }) {
  return (
    <Link
      href={href}
      className={twMerge(
        "cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white w-full text-center rounded-lg h-14 flex flex-row justify-center items-center font-semibold",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen relative">
      <div className="flex flex-row items-center p-8 absolute left-0 top-0">
        <h1 className="font-bold text-2xl">ChatGPT</h1>
        <span className="inline-block w-6 h-6 bg-black ml-2 rounded-full"></span>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full p-10">
        <h2 className="text-3xl font-bold mb-4">Get started</h2>
        <AButton href="/account/login">Login</AButton>
        <AButton href="/account/sign-up">Sign up</AButton>
      </div>
      <div className="flex flex-row gap-2 items-center absolute bottom-6">
        <Icon width="30" icon="ri:openai-fill" />
        <div>OPEN AI</div>
      </div>
    </div>
  );
}
