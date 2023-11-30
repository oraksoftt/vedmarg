import { LAUNCH_SCHOOL_ERP } from "@/constants";
 


import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));
 
const LaunchVedmargSchoolERP = () => {
  return (
    <section className="  flex-col flexCenter overflow-hidden py-7">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-lg">
          <ul className="mt-5 grid gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {LAUNCH_SCHOOL_ERP.map((data, index) => (
              <>
                <Link href={data.URL} key={index} target="_blank">
                  <li
                    key={index}
                    className="flex w-full flex-1 flex-col items-center"
                  >
                    <div className="bg-white rounded-tr-lg rounded-bl-lg py-2 pl-2 pr-5 rounded-3xl border shadow-md mb-5 lg:w-64">
                      <Image
                        key={index}
                        src={data.image}
                        alt=""
                        width={500}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </li>
                </Link>
              </>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LaunchVedmargSchoolERP;
