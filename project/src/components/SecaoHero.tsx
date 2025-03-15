import React from 'react';
import "../styles/components/_hero.scss";
const SecaoHero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Venha conhecer nossas<br />
            promoções
          </h1>
          <p className="hero__discount">
            <span className="hero__discount-amount">50% Off</span> nos produtos
          </p>
          <button className="hero__button">Ver produto</button>
        </div>
      </div>
    </section>
  );
};

export default SecaoHero;