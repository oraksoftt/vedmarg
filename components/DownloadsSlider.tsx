import Image from "next/image";
import slider_style from "./Slider.module.css";
import { DOWNLOAD_SLIDER } from "@/constants";

//import slider_style from "@/components/Slider.Module.css";

const DownloadsSlider = () => {
  return (
    <section className=" flexCenter max-container flex-col ">
      <div className="text-center py-10">
        <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
          All-In-One Solution
        </h1>
      </div>
      <div className="flexCenter max-container flex-wrap justify-center gap-5 lg:gap-10 py-14 ">
        <div className={slider_style.slider}>
          <div className={slider_style.slideTrack}>
            {DOWNLOAD_SLIDER.map((imagePath, index) => (
              <div className={slider_style.slide}>
                <div className=" rounded-tr-lg rounded-bl-lg py-50 pl-2 pr-5 rounded-3xl  mb-5 lg:w-48">
                  <Image
                    key={index}
                    src={imagePath}
                    alt="meter"
                    width={140}
                    height={140}
                    className="  h-full w-full object-cover "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
    </section>
  );
};

export default DownloadsSlider;
