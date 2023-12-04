import { HOW_TO_START } from "@/constants";

import dynamic from "next/dynamic";
import PartnershipBenefits from "./pricing/PartnershipBenefits";
import BecomeAPartner from "./pricing/BecomeAPartner";
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));
//const Image = dynamic(() => import("next/image"));
const PageTitleHeader = dynamic(() => import("./PageTitleHeader"));

const Pricing = () => {
  return (
    <>
      <PageTitleHeader
        title="Become a Partner"
        textVariant="text-white"
        bgvariant="bg-black"
      />
      <section className="flex-col flexCenter overflow-hidden   py-7">
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="z-20 flex w-full flex-col lg:w-[100%]">
            <ul className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-5">
              <li className="flex w-full flex-1 flex-col text-left mt-10">
                <div className=" px-5 py-4">
                  <h1 className="text-2xl font-semibold lg:font-bold xl:max-w-xl">
                    Let's Join Hands
                  </h1>
                </div>
                <div className="text-left">
                  <ul className="px-5   divide-y     ">
                    <li className="py-3 sm:py-4 ">
                      <div className="flex items-left space-x-4 rtl:space-x-reverse">
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-800  break-all ... ">
                            We want our partners to be trusted solution
                            providers for their customers. Our partnerships
                            program is open to any organization or individual
                            that shares our passion for customers.
                            <br />
                            <br /> With flexible terms, packages and affordable
                            pricing offer additional revenue streams to your
                            business.
                            <br />
                            <br /> We are always open to have new partners in
                            our network.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="py-3 px-5 flex w-full flex-1 flex-col items-center">
                <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                  <Image
                    src="/become-partner-logo-vedmarg-school-management-software-e1684559461954.png"
                    alt="Admin App on Play Store"
                    width={600}
                    height={50}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="max-container  padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="py-5 mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="50"
                  viewBox="0 0 576 512"
                >
                  
                  <path   fill="#478bff"  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>

              <p className="text-center regular-16 py-2  text-gray-30 lg:mt-[20px] lg:bg-none">
                Reputed Business
              </p>
            </li>
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="50"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="#478bff"
                    d="M308 96c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44v44.7c0 6.6 5.4 12 12 12h85.3c27.3 0 48.3 10 61 27.3H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h158.8c-6.2 36.1-33 58.6-74.8 58.6H12c-6.6 0-12 5.4-12 12v53c0 3.3 1.4 6.5 3.9 8.8l165.1 152.4a12 12 0 0 0 8.1 3.2h82.6c10.9 0 16.2-13.4 8.1-20.8L116.9 319.9c76.5-2.3 131.1-53.4 138.3-127.9H308c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-58.7c-3.5-11.5-8.3-22.2-14.3-32H308z"
                  />
                </svg>
              </div>

              <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
                Lifetime Revenue
              </p>
            </li>
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="50"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#478bff"
                    d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
                  />
                </svg>
              </div>

              <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
                24x7 Support
              </p>
            </li>
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50"
                  width="50"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#478bff"
                    d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                  />
                </svg>
              </div>

              <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
                Work Anywhere
              </p>
            </li>
          </ul>
        </div>
      </div>
      <PartnershipBenefits />
    <BecomeAPartner />
    </>
  );
};

export default Pricing;
