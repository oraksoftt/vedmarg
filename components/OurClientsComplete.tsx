import { OUR_CLIENTS_COMPLETE } from "@/constants";

import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"));
const PageTitleHeader = dynamic(() => import("./PageTitleHeader"));

const OurClientsComplete = () => {
  return (
    <>
      <PageTitleHeader
        title="Our Clients"
        textVariant="text-white"
        bgvariant="bg-black"
      />
      <section className=" flexCenter max-container flex-col py-7">
        <div className="   grid  gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {OUR_CLIENTS_COMPLETE.map((imagePath, index) => (
            <div className="bg-white  py-2 pl-2 pr-5   border shadow-md mb-5 lg:w-64 ">
              <Image
                key={index}
                src={imagePath}
                alt="meter"
                width={140}
                height={140}
                className=" orakimage h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurClientsComplete;
