import React from 'react';
import FeaturesImage01 from '../images/features-home-3-01.jpg';
import FeaturesImage02 from '../images/features-home-3-02.jpg';
import FeaturesImage03 from '../images/features-home-3-03.jpg';
import Link from 'next/link';
import Image from 'next/image';
function FeaturesHome03() {
  return (
    <section className="relative bg-[#101D2D]">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-100	">Simplify operating and manage with transparency</h2>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-10 items-start">

            {/* 1st article */}
            <article data-aos="fade-up">
              <Link className="relative block group mt-8 mb-4" href="#0">
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={FeaturesImage01} width="342" height="342" alt="News 01" />
                </div>
                
              </Link>
              <h3 className="h4 font-playfair-display mb-2 ">
                <Link className="text-slate-100 pointer-events-none" href="#0">Advanced Features</Link>
              </h3>
              <p className="text-lg text-slate-400">Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
            </article>
            
            {/* 2nd article */}
            <article data-aos="fade-up" data-aos-delay="100">
              <Link className="relative block group mt-8 mb-4" href="#0">
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={FeaturesImage02} width="342" height="342" alt="News 02" />
                </div>
                
              </Link>
              <h3 className="h4 font-playfair-display mb-2">
                <Link className="text-slate-100 pointer-events-none" href="#0">Advanced Features</Link>
              </h3>
              <p className="text-lg text-slate-400">Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
            </article>
            
            {/* 3rd article */}
            <article data-aos="fade-up" data-aos-delay="200">
              <Link className="relative block group mt-8 mb-4" href="#0">
                <div className="absolute inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10" aria-hidden="true"></div>
                <div className="overflow-hidden">
                  <Image className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out" src={FeaturesImage03} width="342" height="342" alt="News 03" />
                </div>
                
              </Link>
              <h3 className="h4 font-playfair-display mb-2">
                <Link className="text-slate-100 pointer-events-none" href="#0">Advanced Features</Link>
              </h3>
              <p className="text-lg text-slate-400">Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
            </article>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome03;
