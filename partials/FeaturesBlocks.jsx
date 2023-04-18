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
                                        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                        <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1"/>
                                    </filter>
                                    <filter x="-43.8%" y="-31.2%" width="187.5%" height="187.5%" filterUnits="objectBoundingBox" id="fb1-d">
                                        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                                        <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1"/>
                                    </filter>
                                    <path d="M35 20H24a1 1 0 00-1 1v22a1 1 0 001 1h18a1 1 0 001-1V28h-8v-8z" id="fb1-b"/>
                                    <path id="fb1-e" d="M35 20v8h8z"/>
                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb1-c">
                                        <stop stopColor="#FFF" offset="0%"/>
                                        <stop stopColor="#E2EEFF" offset="100%"/>
                                    </linearGradient>
                
                                </defs>
                                <rect className="fill-current text-blue-600" width="64" height="64" rx="32"/>
                                <use fill="#000" filter="url(#fb1-a)" xlinkHref="#fb1-b"/>
                                <use fill="url(#fb1-c)" xlinkHref="#fb1-b"/>
                                <use fill="#000" filter="url(#fb1-d)" xlinkHref="#fb1-e"/>
                                <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb1-e"/>
                            </svg>
                            <h3 className="h4 font-playfair-display mb-2 text-gray-800	">Our Mission</h3>
                            <p className="text-lg text-justify text-slate-500">We intend to empower students through massive distribution of accessible 
                                and comprehensible as well as comprehensive notes for foundational 
                                development alongside textual studies in the undergraduate and postgraduate 
                                levels in colleges and universities in India.</p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <filter x="-12.1%" y="-13.2%" width="124.1%" height="136.8%" filterUnits="objectBoundingBox" id="fb2-a">
                                        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                                        <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1"/>
                                    </filter>
                                    <filter x="-12.1%" y="-13.2%" width="124.1%" height="136.8%" filterUnits="objectBoundingBox" id="fb2-c">
                                        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                        <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1"/>
                                    </filter>
                                    <path d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z" id="fb2-b"/>
                                    <path d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z" id="fb2-d"/>
                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb2-e">
                                        <stop stopColor="#FFF" offset="0%"/>
                                        <stop stopColor="#E2EEFF" offset="100%"/>
                                    </linearGradient>
                                </defs>
                                <rect className="fill-current text-blue-600" width="64" height="64" rx="32"/>
                                <g transform="rotate(25 32.5 32.5)">
                                    <use fill="#000" filter="url(#fb2-a)" xlinkHref="#fb2-b"/>
                                    <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb2-b"/>
                                </g>
                                <g>
                                    <use fill="#000" filter="url(#fb2-c)" xlinkHref="#fb2-d"/>
                                    <use fill="url(#fb2-e)" xlinkHref="#fb2-d"/>
                                </g>
                                <path d="M32.5 36a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" fillOpacity=".64" fill="#5091EE"/>
                            </svg>
                            <h3 className="h4 font-playfair-display mb-2 text-gray-800">Where are we standing</h3>
                            <p className="text-lg text-justify text-slate-500">We are a developing, progressive, and upcoming technology 
                                company/educational services provider/platform for the exchange of ideas and 
                                knowledge that aims to at par with the best of the rest. We have our 
                                inspirations in the online education space, and with time we too want to 
                                proudly display their names as significantly responsible for the vision that we 
                                espouse.
                            </p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="200">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <filter x="-58.3%" y="-17.9%" width="216.7%" height="150%" filterUnits="objectBoundingBox" id="fb3-a">
                                        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                                        <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1"/>
                                    </filter>
                                    <filter x="-19.4%" y="-10.9%" width="138.9%" height="130.4%" filterUnits="objectBoundingBox" id="fb3-c">
                                        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
                                        <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                                        <feColorMatrix values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0" in="shadowBlurOuter1"/>
                                    </filter>
                                    <path d="M27 29h-4a1 1 0 00-1 1v12a1 1 0 001 1h5V30a1 1 0 00-1-1z" id="fb3-b"/>
                                    <path d="M43.882 28.133A2.986 2.986 0 0043 28h-6v-3c0-3.824-2.589-4.942-3.958-5A1 1 0 0032 21v4.638l-4 4.8V43h12.23a2.985 2.985 0 002.87-2.118l2.769-9a3 3 0 00-1.987-3.749z" id="fb3-d"/>
                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fb3-e">
                                        <stop stopColor="#FFF" offset="0%"/>
                                        <stop stopColor="#E2EEFF" offset="100%"/>
                                    </linearGradient>
                                </defs>
                                <rect className="fill-current text-blue-600" width="64" height="64" rx="32"/>
                                <use fill="#000" filter="url(#fb3-a)" xlinkHref="#fb3-b"/>
                                <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb3-b"/>
                                <use fill="#000" filter="url(#fb3-c)" xlinkHref="#fb3-d"/>
                                <use fill="url(#fb3-e)" xlinkHref="#fb3-d"/>
                            </svg>
                            <h3 className="h4 font-playfair-display mb-2 text-gray-800">Where do we want to be</h3>
                            <p className="text-lg text-justify text-slate-500">We want to be the premier domain for study materials across all disciplines 
                                and across all universities in India, an aim that we strive to achieve within the 
                                year 2030.
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeaturesBlocks;
