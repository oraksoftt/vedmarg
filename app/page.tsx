//import TextWithSlider from "@/components/TextWithSlider";
//import News from "@/components/News";
//import DownloadsSlider from "@/components/DownloadsSlider";
//import FreeDemo from "@/components/FreeDemo";
//import MostTrusted from "@/components/MostTrusted";
//import AllinOneSolution from "@/components/AllinOneSolution";
//import Features from "@/components/Features";
//import RecentUpdates from "@/components/RecentUpdates";
//import OurClients from "@/components/OurClients";


 import dynamic from "next/dynamic"; 
const TextWithSlider = dynamic(() => import("@/components/TextWithSlider"));
const News = dynamic(() => import("@/components/News"));
const DownloadsSlider = dynamic(() => import("@/components/DownloadsSlider"));
const FreeDemo = dynamic(() => import("@/components/FreeDemo"));
const MostTrusted = dynamic(() => import("@/components/MostTrusted"));
const AllinOneSolution = dynamic(() => import("@/components/AllinOneSolution"));
const Features = dynamic(() => import("@/components/Features"));
const RecentUpdates = dynamic(() => import("@/components/RecentUpdates"));
const OurClients = dynamic(() => import("@/components/OurClients"));

export default function Home() {
  return (
    <>
     
    <TextWithSlider/>
    <News/>
    <DownloadsSlider />
    <FreeDemo />
    <MostTrusted />
    <AllinOneSolution />
    <Features />
    <RecentUpdates />
    <OurClients />    


    </>
  )
}
