import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
export default function KeyFeatures() {
  const para1 =
    "Users can amplify their potential payouts using the platform's leverage system, which multiplies the potential payout but also the risk.";
  return (
    <div className="grid md:grid-cols-[minmax(0px,_300px),1fr] grid-cols-1 mt-[100px]">
      <p className="text-[16px] text-primary font-gridular">KEY FEATURES</p>
      <div className="grid grid-cols-2">
      <div className="col-span-full md:col-span-1">
        <FeatureCard paragraph={para1}>
          <h4 className="text-[32px] text-primary font-sfPro ">
            LE<span className="font-gridular">V</span>ERAGE SYSTEM
          </h4>
        </FeatureCard>
        </div>
        <div className="col-span-full">
          <FeatureCard paragraph={para1}>
            <h4 className="text-[32px] text-primary font-sfPro">
              LE<span className="font-gridular">V</span>ERAGE SYSTEM
            </h4>
          </FeatureCard>
        </div>
        <div className="col-span-full md:col-span-1">
        <FeatureCard paragraph={para1}>
          <h4 className="text-[32px] text-primary font-sfPro">
            LE<span className="font-gridular">V</span>ERAGE SYSTEM
          </h4>
        </FeatureCard>
        </div>
        <div className="col-span-full md:col-span-1">
        <FeatureCard paragraph={para1}>
          <h4 className="text-[32px] text-primary font-sfPro">
            LE<span className="font-gridular">V</span>ERAGE SYSTEM
          </h4>
        </FeatureCard>
        </div>
        
      </div>
    </div>
  );
}
