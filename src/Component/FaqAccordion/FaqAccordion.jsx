import PropTypes from "prop-types";
import { useCallback, useState } from "react";
const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const FaqAccordion = ({
  data,
  height,
  width,
  keyAttr,
  valAttr,
  numbAttr,
}) => {
  const [current, setCurrent] = useState(null);

  const select = useCallback(
    (i) => {
      if (current === i) return setCurrent(null);
      setCurrent(i);
    },
    [current]
  );

  return (
    <div
      className="flex flex-col items-center justify-center text-primary bg-them-black w-full"
      style={{ width }}
    >
      {data.map((item, index) => (
        <div className="flex flex-col shadow group" key={index}>
          <div
            className="text-xl flex items-center cursor-pointer p-2 mt-[62px]"
            onClick={() => select(index)}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 ">
              <div className="col-span-1 flex gap-5">
                <p className=" font-gridular text-primary">{item[numbAttr]}</p>
                <p className="w-[370px]">{item[keyAttr]}</p>
                <span
                  className={`w-[30px] h-[30px] text-center ${
                    current === index ? "bg-primary" : "bg-navItemGradient"
                  }  rounded-full text-center flex justify-center items-center`}
                >
                  {current === index ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <mask
                          id="mask0_564_249"
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
                        <g mask="url(#mask0_564_249)">
                          <path
                            d="M10.0001 7.78842L13.6699 11.4583L6.33026 11.4583L10.0001 7.78842Z"
                            fill="black"
                          />
                        </g>
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <mask
                          id="mask0_564_125"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="20"
                          height="21"
                        >
                          <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_564_125)">
                          <path
                            d="M9.99991 12.7116L6.33008 9.04175H13.6697L9.99991 12.7116Z"
                            fill="#FF993C"
                          />
                        </g>
                      </svg>
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "transition-all duration-500 ease-in-out overflow-auto mx-2",
              current === index ? "p-2 border-t-2 border-primary" : "p-0 border-primary"
            )}
            style={{ maxHeight: current === index ? height : 0 }}
          >
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="col-span-1"></div>
              <div className="col-span-1">{item[valAttr]}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FaqAccordion.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
  keyAttr: PropTypes.string,
  valAttr: PropTypes.string,
  numbAttr: PropTypes.string,
};

FaqAccordion.defaultProps = {
  width: "100%",
  height: 300,
  keyAttr: "title",
  valAttr: "content",
  numbAttr: "number",
};
