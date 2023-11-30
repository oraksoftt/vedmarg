 

import dynamic from "next/dynamic";
const OurClientsComplete = dynamic(  () => import("@/components/OurClientsComplete"));
const Clients = () => {
  return (
    <>
    < OurClientsComplete />
  </>
  )
}

export default Clients