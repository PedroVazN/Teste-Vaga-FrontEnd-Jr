import React from 'react';
import '../styles/components/_brandsNav.scss';

const SessaoMarcas: React.FC = () => {
  const brands = [
    { id: 1, name: '', logo: 'src/images/Logo.png' },
    { id: 2, name: '', logo: 'src/images/Logo.png' },
    { id: 3, name: '', logo: 'src/images/Logo.png' },
    { id: 4, name: '', logo: 'src/images/Logo.png' },
    { id: 5, name: '', logo: 'src/images/Logo.png' },
  ];

  return (
    <section className="brands-nav">
      <h2>Navegue por marcas</h2>
      <div className="brands-container">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-circle">
            <div className="brand-image-container">
              <img src={brand.logo} alt={brand.name} />
            </div>
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SessaoMarcas;