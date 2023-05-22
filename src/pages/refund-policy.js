import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import {createClient} from "next-sanity";
import Privacy from "../../partials/Privacy";

export async function getServerSideProps() {
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
  });

  const RefundMarkdownQuery = `*[_type=="refund"][0].markdown`;
  const refundMarkdown = await client.fetch(RefundMarkdownQuery);

  return {
    props: {
      refundMarkdown,
    },
  };
}

export default function policy({refundMarkdown}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header mode="light" />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Privacy markdown={refundMarkdown} />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
