"use client";
import { LAUNCH_STUDENT_APP } from "@/constants";

import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));

const LaunchStudentApp = () => {
  return (
    <section className="  flex-col flexCenter overflow-hidden py-7">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col lg:w-lg">
          <ul className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {LAUNCH_STUDENT_APP.map((data, index) => (
              <>
                <Link href={data.URL} key={index} target="_blank">
                  <li
                    key={index}
                    className="flex w-full flex-1 flex-col items-center"
                  >
                    <div className="  p-3 lg:p-3  flex items-center justify-center">
                      <Image
                        key={index}
                        src={data.image}
                        alt=""
                        width={400}
                        height={100}
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

export default LaunchStudentApp;
