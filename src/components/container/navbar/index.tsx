import Image from "next/image";
import React from "react";
import SideMenu from "./side-menu";

const Navbar: React.FC = () => {
  return (
    <header className="py-5 px-5 md:px-12 w-screen bg-secondary flex justify-between items-center">
      <div className="flex items-center jusify-center gap-2">
        <Image src="/assets/logo.png" width={48} height={32} alt="logo" />
        <div className="font-bold text-[#0114d6] md:text-xl">students.tech</div>
      </div>
      <SideMenu />
    </header>
  );
};

export default Navbar;
