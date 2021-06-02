import React, { FC } from 'react';
import logo from '../../assets/images/Logotype.svg';
import './Header.scss';

const Header: FC = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
