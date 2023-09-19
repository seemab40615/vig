import React from "react";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import { HeroSection } from "../Footer/HeroSection/HeroSection";
import KeyComponent from "../KeyComponent/KeyComponent";
import { About } from "./About";
import { NavBar } from "../NavBar/Navbar";
import Footer from "../Footer/Footer"
export default function HomeSection() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="px-[120px] mt-[250px]">
        <About />
        <KeyFeatures />
        <KeyComponent />
      </div>
      <Footer />
    </>
  );
}
