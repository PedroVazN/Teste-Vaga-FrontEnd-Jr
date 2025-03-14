import React from 'react';

const SecaoHero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Venha conhecer nossas<br />
          promoções
        </h1>
        <div className="hero__discount">
          <span className="hero__discount-amount">50% Off</span>
          <span className="hero__discount-text">nos produtos</span>
        </div>
        <button className="hero__button">Ver produto</button>
      </div>
      <div className="hero__background" />
    </section>
  );
};

export default SecaoHero;
