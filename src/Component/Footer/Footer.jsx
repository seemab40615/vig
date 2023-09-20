import React from "react";
import { Gradient } from "../UI/Gradient";
import FooterImage from "../../assets/Images/Footer.png"
import FooterDollar from "../../assets/Images/Footerdollor.svg"

export default function Footer() {
  return (
    <div className={`flex flex-col px-28 w-maxSize mx-auto bg-secondary`}>
      <div className="relative text-white flex justify-between">
        <div className="flex justify-between  h-fit pt-4">
          <div className="flex gap-x-1">
            <h1 className="text-[96px] text-primary font-sfPro font-normal leading-none">
              READ<span className="font-gridular">Y</span> TO
              <br /> SEI<span className="font-gridular">Z</span>E T
              <span className="font-gridular">HE</span>
              <br /> FUTU<span className="font-gridular">R</span>E O
              <span className="font-gridular">F</span>
              <br /> SP<span className="font-gridular">O</span>RTS
              <br /> <span className="font-gridular">BETTING?</span>
            </h1>
          </div>
          <div className="text-primary font-gridular text-[96px]  uppercase leading-none">
            <img src={FooterDollar} alt="Footer Dollar" />
          </div>
        </div>
        <div className=" flex justify-start pt-4 pl-[115px] min-w-[570px]">
          <div className="w-full">
            <p className="max-w-[400px] flex justify-start text-orangeGradient">
              Join Vig today and unlock a new realm of possibilities. Amplify
              your potential payouts with our cutting-edge leveraged 'sports
              futures' algorithms, and embrace the thrill of high-risk,
              high-reward wagering
            </p>
            <div className="px-4 py-3 mt-4 rounded-[100px] text-primary w-fit bg-navItemGradient font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer">
              Connect wallet
            </div>
            <div className="flex justify-end relative">
              <Gradient className="top-[4rem] right-0 w-[200px] h-[250px]" />
              <img src={FooterImage} alt="FooterImage" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[60px] mb-4">
        <ul className="flex gap-x-1">
          <li
            className={`px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer text-primary`}
          >
            © VIG, Inc.
          </li>
        </ul>
        <ul className="flex gap-x-1">
          <li
            className={`px-4 py-3 font-medium text-sm -tracking-[0.28px] cursor-pointer text-primary`}
          >
            Terms
          </li>
          <li
            className={`px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer text-primary`}
          >
            Privacy policy
          </li>
        </ul>
        <ul className="flex gap-x-1">
          <li
            className={`px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary flex`}
          >
            Twitter{" "}
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
                  fill="#FF993C"
                />
              </g>
            </svg>
          </li>
          <li
            className={`px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary flex`}
          >
            Linked In{" "}
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
                  fill="#FF993C"
                />
              </g>
            </svg>
          </li>
          <li
            className={`px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary flex`}
          >
            Facebook{" "}
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
                  fill="#FF993C"
                />
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
