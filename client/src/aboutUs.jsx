import React from "react";
 import "./TenantPage/About.css";

 function Feature({ imageSrcSet, title, description }) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center basis-0 max-w-[360px] min-w-[280px]">
      <img
        loading="lazy"
        srcSet={imageSrcSet}
        className="object-contain w-full aspect-[1.61] rounded-[32px]"
        alt={title}
      />
      <div className="flex flex-col justify-center mt-4 w-full">
        <div className="text-lg text-center font-bold text-black">{title}</div>
        <div className="mt-2 text-sm leading-relaxed text-black">{description}</div>
      </div>
    </div>
  );
}