import { Button } from '../UI/Button';
import {Graphs} from './Graphs';

export const HeroSection = () => {
  return (
    <div className="relative text-white grid grid-cols-[minmax(0px,_870px)_minmax(0px,_570px)]">
      <div className="pt-[150px] pl-[120px] grid grid-cols-[minmax(0px,_300px)_minmax(0px,_570px)] gap-y-6">
        <h1 className="col-span-full text-[96px] font-sfPro uppercase leading-[96px] text-primary flex flex-col">
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

        <p className="col-start-2 col-end-3 text-primary font-plex-mono leading-5 mt-[18px] pr-[50px]">
          Elevate your betting experience with vig: uncover the power of
          leveraged sports futures for enhanced payouts alongside heightened
          risk factors
        </p>
        <Button  className='col-start-2 col-end-3 bg-primary ' text='Waitlist Today'  />
      </div>

      <div className=" bg-linear-gradient-effect-waitlist h-[438px] pt-[171px]">
        <Graphs />
      </div>
    </div>
  );
};
