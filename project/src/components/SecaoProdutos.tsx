import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { NavegacaoProdutos } from './NavegacaoProdutos';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface SecaoProdutosProps {
  products: Product[];
}

export function SecaoProdutos({ products }: SecaoProdutosProps) {
  const [startIndex, setStartIndex] = useState(0);
  const produtosExibidos = products.slice(startIndex, startIndex + 4);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 4));
  };

  const handleNext = () => {
    setStartIndex(Math.min(products.length - 4, startIndex + 4));
  };

  return (
    <div className="container products-section">
      <h2 className="products-section__title">Produtos relacionados</h2>
      
      <div className="products-section__nav">
        <button className="nav-categories__button nav-categories__button--active">CELULAR</button>
        <button className="nav-categories__button">ACESSÓRIOS</button>
        <button className="nav-categories__button">TABLETS</button>
        <button className="nav-categories__button">NOTEBOOKS</button>
        <button className="nav-categories__button">TVS</button>
        <button className="nav-categories__button">VER TODOS</button>
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
