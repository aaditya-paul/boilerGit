import React from "react";
import Header from "../../partials/Header";
import Privacy from "../../partials/Privacy";
import Footer from "../../partials/Footer";

export default function policy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header mode="light" />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Privacy />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
