import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Students.Tech",
  description: "Apply to project now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} w-screen h-screen flex justify-center items-center`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
