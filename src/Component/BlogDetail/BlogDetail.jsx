import React from "react";
import DetailImg1 from "../../assets/Images/detail1.png";
import DetailImg2 from "../../assets/Images/detail2.png";
import DetailImg3 from "../../assets/Images/detail3.png";
import { Link } from "react-router-dom";
export default function BlogDetail() {
  return (
    <>
      <div className="bg-secondary my-[62px] px-4 md:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 py-[42px] gap-8">
          <div className=" z-10">
            <Link to="/blog">
              <p className="px-4 py-3 rounded-[100px] font-medium text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary flex w-fit group hover:bg-primary hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="stroke-current text-primary group-hover:text-black"
                >
                  <path
                    d="M16.667 10L3.33366 10M3.33366 10L8.33366 15M3.33366 10L8.33366 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>{" "}  Back to news
               </p>
            </Link>
          </div>
          <div className="w-full">
            <h4 className=" hover-scale text-orangeGradient text-[36px] font-gridular uppercase leading-none pb-4">
              Users can amplify their potential payouts using
            </h4>
            <p className="text-primary font-plex-mono">
              The Merge is finally here. While the Ethereum community celebrates
              the coming of the Merge, some people are still wondering how we
              got here, what the Merge actually is, and what it all means for
              the future of Ethereum. Let's jump right in.
            </p>
          </div>
          <div>
            <p className="text-orangeGradient font-gridular uppercase pb-4">
              News
            </p>
            <p className="text-primary font-gridular uppercase">15 sep, 2022</p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-[120px] my-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 py-[42px] gap-8">
          <div className="col-span-1">
            <p className="text-primary font-gridular uppercase pb-4">
              How did we get here?
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-primary font-plex-mono w-full border-l border-primary col-span-2 pl-8">
              To understand The Merge, we first need to know a bit about how
              Ethereum works. Ethereum consists of two different layers; a
              consensus layer and an execution layer, and is made up of a
              distributed network of computers (or nodes). These nodes come to
              an agreement about the state of the blockchain, and agree on any
              new blocks that are proposed. This agreement process is known as a
              consensus mechanism, and occurs on the consensus layer. The
              execution layer is responsible for handling the state of the
              network, including transactions, contracts and balances. In short,
              the execution layer handles all of the changes that happen on the
              network, while the consensus layer handles the agreement between
              nodes about those changes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-4 place-items-center">
              <div className="text-primary font-plex-mono w-full flex justify-center">
                <img src={DetailImg1} alt="Blog Detail" />
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="text-primary font-plex-mono w-full">
                  <img src={DetailImg2} alt="Blog Detail" />
                </div>
                <div className="text-primary font-plex-mono w-full">
                  <img src={DetailImg3} alt="Blog Detail" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 py-[42px] gap-8">
          <div className="col-span-1">
            <p className="text-primary font-gridular uppercase pb-4">
              What is The Merge?
            </p>
          </div>
          <div className="w-full border-l border-primary col-span-2 pl-8">
            <p className="text-primary font-plex-mono">
              The transition from PoW to PoS has been planned since Ethereum's
              launch, with preparation beginning in 2015. After much research,
              the Ethereum developers launched a PoS chain in parallel to the
              existing Ethereum chain, with its sole purpose being a PoS layer
              that can be tested and later used as part of The Merge.
            </p>
            <p className="text-primary font-plex-mono pt-8">
              Lorem ipsum dolor sit amet consectetur. Amet ullamcorper faucibus
              fringilla aliquet justo cursus vulputate vel. Ullamcorper ut
              porttitor pharetra est vitae. Tortor placerat massa tempus tempus
              convallis. Aliquam scelerisque amet eget commodo. Porttitor amet
              in pellentesque convallis. Scelerisque id ultrices a nisi nunc
              quis. In sagittis pellentesque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
