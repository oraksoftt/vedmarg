 'use client'
 
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { use, useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  
  const isClickedHandler = () => {
  
    setIsClick(!isClick);
     
  }
  const hideMenu = () => {
    setIsClick(false); // Function to hide the menu
  };
  return (
    <nav className="shadow-md flexBetween   padding-container relative z-30 py-2">
      <Link href="/">
        <Image
          src="/vedmarg-logo-dark.png"
          alt="logo"
          width={140}
          height={90}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li>
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        {
          <Button
            type="button"
            title=" DASHBOARD "
            icon="/user.svg"
            variant="bg-blue-500"
          />
        }
      </div>

      
      <div className="lg:hidden">
      <Image
          src={isClick ? "/close.svg" : "/menu.svg"} // Toggle between menu and close icon
          alt={isClick ? "close" : "menu"}
          width={25}
          height={25}
          className="inline-block cursor-pointer"
          onClick={isClickedHandler}
        /> 
        {isClick && (
          <ul className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 z-20">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="text-center">
                <Link href={link.href}  onClick={hideMenu}
                    className="block py-2 hover:bg-gray-200">{link.label} 
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
