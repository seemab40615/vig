import React, { useState } from "react";
import { Gradient } from "../UI/Gradient";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const size = useWindowSize();

  return (
    <div className="text-white flex justify-between pt-4 px-[42px]">
      <Gradient className="w-[800px] h-[800px] top-[-400px] left-[-300px]" />
      <div
        className={`flex justify-between items-center max-w-[828px] w-full flex-shrink`}
      >
        {size.width >= 1242 && (
          <ul className="flex gap-x-1">
            <li
              onClick={() => {
                setSelectedNavItem("Home");
                setDropdownVisible(false);
              }}
              className={`h-10 flex justify-start items-center px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Home"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] cursor-pointer`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                setSelectedNavItem("Platform Solutions");
                setDropdownVisible(false);
              }}
              className={`flex justify-start items-center h-10 px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Platform Solutions"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer`}
            >
              <Link to="/plateform">Platform Solutions</Link>
              
            </li>
            <li
              onClick={() => {
                setSelectedNavItem("Resources");
                setDropdownVisible(!isDropdownVisible);
              }}
              className={`relative flex gap-x-1 justify-center items-center h-10 px-4 py-3 rounded-[100px] ${
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
                <ul className="absolute top-[50px] w-full left-0 flex flex-col gap-y-1 z-[1]">
                  <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                    <Link to="/faq">Faq's</Link>
                  </li>
                  <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                    <Link to="/changelog">Changelog</Link>
                  </li>
                  <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                     <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onClick={() => {
                setSelectedNavItem("Contact");
                setDropdownVisible(false);
              }}
              className={`h-10 px-4 py-3 flex justify-center items-center rounded-[100px] ${
                selectedNavItem === "Contact"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer`}
            >
               <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
        <h1 className={`text-primary font-gridular text-2xl uppercase z-10`}>
          VIG
        </h1>
      </div>
      <div className={`max-w-[528px] w-full flex justify-end gap-x-1`}>
        <button className="h-fit px-4 py-3 bg-primary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px] z-10 flex-shrink">
          waitlist
        </button>{
            size.width <= 1242 && 
            <div className="relative flex justify-center">
              <button className="w-10 rounded-full bg-secondary text-primary flex items-center justify-center" onClick={() => setIsMobileMenuVisible(prev => !prev)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.5 7.08337H17.5M2.5 12.9167H17.5"
                    stroke="#FF993C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              {isMobileMenuVisible && (
                <ul className="absolute top-[50px] right-0 flex flex-col gap-y-1">
                  <li
                    onClick={() => setSelectedNavItem("Home")}
                    className={`h-10 flex justify-start items-center px-4 py-3 rounded-[100px] ${
                      selectedNavItem === "Home"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] cursor-pointer`}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    onClick={() => {
                      setSelectedNavItem("Platform Solutions");
                      setDropdownVisible(false);
                    }}
                    className={`flex justify-start items-center h-10 px-4 py-3 rounded-[100px] ${
                      selectedNavItem === "Platform Solutions"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer`}
                  >
                   <Link to="/plateform" >Platform Solutions</Link>
                  </li>
                  <li
                    onClick={() => {
                      setSelectedNavItem("Resources");
                      setDropdownVisible(!isDropdownVisible);
                    }}
                    className={`relative flex gap-x-1 justify-center w-full items-center h-10 px-4 py-3 rounded-[100px] ${
                      selectedNavItem === "Resources"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] cursor-pointer`}
                  >
                    Resources
                    <svg
                      className={`transform ${
                        isDropdownVisible ? "rotate-180" : ""
                      }`}
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="0" fill="none" width="24" height="24" />
    
                      <g>
                        <path
                          d="M7 10l5 5 5-5"
                          fill={
                            selectedNavItem === "Resources" ? "#000" : "#FF993C"
                          }
                        />
                      </g>
                    </svg>
                    {isDropdownVisible && (
                      <ul className="absolute top-0 -left-[130px] w-full flex flex-col gap-y-1">
                        <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                          <Link to="/faq">Faq's</Link>
                        </li>
                        <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                          <Link to="/changelog">Changelog</Link>
                        </li>
                        <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                          <Link to="/blog">Blog</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onClick={() => {
                      setSelectedNavItem("Contact");
                      setDropdownVisible(false);
                    }}
                    className={`h-10 px-4 py-3 flex justify-center items-center rounded-[100px] ${
                      selectedNavItem === "Contact"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer`}
                  >
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              )}
            </div>
        }
      </div>
    </div>
  );
};
