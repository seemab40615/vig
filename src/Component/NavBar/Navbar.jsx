import React, { useState } from "react";
import { Graphs } from "../HeroSection/Graphs";

export const NavBar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
      <div className="absolute text-white grid grid-cols-[minmax(0px,_870px)_minmax(0px,_570px)]">
        <div className="absolute top-[-400px] left-[-300px] w-[800px] h-[800px] bg-gradient-effect z-0"></div>
        <div className="coll-span-1 flex justify-between items-center pr-[124px] z-10 pt-4 pl-[42px]">
          <ul className="flex gap-x-1">
            <li
              onClick={() => setSelectedNavItem("Home")}
              className={`px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Home"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] cursor-pointer`}
            >
              Home
            </li>
            <li
              onClick={() => {
                setSelectedNavItem("Platform Solutions");
                setDropdownVisible(false);
              }}
              className={`px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Platform Solutions"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer`}
            >
              Platform Solutions
            </li>
            <li
              onClick={() => {
                setSelectedNavItem("Resources");
                setDropdownVisible(!isDropdownVisible);
              }}
              className={`relative flex gap-x-1 px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Resources"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] cursor-pointer`}
            >
              Resources
              <svg
                className={`transform ${isDropdownVisible ? "rotate-180" : ""}`}
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" fill="none" width="24" height="24" />

                <g>
                  <path
                    d="M7 10l5 5 5-5"
                    fill={selectedNavItem === "Resources" ? "#000" : "#FF993C"}
                  />
                </g>
              </svg>
              {isDropdownVisible && (
                <ul className="absolute top-[50px] w-full left-0 flex flex-col gap-y-1">
                  <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                    Faq's
                  </li>
                  <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                    Changelog
                  </li>
                  <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                    Blog
                  </li>
                </ul>
              )}
            </li>
            <li
              onClick={() => {
                setSelectedNavItem("Contact");
                setDropdownVisible(false);
              }}
              className={`px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Contact"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer`}
            >
              Contact
            </li>
          </ul>
          <h1 className="text-primary font-gridular text-2xl uppercase">VIG</h1>
        </div>
        <div className="col-span-1 flex justify-end pt-4 pr-[42px]">
          <button className="h-fit px-4 py-3 bg-primary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px]">
            waitlist
          </button>
        </div>
      </div>
  );
};
