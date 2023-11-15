import Image from "next/image"; 

const TextWithSlider = () => {
  return (
    <section
      className=" max-container padding-container flex flex-col gap-20 py-10 pb-32  md:gap-28 lg:py-20 xl:flex-row">
      {/* Left Side */}
      <div className="my-20">
        <p className="text-xl">Recognised By StartupIndia</p>
        <h1 className="text-3xl font-bold lg:font-extrabold">
          School Management Software
        </h1>
        <p className="text-xl mb-5">Digitalize your Tution / School</p>
        <div className="uppercase  flex flex-col w-full gap-3 sm:flex-row">
          <a className="flexCenter  px-1 py-1 font-semibold text-xs  text-white bg-blue-700   hover:bg-blue-800     rounded inline-flex items-center">
            <span className="mx-2">Brochure </span>
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </a>
          <a className="flexCenter px-1 py-1 font-semibold text-xs  text-white bg-blue-700   hover:bg-blue-800     rounded inline-flex items-center">
            <span className="mx-2">Get Started {">"} </span>
             
          </a>

        </div>
        
      </div>
      <Image
        src="/vedmarg-laptop-mobile-screen-layouts.png"
        width={500}
        height={500}
        alt="vedmarg-laptop-mobile-screen-layouts.png"
      />
    </section>
  );
};

export default TextWithSlider;
