import { TEAM_MEMBERS } from "@/constants";
import Image from "next/image";

const Team = () => {
  return (
    <section className="bg-neutral-50 flex-col flexCenter overflow-hidden py-7">
      <div className="text-center py-4">
        <p className=" text-blue-500   font-semibold  lg:font-semibold xl:max-w-[450px]">
          A team of experienced and creative people
        </p>
        <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[450px]">
          Behind Vedmarg
        </h1>
      </div>

      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="mt-5 grid gap-10 md:grid-cols-2 lg:grid-cols-3  ">
            {TEAM_MEMBERS.map((value, index) => (
              <li
                //key={index}
                key={value.Name}
                className="flex w-full flex-1 flex-col items-center"
              >
                <div className="shadow-md p-3 lg:p-6  flex items-center justify-center">
                  <Image
                    src={value.image}
                    alt={value.Name}
                    width={500}
                    height={500}
                  />
                </div>
                <h2 className="bold-18 lg:bold-23 mt-3 capitalize">
                  {value.Name}
                </h2>
                <p className="text-xs lg:text-sm mt-1  text-gray-20 lg:mt-[10px] lg:bg-none">
                  {value.Profession}
                </p>
                {/* Linkedin */}
                <a href={value.Linkedin_URL}  target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mt-1" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: '#246499' }}
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
