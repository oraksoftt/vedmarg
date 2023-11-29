import dynamic from "next/dynamic";
const FeaturesComplete = dynamic(() => import("@/components/FeaturesComplete"));

const features = () => {
  return (
    <>
      <FeaturesComplete />
    </>
  );
};
export default features;
