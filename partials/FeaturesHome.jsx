import React, {useState, useRef, useEffect} from "react";
import Transition from "../utils/Transition";
import FeaturesImage from "../images/features-home-01.jpg";
import Engineer from "../images/engineering.jpg";
import Biotech from "../images/biotech.jpg";
import Fashion from "../images/fashionDesigning.jpg";
import Visual from "../images/visualArts.jpg";
import Image from "next/image";

function FeaturesHome() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab - 1]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">
              Subjects Available On Shiksha
            </h2>
            <p className="text-xl text-slate-700">
              Excepteur s474 occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum — semper quis lectus
              nulla at volutpat diam ut venenatis.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-3xl mx-auto">
            {/* Tabs buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
              <button
                className={`text-center transition-opacity ${
                  tab !== 1 && "opacity-50 hover:opacity-75"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(1);
                }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg
                      width={62}
                      height={62}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#engineer_svg__a)">
                        <circle cx={31} cy={31} r={26} fill="#fff" />
                        <path
                          d="M43 32.172c0-4.172-2.906-7.734-6.563-9.234L34 27.203v-5.86a.84.84 0 0 0-.844-.843h-4.36c-.468 0-.796.375-.796.844v5.86l-2.484-4.267C21.859 24.438 19 28 19 32.172l-.047 3.328h24L43 32.172Zm1.406 5.297A.705.705 0 0 0 43.75 37h-25.5c-.328 0-.61.188-.703.469-.14.281-.094.61.14.797.141.14 3.188 3.234 13.266 3.234s13.125-3.094 13.266-3.234c.281-.188.328-.516.187-.797Z"
                          fill="#1D74EC"
                        />
                      </g>
                      <defs>
                        <filter
                          id="engineer_svg__a"
                          x={0}
                          y={0}
                          width={62}
                          height={62}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation={2.5} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_12_7"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_12_7"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    Engineering
                  </div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${
                  tab !== 2 && "opacity-50 hover:opacity-75"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(2);
                }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg
                      width={62}
                      height={62}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#engineer_svg__a)">
                        <circle cx={31} cy={31} r={26} fill="#fff" />
                        <path
                          d="M29.5 20.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5v5.25c-.188.094-.328.188-.422.328a2.603 2.603 0 0 0 0 3.703v.047h-.047a2.62 2.62 0 0 0-2.625 2.625 2.62 2.62 0 0 0 2.625 2.625h.047v.094a2.71 2.71 0 0 0-.797 1.875A4.385 4.385 0 0 1 25 41.5a4.471 4.471 0 0 1-4.5-4.5V23.5A1.48 1.48 0 0 1 19 22c0-.797.656-1.5 1.5-1.5h9Zm-3 7.5v-4.5h-3V28h3Zm8.953-.094a1.11 1.11 0 0 1 1.125 1.125c0 1.36 1.688 2.063 2.625 1.078.469-.422 1.172-.422 1.594 0 .469.47.469 1.172 0 1.594-.938.985-.281 2.625 1.125 2.625.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-1.406 0-2.063 1.688-1.125 2.625.469.469.469 1.172 0 1.594-.422.469-1.125.469-1.594 0-.937-.938-2.625-.281-2.625 1.125a1.11 1.11 0 0 1-1.125 1.125 1.14 1.14 0 0 1-1.125-1.125c0-1.406-1.64-2.063-2.625-1.125-.422.469-1.125.469-1.594 0-.422-.422-.422-1.125 0-1.594.985-.937.282-2.625-1.078-2.625a1.11 1.11 0 0 1-1.125-1.125c0-.61.516-1.125 1.125-1.125 1.36 0 2.063-1.64 1.078-2.625-.422-.422-.422-1.125 0-1.594.47-.422 1.172-.422 1.594 0 .985.985 2.625.282 2.625-1.078 0-.61.516-1.125 1.125-1.125ZM34 35.5c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5Zm3 .375A1.11 1.11 0 0 0 35.875 37c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 38.125 37 1.14 1.14 0 0 0 37 35.875Z"
                          fill="#1D74EC"
                        />
                      </g>
                      <defs>
                        <filter
                          id="engineer_svg__a"
                          x={0}
                          y={0}
                          width={62}
                          height={62}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation={2.5} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_13_11"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_13_11"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    Biotech
                  </div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${
                  tab !== 3 && "opacity-50 hover:opacity-75"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(3);
                }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                  <svg
    width={62}
    height={62}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <g filter="url(#engineer_svg__a)">
      <circle cx={31} cy={31} r={26} fill="#fff" />
      <path
        d="M40.984 30.25 38.5 26.5v-6c0-.797-.703-1.5-1.5-1.5h-1.5a1.12 1.12 0 0 0-.656.234l-1.172.75a4.727 4.727 0 0 1-5.39 0l-1.173-.75c-.187-.14-.422-.234-.609-.234H25c-.844 0-1.5.703-1.5 1.5v6l-2.531 3.75c-.328.516-.469 1.078-.469 1.688V41.5c0 .844.656 1.5 1.5 1.5h7.5V32.5c0-.14 0-.281.047-.469l.656-1.875-2.672-8.015c1.078.609 2.25.937 3.469.937 1.172 0 2.344-.328 3.422-.937L31 32.5V43h9c.797 0 1.5-.656 1.5-1.5v-9.563c0-.609-.188-1.171-.516-1.687Zm-17.53 1.547a.54.54 0 0 1 0-.797.54.54 0 0 1 .796 0l.75.703.703-.703a.54.54 0 0 1 .797 0 .54.54 0 0 1 0 .797l-.703.703.703.75a.54.54 0 0 1-.375.938c-.188 0-.328-.047-.422-.141l-.703-.75-.75.75a.533.533 0 0 1-.375.14c-.188 0-.328-.046-.422-.14a.54.54 0 0 1 0-.797l.75-.75-.75-.703ZM25 40.375c-1.078 0-1.875-.797-1.875-1.875 0-1.031.797-1.875 1.875-1.875a1.88 1.88 0 0 1 1.875 1.875A1.851 1.851 0 0 1 25 40.375Zm12.328-5.625h-2.297c-.187 0-.328-.14-.281-.281v-2.297c0-.656.563-1.219 1.266-1.125.609.047 1.03.562 1.03 1.172v.234h.235c.61 0 1.125.422 1.172 1.031.094.703-.469 1.266-1.125 1.266Z"
        fill="#1D74EC"
      />
    </g>
    <defs>
      <filter
        id="engineer_svg__a"
        x={0}
        y={0}
        width={62}
        height={62}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_13_14" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_13_14"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    Fashion Designing
                  </div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${
                  tab !== 4 && "opacity-50 hover:opacity-75"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(4);
                }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg
                      width="56"
                      height="56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 28h-4v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2v-5z"
                        fillOpacity=".64"
                        fill="#5091EE"
                      />
                      <path
                        d="M35 21h-8c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H33c1.7 0 3-1.3 3-3V22c0-.6-.4-1-1-1z"
                        fill="#2174EA"
                      />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    Visual Arts
                  </div>
                </div>
              </button>
            </div>

            {/* Tabs items */}
            <div
              className="relative flex flex-col"
              data-aos="fade-up"
              ref={tabs}
            >
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <Image
                  className="mx-auto shadow-2xl"
                  src={Engineer}
                  width="768"
                  height="474"
                  alt="Features home 01"
                />
              </Transition>
              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <Image
                  className="mx-auto shadow-2xl"
                  src={Biotech}
                  width="768"
                  height="474"
                  alt="Features home 02"
                />
              </Transition>
              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <Image
                  className="mx-auto shadow-2xl"
                  src={Fashion}
                  width="768"
                  height="474"
                  alt="Features home 03"
                />
              </Transition>
              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <Image
                  className="mx-auto shadow-2xl"
                  src={Visual}
                  width="768"
                  height="474"
                  alt="Features home 04"
                />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
