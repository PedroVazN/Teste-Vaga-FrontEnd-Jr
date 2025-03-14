import React from 'react';

interface Product {
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imagem} alt={product.nome} className="product-card__image" />
      <p className="product-card__description">{product.descricao}</p>
      <div className="product-card__price">
        <span className="product-card__price--original">
          R$ {(product.preco * 1.2).toFixed(2)}
        </span>
        <span className="product-card__price--current">
          R$ {product.preco.toFixed(2)}
        </span>
      </div>
      <p className="product-card__installment">
        em até 12x de R$ {(product.preco / 12).toFixed(2)}
      </p>
      <p className="product-card__shipping">Frete grátis</p>
      <button className="product-card__button">Comprar</button>
    </div>
  );
};

export default ProductCard;