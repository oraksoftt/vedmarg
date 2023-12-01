 

import dynamic from "next/dynamic";
const Pricing = dynamic(() => import("@/components/Partners"));
const Partner_page = () => {
  return (
    <>
      <Pricing />
    </>
  );
};

export default Partner_page;
