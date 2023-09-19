import React from "react";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import { HeroSection } from "../HeroSection/HeroSection";
import KeyComponent from "../KeyComponent/KeyComponent";
import { About } from "./About";
export default function HomeSection() {
  return (
    <>
      <HeroSection />
      <div className="sm:px-[120px] sm:mt-[250px]">
        <About />
        <KeyFeatures />
        <KeyComponent />
      </div>
    </>
  );
}
