import React from "react";
export default function KeyComponent() {
  return (
    <div className="grid md:grid-cols-[minmax(0px,_300px),1fr] grid-cols-1 mt-[100px] xs:px-4 md:px-0">
      <div className=" text-[16px] text-primary font-gridular mb-8">
        KEY COMPONENTS
      </div>
      <div className="flex flex-col grid-cols-2">
        <div className="flex flex-col pb-[42px] gap-y-[42px] border-b border-primary">
          <div className="flex gap-x-4">
            <p className="font-gridular text-primary">01</p>
            <h4 className=" hover-scale text-[36px] text-primary font-sfPro uppercase leading-none">
              Lever<span className="font-gridular">a</span>ged Betti
              <span className="font-gridular">n</span>g
            </h4>
          </div>
          <p className="leading-[20.8px] font-plex-mono text-orangeGradient pl-10">
            For a bet of $100 on a team with +2500 odds at 5x leverage, the
            potential payout is $12,500 instead of the regular $2,500. However,
            the risk is also multiplied.
          </p>
        </div>
        <div className="flex flex-col pb-[42px] gap-y-[42px] border-b border-primary pt-[62px]">
          <div className="flex gap-x-4">
            <p className="font-gridular text-primary">02</p>
            <h4 className=" hover-scale text-[36px] text-primary font-sfPro uppercase leading-none">
              Po<span className="font-gridular">i</span>nt of Li
              <span className="font-gridular">q</span>uidation + Volu
              <span className="font-gridular">m</span>e and P
              <span className="font-gridular">r</span>emium R
              <span className="font-gridular">a</span>te Adjustments:
            </h4>
          </div>
          <p className="leading-[20.8px] font-plex-mono text-orangeGradient pl-10">
            For a bet of $100 on a team with +2500 odds at 5x leverage, the
            potential payout is $12,500 instead of the regular $2,500. However,
            the risk is also multiplied.
          </p>
        </div>
        <div className="flex flex-col pb-[42px] gap-y-[42px]  pt-[62px]">
          <div className="flex gap-x-4">
            <p className="font-gridular text-primary">03</p>
            <h4 className=" hover-scale text-[36px] text-primary font-sfPro uppercase leading-none">
              Ri<span className="font-gridular">s</span>ks an
              <span className="font-gridular">d</span> Re
              <span className="font-gridular">w</span>ards:
            </h4>
          </div>
          <p className="leading-[20.8px] font-plex-mono text-orangeGradient pl-10">
            <b className="text-primary">Rewards:</b> The primary allure of Vig is the potential for
            amplified returns. A bettor can multiply their possible winnings
            significantly using the platform's leverage system.
          </p>
          <p className="leading-[20.8px] font-plex-mono text-orangeGradient pl-10">
            <b className="text-primary">Risks:</b> However, with greater potential returns come increased
            risks. The platform's liquidation mechanism can result in bettors
            losing their initial stake if the odds move unfavorably according to
            the leverage they've chosen.
          </p>
        </div>
      </div>
    </div>
  );
}
