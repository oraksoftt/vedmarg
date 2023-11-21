 
'use client'
import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { RECENT_UPDATES } from '@/constants';
import Image from 'next/image';

const RecentUpdates = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    // Update slidesToShow based on screen size
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Small screens
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Medium screens
      } else {
        setSlidesToShow(3); // Large screens
      }
    };

    updateSlidesToShow();

    // Event listener for window resize
    window.addEventListener('resize', updateSlidesToShow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,  
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
            <Slider {...settings}>
              {RECENT_UPDATES.map((value, index) => (
                <div key={index} className="py-2 pl-2 pr-2">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
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
