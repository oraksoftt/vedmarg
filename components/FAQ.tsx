import { FAQ_TEACHER } from "@/constants";
import React from "react";
const FAQ = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden   py-7">
      <div className="m-2 space-y-2">
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          {FAQ_TEACHER.map((data) => (
            <div className="py-5   shadow-md">
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;
