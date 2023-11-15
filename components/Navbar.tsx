import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return ( 
    <nav className="shadow-md flexBetween max-container padding-container relative z-30 py-2">      
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
          <Link
          href={link.href}
          key={link.key}
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
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

      <Image
        src="menu.svg"
        alt="menu"
        width={25}
        height={25}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
        
 
  );
};

export default Navbar;
