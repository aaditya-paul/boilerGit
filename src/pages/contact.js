import React, {useState} from "react";
import PageBg from "../../images/contact-bg.jpg";
import CustomerAvatar from "../../images/customer-avatar-05.jpg";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.png"

function RequestDemo() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [check, setCheck] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    setValues({...values, [e.target.id]: e.target.value});
  };

  const sendEmail = () => {
    if (values.name == "" || values.email == "" || values.msg == "") {
      alert("Please fill all the required fields");
    } else {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    }
  };

  return (
    <main className="flex">
      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              {/* Site branding */}
              <div className="mb-6">
                {/* Logo */}
                <Link
                  className="inline-flex text-blue-600 transition duration-150 ease-in-out"
                  href="/"
                  ariaLabel="Shiksha"
                >
                 <Image src={logo} alt="logo" width={100} height={100}  /> 
                </Link>
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-2">
                Contact Us
              </h1>
              <p className="text-slate-600 mb-6 ">
                Shiksha UG/PG team can be reached for specific material request
                as well as for queries regarding how to become a part of our
                team as content developers/course coordinators, or, as we call
                them, Course Engineers. Write to us as{" "}
                <strong className="font-medium text-blue-600 underline">
                  <Link href="mailto:shikshaugpg@gmail.com">
                    shikshaugpg@gmail.com
                  </Link>
                </strong>{" "}
                if you are interested in joining us, and one of us will get in
                touch with you. Currently we are looking for educators willing
                to write content for IGNOU, Delhi University, Calcutta
                University, CUET and NET preparation for various subjects, among
                others. Prospective Course Engineers may pitch us with viable
                options for addition as well.
              </p>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="text-slate-900 block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      className="text-slate-900 form-input py-2 w-full"
                      type="email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="text-slate-900 block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Contact Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="text-slate-900 form-input py-2 w-full"
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="sm:w-full">
                    <label
                      className="text-slate-900 block text-sm font-medium mb-1"
                      htmlFor="message"
                    >
                      Your Message<span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      className="text-slate-900 block w-full px-3 py-2 bg-gray-100 min-h-[100px] max-h-[300px] border border-slate-200	"
                      placeholder="Type your message here..."
                      id="msg"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    disabled={!check}
                    onClick={() => {
                      sendEmail();
                    }}
                    className={
                      check
                        ? `btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group`
                        : `btn-sm w-full text-sm text-white bg-blue-600 opacity-70 `
                    }
                  >
                    Submit{" "}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input
                      id="check"
                      type="checkbox"
                      className="form-checkbox mt-0.5"
                      onChange={(e) => {
                        setCheck(!check);
                      }}
                    />
                    <span className="text-sm text-slate-500 ml-3">
                      By filling out this form, I consent to the collection and
                      use of my personal data.
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div
        className="relative hidden md:block md:w-1/2 bg-slate-900"
        aria-hidden="true"
      >
        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          <Image
            className="opacity-10 w-full h-full object-cover"
            src={PageBg}
            width="760"
            height="900"
            alt="Background"
          />
        </div>

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">
                Shiksha Inc.
              </h2>
              <div className="space-y-3">
                <svg
                  className="fill-blue-600"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                </svg>
                <blockquote className="text-slate-400 italic">
                  The purpose of education is to make good human beings with skill and expertise... Enlightened human beings can be created by teachers.
                </blockquote>
              </div>
              <div className="flex items-center mt-4">
                
                <div className="font-medium">
                  <span className="text-slate-200">- APJ Abdul Kalam</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RequestDemo;
