import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface SecaoProdutosRelacionadosProps {
  products: Product[];
}

const SecaoProdutosRelacionados: React.FC<SecaoProdutosRelacionadosProps> = ({ products }) => {
  const [startIndex, setStartIndex] = useState(4);

  const handlePrevious = () => {
    setStartIndex(Math.max(4, startIndex - 4));
  };

  const handleNext = () => {
    setStartIndex(Math.min(products.length - 4, startIndex + 4));
  };

  return (
    <section className="products-section">
      <div className="products-section__header">
        <h2 className="products-section__title">Produtos Relacionados</h2>
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
          disabled={startIndex === 4}
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

export default SecaoProdutosRelacionados;
