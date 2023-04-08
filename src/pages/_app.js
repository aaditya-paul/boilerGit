import "@/styles/additional-styles/utility-patterns.css";
import "@/styles/additional-styles/theme.css";
import "@/styles/globals.css";
import "@/styles/additional-styles/toggle-switch.css";
import "@/styles/additional-styles/range-slider.css";
import {Playfair_Display, Inter} from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export default function App({Component, pageProps}) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <main
        className={`${inter.variable} ${playfair.variable} font-inter align-center bg-white	`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
