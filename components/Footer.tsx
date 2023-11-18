import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterSocialMediaIcons from "./FooterSocialMediaIcons";

const Footer = () => {
  return (
    <footer className=" flexCenter max-max-container flex-col pt-7   bg-black  ">
      <div className="padding-container max-container flex w-full flex-col gap-5">
        <div className="flex flex-col items-start justify-center gap-[5%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/vedmarg-logo-light.png"
              alt="logo"
              width={200}
              height={200}
            />
          </Link>
        

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30 items-center">
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className="">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap text-gray-10 text-justify">
                        {link.label}:
                      </p>
                      <p className="medium-14 whitespace-nowrap text-gray-30">
                        {link.value}
                      </p>
                    </div>
                  ))}
                </FooterColumn>
              </div>

              <FooterSocialMediaIcons />
            </div>
          </div>
        </div>

        <div className=" borderTopLine" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Matiullah Zahir | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className=" flexCenter max-container flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-white">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
