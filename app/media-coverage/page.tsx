import dynamic from "next/dynamic";
const MediaCoverage = dynamic(  () => import("@/components/MediaCoverage/MediaCoverage"));
const MediaCoverag = () => {
  return (
    <>
    < MediaCoverage />
  </>
  )
}

export default MediaCoverag