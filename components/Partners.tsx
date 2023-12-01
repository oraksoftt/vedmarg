import { HOW_TO_START } from "@/constants";

import dynamic from "next/dynamic";
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
      <div className="  padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="py-5 mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <Image src="/star.svg" alt="icon" width={80} height={100} />
              </div>

              <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
                Reputed Business
              </p>
            </li>
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <Image src="/inr.svg" alt="icon" width={50} height={100} />
              </div>

              <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
              Lifetime Revenue
              </p>
            </li>
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <Image src="/headphone.svg" alt="icon" width={50} height={100} />
              </div>

              <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
              24x7 Support
              </p>
            </li>
            <li className="  flex w-80    flex-1 flex-col items-center   border-2 drop-shadow-lg rounded-lg ...">
              <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                <Image src="/car.svg" alt="icon" width={50} height={100} />
              </div>

              <p className="text-center regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
              Work Anywhere
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pricing;
