import React, { FC } from 'react';
import Header from '../header/Header';
import './App.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <aside className="sidebar">
        <div className="sidebar__content">
          <h1 className="sidebar__title">Услуги</h1>
          <nav className="sidebar__services services__nav">
            <p className="services__nav-active-link">WEB</p>
            <p className="services__nav-next-link">Mobile</p>
            <ul className="services__nav-list">
              <li className="services__nav-link">Mobile</li>
              <li className="services__nav-link">Design</li>
              <li className="services__nav-link">Support</li>
              <li className="services__nav-link">Branding</li>
              <li className="services__nav-link">Marketing</li>
            </ul>
          </nav>
        </div>
        <nav className="service-nav">
          <ul className="service-nav__list">
            <li className="service-nav__link">
              <p className="service-nav__link-number">01</p>
              <div className="service-nav__link-text">Разработка лендинга</div>
            </li>
            <li className="service-nav__link service-nav__link--active">
              <p className="service-nav__link-number">02</p>
              <p className="service-nav__link-text">Разработка промосайта</p>
            </li>
            <li className="service-nav__link">
              <p className="service-nav__link-number">03</p>
              <div className="service-nav__link-text">
                Разработка корпоративного сайта
              </div>
            </li>
            <li className="service-nav__link">
              <p className="service-nav__link-number">04</p>
              <div className="service-nav__link-text">
                Разработка интернет-магазина
              </div>
            </li>
            <li className="service-nav__link">
              <p className="service-nav__link-number">05</p>
              <p className="service-nav__link-text">
                Разработка интернет-портала
              </p>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default App;
