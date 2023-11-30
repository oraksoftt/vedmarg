import { ALLINONESOLUTION_PRICING } from "@/constants";

import dynamic from "next/dynamic";
import Button from "../Button";
import Link from "next/link"; 

//const Image = dynamic(() => import("next/image"));
const PageTitleHeader = dynamic(() => import("../PageTitleHeader"));
const HowToStart = dynamic(() => import("./HowToStart"));

const Pricing = () => {
  return (
    <>
      <PageTitleHeader
        title="Pricing"
        textVariant="text-white"
        bgvariant="bg-black"
      />
      <section className=" flexCenter max-container flex-col gap-5 border-1 py-7">
        <div className="text-center py-4">
          <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[450px]">
            All-In-One
          </h1>
        </div>
        <div className=" text-center">
          <p className="py-1 text-white  text-sm  justify-end break-normal bg-red-700 uppercase">
            {" "}
            Trending
          </p>
          <p className="py-3 text-white    justify-end break-normal bg-sky-500">
            <strong className="text-4xl "> ₹ 11,999 </strong>
            <br /> per year
          </p>

          <ul className="px-5  max-w-md divide-y divide-gray-200 dark:divide-gray-700 text-center border border-gray-300  ">
            {ALLINONESOLUTION_PRICING.map((data, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-30    justify-end break-normal">
                      {data.title}
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <li key={"btn"} className="flexCenter  py-1 sm:py-4 ">
              <Link
                href="https://wa.me/917500996633?text=Hi%20Vedmarg%20Team,%20I%20want%20to%20subscribe%20Vedmarg%20ERP.%20My%20name%20is%20"
                target="_blank"
              >
                <Button
                  title="Let's Connect"
                  type="button"
                  variant="btn_blue_ uppercase font-mono text-sm "
                  key={"letsconnect"}
                />
              </Link>
            </li>
            {/* <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex-shrink-0">
              <Image className="w-8 h-8 rounded-full" src="" alt="Neil image" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Neil Sims
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                email@flowbite.com
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $320
            </div>
          </div>
        </li> */}
          </ul>
        </div>
      </section>
	  <HowToStart />
    </>
  );
};

export default Pricing;
