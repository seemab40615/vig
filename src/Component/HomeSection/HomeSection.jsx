import React from "react";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import { HeroSection } from "../HeroSection/HeroSection";
import KeyComponent from "../KeyComponent/KeyComponent";
import { About } from "./About";
export default function HomeSection() {
  return (
    <>
      <HeroSection />
      <div className="px-[120px] mt-[250px]">
        <About />
        <KeyFeatures />
        <KeyComponent />
      </div>
    </>
  );
}
