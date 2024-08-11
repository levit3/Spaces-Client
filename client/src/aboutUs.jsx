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
function About() {
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap flex-1 shrink gap-12 justify-center items-center w-full max-w-[1200px] min-w-[240px]">
          <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-white max-w-[720px] min-w-[280px]">
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-7xl tracking-tighter leading-[78px] max-md:text-4xl max-md:leading-10">
                Welcome to Spaces for Rent where your perfect venue awaits.
              </h2>