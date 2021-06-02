import React, { FC } from 'react';
import './App.scss';
import logo from '../../assets/images/Logotype.png';

const App: FC = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="header__logo logo">
            <img className="logo__image" src={logo} alt="Shard Logo" />
          </div>
          <div className="header__right">
            <p className="header__client-link">Стать клиентом</p>
            <div className="header__burger burger-icon">
              <div className="burger-icon__line"></div>
              <div className="burger-icon__line"></div>
              <div className="burger-icon__line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
