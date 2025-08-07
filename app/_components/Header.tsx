import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const menuOptions = [
  { name: "Home", link: "/" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
];
function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/*logo*/}
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
        <h2 className="font-bold text-3xl">Globe Trail</h2>
      </div>

      {/*menu*/}
      <div className="flex gap-9 items-center ">
        {menuOptions.map((menu, index) => (
          <a key={menu.name} href={menu.link}>
            <h2 className="text-lg hover:scale-105 transition-all duration-300 hover:text-primary">
              {menu.name}
            </h2>
          </a>
        ))}
      </div>
      {/*get started*/}
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
