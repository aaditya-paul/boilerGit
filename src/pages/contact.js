import React, {useState} from "react";
import PageBg from "../../images/request-demo-bg.jpg";
import CustomerAvatar from "../../images/customer-avatar-04.jpg";
import Link from "next/link";
import Image from "next/image";

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
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    console.log(values);
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
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 1024 1024"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M652.996 276.166C653.347 275.41 653.602 274.597 653.745 273.742L658.697 244.028C659.325 240.258 662.167 237.24 665.893 236.386L739.985 219.406L740.082 219.536L753.625 243.236C754.326 244.464 754.743 245.833 754.844 247.243L756.94 276.59C749.066 279.702 743.735 285.696 743.735 292.579C743.735 299.863 749.706 306.151 758.343 309.082V354.664L754.785 415.148C754.722 416.209 754.84 417.272 755.131 418.293L761.123 439.264C761.689 441.244 762.886 442.983 764.533 444.218L774.088 451.385C775.721 452.609 777.706 453.271 779.747 453.271H783.653C786.154 453.271 788.553 452.278 790.322 450.509L794.849 445.982C797.039 443.792 797.582 440.446 796.197 437.676C795.343 435.97 793.847 434.672 792.036 434.068L786.02 432.063C784.631 431.6 783.369 430.82 782.333 429.784L778.178 425.629C777.142 424.593 776.362 423.331 775.899 421.942L773.435 414.55C773.115 413.588 772.951 412.581 772.951 411.568V398.49V397.957C772.951 394.846 776.225 392.822 779.008 394.214C779.818 394.619 780.474 395.275 780.879 396.085L783.907 402.142L786.875 408.077C787.328 408.984 787.925 409.811 788.642 410.528L792.102 413.988C793.87 415.757 796.269 416.75 798.77 416.75H799.942C801.406 416.75 802.85 416.409 804.159 415.754L804.259 415.705C807.454 414.107 809.472 410.842 809.472 407.269V404.368C809.472 402.904 809.131 401.46 808.477 400.15L807.226 397.649C806.313 395.824 804.833 394.344 803.008 393.432L799.885 391.87C798.978 391.417 798.151 390.82 797.434 390.103L792.294 384.963C791.577 384.247 790.981 383.419 790.527 382.512L788.244 377.946C787.791 377.039 787.194 376.212 786.477 375.495L783.018 372.035C781.249 370.266 780.255 367.868 780.255 365.366V351.012V332.752V309.082C788.893 306.151 794.865 299.863 794.865 292.579C794.865 284.887 788.207 278.306 778.783 275.616L776.756 247.243C776.656 245.833 776.239 244.464 775.538 243.236L762.621 220.633C762.206 219.905 761.695 219.236 761.102 218.643L757.786 215.327L827.712 199.302C831.998 198.32 835.037 194.506 835.037 190.109V180.797C835.037 177.622 833.44 174.661 830.787 172.917L571.689 2.55085C569.604 1.17973 567.06 0.691023 564.615 1.19178L272.847 60.9516C268.458 61.8504 265.308 65.7116 265.308 70.1908V82.8006C265.308 86.0701 267.001 89.1063 269.783 90.8245L385.005 161.991C387.786 163.709 389.48 166.745 389.48 170.015V184.692C339.026 216.337 305.481 272.453 305.481 336.404C305.481 435.237 385.601 515.357 484.434 515.357C583.267 515.357 663.388 435.237 663.388 336.404C663.388 315.268 659.724 294.989 652.996 276.166ZM484.435 551.878C224.99 551.878 189.532 829.869 188.632 1015.52C188.612 1019.69 191.992 1023 196.159 1023H772.711C776.878 1023 780.257 1019.69 780.241 1015.52C779.53 829.869 751.086 551.878 484.435 551.878Z"
                      fill="#075F63"
                    />
                  </svg>
                </Link>
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-12">
                Contact Us
              </h1>

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
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur e xcepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia.
                </blockquote>
              </div>
              <div className="flex items-center mt-4">
                <Link href="#0">
                  <Image
                    className="rounded-full shrink-0 mr-3"
                    src={CustomerAvatar}
                    width="32"
                    height="32"
                    alt="Customer Avatar 04"
                  />
                </Link>
                <div className="font-medium">
                  <span className="text-slate-200">Christine Duck</span>
                  <span className="text-slate-600"> · </span>
                  <span className="text-slate-500">CEO, Shiksha Inc.</span>
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
