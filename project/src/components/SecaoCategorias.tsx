import React from 'react';
import { FiShoppingBag, FiBook, FiTruck, FiGift, FiSmartphone, FiHome, FiCoffee, FiBox } from 'react-icons/fi';

const SecaoCategorias: React.FC = () => {
  const categorias = [
    { nome: 'Todas Categorias', icone: FiShoppingBag },
    { nome: 'Supermercado', icone: FiTruck },
    { nome: 'Livros', icone: FiBook },
    { nome: 'Moda', icone: FiBox },
    { nome: 'Lançamentos', icone: FiGift },
    { nome: 'Eletrônicos', icone: FiSmartphone },
    { nome: 'Casa', icone: FiHome },
    { nome: 'Outros', icone: FiCoffee },
  ];

  return (
    <section className="categories-section">
      <div className="categories-section__grid">
        {categorias.map((categoria, index) => {
          const Icon = categoria.icone;
          return (
            <button key={index} className="category-button">
              <div className="category-button__icon">
                <Icon />
              </div>
              <span className="category-button__label">{categoria.nome}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SecaoCategorias;
