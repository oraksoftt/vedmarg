"use client"; 

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RECENT_UPDATES } from "@/constants";
import Image from "next/image";

const RecentUpdates = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow:3,// slidesToShow,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-neutral-50 flex-col flexCenter overflow-hidden py-7">
      <div className="text-center py-4">
        <h1 className="text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
          Recent Updates
        </h1>
      </div>

      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="mt-10 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            <Slider {...settings} >
              {RECENT_UPDATES.map((value, index) => (
                <div key={index} className="py-2 pl-2 pr-2">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={1000}
                    height={600}
                    className="h-full w-full object-cover     transition duration-300 ease-in-out hover:opacity-40"
                  />
                  <p className="text-lg lg:text-2xl mt-3 capitalize">
                    {value.title}
                  </p>
                   
                </div>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentUpdates;
