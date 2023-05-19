import React from "react";
import Terms from "../../partials/TermConditions";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import {createClient} from "next-sanity";

export async function getServerSideProps() {
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
  });

  const TermConditionsMarkdownQuery = `*[_type=="termsAndConditions"][0].markdown`;
  const TermConditionsMarkdown = await client.fetch(
    TermConditionsMarkdownQuery
  );

  return {
    props: {
      TermConditionsMarkdown,
    },
  };
}

export default function terms({TermConditionsMarkdown}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header mode="light" />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Terms markdown={TermConditionsMarkdown} />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
