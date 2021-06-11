import React, { FC } from 'react';
import arrow from '../../assets/images/arrow.svg';
import './SideBar.scss';

const SideBar: FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__content">
          <h1 className="sidebar__title">Услуги</h1>
          <nav className="sidebar__services services-nav">
            <div className="services-nav__row">
              <p className="services-nav__active-link">WEB</p>
              <p className="services-nav__next-link">
                <img src={arrow} alt="Arrow Icon" /> Mobile
              </p>
            </div>
            <ul className="services-nav__list">
              <li className="services-nav__link">Mobile</li>
              <li className="services-nav__link">Design</li>
              <li className="services-nav__link">Support</li>
              <li className="services-nav__link">Branding</li>
              <li className="services-nav__link">Marketing</li>
            </ul>
          </nav>
        </div>
        <nav className="service-nav">
          <ul className="service-nav__list">
            <li className="service-nav__link">
              <p className="service-nav__link-number">01</p>
              <p className="service-nav__link-text">Разработка лендинга</p>
              <div className="service-nav__link-line"></div>
            </li>
            <li className="service-nav__link service-nav__link--active">
              <p className="service-nav__link-number">02</p>
              <p className="service-nav__link-text">Разработка промосайта</p>
              <div className="service-nav__link-line"></div>
            </li>
            <li className="service-nav__link">
              <p className="service-nav__link-number">03</p>
              <p className="service-nav__link-text">
                Разработка корпоративного сайта
              </p>
              <div className="service-nav__link-line"></div>
            </li>
            <li className="service-nav__link">
              <p className="service-nav__link-number">04</p>
              <p className="service-nav__link-text">
                Разработка интернет-магазина
              </p>
              <div className="service-nav__link-line"></div>
            </li>
            <li className="service-nav__link">
              <p className="service-nav__link-number">05</p>
              <p className="service-nav__link-text">
                Разработка интернет-портала
              </p>
              <div className="service-nav__link-line"></div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
