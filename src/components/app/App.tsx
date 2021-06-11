import React, { FC, useRef } from 'react';
import LandingDevelopment from '../../pages/LandingDevelopment/LandingDevelopment';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';

import './App.scss';
const App: FC = () => {
  const mainContent = useRef<HTMLHeadingElement>(null);

  const setStickyHeader = () => {
    if (mainContent.current !== null) {
      mainContent.current.classList.toggle(
        'content-margin',
        window.scrollY > 100
      );
    }
  };
  window.addEventListener('scroll', setStickyHeader);
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main ref={mainContent} className="main-content">
          <div className="main-content__inner">
            <SideBar />
            <div className="main-content__page">
              <LandingDevelopment />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
