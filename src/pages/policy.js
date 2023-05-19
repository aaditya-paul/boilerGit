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

  const PolicyMarkdownQuery = `*[_type=="privacy"][0].markdown`;
  const PolicyMarkdown = await client.fetch(PolicyMarkdownQuery);

  return {
    props: {
      PolicyMarkdown,
    },
  };
}

export default function policy({PolicyMarkdown}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header mode="light" />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Privacy markdown={PolicyMarkdown} />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
