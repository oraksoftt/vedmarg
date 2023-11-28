'use client'
import { FEATURES_COMPLETE } from "@/constants";
import Image from "next/image";
import PageTitleHeader from "./PageTitleHeader";
import Button from "./Button";
import Link from "next/link"; 

const Features = () => {
  return (
    <>
      <PageTitleHeader
        title="Features"
        textVariant="text-white"
        bgvariant="bg-black"
      />
      <section className="flex-col flexCenter overflow-hidden   py-7">
        <div className="   text-center py-4">
          <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
            Complete Features
          </h1>
        </div>
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="z-20 flex w-full flex-col lg:w-[100%]">
            <ul className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {FEATURES_COMPLETE.map((feature) => (
                <>
                 
                  {/* <Link  href={`/features/${feature.id}`} key={feature.title} target="_blank"> */}
                  <Link  href='#' key={feature.title} target="_blank">
                    <FeatureItem
                      key={feature.title}
                      title={feature.title}
                      icon={feature.icon}
                      description={feature.description}
                    />
                  </Link>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="  flex-col flexCenter overflow-hidden py-7">
          <Button title="Know All Features" type="button" variant="btn_blue_" />
        </div>
      </section>
    </>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-center">
      <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
        <Image src={icon} alt="icon" width={70} height={70} />
      </div>
      <h2 className="bold-18 lg:bold-23 mt-3 capitalize">{title}</h2>
      <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
