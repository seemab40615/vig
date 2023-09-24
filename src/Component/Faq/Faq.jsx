import React from "react";
import { FaqAccordion } from "../FaqAccordion/FaqAccordion";

export default function Faq() {
  return (
    <div className=" px-4 sm:px-[120px] my-10">
      <div className="my-8 flex">
        <h4 className=" hover-scale  text-[52px] md:text-[96px] mb-10 text-primary font-sfPro uppercase leading-none">
          Fa<span className="font-gridular">q'</span>s
        </h4>
      </div>
      <div className="grid md:grid-cols-[minmax(0px,_200px),1fr] grid-cols-1">
        <p className="text-[16px] text-primary font-gridular"></p>
        <div className="grid">
          <FaqAccordion
            width="100%"
            data={[
              {
                numb: "01",
                key: (
                  <h1 className=" hover-scale leading-[110%]  uppercase font-plex-mono text-[24px] sm:text-[36px]">
                    Is <span className="font-gridular">VIG</span> sa
                    <span className="font-gridular">f</span>e?
                  </h1>
                ),
                value:
                  "Join Vig today and unlock a new realm of possibilities. Amplify your potential payouts with our cutting-edge leveraged 'sports futures' algorithms, and embrace the thrill of high-risk, high-reward wagering",
              },
              {
                numb: "02",
                key: (
                  <h1 className=" hover-scale leading-[110%]  uppercase font-plex-mono text-[24px] sm:text-[36px]">
                    Wh<span className="font-gridular">o</span> co
                    <span className="font-gridular">n</span>trols m
                    <span className="font-gridular">y</span>{" "}
                    <span className="font-gridular">w</span>allet key
                    <span className="font-gridular">s</span>?{" "}
                  </h1>
                ),
                value:
                  "Join Vig today and unlock a new realm of possibilities. Amplify your potential payouts with our cutting-edge leveraged 'sports futures' algorithms, and embrace the thrill of high-risk, high-reward wagering",
              },
              {
                numb: "03",
                key: (
                  <h1 className=" hover-scale leading-[110%]  uppercase font-plex-mono text-[24px] sm:text-[36px]">
                    C<span className="font-gridular">a</span>n I s
                    <span className="font-gridular">w</span>itch fr
                    <span className="font-gridular">o</span>m ano
                    <span className="font-gridular">t</span>her wall
                    <span className="font-gridular">e</span>t?
                  </h1>
                ),
                value:
                  "Join Vig today and unlock a new realm of possibilities. Amplify your potential payouts with our cutting-edge leveraged 'sports futures' algorithms, and embrace the thrill of high-risk, high-reward wagering",
              },
              {
                numb: "04",
                key: (
                  <h1 className=" hover-scale leading-[110%]  uppercase font-plex-mono text-[24px] sm:text-[36px]">
                    <span className="font-gridular">c</span>an I t
                    <span className="font-gridular">r</span>ade cry
                    <span className="font-gridular">p</span>to w
                    <span className="font-gridular">i</span>thin t
                    <span className="font-gridular">h</span>e wallet?
                  </h1>
                ),
                value:
                  "Join Vig today and unlock a new realm of possibilities. Amplify your potential payouts with our cutting-edge leveraged 'sports futures' algorithms, and embrace the thrill of high-risk, high-reward wagering",
              },
              {
                numb: "05",
                key: (
                  <h1 className=" hover-scale leading-[110%]  uppercase font-plex-mono text-[24px] sm:text-[36px]">
                    Are the<span className="font-gridular">r</span>e any{" "}
                    <span className="font-gridular">f</span>ees ass
                    <span className="font-gridular">o</span>ciated{" "}
                    <span className="font-gridular">w</span>ith the{" "}
                    <span className="font-gridular">w</span>allet?
                  </h1>
                ),
                value:
                  "Join Vig today and unlock a new realm of possibilities. Amplify your potential payouts with our cutting-edge leveraged 'sports futures' algorithms, and embrace the thrill of high-risk, high-reward wagering",
              },
              {
                numb: "06",
                key: (
                  <h1 className=" hover-scale leading-[110%]  uppercase font-plex-mono text-[24px] sm:text-[36px]">
                    If <span className="font-gridular">f</span>amily e
                    <span className="font-gridular">v</span>er stopped e
                    <span className="font-gridular">x</span>isting wo
                    <span className="font-gridular">u</span>ld I lo
                    <span className="font-gridular">s</span>e acc
                    <span className="font-gridular">e</span>ss to{" "}
                    <span className="font-gridular">m</span>y w
                    <span className="font-gridular">a</span>llet?
                  </h1>
                ),
                value:
                  "Join Vig today and unlock a new realm of possibilities. Amplify your potential payouts with our cutting-edge leveraged 'sports futures' algorithms, and embrace the thrill of high-risk, high-reward wagering",
              },
            ]}
            keyAttr="key"
            valAttr="value"
            numbAttr="numb"
          />
        </div>
      </div>
    </div>
  );
}
