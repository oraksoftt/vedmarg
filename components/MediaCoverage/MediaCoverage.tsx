"use client";
import dynamic from "next/dynamic";
import PageTitleHeader from "../PageTitleHeader";
const LaunchStudentApp = dynamic(
  () => import("@/components/MediaCoverage/LaunchStudentApp")
);
const LaunchVedmargSchoolERP = dynamic(
  () => import("@/components/MediaCoverage/LaunchVedmargSchoolERP")
);
import { useState } from "react";

const MediaCoverag = () => {
  const [showStudentApp, setShowStudentApp] = useState(true);
  const [showSchoolERP, setShowSchoolERP] = useState(false);

  const handleStudentAppClick = () => {
    if (!showStudentApp) {
      setShowStudentApp(true);
      setShowSchoolERP(false);
    }
  };

  const handleSchoolERPClick = () => {
    if (!showSchoolERP) {
      setShowSchoolERP(true);
      setShowStudentApp(false);
    }
  };
  return (
    <>
      <PageTitleHeader
        title="Media Coverage"
        textVariant="text-white"
        bgvariant="bg-black"
      />

      <ul className="flexCenter  sm:gap-2 xs:gap-1 h-full lg:gap-12 flex flex-col sm:flex-row py-7">
        <li>
          <div className="text-center py-4 ">
            <h1
              onClick={handleStudentAppClick}
              className={`underline-offset-4 relative after:bg-sky-400 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer font-semibold lg:font-bold xl:max-w-xl ${
                showStudentApp ? "after:w-full" : ""
              }`}
              //       className="underline-offset-4 relative after:bg-sky-400 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0
              // hover:after:w-full after:transition-all after:duration-200 cursor-pointer font-semibold lg:font-bold xl:max-w-xl"
            >
              #1 Launch Student App
            </h1>
          </div>
        </li>
        <li>
          <div className="text-center py-4 ">
            <h1
              onClick={handleSchoolERPClick}
              className={`underline-offset-4 relative after:bg-sky-400 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200 cursor-pointer font-semibold lg:font-bold xl:max-w-xl 
              ${showSchoolERP ? "after:w-full" : ""}`}
              //       className="underline-offset-4 relative after:bg-sky-400 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0
              // hover:after:w-full after:transition-all after:duration-200 cursor-pointer font-semibold lg:font-bold xl:max-w-xl"
            >
              #2 Launch Vedmarg School ERP
            </h1>
          </div>
        </li>
      </ul>
      <ul className="flexCenter  sm:gap-2 xs:gap-1 h-full lg:gap-12 flex flex-col sm:flex-row">
        {/* <li>{showStudentApp && <LaunchStudentApp />}</li>
        <li>{showSchoolERP && <LaunchVedmargSchoolERP />}</li> */}
        <li>{showStudentApp && !showSchoolERP && <LaunchStudentApp />}</li>
        <li>
          {showSchoolERP && !showStudentApp && <LaunchVedmargSchoolERP />}
        </li>
      </ul>
    </>
  );
};

export default MediaCoverag;
