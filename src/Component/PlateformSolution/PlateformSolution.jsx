import React from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import plateformImage from "../../assets/animations/platform-solutions.gif"
export default function PlateformSolution() {
  const cardOne =
    "Harness the power of amplified stakes. Depending on your risk appetite and market assessment, opt for a leverage multiplier that suits your strategy, from 2x up to 13x.";
  const cardTwo =
    "Stay ahead of the game with instant notifications. Should your leveraged bet approach its liquidation point due to odds shifts, our system will alert you in real-time, ensuring you're never caught off guard.";
  const cardThree =
    "Depending on your risk appetite and market assessment, opt for a leverage multiplier that suits your strategy, from 2x up to 13x.";
  const cardFour =
    "Stay ahead of the game with instant notifications. Should your leveraged bet approach its liquidation point due to odds shifts, our system will alert you in real-time, ensuring you're never caught off guard.";
  const cardFive =
    "Track your bets, monitor liquidation points, and manage your portfolio through our intuitive user interface. Designed for both novices and experts alike.";
  const cardSix =
    "New to leveraged sports betting? Our educational hub offers a wealth of resources from introductory guides to advanced strategies, ensuring every user can bet with confidence.";
  const cardSeven =
    "With state-of-the-art encryption and blockchain-backed transactions, trust that your investments are safe. Plus, with our public ledger, you can validate the fairness of every bet.";
  const cardEight =
    "In the fast-paced world of sports, waiting isn't an option. With Vig, enjoy the industry's fastest liquidation processes and payout systems, ensuring your earnings are in your hands without delay.";
  const cardNine =
    "Engage with fellow bettors, share strategies, and discuss game analytics in our community forums. Participate in community polls, prediction contests, and more.";
  const cardTen =
    "Our dedicated support team is always ready to assist you. Whether you have platform-specific queries or need insights into the betting world, we’re here to help round the clock.";

  return (
    <div className="flex flex-col gap-y-0 py-[156px] px-4 md:px-[120px] w-full overflow-hidden">
      <div className=" grid grid-cols-2">
      <div className="col-span-1">
        <h4 className=" hover-scale text-[52px] lg:text-[4vw] xl:text-[5.5vw] text-primary font-sfPro uppercase leading-none">
        Pla<span className="font-gridular">t</span>for<span className="font-gridular">m</span> <span className="font-gridular">s</span>oluti<span className="font-gridular">o</span>ns
          </h4>
      </div>    
      <div className=" col-span-2 md:col-span-1 flex justify-end">
            <img src={plateformImage} alt="PlateForm Solution" srcSet={plateformImage} />
      </div>

      </div>
      <div className="flex flex-col md:flex-row w-full">
        <FeatureCard paragraph={cardOne} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            Dy<span className="font-gridular">n</span>amic Le
            <span className="font-gridular">v</span>erage Sys
            <span className="font-gridular">t</span>em
          </h4>
        </FeatureCard>
        <FeatureCard paragraph={cardTwo} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            Re<span className="font-gridular">a</span>l-time Li
            <span className="font-gridular">q</span>uidation Al
            <span className="font-gridular">e</span>rts
          </h4>
        </FeatureCard>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <FeatureCard paragraph={cardThree} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            Ada<span className="font-gridular">p</span>tive Pre
            <span className="font-gridular">m</span>ium Mec
            <span className="font-gridular">h</span>anism
          </h4>
        </FeatureCard>
        <FeatureCard paragraph={cardFour} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            C<span className="font-gridular">o</span>mprehensive Odd
            <span className="font-gridular">s</span> Anal
            <span className="font-gridular">y</span>sis
          </h4>
        </FeatureCard>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <FeatureCard paragraph={cardFive} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            Us<span className="font-gridular">e</span>r-frie
            <span className="font-gridular">n</span>dly D
            <span className="font-gridular">a</span>shboard
          </h4>
        </FeatureCard>
        <FeatureCard paragraph={cardSix} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            Ed<span className="font-gridular">u</span>cation Hu
            <span className="font-gridular">b</span>
          </h4>
        </FeatureCard>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <FeatureCard paragraph={cardSeven} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            Se<span className="font-gridular">c</span>ure and Tra
            <span className="font-gridular">n</span>sparent T
            <span className="font-gridular">r</span>an
            <span className="font-gridular">s</span>actions
          </h4>
        </FeatureCard>
        <FeatureCard paragraph={cardEight} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            In<span className="font-gridular">s</span>tant Liqui
            <span className="font-gridular">d</span>ation & Pa
            <span className="font-gridular">y</span>outs
          </h4>
        </FeatureCard>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <FeatureCard paragraph={cardNine} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            <span className="font-gridular">c</span>ommunity Engage
            <span className="font-gridular">m</span>ent Tool
            <span className="font-gridular">s</span>
          </h4>
        </FeatureCard>
        <FeatureCard paragraph={cardTen} width="w-full">
          <h4 className=" hover-scale text-[32px] text-primary font-sfPro uppercase">
            <span className="font-gridular">24/7</span> Custome
            <span className="font-gridular">r</span> Supp
            <span className="font-gridular">o</span>rt
          </h4>
        </FeatureCard>
      </div>
    </div>
  );
}
