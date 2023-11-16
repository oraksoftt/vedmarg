import Image from "next/image";
import slider_style from "./Slider.module.css";

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
        <div className={slider_style.slider } >
          <div className={slider_style.slideTrack}>
            <div className={slider_style.slide}>
              <div className="rounded-tr-lg rounded-bl-lg py-50 pl-2 pr-5 rounded-3xl  mb-5 lg:w-48">
                <Image
                  src="/admin-login-management-1.png"
                  alt="admin-login-management"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover "
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Admit-Card-Details.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Class-Timetable.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Login-with-OTP.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Login-with-Password.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Pay-Due-Fees-Online.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Real-Time-Notifications.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Student-Dashboard.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={slider_style.slide}>
              <div className="  rounded-tr-lg rounded-bl-lg py-10 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
                <Image
                  src="/Transport-Details.png"
                  alt="meter"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------- */}
    </section>
  );
};

export default DownloadsSlider;
