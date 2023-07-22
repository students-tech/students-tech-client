'use client'

import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Page() {
  return <SignUp />;
}
