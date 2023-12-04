import { ALLINONESOLUTION_PRICING, PARTNERSHIP_BENEFITS } from "@/constants";
import dynamic from "next/dynamic";
import Button from "../Button";
import Link from "next/link";

const PageTitleHeader = dynamic(() => import("../PageTitleHeader"));

const Pricing = () => {
  return (
    <>
      <section className=" padding-container  max-container flex-col gap-5 border-1 py-7">
        <div className="text-center py-4">
          <p className="py-1 text-gray-30 text-sm justify-end break-normal">
            We Care For You
          </p>
          <p className="text-center text-2xl font-semibold lg:font-bold xl:max-w-full">
            Partnership Benefits
          </p>
        </div>

        <div className="text-right">
          {" "}
          <ul className="px-5   divide-y divide-gray-200 dark:divide-gray-700 text-left border border-gray-300">
            {PARTNERSHIP_BENEFITS.map((data, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-left space-x-4 rtl:space-x-reverse">
                  <div className="flex  ">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#000000"
                        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                      />
                    </svg>   
                    
                  </div>
                  <div className="flex min-w-full">
                     
                    <p className=" pl-5 flextext-gray-30 justify-end break-normal">
                      {data.title}
                    </p>
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
