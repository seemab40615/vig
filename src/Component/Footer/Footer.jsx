import React from "react";
import { Gradient } from "../UI/Gradient";
import FooterImage from "../../assets/Images/Footer.png";
import FooterDollar from "../../assets/Images/Footerdollor.svg";
import { useLocation  } from 'react-router-dom';
export default function Footer() {
  const {pathname} = useLocation ();
  const footerClass = pathname === '/plateform' ? '' : 'footer-bg'
  return (
    <div className={footerClass}>
      <div
      className={`flex flex-col px-4 md:px-28 py-[42px] w-full overflow-hidden ${footerClass}`}
    >
      <div className="flex gap-x-8 gap-y-10 md:justify-between xs:items-center md:items-start xs:flex-col md:flex-row">
        <div className="flex sm:gap-x-10 md:gap-x-14 lg:gap-x-18 max-w-[732px] h-fit xs:justify-between md:justify-between ">
          <div className="flex gap-x-1 max-w-[573px]">
            <h1 className=" hover-scale text-[52px] lg:text-[6vw] xl:text-[96px] xl:leading-[96px] text-primary font-sfPro font-normal leading-none">
              READ<span className="font-gridular">Y</span> TO
              <br /> SEI<span className="font-gridular">Z</span>E T
              <span className="font-gridular">HE</span>
              <br /> FUTU<span className="font-gridular">R</span>E O
              <span className="font-gridular">F</span>
              <br /> SP<span className="font-gridular">O</span>RTS
              <br /> <span className="font-gridular">BETTING?</span>
            </h1>
          </div>
          <div className="text-primary font-gridular uppercase leading-none animate-move-y">
            <img className="w-[40px] lg:w-[60px]" src={FooterDollar} alt="Footer Dollar"/>
          </div>
        </div>
        <div className=" flex flex-col gap-x-4 justify-between max-w-[450px]">
          <div>
            <p className="max-w-[400px] flex justify-center text-[#FF993C] leading-[130%]">
              Join Vig today and unlock a new realm of possibilities. Amplify
              your potential payouts with our cutting-edge leveraged 'sports
              futures' algorithms, and embrace the thrill of high-risk,
              high-reward wagering
            </p>
            <div className=" hover-light px-4 py-3 mt-4 rounded-[100px] text-primary w-fit h-fit bg-navItemGradient hover:bg-primary hover:text-black font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer">
              Connect wallet
            </div>
          </div>
          <div className="flex justify-end relative">
            <Gradient className="top-[4rem] right-0 w-[200px] h-[250px]" />
            <img src={FooterImage} alt="FooterImage" />
          </div>
        </div>
      </div>
      <div className="flex justify-around sm:justify-between flex-wrap mt-[60px] mb-4 w-full overflow-hidden">
        <ul className="flex gap-x-1">
          <li
            className={`px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer text-primary`}
          >
            Vault Integrated Gaming, Inc. All Rights Reserved
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
        <ul className="flex gap-x-1 ">
          <li
            className={`px-3  py-2 rounded-[100px] font-medium text-[14px] sm:text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary hover:bg-primary hover:text-black flex group items-center`}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
          </li>
          {/* <li
            className={` px-4  py-3 rounded-[100px] font-medium text-[14px] sm:text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary hover:bg-primary hover:text-black flex group items-center`}
          >
            Linked In{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="fill-current text-primary group-hover:text-black hidden sm:flex"
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
                  fill="currentColor"
                />
              </g>
            </svg>
          </li>
          <li
            className={`px-4  py-3 rounded-[100px] font-medium text-[14px] sm:text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black bg-navItemGradient text-primary flex group items-center`}
          >
            Facebook{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="fill-current text-primary group-hover:text-black hidden sm:flex"
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
                  fill="currentColor"
                />
              </g>
            </svg>
          </li> */}
        </ul>
      </div>
    </div>
    </div>
  );
}
