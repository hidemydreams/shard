import React, { FC } from 'react';
import Header from '../header/Header';
import SideBar from '../side-bar/SideBar';
import './App.scss';
const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <div className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ullam nam
        culpa voluptatum impedit. Accusantium eveniet facere pariatur sint natus
        repudiandae ipsum earum assumenda nostrum suscipit cumque, libero
        ratione eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quis ullam nam culpa voluptatum impedit. Accusantium eveniet
      </div>
      <footer></footer>
    </div>
  );
};

export default App;
