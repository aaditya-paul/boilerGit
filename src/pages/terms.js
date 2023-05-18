import React from "react";
import Terms from '../../partials/TermConditions';
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";

export default function terms() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
       <Terms />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}