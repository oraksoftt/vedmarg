// components/SimpleGallery.tsx
"use client";
import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import React from "react";

interface Image {
  largeURL: string;
  thumbnailURL: string;
  width: number;
  height: number;
  type: string;
}

interface SimpleGalleryProps {
  galleryID: string;
  images: Image[];
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({ galleryID, images }) => {
  //console.log(images)
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("photoswipe").then(({ default: PhotoSwipe }) => {
        const lightbox = new PhotoSwipeLightbox({
          gallery: `#${galleryID}`,
          children: "a",
          pswpModule: () => Promise.resolve(PhotoSwipe), // Return a Promise resolving to PhotoSwipe
        });
        lightbox.init();

        return () => {
          lightbox.destroy();
        };
      });
    }
  }, [galleryID]);

  return (
    <> 
      {/* <section className="max-container padding-container relative w-full   justify-center"> */}
        <div className="pswp-gallery  flex " id={galleryID}>
          {/* {images.map((image, index) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={`${galleryID}-${index}`}
            target="_blank"
            rel="noreferrer"
          >
            {image.type === "small" ? (
              <img
                src={image.thumbnailURL}
                alt={`Thumbnail ${index}`}
                width={image.width}
                height={image.height}
              />
            ) : (
              <img
                src={image.thumbnailURL}
                alt={`Thumbnail ${index}`}
                width={image.width}
                height={image.height}
              />
            )}
          </a>
        ))}  */}
          {images.map((image, index) => {
            // console.log(images);
            // console.log(image);
            let imgElement = null;

            if (image.type === "small") {
              imgElement = (
                <div className="pswp-gallery">
                  <a
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={`${galleryID}-${index}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={image.thumbnailURL}
                      alt={`Thumbnail ${index}`}
                      width={image.width}
                      height={image.height}
                    />
                  </a>
                </div>
              );
            } else {
              imgElement = (
                <a
                  href={image.largeURL}
                  data-pswp-width={image.width}
                  data-pswp-height={image.height}
                  key={`${galleryID}-${index}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={image.thumbnailURL}
                    alt={`Thumbnail ${index}`}
                    width={image.width}
                    height={image.height}
                  />
                
                </a>
              );
            }

            return imgElement;
          })}
        </div>
      {/* </section> */}
    </>
  );
};

export default SimpleGallery;
