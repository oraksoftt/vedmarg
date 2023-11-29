import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("@/components/AboutUs"));

const aboutus = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default aboutus;
