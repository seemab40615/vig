import React, { useState, useRef, useEffect } from "react";
import { Gradient } from "../UI/Gradient";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link, useLocation } from "react-router-dom"; //

export const NavBar = () => {
  const location = useLocation(); // <-- get the current location

  // Function to get the initial selected nav item based on the current path
  const getInitialSelectedNavItem = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/plateform") return "Platform Solutions";
    if (path === "/faq" || path === "/changelog" || path === "/blog")
      return "Resources";
    if (path === "/contact") return "Contact";
    return ""; // default value
  };

  const [selectedNavItem, setSelectedNavItem] = useState(
    getInitialSelectedNavItem()
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const size = useWindowSize();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);

  useEffect(() => {
    if (size.width > 1242 && isMobileMenuVisible) {
      setIsMobileMenuVisible(false);
    }
  }, [size.width, isMobileMenuVisible]);
  


  useEffect(() => {
    function handleOutsideClick(event) {
      // Check if the clicked target is the mobile button
      if (event.target === mobileButtonRef.current) return;

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="text-white flex justify-between pt-4 px-[42px]">
      <Gradient className="w-[800px] h-[800px] top-[-400px] left-[-300px] xs:hidden md:block" />
      <div
        className={`flex justify-between items-center max-w-[780px] w-full flex-shrink`}
      >
        {size.width >= 1242 && (
          <ul className="flex gap-x-1 z-20">
            <Link
              to="/"
              onClick={() => {
                setSelectedNavItem("Home");
                setDropdownVisible(false);
              }}
              className={`h-10 flex justify-start items-center px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Home"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black`}
            >
              Home
            </Link>
            <Link
              to="/plateform"
              onClick={() => {
                setSelectedNavItem("Platform Solutions");
                setDropdownVisible(false);
              }}
              className={`flex justify-start items-center h-10 px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Platform Solutions"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black`}
            >
              Platform Solutions
            </Link>
            <Link
              onClick={() => {
                setSelectedNavItem("Resources");
                setDropdownVisible(!isDropdownVisible);
              }}
              className={`relative flex gap-x-1 justify-center items-center h-10 px-4 py-3 rounded-[100px] ${
                selectedNavItem === "Resources"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black`}
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
                <ul
                  className="absolute top-[50px] w-full left-0 flex flex-col gap-y-1 z-[1]"
                  ref={dropdownRef}
                >
                  <Link
                    to="/faq"
                    className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                  >
                    Faq's
                  </Link>
                  <Link
                    to="/changelog"
                    className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                  >
                    Changelog
                  </Link>
                  <Link
                    to="/blog"
                    className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                  >
                    Blog
                  </Link>
                </ul>
              )}
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setSelectedNavItem("Contact");
                setDropdownVisible(false);
              }}
              className={`h-10 px-4 py-3 flex justify-center items-center rounded-[100px] ${
                selectedNavItem === "Contact"
                  ? "bg-primary text-black"
                  : "bg-navItemGradient text-primary"
              } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black`}
            >
              Contact
            </Link>
          </ul>
        )}
        <h1 className={`text-primary font-gridular text-2xl uppercase z-10`}>
          <Link to='/'>VIG</Link>
        </h1>
      </div>
      <div className={`max-w-[620px] w-full flex justify-end gap-x-1`}>
        <button className="h-fit px-4 py-3 bg-primary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px] z-10 flex-shrink hover:bg-navItemGradient hover:text-primary">
          waitlist
        </button>
        {size.width <= 1242 && (
          <div className="relative flex justify-center" ref={mobileMenuRef}>
            <button
              ref={mobileButtonRef}
              className="w-10 rounded-full bg-secondary text-primary flex items-center justify-center z-10"
              onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                setIsMobileMenuVisible((prev) => !prev);
              }}
            >
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
              <ul className="absolute top-[50px] right-0 flex flex-col gap-y-1 z-10">
                <Link
                  to="/"
                  onClick={() => {
                    setSelectedNavItem("Home");
                    setIsMobileMenuVisible(false);
                  }}
                  className={`h-10 flex justify-start items-center px-4 py-3 rounded-[100px] ${
                    selectedNavItem === "Home"
                      ? "bg-primary text-black"
                      : "bg-navItemGradient text-primary"
                  } font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black`}
                >
                  Home
                </Link>
                <Link
                  to="/plateform"
                  onClick={() => {
                    setSelectedNavItem("Platform Solutions");
                    setDropdownVisible(false);
                    setIsMobileMenuVisible(false);
                  }}
                  className={`flex justify-start items-center h-10 px-4 py-3 rounded-[100px] ${
                    selectedNavItem === "Platform Solutions"
                      ? "bg-primary text-black"
                      : "bg-navItemGradient text-primary"
                  } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black`}
                >
                  Platform Solutions
                </Link>
                <Link
                  onClick={() => {
                    setSelectedNavItem("Resources");
                    setDropdownVisible(!isDropdownVisible);
                  }}
                  ref={dropdownRef}
                  className={`relative flex gap-x-1 justify-center w-full items-center h-10 px-4 py-3 rounded-[100px] ${
                    selectedNavItem === "Resources"
                      ? "bg-primary text-black"
                      : "bg-navItemGradient text-primary"
                  } font-medium text-sm -tracking-[0.28px] cursor-pointer `}
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
                      <Link
                        onClick={() => {
                          setDropdownVisible(false);
                          setIsMobileMenuVisible(false);
                        }}
                        to="/faq"
                        className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                      >
                        Faq's
                      </Link>
                      <Link
                        onClick={() => {
                          setDropdownVisible(false);
                          setIsMobileMenuVisible(false);
                        }}
                        to="/changelog"
                        className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                      >
                        Changelog
                      </Link>
                      <Link
                        onClick={() => {
                          setDropdownVisible(false);
                          setIsMobileMenuVisible(false);
                        }}
                        to="/blog"
                        className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                      >
                        Blog
                      </Link>
                    </ul>
                  )}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    setSelectedNavItem("Contact");
                    setDropdownVisible(false);
                    setIsMobileMenuVisible(false);
                  }}
                  className={`h-10 px-4 py-3 flex justify-center items-center rounded-[100px] ${
                    selectedNavItem === "Contact"
                      ? "bg-primary text-black"
                      : "bg-navItemGradient text-primary"
                  } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black `}
                >
                  Contact
                </Link>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
