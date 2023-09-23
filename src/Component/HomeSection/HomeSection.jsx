import React from "react";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import { HeroSection } from "../HeroSection/HeroSection";
import KeyComponent from "../KeyComponent/KeyComponent";
import { About } from "./About";
export default function HomeSection() {
  return (
    <>
      <HeroSection />
      <div className="sm:px-[120px] sm:mt-[5rem] mds:mt-[12rem] md:mt-[1rem] smd:mt-[8rem]">
        <About />
        <KeyFeatures />
        <KeyComponent />
      </div>
    </>
  );
}
