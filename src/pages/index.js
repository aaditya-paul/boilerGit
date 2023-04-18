import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import HeroHome from "../../components/heroHome";
import FeaturesHome from "../../partials/FeaturesHome";
import FeaturesHome02 from "../../partials/FeaturesHome02";
import FeaturesBlocks from "../../partials/FeaturesBlocks";
import FeaturesHome03 from "../../partials/FeaturesHome03";
import Target from "../../partials/Target";
import PricingSection from "../../partials/PricingSection";
import Cta from "../../partials/Cta";

function Index() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow ">
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesHome02 />
        <FeaturesHome />
        <FeaturesHome03 />
        {/* <Target />
        <PricingSection /> */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
