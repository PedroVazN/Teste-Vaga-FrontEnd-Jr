import React from 'react';

const SecaoCategorias: React.FC = () => {
  const categorias = [
    { nome: 'Tecnologia', imagem: 'src/images/tecnologia.png' },
    { nome: 'Supermercado', imagem: 'src/images/supermercados 1.png' },
    { nome: 'Bebidas', imagem: 'src/images/whiskey.png' },
    { nome: 'Ferramentas', imagem: 'src/images/ferramentas 1.png' },
    { nome: 'Saúde', imagem: 'src/images/cuidados-de-saude 1.png' },
    { nome: 'Esportes e Fitness', imagem: 'src/images/corrida 1.png' },
    { nome: 'Moda', imagem: 'src/images/moda 1.png' },
  ];

  return (
    <section className="categories-section">
      <div className="categories-section__container">
        <div className="categories-section__grid">
          {categorias.map((categoria, index) => (
            <div key={index} className="category-button">
              <div className="category-button__icon">
                <img src={categoria.imagem} alt={categoria.nome} className="category-button__image" />
              </div>
              <span className="category-button__label">{categoria.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoCategorias;