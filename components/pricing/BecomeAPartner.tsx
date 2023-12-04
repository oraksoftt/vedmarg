import Button from "../Button";

const BecomeAPartner = () => {
  return (
    <>
      <section className="flexCenter padding-container  max-container flex-col gap-5 border-1 py-7">
        <div className="text-center py-4">
          <p className="py-1 text-gray-30 text-sm justify-end break-normal">
            Start Your Journey Today !
          </p>
          <p className="text-center text-2xl font-semibold lg:font-bold xl:max-w-full">
            Let's Become A Partner
          </p>
        </div>

        <div className=" ">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block   tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="personalName"
                >
                  Name
                </label>
                <input
                  className=" appearance-none block w-full bg-gray-200 text-gray-700 border
                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="personalName"
                  type="text"
                  placeholder="Your Name"
                />
                {/* <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block   tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="personalEmail"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="personalEmail"
                  type="email"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block   tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="mobileno"
                >
                  Mobile No
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border
                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="mobileno"
                  type="text"
                  placeholder="10 digit Mobile no"
                />
                {/* <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block   tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="city"
                  type="text"
                  placeholder="Your city"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block   tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="occupation"
                >
                  Occupation
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border
                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="occupation"
                  type="text"
                  placeholder="occupation"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Button title="Submit" type="button" variant="btn_green " />
              </div>
              
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BecomeAPartner;
