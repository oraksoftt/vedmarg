import dynamic from "next/dynamic";
const DownloadsAndHightlight = dynamic(
  () => import("@/components/downloads/DownloadsAndHightlight")
);

const downloads = () => {
  return (
    <>
      <DownloadsAndHightlight />
    </>
  );
};

export default downloads;
