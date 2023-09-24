import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
export default function KeyFeatures() {
  const para1 = "Users can amplify their potential payouts using the platform's leverage system, which multiplies the potential payout but also the risk.";
  const para2 = "Vig's odds are continually updated, tracking and mirroring other notable oddsmakers like BetMGM and Caesar’s Sportsbook."
  const para3 = "Bets placed with leverage carry the risk of liquidation, meaning the bettor could lose their initial bet if certain conditions (e.g., adverse odds movement) are met.";         
  const para4 = "As a measure to mitigate the platform's risk, Vig implements a premium variable. This adjusts the odds slightly based on the volume of bets and the number of betters for a particular sports future.";
  return (
    <div className="grid md:grid-cols-[minmax(0px,_300px),1fr] grid-cols-1 mt-[100px] xs:px-4 md:px-0">
      <p className="text-[16px] text-primary font-gridular mb-8">KEY FEATURES</p>
      <div className="grid grid-cols-2">
      <div className="col-span-full md:col-span-1">
        <FeatureCard paragraph={para1}>
          <h4 className=" hover-scale  hover-scale text-[32px] text-primary font-sfPro uppercase">
            LE<span className="font-gridular">V</span>ERAGE SYSTEM
          </h4>
        </FeatureCard>
        </div>
        <div className="col-span-full h-full">
          <FeatureCard paragraph={para2}>
            <h4 className=" hover-scale  hover-scale text-[32px] text-primary font-sfPro uppercase">
            Rea<span className="font-gridular">l</span>-Time Odd<span className="font-gridular">s</span> Monito<span className="font-gridular">r</span>ing
            </h4>
          </FeatureCard>
        </div>
        <div className="col-span-full md:col-span-1">
        <FeatureCard paragraph={para3}>
          <h4 className=" hover-scale  hover-scale text-[32px] text-primary font-sfPro uppercase">
          Liquida<span className="font-gridular">t</span>ion Mec<span className="font-gridular">h</span>anism
          </h4>
        </FeatureCard>
        </div>
        <div className="col-span-full md:col-span-1">
        <FeatureCard paragraph={para4}>
          <h4 className=" hover-scale  hover-scale text-[32px] text-primary font-sfPro uppercase">
          Pre<span className="font-gridular">m</span>ium Vari<span className="font-gridular">a</span>ble
          </h4>
        </FeatureCard>
        </div>
        
      </div>
    </div>
  );
}
