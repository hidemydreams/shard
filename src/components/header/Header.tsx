import React, { FC, useRef } from 'react';
import logo from '../../assets/images/Logotype.svg';
import './Header.scss';

const Header: FC = () => {
  const header = useRef<HTMLHeadingElement>(null);

  const toggleHeaderBackground = () => {
    if (header.current !== null) {
      header.current.classList.toggle('sticky', window.scrollY > 100);
    }
  };
  window.addEventListener('scroll', toggleHeaderBackground);
  return (
    <header ref={header} className="header">
      <div className="header__content">
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
    </header>
  );
};

export default Header;
