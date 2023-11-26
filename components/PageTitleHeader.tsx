import React from "react";

type PageTitleHeader = {
  title?: string;
  bgvariant?: string;
  textVariant?: string;
};

const PageTitleHeader = ({ title, bgvariant, textVariant }: PageTitleHeader) => {
  return (
    <section
      className={`${bgvariant}   flex-col   flexCenter overflow-hidden py-16`}
    >
      <div className="text-center py-4">
        <h1
          className={`${textVariant}  text-5xl font-semibold lg:font-bold xl:max-w-[390px]`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageTitleHeader;
