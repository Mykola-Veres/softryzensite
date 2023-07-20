import { FC, useEffect, useState, MouseEvent } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Logo } from '@/components/typography/Logo';
import { IconButton } from '@/components/button/IconButton';
import { Navigation } from '@/components/header/Navigation';
import { ButtonList } from '@/components/header/ButtonList';
import { useCloseOnEsc } from '@/hooks';

import MobileMenuIcon from '@/public/images/header/mobile-menu.svg';
import CloseMenuIcon from '@/public/images/header/icon-close.svg';

import { ItemProps } from './Header.props';

import header from '@/data/header.json';

export const Header: FC = () => {
  const HEIGHT_SCROLL = 20;

  const items = header.nav as ItemProps[];
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px)` });

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => setNavbarOpen(false);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= HEIGHT_SCROLL) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Close Navbar with click to ESC and on the backdrop
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      navbarToggleHandler();
    }
  };
  useCloseOnEsc(() => setNavbarOpen(false));

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  useEffect(() => {
    if (navbarOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isDesktop, navbarOpen]);

  return (
    <header
      className={`left-0 top-0 z-40 flex  w-full items-center border-b-[1px] border-solid border-disabled bg-transparent  ${
        sticky
          ? '!fixed !z-[9999] h-[50px] !bg-white  !bg-opacity-50 backdrop-blur-[3px]  !transition md:h-20'
          : 'absolute h-[60px] bg-white md:h-[100px]'
      }`}
    >
      <div className="container relative flex items-center justify-between">
        <Logo sticky={sticky} />

        <div className="flex items-center justify-end ">
          <div
            className={`absolute z-30 xl:mr-[100px] notXl:bg-white/50 notXl:backdrop-blur-[3px] ${
              navbarOpen
                ? ' disable-scroll !fixed left-0 top-0 h-screen w-screen '
                : '!static notXl:hidden  '
            }`}
            onClick={handleBackdropClick}
          >
            <div className="relative ml-auto flex flex-col smOnly:w-[200px] smOnly:px-5 smOnly:pb-[122px] mdOnly:w-[280px] mdOnly:pl-6 mdOnly:pr-5 notXl:h-screen  notXl:overflow-y-auto notXl:bg-primary notXl:pb-20 notXl:pt-[122px]">
              <IconButton
                onClick={navbarToggleHandler}
                label={header.button.ariaMobileMenu}
                className="absolute right-5 top-[18px] flex items-center justify-center text-white xl:hidden"
              >
                <CloseMenuIcon width={24} height={24} className="h-6 w-6" />
              </IconButton>
              <Navigation
                onItemClick={closeNavbar}
                list={items}
                isOpen={navbarOpen}
              />

              <ButtonList
                data={header.button}
                onButtonClick={closeNavbar}
                mobile
                className=" xl:hidden  notXl:space-y-6"
              />
            </div>
          </div>

          <ButtonList data={header.button} className="flex smOnly:hidden" />

          <IconButton
            onClick={navbarToggleHandler}
            label={header.button.ariaMobileMenu}
            className="flex items-center justify-center text-primary  xl:hidden"
          >
            <MobileMenuIcon width={24} height={24} className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </header>
  );
};
