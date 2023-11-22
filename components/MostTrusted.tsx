import Image from "next/image";
import YoutubeVideoEmbed from "./YoutubeVideoEmbed";
import { MOST_TRUSTED_LEFT, MOST_TRUSTED_RIGHT } from "@/constants";

const MostTrusted = () => {
  return (
    <section className="  flex-col flexCenter overflow-hidden py-7">
      <div className="text-center py-4">
        <p className=" text-blue-500   font-semibold  lg:font-semibold xl:max-w-[450px]">
          Why Vedmarg is Most Trusted School ERP Software ?
        </p>
        <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[450px]">
          School Management Software
        </h1>
      </div>
      <div className="  max-container padding-container flex flex-col gap-10 py-10   lg:py-10 xl:flex-row">
        <div className="w-full max-w-md p-4  rounded-lg   sm:p-8 ">
          <div className="flow-root">
            <ul role="list">
              {MOST_TRUSTED_LEFT.map((data, index) => (
                <li className="py-1 sm:py-2">
                  <div className="flex  ">
                    <div className="flex-shrink-0">
                      <div className="  bg-blue-500 rounded-full ...">
                        <Image
                          className="w-12 h-12 rounded-full py-3"
                          src={data.icon}
                          alt={data.title}
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                        {data.title}
                      </p>
                      {/* <p className=" regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none text-sm   truncate dark:text-gray-400"> */}
                      <p className=" regular-16 mt-3 text-gray-30 lg:mt-[20px] lg:bg-none text-sm max-h-24 overflow-hidden lg:max-h-none lg:overflow-visible dark:text-gray-400">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <YoutubeVideoEmbed videoid="T5PV20-g-Ts" height={400} width={800} />
        <div className="w-full max-w-md p-4  rounded-lg   sm:p-8 ">
          <div className="flow-root">
            <ul role="list">
              {MOST_TRUSTED_RIGHT.map((data, index) => (
                <li className="py-1 sm:py-2">
                  <div className="flex  ">
                    <div className="flex-shrink-0">
                      <div className="  bg-blue-500 rounded-full ...">
                        <Image
                          className="w-12 h-12 rounded-full py-3"
                          src={data.icon}
                          alt={data.title}
                          width={10}
                          height={10}
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                        {data.title}
                      </p>
                      {/* <p className=" regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none text-sm   truncate dark:text-gray-400"> */}
                      <p className=" regular-16 mt-3 text-gray-30 lg:mt-[20px] lg:bg-none text-sm max-h-24 overflow-hidden lg:max-h-none lg:overflow-visible dark:text-gray-400">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostTrusted;
