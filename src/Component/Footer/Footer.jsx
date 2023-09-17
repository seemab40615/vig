import React from "react";
import FooterImage from "../../Images/Footer.png"
import FooterDollar from "../../Images/Footerdollor.svg"
export default function Footer() {
  return (
    <div className="bg-secondary flex px-28 w-maxSize mx-auto">
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
            <div className="flex justify-end">
                <img src={FooterImage} alt="FooterImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
