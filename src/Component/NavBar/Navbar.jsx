export const NavBar = () => {
  return (
    <div className="bg-black w-maxSize mx-auto">
      <div className="relative text-white flex justify-between min-h-[876px]">
        <div className="absolute top-[-400px] left-[-300px] w-[800px] h-[800px] bg-gradient-effect z-0"></div>

        <div className="flex justify-between items-center max-w-[870px] h-fit w-full pr-[124px] z-10 pt-4 pl-[42px]">
          <ul className="flex gap-x-1">
            <li className="px-4 py-3 rounded-[100px] bg-primary text-black font-medium text-sm -tracking-[0.28px] cursor-pointer">
              Home
            </li>
            <li className="px-4 py-3 rounded-[100px] text-primary bg-navItemGradient font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer">
              Platform Solutions
            </li>
            <li className="relative flex gap-x-1 px-4 py-3 rounded-[100px] text-primary bg-navItemGradient font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer">
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_480_130"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect
                    x="20"
                    y="20"
                    width="20"
                    height="20"
                    transform="rotate(180 20 20)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_480_130)">
                  <path
                    d="M10 7.78842L13.6699 11.4583L6.33019 11.4583L10 7.78842Z"
                    fill="black"
                  />
                </g>
              </svg>
              <ul className="absolute top-[50px] w-full left-0 flex flex-col gap-y-1">
                <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                  Faq's
                </li>
                <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                  Changelog
                </li>
                <li className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer">
                  Blog
                </li>
              </ul>
            </li>
            <li className="px-4 py-3 rounded-[100px] text-primary bg-navItemGradient font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer">
              Contact
            </li>
          </ul>
          <h1 className="text-primary font-gridular text-2xl uppercase">VIG</h1>
        </div>
        <div className="w-full max-w-[570px] flex justify-end bg-linear-gradient-effect-waitlist h-[438px] pt-4 pr-[42px]">
          <button className="h-fit px-4 py-3 bg-primary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px]">
            waitlist
          </button>
        </div>
      </div>
    </div>
  );
};
