import React, { FC, LegacyRef } from 'react';
import arrow from '../../assets/images/arrow.svg';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { data, INavItemInterface } from '../../data/data';

interface ISideBarProps {
  refProp: LegacyRef<HTMLDivElement>;
  sideBarRef: LegacyRef<HTMLDivElement>;
  handleMenuItemClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const SideBar: FC<ISideBarProps> = ({
  refProp,
  sideBarRef,
  handleMenuItemClick,
}) => {
  const renderNavItems = () => {
    return data.map((item: INavItemInterface) => {
      return (
        <li
          onClick={(e) => handleMenuItemClick(e)}
          key={item.id}
          id={item.id}
          className="service-nav__link"
        >
          <NavLink to={`/web/${item.name}`}>
            <p className="service-nav__link-number">{item.numberTitle}</p>
            <p className="service-nav__link-text">{item.title}</p>
            <div className="service-nav__link-line"></div>
          </NavLink>
        </li>
      );
    });
  };
  return (
    <aside ref={sideBarRef} className="sidebar">
      <div ref={refProp} className="sidebar__inner">
        <div className="sidebar__content">
          <h1 className="sidebar__title">Услуги</h1>
          <nav className="sidebar__services services-nav">
            <div className="services-nav__row">
              <div className="services-nav__active-group">
                <h2 className="services-nav__title">WEB</h2>
                <h2 className="services-nav__overlay">WEB</h2>
              </div>
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
          <ul className="service-nav__list">{renderNavItems()}</ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
