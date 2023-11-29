"use client";
import { DONWLOADS_AND_HIGHLIGHT } from "@/constants";
import SimpleGallery from "../SimpleGallery";

//const Highlights = () => {
//   const ImagesData = DONWLOADS_AND_HIGHLIGHT.map((item) => ({
//     largeURL: item.largeURL,
//     thumbnailURL: item.thumbnailURL,
//     width: item.width,
//     height: item.height,
//   }));

//   return (
//     <>
//       <SimpleGallery images={ImagesData} galleryID={"highlight-gallery"} />

//     </>
//   );
// };

type Item = {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
  type: string;
};

const Highlights = () => {
  const ImagesData: Item[][] = DONWLOADS_AND_HIGHLIGHT.reduce(
    (acc: Item[][], item: Item, index: number, array: Item[]) => {
      if (item.type === "small") {
        const nextSmallItemIndex = array.findIndex(
          (nextItem, nextIndex) =>
            nextIndex > index && nextItem.type === "small"
        );

        if (nextSmallItemIndex !== -1) {
          const nextItem = array[nextSmallItemIndex];

          acc.push([
            {
              largeURL: item.largeURL,
              thumbnailURL: item.thumbnailURL,
              width: item.width,
              height: item.height,
              type: item.type,
            },
            {
              largeURL: nextItem.largeURL,
              thumbnailURL: nextItem.thumbnailURL,
              width: nextItem.width,
              height: nextItem.height,
              type: nextItem.type,
            },
          ]);
        }
      } else {
        acc.push([
          {
            largeURL: item.largeURL,
            thumbnailURL: item.thumbnailURL,
            width: item.width,
            height: item.height,
            type: item.type,
          },
        ]);
      }
      return acc;
    },
    []
  );

  const flattenedImagesData: Item[] = ImagesData.flat();

  return (
    <>
      <section className="flex-col flexCenter overflow-hidden   py-7">
        <div className="   text-center py-4">
          <h1 className=" text-2xl font-semibold lg:font-bold xl:max-w-[390px]">
          Highlights
          </h1>
        </div>
        <SimpleGallery
          images={flattenedImagesData}
          galleryID={"highlight-gallery"}
        />
      </section>
    </>
  );
};

export default Highlights;
