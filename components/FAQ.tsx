"use client";
import { FAQ_MENU, FAQ_STUDENT, FAQ_TEACHER } from "@/constants";
import React, { useState } from "react";
import PageTitleHeader from "./PageTitleHeader";
import Link from "next/link";
const FAQ = () => {
  const [category, setCategory] = useState("");
  const handleMenuClick = (category: string) => {
    setCategory(category);
  };
  type FAQItem = {
    question: string;
    answer: string;
  };

  const FAQDisplay = ({ category }: { category: string }) => {
    let FAQToDisplay: FAQItem[] = [];
  
    switch (category) {
      case "Student":
        FAQToDisplay = FAQ_STUDENT;
        break;
      case "Teacher":
        FAQToDisplay = FAQ_TEACHER;
        break;
      // Add more cases if needed
      default:
        // Handle default case accordingly
        break;
    }
  
 
  };

  return (
    <>
      <PageTitleHeader
        title="Frequently Asked Questions"
        textVariant="text-white"
        bgvariant="bg-black"
      />

      <section className="flexCenter    overflow-hidden   py-7">
        <div className="m-2 space-y-2 flex">
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
            {FAQToDisplay.map((data, index) => (
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
      </section>
    </>
  );
};

export default FAQ;
