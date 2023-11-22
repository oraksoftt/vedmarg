import Image from "next/image";
import YoutubeVideoEmbed from "./YoutubeVideoEmbed";
import { MOST_TRUSTED_LEFT, MOST_TRUSTED_RIGHT } from "@/constants";

const AllinOneSolution = () => {
  return (
    <section className="  flex-col flexCenter overflow-hidden py-7">
      <div className="  max-container padding-container flex flex-col gap-2 py-10   lg:py-2 xl:flex-row">
        <YoutubeVideoEmbed videoid="T5PV20-g-Ts" height={400} width={800} />
        <div className="w-full max-w-md p-4  rounded-lg   sm:p-8 ">
          <div className="text-center py-4">
            <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[450px]">
              All in one Solution
            </h1>
          </div>
          <p className=" text-gray-30  py-3 justify-end">
            Vedmarg allows you to create/add unlimited staff, students and
            teachers. Vedmarg provide unique username and password for each and
            every registered person/account. Everyone can login to their account
            using their username and password on our school management software
          </p>
          <div className="max-container padding-container relative w-full flex justify-end">
            <div className="z-20 flex w-full flex-col lg:w-[100%]">
              <ul className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-5">
                {MOST_TRUSTED_RIGHT.map((data, index) => (
                  <li className="py-1 sm:py-2">
                    <div className="flex  ">
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
      </div>
    </section>
  );
};

export default AllinOneSolution;
