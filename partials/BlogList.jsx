import React from "react";
import PostImage01 from "../images/blog-post-01.jpg";
import BlogPost2 from "../images/blog-post-02.jpg";
import BlogPost3 from "../images/blog-post-08.jpg";
import BlogPost4 from "../images/blog-post-09.jpg";
import BlogPost5 from "../images/blog-post-10.jpg";
import CtaImage from "../images/cta-image.png";
import NewsAuthor3 from "../assets/news-author-03.jpg";
import NewsAuthor2 from "../assets/news-author-02.jpg";
import NewsAuthor4 from "../assets/news-author-04.jpg";
import NewsAuthor5 from "../assets/news-author-05.jpg";
import Link from "next/link";
import Image from "next/image";

const latest_blog_list = [
  {
    image: BlogPost2,
    header: "A sneak peek of the new Tidy Web Portal",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor incididunt.",
    avatar: NewsAuthor2,
    author: "Knut Mayer",
    date: "Sep 24, 2021",
  },
  {
    image: BlogPost3,
    header: "A sneak peek of the new Tidy Web Portal",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor incididunt.",
    avatar: NewsAuthor3,
    author: "Arstol",
    date: "Sep 24, 2021",
  },
  {
    image: BlogPost4,
    header: "A sneak peek of the new Tidy Web Portal",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor incididunt.",
    avatar: NewsAuthor4,
    author: "Daniel",
    date: "Sep 24, 2021",
  },
  {
    image: BlogPost5,
    header: "A sneak peek of the new Tidy Web Portal",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor incididunt.",
    avatar: NewsAuthor5,
    author: "Usarati",
    date: "Sep 24, 2021",
  },
];

function BlogList() {
  return (
    <>
      {/* Sticky article */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <h2 className="text-slate-800 h3 font-playfair-display text-center md:text-left mb-8">
              Featured
            </h2>
            <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
              {/* Image */}
              <Link
                className="relative block group overflow-hidden md:w-1/2"
                href="/blog/slug"
                data-aos="fade-down"
              >
                <Image
                  className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                  src={PostImage01}
                  width="540"
                  height="340"
                  alt="News 01"
                />
                <div className="absolute top-6 right-6">
                  <svg className="w-8 h-8" viewBox="0 0 32 32">
                    <circle
                      className="fill-slate-900"
                      fillOpacity=".48"
                      cx="16"
                      cy="16"
                      r="16"
                    />
                    <path
                      className="fill-yellow-500"
                      d="M21.954 14.29A.5.5 0 0 0 21.5 14h-5.36l.845-3.38a.5.5 0 0 0-.864-.446l-6 7A.5.5 0 0 0 10.5 18h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"
                    />
                  </svg>
                </div>
              </Link>
              {/* Content */}
              <div className="md:w-1/2" data-aos="fade-up">
                <header>
                  <h2 className="h4 md:text-4xl lg:text-5xl font-playfair-display mb-3">
                    <Link
                      className="text-slate-800 hover:underline hover:decoration-blue-100"
                      href="/blog/slug"
                    >
                      How startups can sell more using smart channels
                    </Link>
                  </h2>
                </header>
                <p className="text-lg text-slate-500 grow">
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt.
                </p>
                <footer className="flex items-center mt-4">
                  <Link href="#0">
                    <Image
                      className="rounded-full shrink-0 mr-3"
                      src={NewsAuthor3}
                      width="32"
                      height="32"
                      alt="Author 01"
                    />
                  </Link>
                  <div>
                    <Link
                      className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Patricia Williams
                    </Link>
                    <span className="text-slate-300"> · </span>
                    <span className="text-slate-500">Sep 24, 2021</span>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* All articles */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">
            {/* Latest */}
            <div>
              <h2 className="text-slate-800 h3 font-playfair-display text-center md:text-left mb-8">
                Latest
              </h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {/* 1st Article */}
                {latest_blog_list.map((latest_blog_list, index) => {
                  const ImageBlog = latest_blog_list.image;
                  const Avatar = latest_blog_list.avatar;
                  return (
                    <div key={index}>
                      <article
                        className="h-full flex flex-col space-y-5"
                        data-aos="fade-up"
                      >
                        {/* Image */}
                        <Link
                          className="block group overflow-hidden"
                          href="/blog/slug"
                        >
                          <Image
                            className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out rounded-lg"
                            src={ImageBlog}
                            width="540"
                            height="340"
                            alt="blog2"
                          />
                        </Link>
                        {/* Content */}
                        <div className="grow flex flex-col">
                          <header>
                            <h3 className="h4 font-playfair-display mb-3">
                              <Link
                                className="text-slate-800 hover:underline hover:decoration-blue-100"
                                href="/blog/slug"
                              >
                                {latest_blog_list.header}
                              </Link>
                            </h3>
                          </header>
                          <p className="text-lg text-slate-500 grow">
                            {latest_blog_list.paragraph}
                          </p>
                          <footer className="flex items-center mt-4">
                            <Link href="#0">
                              <Image
                                className="rounded-full shrink-0 mr-3"
                                src={Avatar}
                                width="32"
                                height="32"
                                alt="Author 02"
                              />
                            </Link>
                            <div>
                              <Link
                                className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                                href="#0"
                              >
                                {latest_blog_list.author}
                              </Link>
                              <span className="text-slate-300"> · </span>
                              <span className="text-slate-500">
                                {latest_blog_list.date}
                              </span>
                            </div>
                          </footer>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* See All Articles */}
            <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
                See All Articles{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogList;
