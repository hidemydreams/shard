import React, { FC } from 'react';
import laptopImage from '../../assets/images/laptop.svg';
import manWithLaptopImage from '../../assets/images/man-with-laptop.svg';
import arrowImage from '../../assets/images/svg-arrow.svg';

const LandingDevelopment: FC = () => {
  return (
    <div className="landing">
      <div className="landing__title landing-title">
        <p className="landing-title__number">01</p>
        <div className="landing-title__text">Разработка лендинга</div>
        <p className="landing__intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo
          gravida turpis vel. Dolor sit quis viverra ornare malesuada sit
          imperdiet dictum. Velit arcu morbi dui, risus risus, risus. Urna
          ultricies viverra at at congue sagittis. Id risus, leo mattis amet in
          ullamcorper. Ullamcorper non facilisis sagittis, habitasse. Justo,
          enim tempor eros nec commodo, sed. Id nullam amet vestibulum
          suspendisse faucibus aenean eu auctor. Urna.
        </p>
        <div className="landing__row landing-row">
          <div className="landing-row__content">
            <h4 className="landing-row__title">Заголовок</h4>
            <p className="landing-row__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim duis
              eu felis viverra quis. Gravida ac mauris egestas massa augue.
              Morbi tristique semper a, quis augue sollicitudin quam neque. Elit
              aliquam eu augue commodo habitant. Ornare sagittis, tristique et
              porttitor diam cras placerat. Integer scelerisque venenatis at
              quis malesuada sed. Amet, ornare nulla dui sed ultrices iaculis in
              amet non. Pharetra mattis blandit posuere ut fringilla. Consequat
              sit pellentesque arcu.
            </p>
          </div>
          <div className="landing-row__image">
            <img src={laptopImage} alt="Laptop" />
          </div>
        </div>
        <div className="landing__row landing-row">
          <div className="landing-row__image">
            <img src={manWithLaptopImage} alt="Laptop" />
          </div>
          <div className="landing-row__content">
            <h4 className="landing-row__title">Заголовок</h4>
            <p className="landing-row__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim duis
              eu felis viverra quis. Gravida ac mauris egestas massa augue.
              Morbi tristique semper a, quis augue sollicitudin quam neque. Elit
              aliquam eu augue commodo habitant. Ornare sagittis, tristique et
              porttitor diam cras placerat. Integer scelerisque venenatis at
              quis malesuada sed. Amet, ornare nulla dui sed ultrices iaculis in
              amet non. Pharetra mattis blandit posuere ut fringilla. Consequat
              sit pellentesque arcu.
            </p>
          </div>
        </div>
        <div className="landing__row landing-row">
          <div className="landing-row__content">
            <h4 className="landing-row__title">Заголовок</h4>
            <p className="landing-row__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim duis
              eu felis viverra quis. Gravida ac mauris egestas massa augue.
              Morbi tristique semper a, quis augue sollicitudin quam neque. Elit
              aliquam eu augue commodo habitant. Ornare sagittis, tristique et
              porttitor diam cras placerat. Integer scelerisque venenatis at
              quis malesuada sed. Amet, ornare nulla dui sed ultrices iaculis in
              amet non. Pharetra mattis blandit posuere ut fringilla. Consequat
              sit pellentesque arcu.
            </p>
          </div>
          <div className="landing-row__image">
            <img src={arrowImage} alt="Laptop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDevelopment;
