'use client'

import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <SignUp />
      <Button
        onClick={() => router.push("/")}
        className="mt-10 bg-[#FB0606] hover:bg-white hover:text-[#FB0606]">
        Cancel
      </Button>
    </div>
  );
}
