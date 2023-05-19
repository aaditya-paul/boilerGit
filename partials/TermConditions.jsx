import React from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import "react-markdown";

const Terms = ({markdown}) => {
  return (
    <section className="relative bg-white">
      {/* Dark background */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-slate-700 ">
          <ReactMarkdown allowDangerousHtml className=" prose">
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Terms;
