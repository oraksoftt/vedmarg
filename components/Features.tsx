import { FEATURES } from "@/constants";
import Image from "next/image"; 

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden   py-7">
      <div className="   text-center py-4">
        <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
          80+ Modules Available
        </h1>
      </div>
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="mt-5 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div> 
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-center"> {/* Updated: Added items-center */}
      <div className="rounded-full p-3 lg:p-6  flex items-center justify-center"> {/* Updated: Added flex and justify-center */}
        <Image src={icon} alt="icon" width={50} height={50} />
      </div>
      <h2 className="bold-18 lg:bold-23 mt-3 capitalize">{title}</h2>
      <p className="regular-16 mt-3  text-gray-30 lg:mt-[20px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};


export default Features;
