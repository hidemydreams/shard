import React, { FC, LegacyRef, useRef } from 'react';
import LandingDevelopment from '../../pages/LandingDevelopment/LandingDevelopment';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';

import './App.scss';
const App: FC = () => {
  const mainContent = useRef<HTMLElement>(null);
  const sideBarContent = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLElement>(null);
  const sideBar = useRef<HTMLDivElement>(null);

  const removeFixedNavbar = () => {
    if (
      footer.current !== null &&
      sideBarContent.current !== null &&
      sideBar.current !== null
    ) {
      const footerTop =
        document.documentElement.scrollHeight - footer.current?.offsetHeight;
      console.log(document.documentElement.scrollHeight, 'doc height');
      console.log(footer.current?.offsetHeight, 'footer height');
      const footerHeight = footer.current?.offsetHeight;

      if (
        sideBarContent.current.offsetHeight +
          document.documentElement.scrollTop >
        footerTop - 150
      ) {
        sideBarContent.current.style.bottom = `${footerHeight}px`;
      } else {
        sideBarContent.current.style.bottom = `100px`;
      }
    }
  };

  const setStickyHeader = () => {
    if (mainContent.current !== null) {
      mainContent.current.classList.toggle(
        'content-margin',
        window.scrollY > 100
      );
    }
  };

  window.addEventListener('scroll', setStickyHeader);
  window.addEventListener('scroll', removeFixedNavbar);

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main ref={mainContent} className="main-content">
          <div className="main-content__inner">
            <SideBar sideBarRef={sideBar} refProp={sideBarContent} />
            <div className="main-content__page">
              <LandingDevelopment />
            </div>
          </div>
        </main>
        <Footer refProp={footer} />
      </div>
    </div>
  );
};

export default App;
