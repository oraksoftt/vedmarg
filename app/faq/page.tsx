import dynamic from "next/dynamic";
const FAQs = dynamic(() => import("@/components/FAQ"));
const FAQ = () => {
  return (
    <>
      <FAQs />
    </>
  );
};

export default FAQ;
