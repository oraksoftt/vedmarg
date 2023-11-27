"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTitleHeader from "./PageTitleHeader";
import News from "./News";

import { ABOUT_SLIDER_PICS } from "@/constants";
import Image from "next/image";
import Team from "./Team";

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,

    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust this for smaller screens
        },
      },
      {
        breakpoint: 642,
        settings: {
          slidesToShow: 0, // Adjust this for smaller screens
        },
      },
    ],
  };

  return (
    <>
      <PageTitleHeader
        title="About Us"
        textVariant="text-white"
        bgvariant="bg-black"
      />
      <section className="bg-neutral-50 flex-col flexCenter overflow-hidden py-7 ">
        <div className=" flexCenter max-container flex-wrap justify-center gap-5 lg:gap-10">
          <div className="max-container padding-container relative w-full flex justify-end">
            <div className="z-20 flex w-full flex-col lg:w-[100%]">
              <ul className="mt-5 grid gap-10 md:grid-cols-1 lg:grid-cols-2 lg:gap-20">
                <li className="flex w-full flex-1 flex-col items-center">
                  <ul className="mt-5 grid gap-10 md:grid-cols-1 lg:grid-cols-1 lg:gap-20">
                    <Slider {...settings}>
                      {ABOUT_SLIDER_PICS.map((value, index) => (
                        <div key={index} className="py-2 pl-2 pr-2 ">
                          <Image
                            src={value.image}
                            alt={value.title}
                            width={1000}
                            height={600}
                            className="h-full w-full object-cover     transition duration-300 ease-in-out hover:opacity-40"
                          />
                        </div>
                      ))}
                    </Slider>
                  </ul>
                </li>
                <li className="flex w-full flex-1 flex-col items-center">
                  <h2 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
                    About Vedmarg
                  </h2>
                  <p className="regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none text-justify">
                    Vedmarg is a flagship product of Menace TechDost Services
                    Private Limited. Vedmarg is a one-stop solution for managing
                    school/college/institutes digitally. It comes with 100+
                    modules and powerful features hosted on cloud servers.
                    Vedmarg is featured on ANI News, The Print, Lokmat Times,
                    Zee5 and trusted by 980+ organisations. Vedmarg is backed-up
                    with a team of 18 professional developers, designers and
                    support executives.
                  </p>
                  <h2 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
                    About TechDost
                  </h2>
                  <p className="regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none text-justify">
                    TechDost is a leading software development company, based in
                    Delhi NCR. It was founded by 3 techy friends in 2017 and it
                    has a long list of clients like KIA, Honda, KN Modi
                    Foundation, Adda52, RMGOE, Nelco Sports, Transform
                    Badminton, and many more. TechDost got 4 awards in different
                    categories at GECL-Awards (2021) at Tula’s Institute,
                    Dehradun, Uttarakhand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <News />
      <section className="  flex-col flexCenter overflow-hidden py-7">
        <div className="text-center py-4">
           <p className=" text-blue-500   font-semibold  lg:font-semibold xl:max-w-[450px]">
            A Long Journey
          </p>
          <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[450px]">
            How We Started
          </h1>
        </div>
        <div className="  max-container padding-container flex flex-col gap-10 py-10   lg:py-10 xl:flex-row">
          <div className="w-full max-w-md p-4  rounded-lg   sm:p-8 ">
            <div className="flow-root"></div>
          </div>
        </div>
      </section>
      <Team />
    </>
  );
};

export default AboutUs;
