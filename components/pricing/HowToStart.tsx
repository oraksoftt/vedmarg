import { ALLINONESOLUTION_PRICING, HOW_TO_START } from "@/constants";
import dynamic from "next/dynamic";
import Button from "../Button";
import Link from "next/link";

const PageTitleHeader = dynamic(() => import("../PageTitleHeader"));

const Pricing = () => {
  return (
    <>
      <section
        className={`bg-blue-400   max-container overflow-hidden py-7 lg:px-28 sm:px-10  flex flex-col items-center justify-between md:flex-row relative`}
      >
        <div className="text-center py-4">
          <p className="py-1 text-gray-100 text-sm xl:max-w-xl">
            Still Having Any Query?
          </p>
          <h1 className="text-gray-100 text-2xl font-semibold lg:font-bold xl:max-w-xl">
            We Are Always Up!
          </h1>
        </div>
        <Button
          icon=""
          title="Live Chat"
          type="button"
          variant="font-mono text-sm  "
          key={"livechat"}
        />
      </section>

      <section className="flexCenter max-container flex-col gap-5 border-1 py-7">
        <div className="text-center py-4">
          <p className="py-1 text-gray-30 text-sm justify-end break-normal">
            Get Started With Vedmarg
          </p>
          <h1 className="text-2xl font-semibold lg:font-bold xl:max-w-[450px]">
            How to Start ?
          </h1>
        </div>
 
        <div className="text-right">
          {" "}
          {/* Adjusted for right alignment */}
          <ul className="px-5   divide-y divide-gray-200 dark:divide-gray-700 text-left border border-gray-300">
            {HOW_TO_START.map((data, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-left space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    {data.Header ? ( // Check if data.head is not null
                      <p className="text-gray-800 font-bold">{data.Header}</p> // Render bold text
                    ) : (
                      <p className="text-gray-30 justify-end break-normal">
                        {/* {data.Header ? index=0 : index + 1}. {data.title} */}
                        {data.Header !='' ? '' : index + 1}. {data.title}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pricing;
