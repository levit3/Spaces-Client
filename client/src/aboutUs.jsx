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
              <p>
                 We are a passionate team dedicated to creating a platform that brings people together
                 whether it's for meetings, celebrations, or creative collaborations.
               </p>
             </div>
           </div>
           <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center self-stretch my-auto min-h-[704px] min-w-[280px] rounded-[32px]">
             <img
               loading="lazy"
               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5e1c64ed6c1cbe29822378f293c88098b47a8416f6a79f7b00e2b782d5f09e0?apiKey=0988173251834f22a133e9af594396d1&width=2000 2000w"
               className="object-contain w-full h-auto aspect-[0.82] rounded-[32px]"
               alt="Space Image"
             />
           </div>
         </div>
       </div>
       <div className="section container-light">
         <h2 className="section-title text-amber">Our Mission</h2>
         <p className="section-text">
           Our mission is to connect space owners with those in need of unique environments, making it easier to find and book the perfect location for any occasion.
         </p>
       </div>
       <div className="section container-light">
         <h2 className="section-title text-amber">Our Values</h2>
         <ul className="section-text">
           <li><strong>Integrity:</strong> We operate with honesty and transparency, building trust with our users.</li>
           <li><strong>Innovation:</strong> We continuously seek new and better ways to connect people with spaces.</li>
           <li><strong>Customer Focus:</strong> We prioritize the needs and feedback of our users to enhance their experience.</li>
           <li><strong>Community:</strong> We foster a sense of belonging and collaboration among space owners and renters.</li>
         </ul>
       </div>
 
       <div className="section bg-cyan-900">
         <h2 className="section-title text-amber">Our Team</h2>
         <p className="section-text">
           Our dedicated team consists of experienced professionals in both front-end and back-end development,
           working together to build a robust and user-friendly platform.
         </p>
       </div>
 
 