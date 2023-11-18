//import TextWithSlider from "@/components/TextWithSlider";
import News from "@/components/News";
//import DownloadsSlider from "@/components/DownloadsSlider";
import FreeDemo from "@/components/FreeDemo";
import MostTrusted from "@/components/MostTrusted";
import AllinOneSolution from "@/components/AllinOneSolution";
import Features from "@/components/Features";
import RecentUpdates from "@/components/RecentUpdates";
import OurClients from "@/components/OurClients";


 import dynamic from "next/dynamic"; 
const TextWithSlider = dynamic(() => import("@/components/TextWithSlider"));
const DownloadsSlider = dynamic(() => import("@/components/DownloadsSlider"));

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
