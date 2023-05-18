import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.png';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

function Header({ mode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`absolute shadow-md w-full z-30 ${
        mode !== 'light' && 'dark'
      }`}>
      <div className='max-w-7xl mx-auto px-3 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link
              href='/'
              className='block text-blue-600 transition duration-150 ease-in-out'
              aria-label='Shikhsha'>
              <Image src={logo} alt='logo' width={100} height={100} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop menu links */}
            <ul className='flex grow justify-start flex-wrap items-center'>
              <li>
                <Link
                  href='/'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'>
                  Blog
                </Link>
              </li>
              <li>
                <div>
                  <Menu>
                    <MenuButton className='text-slate-400'>
                      <div className='flex items-center'>
                        <div>Terms</div>
                        <div className='text-md'>
                          <BiChevronDown />
                        </div>
                      </div>
                    </MenuButton>
                    <MenuList className='p-2 border bg-slate-900 text-white rounded-md'>
                      <MenuItem className='hover:bg-slate-800 pl-1'>
                        <Link href='/terms'>Terms and Conditions</Link>
                      </MenuItem>
                      <MenuItem className='hover:bg-slate-800 pl-1'>
                        <Link href='/'>Privacy Policy</Link>
                      </MenuItem>
                      <MenuItem className='hover:bg-slate-800 pl-1'>
                        <Link href='/'>Cancellation and Refund Policy</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </li>

              {/* 1st level: hover */}
            </ul>

            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center'>
              <li>
                <Link
                  href='/contact'
                  className='font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className='flex md:hidden'>
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls='mobile-nav'
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className='sr-only'>Menu</span>
              <svg
                className='w-6 h-6 fill-current text-slate-900 dark:text-slate-100'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <rect y='4' width='24' height='2' />
                <rect y='11' width='24' height='2' />
                <rect y='18' width='24' height='2' />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag='nav'
                id='mobile-nav'
                className='absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white'
                enter='transition ease-out duration-200 transform'
                enterStart='opacity-0 -translate-y-2'
                enterEnd='opacity-100 translate-y-0'
                leave='transition ease-out duration-200'
                leaveStart='opacity-100'
                leaveEnd='opacity-0'>
                <ul className='px-5 py-2'>
                  <li>
                    <Link
                      href='/about'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/blog'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'>
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'>
                      Cancellation and Refund Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      href='/request-sa'
                      className='flex font-medium text-blue-600 py-2 group'>
                      Request sa{' '}
                      <span className='tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1'>
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
