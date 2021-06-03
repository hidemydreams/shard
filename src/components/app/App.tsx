import React, { FC } from 'react';
import LandingDevelopment from '../../pages/LandingDevelopment/LandingDevelopment';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';

import './App.scss';
const App: FC = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <SideBar />
        <main className="main-content">
          <LandingDevelopment />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
