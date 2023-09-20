import { Button } from "../UI/Button";
import graphGif from '../../assets/animations/graph.gif';

export const HeroSection = () => {
  return (
    <div className="flex  text-white z-0">
      <div className="flex items-end flex-col max-w-[870px] w-full pt-[120px] pl-[120px] gap-y-6">
        <h1 className="max-w-[750px] w-full self-start text-[96px] font-sfPro uppercase leading-[96px] text-primary flex flex-col">
          <span>
            <span className="someClassForE">
              Leverag<span className="font-gridular">e</span>
            </span>
            d
          </span>
          <span>
            <span className="font-gridular">s</span>ports
          </span>
          <span className="font-gridular">betting</span>
        </h1>

        <div className="flex flex-col gap-y-6 max-w-[400px] mr-[50px]">
          <p className=" text-primary font-plex-mono leading-5 mt-[18px] mr-[50px]">
            Elevate your betting experience with vig: uncover the power of
            leveraged sports futures for enhanced payouts alongside heightened
            risk factors
          </p>
          <Button className=" bg-primary " text="Waitlist Today" />
        </div>
      </div>

      <div className="absoute -mt-[60px] flex-shrink-0 flex-grow-0">
        
      <img src={graphGif} alt="about gif" width={570} height={252} />
      </div>
    </div>
  );
};
