import React, { FC } from 'react';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';
import './App.scss';
const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <SideBar />
    </div>
  );
};

export default App;
