import React from "react";
import BlogItem from "../BlogItem/BlogItem";

export default function Blog() {
  const blogItems = [
    {
      heading: (
        <h4 className="hover-scale text-primary text-[36px] font-sfPro uppercase leading-none pb-4">
          T<span className="font-gridular">h</span>e M<span className="font-gridular">e</span>rge
        </h4>
      ),
      description:
        "The Merge is finally here. While the Ethereum community celebrates the coming of the Merge, some people are still wondering how we got here, what the Merge actually is, and what it all means for the future of Ethereum. Let's jump right in.",
    },{
      heading: (
        <h4 className="hover-scale text-primary text-[36px] font-sfPro uppercase leading-none pb-4">
           Rh<span className="font-gridular">o</span>des <span className="font-gridular">t</span>ells Dame Di<span className="font-gridular">n</span>enage o<span className="font-gridular">f</span> <span className="font-gridular">‘</span>specific co<span className="font-gridular">n</span>cerns’ <span className="font-gridular">o</span>n mis<span className="font-gridular">u</span>se of stat<span className="font-gridular">i</span>stics
        </h4>
      ),
      description:"Two young teams square off here, but the Falcons are a year ahead with Desmond Ridder at quarterback, Kyle Pitts at tight end and the addition of Bijan Robinson at running back. The Panthers should be excited about the future with Bryce Young. Carolina was 2-5 S/U as an away underdog last season, and one of those losses was a 37-34 overtime loss at Atlanta."
    },{
      heading: (
        <h4 className="hover-scale text-primary text-[36px] font-sfPro uppercase leading-none pb-4">
          Be<span className="font-gridular">s</span>t NFL P<span className="font-gridular">r</span>op Be<span className="font-gridular">t</span>s Wee<span className="font-gridular">k</span> <span className="font-gridular">1</span>
        </h4>
      ),
      description:"Green Bay – which missed the playoffs in Aaron Rodgers' last season with the team – will start a new chapter with quarterback Jordan Love. The Packers are underdogs at Chicago – which is anticipating a full-fledged breakout for third-year quarterback Justin Fields."
    }
  ];

  return (
    <div className="px-4 sm:px-[120px] py-[150px]">
      <div className="flex">
        <h4 className="hover-scale text-[52px] md:text-[96px] mb-10 text-primary font-sfPro uppercase leading-none">
          B<span className="font-gridular">L</span>O
          <span className="font-gridular">G</span>
        </h4>
      </div>

      {blogItems.map((item, index) => (
        <BlogItem key={index} description={item.description}>
            {item.heading}
        </BlogItem>
      ))}
    </div>
  );
}
