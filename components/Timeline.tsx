// import { TIMELINE } from "@/constants";
// const Timeline = () => {
//   return (
//     <section className="  flex-col flexCenter overflow-hidden py-7">
//       <div className="container">
//         <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
//           {TIMELINE.map((timeline, key) => (
//             <div className="flex flex-row-reverse md:contents" key={key}>
//               <div className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
//                 <h3 className="font-semibold text-black text-lg mb-1 ">
//                   {timeline.title}
//                 </h3>
//                 <p className="leading-tight text-justify text-gray-30 text-sm">
//                   {timeline.description}
//                 </p>
//               </div>
//               <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
//                 <div className="h-full w-20 flex items-center justify-center">
//                   <div className="h-full w-1 bg-blue-800 pointer-events-none" />
//                 </div>
//                 <div className="w-20 absolute top-1/2 -mt-3 text-center rounded-full bg-blue-500 shadow">
//                   {timeline.year}
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* right */}
//           <div className="flex md:contents">
//             <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
//               <div className="h-full w-20 flex items-center justify-center">
//                 <div className="h-full w-1 bg-blue-800 pointer-events-none" />
//               </div>
//               <div className="w-20  absolute top-1/2 -mt-3 text-center rounded-full bg-blue-500 shadow">
//                 {" "}
//                 2018
//               </div>
//             </div>
//             <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
//               <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
//               <p className="leading-tight text-justify">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
//                 facilis.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { TIMELINE } from "@/constants";

const Timeline = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden py-7">
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {TIMELINE.map((timeline, key) => (
            <div
              className={`flex ${timeline.area == 'left' ? 'flex-row-reverse' : 'flex-row'} md:contents`}
              key={key}
            >
              {timeline.area == 'left' ? (
                <div className="bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  <h3 className="font-semibold text-black text-lg mb-1">
                    {timeline.title}
                  </h3>
                  <p className="leading-tight text-justify text-gray-30 text-sm">
                    {timeline.description}
                  </p>
                </div>
              ) : null}
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-20 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none" />
                </div>
                <div className="w-20 absolute top-1/2 -mt-3 text-center rounded-full bg-blue-500 shadow">
                  {timeline.year}
                </div>
              </div>
              {timeline.area == 'right' ? (
                <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  <h3 className="font-semibold text-black text-lg mb-1">{timeline.title}</h3>
                  <p className="leading-tight text-justify text-gray-30 text-sm ">{timeline.description}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
