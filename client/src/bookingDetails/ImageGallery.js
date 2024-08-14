import React from "react";
import "./ImageGallery.css";

function ImageGallery({ main, thumbnails }) {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b28a2f7c149fb63957c31d3b90f106c597d7626fa561380ed82b42b19d87d5b1?apiKey=795a4821ae2d43fd8710fcb3d714d4fc",
      alt: "Main gallery image",
      className: "image-gallery-main",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/719ac4be35c41674bc169e12d70bf8dce799c470893440f09521a06cc38a79c6?apiKey=795a4821ae2d43fd8710fcb3d714d4fc",
      alt: "Gallery image 1",
      className: "image-gallery-item",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6510a1a0ccb1f3c674f0a2eeb844772906e0fc70f45c820d22457f592e4253a4?apiKey=795a4821ae2d43fd8710fcb3d714d4fc",
      alt: "Gallery image 2",
      className: "image-gallery-item",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11734a50461ff7115c05ccf220b24b2c084d508f2de5f954af06b0e42d69622b?apiKey=795a4821ae2d43fd8710fcb3d714d4fc",
      alt: "Gallery image 3",
      className: "image-gallery-item",
    },
  ];

  return (
    <div className="image-gallery">
      <img
        loading="lazy"
        src={main}
        alt="main"
        className={`image-gallery-image ${images[0].className}`}
      />
      <div className="image-gallery-thumbnails">
        {thumbnails.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image}
            alt="image"
            className={`image-gallery-thumbnail ${image.className}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
