import { OUR_CLIENTS } from "@/constants";
import Image from "next/image";

const OurClients = () => {
  return (
    <section className=" flexCenter max-container flex-col py-7">
      <div className="text-center py-4">
        <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
          Our Clients
        </h1>
      </div>
      <div className="flexCenter max-container flex-wrap justify-center gap-5 lg:gap-10">
        {OUR_CLIENTS.map((imagePath, index) => (
          <div className="  rounded-tr-lg rounded-bl-lg py-2 pl-2 pr-5 rounded-3xl   mb-5 lg:w-48">
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
  );
};

export default OurClients;
