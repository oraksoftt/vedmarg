import Image from "next/image";

const News = () => {
  return (
    
    <section className="bg-neutral-50 flexCenter max-container flex-col py-7">
  <div className="text-center py-4">
    <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">In The News</h1>
  </div>
  <div className="flexCenter max-container flex-wrap justify-center gap-5 lg:gap-10">
    <div className="bg-white rounded-tr-lg rounded-bl-lg py-2 pl-2 pr-5 rounded-3xl border shadow-md mb-5 lg:w-48">
      <Image
        src="/ani-news-network-vedmarg-attendance-management-system-school-download.jpg"
        alt="meter"
        width={140}
        height={140}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="bg-white rounded-tr-lg rounded-bl-lg py-2 pl-2 pr-5 rounded-3xl border shadow-md mb-5 lg:w-48">
      <Image
        src="/school-management-software-free-download-india-times.jpg"
        alt="meter"
        width={140}
        height={140}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="bg-white rounded-tr-lg rounded-bl-lg py-2 pl-2 pr-5 rounded-3xl border shadow-md mb-5 lg:w-48">
      <Image
        src="/zee5-logo-download-school-management-system.jpg"
        alt="meter"
        width={140}
        height={140}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="bg-white rounded-tr-lg rounded-bl-lg py-2 pl-2 pr-5 rounded-3xl border shadow-md mb-5 lg:w-48">
      <Image
        src="/school-management-software-free-download-the-economic-times.jpg"
        alt="meter"
        width={140}
        height={140}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="bg-white rounded-tr-lg rounded-bl-lg py-2 pl-2 pr-5 rounded-3xl border shadow-md mb-5 lg:w-48">
      <Image
        src="/the-print-vedmarg-school-management-system-free.jpg"
        alt="meter"
        width={140}
        height={140}
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</section>

  );
};

export default News;
