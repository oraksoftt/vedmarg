"use client";
import { FAQ_EMPLOYEE, FAQ_FEE, FAQ_MENU, FAQ_MESSAGING, FAQ_STUDENT, FAQ_TEACHER, FAQ_TRANSPORT } from "@/constants";

import PageTitleHeader from "./PageTitleHeader";
import Link from "next/link";
import { useState } from "react";

const FAQ = () => {
  const [FAQToDisplays, setFAQToDisplays] = useState<any[]>(FAQ_TEACHER);  

  const handleMenuClick = (category: string) => {
    let displayArray: any[] = [];
    switch (category) {
      case "Student":
        displayArray = FAQ_STUDENT;
        break;
      case "Teacher":
        displayArray = FAQ_TEACHER;
        break;
      case "Fee":
        displayArray = FAQ_FEE;
        break;
      case "Transport":
        displayArray = FAQ_TRANSPORT;
        break;
      case "Employee":
        displayArray = FAQ_EMPLOYEE;
        break;
      case "Messaging (SMS)":
        displayArray = FAQ_MESSAGING;
        break;
      case "Attendance":
        displayArray = FAQ_TEACHER;
        break;
      case "Documents":
        displayArray = FAQ_TEACHER;
        break;
      case "Misc.":
        displayArray = FAQ_TEACHER;
        break;
       
    }
    setFAQToDisplays(displayArray);
  };

  return (
    <>
      <PageTitleHeader
        title="Frequently Asked Questions"
        textVariant="text-white"
        bgvariant="bg-black"
      />

      {/* <section className="flexCenter    overflow-hidden   py-7">
        <div className="m-2 space-y-2 flex overflow-hidden">
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            {FAQ_MENU.map((data) => (
              <div
                onClick={() => handleMenuClick(data.menu)}
                className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <Link
                  href="#"
                  aria-current="true"
                  className="block w-full px-4 py-2 text-white hover:bg-blue-700 bg-gray-50 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
                >
                  {data.menu}
                </Link>
              </div>
            ))}
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            {FAQToDisplays.map((data:any, index:number) => (
              <div key={index} className="py-5   shadow-md pl-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> {data.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {data.answer}
                  </p>
                </details>
              </div>
            ))}
            <p className="py-5 pl-5">
              Still having any query, no issue. We are here to answer:
              <u className="font-bold">
                <Link href="/contact-us" target="_blank">
                  {" "}
                  click here to ask{" "}
                </Link>
              </u>
            </p>
          </div>
        </div>
      </section> */}
      
      <section className="flexCenter py-7">
        <div className="m-2 space-y-2 flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-48">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 max-w-xl mx-auto mt-8">
              {FAQ_MENU.map((data) => (
                <div
                  key={data.menu}
                  onClick={() => handleMenuClick(data.menu)}
                  className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <Link
                    href="#"
                    aria-current="true"
                    className="block w-full px-4 py-2 text-white hover:bg-blue-700 bg-gray-50 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
                  >
                    {data.menu}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:flex-1 grid max-w-xl mx-auto mt-8">
            {FAQToDisplays.map((data: any, index: number) => (
              <div key={index} className="py-5 shadow-md pl-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> {data.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {data.answer}
                  </p>
                </details>
              </div>
            ))}
            <p className="py-5 pl-5">
              Still having any queries? No issue. We're here to help:
              <u className="font-bold">
                <Link href="/contact-us" target="_blank">
                  {" "}
                  Click here to ask
                </Link>
              </u>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

