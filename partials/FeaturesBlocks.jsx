import React from 'react';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Lines decoration */}
            <div className="absolute inset-0 -my-8 md:-my-12 pointer-events-none hidden md:flex" aria-hidden="true">
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
            </div>

            {/* 1st item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-17.5%" y="-10.4%" width="135%" height="129.2%" filterUnits="objectBoundingBox" id="fb1-a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-43.8%" y="-31.2%" width="187.5%" height="187.5%" filterUnits="objectBoundingBox" id="fb1-d">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <path d="M35 20H24a1 1 0 00-1 1v22a1 1 0 001 1h18a1 1 0 001-1V28h-8v-8z" id="fb1-b" />
                  <path id="fb1-e" d="M35 20v8h8z" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb1-c">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#E2EEFF" offset="100%" />
                  </linearGradient>
                </defs>
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <use fill="#000" filter="url(#fb1-a)" xlinkHref="#fb1-b" />
                <use fill="url(#fb1-c)" xlinkHref="#fb1-b" />
                <use fill="#000" filter="url(#fb1-d)" xlinkHref="#fb1-e" />
                <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb1-e" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2 text-gray-800	">Comprehensive Learning</h3>
              <p className="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            {/* 2nd item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-12.1%" y="-13.2%" width="124.1%" height="136.8%" filterUnits="objectBoundingBox" id="fb2-a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-12.1%" y="-13.2%" width="124.1%" height="136.8%" filterUnits="objectBoundingBox" id="fb2-c">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <path d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z" id="fb2-b" />
                  <path d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z" id="fb2-d" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb2-e">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#E2EEFF" offset="100%" />
                  </linearGradient>
                </defs>
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="rotate(25 32.5 32.5)">
                  <use fill="#000" filter="url(#fb2-a)" xlinkHref="#fb2-b" />
                  <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb2-b" />
                </g>
                <g>
                  <use fill="#000" filter="url(#fb2-c)" xlinkHref="#fb2-d" />
                  <use fill="url(#fb2-e)" xlinkHref="#fb2-d" />
                </g>
                <path d="M32.5 36a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fillOpacity=".64" fill="#5091EE" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2 text-gray-800">Personalised Experience</h3>
              <p className="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            {/* 3rd item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="200">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-58.3%" y="-17.9%" width="216.7%" height="150%" filterUnits="objectBoundingBox" id="fb3-a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-19.4%" y="-10.9%" width="138.9%" height="130.4%" filterUnits="objectBoundingBox" id="fb3-c">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <path d="M27 29h-4a1 1 0 00-1 1v12a1 1 0 001 1h5V30a1 1 0 00-1-1z" id="fb3-b" />
                  <path d="M43.882 28.133A2.986 2.986 0 0043 28h-6v-3c0-3.824-2.589-4.942-3.958-5A1 1 0 0032 21v4.638l-4 4.8V43h12.23a2.985 2.985 0 002.87-2.118l2.769-9a3 3 0 00-1.987-3.749z" id="fb3-d" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb3-e">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#E2EEFF" offset="100%" />
                  </linearGradient>
                </defs>
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <use fill="#000" filter="url(#fb3-a)" xlinkHref="#fb3-b" />
                <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb3-b" />
                <use fill="#000" filter="url(#fb3-c)" xlinkHref="#fb3-d" />
                <use fill="url(#fb3-e)" xlinkHref="#fb3-d" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2 text-gray-800">Best Customer Reviews</h3>
              <p className="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            {/* 4th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="300">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <filter x="-29.2%" y="-11.5%" width="158.3%" height="132.2%" filterUnits="objectBoundingBox" id="fb4-a">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <filter x="-29.2%" y="-11.5%" width="158.3%" height="132.2%" filterUnits="objectBoundingBox" id="fb4-d">
                    <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                    <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
                    <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1" />
                  </filter>
                  <path d="M32 24.691l-10.737-2.656a1.007 1.007 0 00-.87.17c-.247.19-.393.483-.393.795v17a1 1 0 00.737.965L32 43.764V24.691z" id="fb4-b" />
                  <path d="M43.607 22.205a1.012 1.012 0 00-.87-.17L32 24.691v19.073l11.263-2.799A1 1 0 0044 40V23c0-.312-.146-.605-.393-.795z" id="fb4-e" />
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb4-c">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#E2EEFF" offset="100%" />
                  </linearGradient>
                </defs>
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <use fill="#000" filter="url(#fb4-a)" xlinkHref="#fb4-b" />
                <use fill="url(#fb4-c)" xlinkHref="#fb4-b" />
                <use fill="#000" filter="url(#fb4-d)" xlinkHref="#fb4-e" />
                <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb4-e" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2 text-gray-800">Interactive Content</h3>
              <p className="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            {/* 5th item */}
            <div className="relative " data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="400">
            <svg className='mb-[10px]' width="64" height="64" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="26" cy="26" r="26" fill="#1D74EC"/>
  <path d="M30.5 36.3594L21.5 33.7812V15.6875L30.5 18.2656V36.3594ZM32 18.1719L37.9531 15.7812C38.6562 15.5 39.5 16.0156 39.5 16.8125V32.5156C39.5 32.9844 39.2188 33.4062 38.75 33.5469L32 36.2656V18.1719ZM13.2031 18.5L20 15.7812V33.875L14 36.2656C13.2969 36.5469 12.5 36.0312 12.5 35.2344V19.5312C12.5 19.0625 12.7344 18.6406 13.2031 18.5Z" fill="white"/>
</svg>
              <h3 className="h4 font-playfair-display mb-2 text-gray-800">Progress Tracking</h3>
              <p className="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            {/* 6th item */}
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="500">
              <svg className='mb-[10px]' width="64" height="64" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="29" cy="29" r="26" fill="#1D74EC"/>
  <path d="M38 19.25V41L29 35.75L20 41V19.25C20 18.0312 20.9844 17 22.25 17H35.75C36.9688 17 38 18.0312 38 19.25Z" fill="white"/>
</svg>

              <h3 className="h4 font-playfair-display mb-2 text-gray-800">Expert Guidance</h3>
              <p className="text-lg text-slate-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
