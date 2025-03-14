interface ProductCardProps {
  product: {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);

  const originalPrice = product.price * 1.2; // 20% maior que o preço atual
  const formattedOriginalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(originalPrice);

  const installmentPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(product.price / 10);

  return (
    <div className="product-card">
      <img
        src={product.photo}
        alt={product.productName}
        className="product-card__image"
      />
      <h3 className="product-card__description">{product.descriptionShort}</h3>
      <div>
        <span className="product-card__price--original">
          {formattedOriginalPrice}
        </span>
      </div>
      <div>
        <span className="product-card__price--current">{formattedPrice}</span>
      </div>
      <p className="product-card__installment">
        ou 10x de {installmentPrice} sem juros
      </p>
      <p className="product-card__shipping">Frete grátis</p>
      <button className="product-card__button">
        COMPRAR
      </button>
    </div>
  );
}