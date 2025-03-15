import React from 'react';

const SecaoCategorias: React.FC = () => {
  const categorias = [
    { nome: 'Tecnologia', imagem: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/tecnologia.png?raw=true' },
    { nome: 'Supermercado', imagem: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/supermercados%201.png?raw=true' },
    { nome: 'Bebidas', imagem: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/whiskey.png?raw=true' },
    { nome: 'Ferramentas', imagem: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/ferramentas%201.png?raw=true' },
    { nome: 'Saúde', imagem: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/cuidados-de-saude%201.png?raw=true' },
    { nome: 'Esportes e Fitness', imagem: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/corrida%201.png?raw=true' },
    { nome: 'Moda', imagem: 'https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/moda%201.png?raw=true' },
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