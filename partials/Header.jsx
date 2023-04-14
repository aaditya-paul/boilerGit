import React, {useState, useRef, useEffect} from "react";
import Transition from "../utils/Transition";
import Link from "next/link";

function Header({mode}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({target}) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({keyCode}) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className={`absolute  w-full z-30 ${mode !== "light" && "dark"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              href="/"
              className="block text-blue-600 transition duration-150 ease-in-out"
              aria-label="Shikhsha"
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>

              {/* 1st level: hover */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
                >
                  Contact Us{" "}
                  <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="px-5 py-2">
                  <li>
                    <Link
                      href="/about"
                      className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/request-sa"
                      className="flex font-medium text-blue-600 py-2 group"
                    >
                      Request sa{" "}
                      <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
