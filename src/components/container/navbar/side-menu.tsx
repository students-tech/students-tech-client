"use client";

import { Button } from "@/components/ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SideMenu: React.FC = () => {
  const [sliderState, setSliderState] = useState<boolean>(false);
  return (
    <div>
      <div className="ml-auto flex h-full justify-between items-center gap-8 hidden md:block">
        <NavButton />
      </div>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setSliderState(true)}
      >
        <Image
          src="/assets/hamburger.png"
          width={30}
          height={30}
          alt="hamburger icon"
        />
      </div>
      {sliderState && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-secondary p-8 flex flex-col gap-4">
          <Image
            src="/assets/cross.png"
            width={30}
            height={30}
            alt="cross"
            className="ml-auto"
            onClick={() => setSliderState(false)}
          />
          <NavButton />
        </div>
      )}
    </div>
  );
};

const NavButton: React.FC = () => {
  const { isSignedIn, user } = useUser();
  return (
    <>
      <Link href="/register/student/">
        <Button variant="link" className="bg-secondary text-xl">
          Register as Student
        </Button>
      </Link>
      <Button variant="link" className="bg-secondary text-xl">
        Register your Project
      </Button>
      {isSignedIn ? (
        <SignOutButton>
          <Button className="rounded-3xl text-white bg-[#0114d6]">
            Log Out
          </Button>
        </SignOutButton>
      ) : (
        <Link href="/sign-in">
          <Button className="rounded-3xl text-white bg-[#0114d6]">
            Log In
          </Button>
        </Link>
      )}
    </>
  );
};

export default SideMenu;
