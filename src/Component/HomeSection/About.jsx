import aboutGif from "../../assets/animations/about.gif";
import { Button } from "../UI/Button";
import { Gradient } from "../UI/Gradient";

export const About = () => (
  <div className="relative grid md:grid-cols-[minmax(0px,_300px)_minmax(0px,_350px)_minmax(0px,_450px)] xs:grid-cols-1 xs:place-items-center xs:px-4 xs:gap-y-6 md:px-0 sm:mt-10">
    <p className="text-[16px] xs:leading-[21px] md:leading-[16px] text-primary font-gridular uppercase">
      About
    </p>
    <img src={aboutGif} alt="about gif" width={350} height={252} className="xs:pr-0 md:pr-[100px] xs:pt-0 md:pt-[53px]" />

        <h1 className="uppercase text-primary font-sfPro max-w-[450px] leading-[43.2px] text-4xl">
          <span className="font-gridular">Vig</span> is a s
          <span className="font-gridular">t</span>ate-of-t
          <span className="font-gridular">h</span>e-art betti
          <span className="font-gridular">n</span>g{" "}
          <span className="font-lato">p</span>l
          <span className="font-gridular">a</span>tform that all
          <span className="font-gridular">o</span>
          ws u<span className="font-gridular">s</span>ers to le
          <span className="font-gridular">v</span>erage their bets on sports fu
          <span className="font-gridular">t</span>ures, a
          <span className="font-gridular">m</span>plifying bo
          <span className="font-gridular">t</span>h pot
          <span className="font-gridular">e</span>ntial returns and ri
          <span className="font-gridular">s</span>ks
        </h1>

      <div className="md:col-start-3 md:col-end-4 max-w-[450px] flex flex-col gap-y-4 mt-[42px]">
        <p className="text-darkPrimary leading-[20.8px] tracking-[0.16px]">
          By integrating advanced algorithms that monitor real-time odds from
          various oddsmakers, the platform ensures bettors remain aware of their
          positions and potential liquidation scenarios.
        </p>
        <Button
          className="bg-darkPrimary bg-opacity-10 text-primary"
          text="Contact us"
        />
    </div>
    <Gradient className="-left-[680px] top-0 w-[800px] h-[800px]" />
  </div>
);
