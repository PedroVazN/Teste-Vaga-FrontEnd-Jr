import React from 'react';

const SecaoCategorias: React.FC = () => {
  const categorias = [
    { nome: 'Tecnologia', imagem: 'src/images/tecnologia.svg' },
    { nome: 'Supermercado', imagem: 'src/images/supermercados.png'},
    { nome: 'Bebidas', imagem: 'src/images/whiskey.png'},
    { nome: 'Ferramentas', imagem: 'src/images/ferramentas.png'},
    { nome: 'Saúde', imagem: 'src/images/cuidados-de-saude.png'},
    { nome: 'Esportes e Fitness', imagem: 'https://raw.githubusercontent.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/refs/heads/main/project/src/images/corrida%201.png?token=GHSAT0AAAAAAC6HWYCJ5JYN4QR37X2NAMDSZ6VNQMA' },
    { nome: 'Moda', imagem: 'https://raw.githubusercontent.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/refs/heads/main/project/src/images/moda%201.png?token=GHSAT0AAAAAAC6HWYCJLF374R6P4FLHXHHOZ6VNQGA' },
  ];

  return (
    <section className="categories-section">
      <div className="categories-section__grid">
        {categorias.map((categoria, index) => (
          <div key={index} className="category-card">
            <div className="category-card__image-container">
              <img src={categoria.imagem} alt={categoria.nome} className="category-card__image" />
            </div>
            <span className="category-card__label">{categoria.nome}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecaoCategorias;
