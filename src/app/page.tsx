"use client";

import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/container/navbar/index";
import Welcome from "@/components/container/welcome/index";
import Dashboard from "@/components/container/welcome/dashboard";
import Registration from "@/components/container/welcome/registration";

export default function Home() {

  const { isSignedIn, user } = useUser();

  return (
    <div>
      <Navbar></Navbar>
      {/* {isSignedIn ? (<Dashboard user={user.firstName} />) : (<Welcome />)} */}
      {isSignedIn ? (<Registration />) : (<Welcome />)}
    </div>
  )
}
