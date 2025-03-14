import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface SecaoProdutosProps {
  products: Product[];
}

const SecaoProdutos: React.FC<SecaoProdutosProps> = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 4));
  };

  const handleNext = () => {
    setStartIndex(Math.min(products.length - 4, startIndex + 4));
  };

  return (
    <section className="products-section">
      <div className="products-section__header">
        <h2 className="products-section__title">Produtos em destaque</h2>
        <div className="products-section__view-all">
          <a href="#todos-produtos">Ver todos</a>
        </div>
      </div>

      <div className="products-section__grid">
        {products.slice(startIndex, startIndex + 4).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="products-section__navigation">
        <button 
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className="navigation-button"
        >
          Anterior
        </button>
        <button 
          onClick={handleNext}
          disabled={startIndex >= products.length - 4}
          className="navigation-button"
        >
          Próximo
        </button>
      </div>
    </section>
  );
};

export default SecaoProdutos;
