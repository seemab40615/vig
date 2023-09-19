import { Graphs } from "./Graphs";
import { Button } from "../../../UI/Button";

export const HeroSection = () => {
  return (
    <div className="flex  text-white z-0">
      <div className="flex items-end flex-col max-w-[870px] w-full pt-[150px] pl-[120px] gap-y-6">
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

      <div className="relative max-w-[570px] w-full -mt-[60px] bg-linear-gradient-effect-waitlist h-[438px] pt-[171px]">
        <Graphs />
      </div>
    </div>
  );
};
