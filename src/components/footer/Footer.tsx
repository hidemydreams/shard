import React, { FC, LegacyRef, useRef } from 'react';
import './Footer.scss';

interface IFooterProps {
  refProp: LegacyRef<HTMLElement>;
}

const Footer: FC<IFooterProps> = ({ refProp }) => {
  return (
    <footer ref={refProp} className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <div className="footer__contacts">
            <a className="footer__tel" href="tel">
              +7 (966) 065-55-66
            </a>
            <p className="footer__email">info@shard-studio.ru</p>
          </div>
          <p className="footer__cta">Стать клиентом</p>
        </div>
        <div className="footer__socials socials">
          <nav className="socials">
            <ul className="socials__list">
              <li className="socials__link">Vkontakte</li>
              <li className="socials__link">Instagram</li>
              <li className="socials__link">Telegram</li>
            </ul>
            <div className="socials__copyright">
              © Студия Шард 2020. Все права защищены.
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
