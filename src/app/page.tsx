"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Navbar from "@/components/container/navbar/index";

export default function Home() {
  // const router = useRouter();
  // const { isSignedIn, user } = useUser();

  // return (
  //   <div className="w-full h-full flex flex-col justify-center items-center gap-4">
  //     <p className="text-xl font-bold">Hello {user.firstName}</p>
  //     <SignOutButton>
  //       <Button className="bg-primary" onClick={() => router.push("/sign-in")}>
  //         Sign Out
  //       </Button>
  //     </SignOutButton>
  //   </div>
  // );
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}
