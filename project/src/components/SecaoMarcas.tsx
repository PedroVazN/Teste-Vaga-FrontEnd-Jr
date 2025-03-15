import React from 'react';
import '../styles/components/_brandsNav.scss';

const SessaoMarcas: React.FC = () => {
  const brands = [
    { id: 1, name: '', logo: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Logo.png?raw=true' },
    { id: 2, name: '', logo: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Logo.png?raw=true' },
    { id: 3, name: '', logo: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Logo.png?raw=true' },
    { id: 4, name: '', logo: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Logo.png?raw=true' },
    { id: 5, name: '', logo: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Logo.png?raw=true' },
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