import React from "react";

export default function ContactForm() {
  return (
    <div className=" px-4 md:px-[120px] my-[62px]">
      <div className=" grid grid-cols-2">
        <div className="col-span-1">
          <h4 className="text-[52px] lg:text-[4.5vw] xl:text-[5.5vw] text-primary font-sfPro uppercase leading-none">
            L<span className="font-gridular">e</span>t's coll
            <span className="font-gridular">a</span>borate
          </h4>
        </div>
        <div className="col-span-1 justify-end hidden sm:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="450"
            height="149"
            viewBox="0 0 450 149"
            fill="none"
          >
            <path
              d="M0 0.999994L313.68 0.999994C345.055 0.999995 360.743 0.999995 372.727 7.04913C383.268 12.3701 391.838 20.8605 397.209 31.3035C403.315 43.1756 403.315 58.7171 403.315 89.8L403.315 149M403.315 149L356.63 102.75M403.315 149L450 102.75"
              stroke="#FF993C"
              stroke-width="2"
              stroke-linejoin="bevel"
            />
          </svg>
        </div>
      </div>
      <div className="grid md:grid-cols-[minmax(0px,_300px),1fr] grid-cols-1 mt-[100px]">
        <div></div>
       <div className="flex flex-col gap-8">
       <div className="grid grid-cols-2 gap-5">
          <label className="text-primary font-gridular border-dotted border-b border-orangeGradient uppercase">Name</label>
          <input type="text" placeholder=" Your Name" className=" py-2 font-gridular placeholder-orangeGradient text-[32px] bg-theme-black h-10 w-full border-b border-primary text-primary focus:outline-none uppercase" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <label className="text-primary font-gridular border-dotted border-b border-orangeGradient uppercase">Email</label>
          <input type="email" placeholder="Your Email" className=" py-2 font-gridular placeholder-orangeGradient text-[32px] bg-theme-black h-10 w-full border-b border-primary text-primary focus:outline-none uppercase" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <label className="text-primary font-gridular border-dotted border-b border-orangeGradient uppercase">Phone</label>
          <input type="text" placeholder="Phone" className=" py-2 font-gridular placeholder-orangeGradient text-[32px] bg-theme-black h-10 w-full border-b border-primary text-primary focus:outline-none uppercase" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <label className="text-primary font-gridular border-dotted border-b border-orangeGradient uppercase">Company</label>
          <input type="text" placeholder="Your Company" className=" py-2 font-gridular placeholder-orangeGradient text-[32px] bg-theme-black h-10 w-full border-b border-primary text-primary focus:outline-none uppercase" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <label className=""></label>
          <div className="flex flex-col sm:flex-row gap-3 ">
          <li
            className={`h-fit w-fit px-2 sm:px-4 py-2 rounded-[100px] font-medium text-[14px] sm:text-sm -tracking-[0.28px] cursor-pointer bg-primary text-black flex`}
          >
            Submit {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_170_158"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_170_158)">
                <path
                  d="M13.8461 17.6538L12.7923 16.5692L16.6116 12.75H4.5V11.25H16.6116L12.7923 7.43079L13.8461 6.34619L19.5 12L13.8461 17.6538Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </li>
          <p className="text-primary text-[12px]"> By clicking on the button you consent to the processing of personal data </p>
          </div>
        </div>
        
       </div>
      </div>
    </div>
  );
}
