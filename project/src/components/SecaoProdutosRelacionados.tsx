import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { NavegacaoProdutos } from './NavegacaoProdutos';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface SecaoProdutosRelacionadosProps {
  products: Product[];
}

export function SecaoProdutosRelacionados({ products }: SecaoProdutosRelacionadosProps) {
  const [startIndex, setStartIndex] = useState(4);
  const produtosExibidos = products.slice(startIndex, startIndex + 4);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 4));
  };

  const handleNext = () => {
    setStartIndex(Math.min(products.length - 4, startIndex + 4));
  };

  return (
    <div className="container products-section">
      <div className="products-section__header">
        <h2 className="products-section__title">Produtos relacionados</h2>
        <div className="products-section__view-all">
          <a href="#">Ver todos</a>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <NavegacaoProdutos onPrevious={handlePrevious} onNext={handleNext} />
        <div className="products-section__grid">
          {produtosExibidos.map((product, index) => (
            <ProductCard key={startIndex + index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
