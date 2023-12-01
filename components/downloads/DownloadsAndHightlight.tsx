import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));
import PageTitleHeader from "../PageTitleHeader";
import Highlights from "./Highlights";

const DownloadsAndHightlight = () => {
  return (
    <>
      <PageTitleHeader
        title="Downloads & lightlights"
        textVariant="text-white"
        bgvariant="bg-black"
      />
      <section className="flex-col flexCenter overflow-hidden   py-7">
        <div className="max-container padding-container relative w-full flex justify-end">
          <div className="z-20 flex w-full flex-col lg:w-[100%]">
            <ul className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              <li className="flex w-full flex-1 flex-col items-center">
                <Link href="/login" key={0} target="_blank">
                  <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                    <Image
                      src="/Vedmarg-Online-School-ERP.png"
                      alt="online-erp"
                      width={500}
                      height={50}
                    />
                  </div>
                  <h2 className="bold-18 lg:bold-23 mt-3 capitalize text-center">
                    {"Online ERP"}
                  </h2>
                </Link>
              </li>
              <li className="flex w-full flex-1 flex-col items-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vedmarg&src=downloads-school-app"
                  key={0}
                  target="_blank"
                >
                  <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                    <Image
                      src="/Vedmarg-School-Admin-App-Google-Play-Store.png"
                      alt="Admin App on Play Store"
                      width={500}
                      height={50}
                    />
                  </div>
                  <h2 className="bold-18 lg:bold-23 mt-3 capitalize text-center">
                    {"Admin App on Play Store"}
                  </h2>
                </Link>
              </li>
              <li className="flex w-full flex-1 flex-col items-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vedmarg.app&src=downloads-student-app"
                  key={0}
                  target="_blank"
                >
                  <div className="rounded-full p-3 lg:p-6  flex items-center justify-center">
                    <Image
                      src="/Vedmarg-Student-App-Google-Play-Store.png"
                      alt="Student App on Play Store"
                      width={500}
                      height={50}
                    />
                  </div>
                  <h2 className="bold-18 lg:bold-23 mt-3 capitalize text-center">
                    {"Student App on Play Store"}
                  </h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Highlights />
    </>
  );
};

export default DownloadsAndHightlight;
