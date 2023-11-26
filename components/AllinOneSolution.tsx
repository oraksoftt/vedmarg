import Image from "next/image";
import YoutubeVideoEmbed from "./YoutubeVideoEmbed";
import { ALLINONESOLUTION_LEFT } from "@/constants";
import Button from "./Button";

const AllinOneSolution = () => {
  return (
    <section className="  flex-col flexCenter overflow-hidden py-7">
      <div className="  max-container padding-container flex flex-col gap-2 py-10   lg:py-2 xl:flex-row">
      
          <YoutubeVideoEmbed videoid="T5PV20-g-Ts" height={400} width={700} />
        
        <div className="w-full max-w-md p-4  rounded-lg   sm:p-8 ">
          <div className="text-center py-4">
            <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[450px]">
              All in one Solution
            </h1>
          </div>
          <p className=" text-gray-30  py-3 justify-end break-normal">
            Vedmarg allows you to create/add unlimited staff, students and
            teachers. Vedmarg provide unique username and password for each and
            every registered person/account. Everyone can login to their account
            using their username and password on our school management software
          </p>
          <div className="max-container   relative w-full flex justify-start">
            <div className="z-20 flex w-full flex-col lg:w-[100%]">
              <ul className=" grid   md:grid-cols-1 lg:grid-cols-1 lg:gap-1">
                {ALLINONESOLUTION_LEFT.map((data, index) => (
                  <li className="py-1 sm:py-1">
                    <div className="flex  ">
                      <div className="flex-1 min-w-0  ">
                        <p className="text-center flex gap-3 text-sm text-gray-900 truncate dark:text-white">
                          <Image src={data.icon} alt={data.title} width={30} height={30} />
                           {data.title}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
                <div className="mt-3 flex-col   overflow-hidden "> 
                <Button title="Download App" type={"button"} variant={"btn_blue_"}  />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllinOneSolution;
