import { Button } from "../UI/Button";
import graphGif from "../../assets/animations/graph.gif";

export const HeroSection = () => {
  return (
    <div className="flex text-white z-0 xs:flex-col-reverse lg:flex-row">
      <div className="flex-1 flex md:items-end xs:items-center flex-col max-w-[870px] w-full md:pt-[120px] md:pl-[120px] xs:pt-0 xs:pl-0 sm:absolute sm:bottom-[-20rem]  md:bottom-0 md:relative gap-y-6">
        <div className="md:self-start">
          <h1 className="max-w-[750px] w-full self-start xl:text-[96px] lg:text-[80px] xs:text-[80px] font-sfPro uppercase leading-[96px] text-primary flex flex-col">
            <span>
              <span className="">
                Leverag<span className="font-gridular">e</span>
              </span>
              d
            </span>
            <span>
              <span className="font-gridular">s</span>ports
            </span>
            <span className="font-gridular">betting</span>
          </h1>
        </div>

        <div className="flex-1 flex flex-col gap-y-6 max-w-[400px] mr-[50px]">
          <p className=" text-primary font-plex-mono leading-5 mt-[18px] mr-[50px]">
            Elevate your betting experience with vig: uncover the power of
            leveraged sports futures for enhanced payouts alongside heightened
            risk factors
          </p>
          <Button className=" bg-primary " text="Waitlist Today" />
        </div>
      </div>

      {/* <div className="absoute -mt-[60px] max-w-[570px] max-h-[252px] w-full"> */}
      <img
        src={graphGif}
        alt="about gif"
        className="flex-1 absoute -mt-[60px] right-0 w-full"
      />
      {/* </div> */}
    </div>
  );
};
