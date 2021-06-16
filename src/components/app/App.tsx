import React, { FC, useRef } from 'react';
import LandingDevelopment from '../../pages/LandingDevelopment/LandingDevelopment';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';
import './style.scss';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App: FC = () => {
  const mainContent = useRef<HTMLElement>(null);
  const sideBarContent = useRef<HTMLDivElement>(null);
  const footer = useRef<HTMLElement>(null);
  const sideBar = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    console.log(e.target);
  };

  const removeFixedNavbar = () => {
    if (
      footer.current !== null &&
      sideBarContent.current !== null &&
      sideBar.current !== null
    ) {
      const footerTop =
        document.documentElement.scrollHeight - footer.current?.offsetHeight;
      console.log(footer.current?.getBoundingClientRect());

      const footerHeight = footer.current?.offsetHeight;
      const sidebarContentPos =
        sideBarContent.current.offsetHeight +
        document.documentElement.scrollTop;

      footer.current.scrollTop = footer.current.scrollHeight;

      if (sidebarContentPos > footerTop) {
        sideBarContent.current.style.bottom = `${footerHeight}px`;
      } else {
        sideBarContent.current.style.bottom = `initial`;
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
    <Router>
      <div className="app">
        <div className="wrapper">
          <Header />
          <main ref={mainContent} className="main-content">
            <div className="main-content__inner">
              <SideBar
                handleMenuItemClick={handleMenuItemClick}
                sideBarRef={sideBar}
                refProp={sideBarContent}
              />
              <div className="main-content__page">
                <Switch>
                  <Route
                    exact
                    path={'/web/:id'}
                    render={(props) => <LandingDevelopment {...props} />}
                  />
                  <Redirect from="/" to="/web/1" />
                </Switch>
              </div>
            </div>
          </main>
          <Footer refProp={footer} />
        </div>
      </div>
    </Router>
  );
};

export default App;
