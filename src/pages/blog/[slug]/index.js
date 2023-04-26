import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import BlogSingle from "../../../../partials/BlogSingle";
import {createClient} from "next-sanity";

export async function getServerSideProps() {
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
  });

  //   const blogImageQuery = ` *[_type == "post"][0] {
  //   mainImage{asset->{url}}
  // }`;
  const blogImageQuery = `*[_type == "post"][0].mainImage.asset->{url}.url`;
  const blogImage = await client.fetch(blogImageQuery);

  const titleQuery = `*[_type=="post"][0].title`;
  const title = await client.fetch(titleQuery);

  const mainBodyQuery = `*[_type=="post"][0].body`;
  const mainBody = await client.fetch(mainBodyQuery);

  return {
    props: {
      blogImage,
      title,
      mainBody,
    },
  };
}

function BlogPostItem({blogImage, title, mainBody}) {
  return (
    <>
      <Header mode="light" />
      <BlogSingle blogImage={blogImage} title={title} mainBody={mainBody} />
      <Footer />
    </>
  );
}

export default BlogPostItem;
