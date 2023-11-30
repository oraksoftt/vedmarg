import dynamic from "next/dynamic";
const Pricing = dynamic(() => import("@/components/pricing/Pricing"));
const Pricing_Page = () => {
  return (
    <>
      <Pricing />
    </>
  );
};

export default Pricing_Page;
