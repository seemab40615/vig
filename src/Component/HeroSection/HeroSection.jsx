import { Button } from "../UI/Button";
import graphGif from "../../assets/animations/graph.gif";

export const HeroSection = () => {
  return (
    <>
      <div className="flex text-white z-0 xs:flex-col-reverse lg:flex-row relative">
        <div className="flex-1 flex md:items-end xs:items-center flex-col max-w-[870px] w-full md:pt-[120px] md:pl-[120px] xs:absolute  sm:absolute md:relative top-3/4 gap-y-6">
          <div className="md:self-start">
            <h1 className="max-w-[750px] w-full self-start xs:text-[62px] xs:leading-[62px] mds:text-[70px] mds:leading-[70px] sm:text-[80px] sm:leading-[80px] smd:text-[100px] smd:leading-[100px] md:text-[90px] md:leading-[90px] xl:text-[96px] xl:leading-[96px] font-sfPro uppercase text-primary flex flex-col">
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

          <div className="flex-1 flex flex-col gap-y-6 max-w-[400px] md:mr-[50px] xs:mr-0 xs:px-4 md:px-0">
            <p className=" text-primary font-plex-mono leading-5 mt-[18px] md:mr-[50px] xs:mr-0">
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
      <div className="md:hidden xs:block xs:mb-[110px] w-[100px] h-[200px]"></div>
    </>
  );
};
