import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { isEmail } from "@/utils/is-email";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [_error, setError] = useState("");
  const error = email ? _error : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!isEmail(email)) {
      setError("Email is valid");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then((v) => v.json());

    console.log("--debug--res", res);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <Icon width="40" icon="ri:openai-fill" className="mt-10" />
      <h1 className="mt-20 font-semibold text-3xl text-center">Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={setEmail}
          placeholder="Email address"
          className="mt-6 w-80"
        />
        {error && <p className="p-2 text-red-500">{error}</p>}
        <Button type="submit" className="w-80 mt-4">
          Continue
        </Button>
      </form>
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
