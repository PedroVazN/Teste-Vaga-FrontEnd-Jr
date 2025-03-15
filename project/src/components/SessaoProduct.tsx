import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Truck, X } from 'lucide-react';
import productsData from '../data/produtos.json';
import '../styles/components/_product-modal.scss';

// Define types based on your products.json structure
interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  description?: string;
}

interface ProductsData {
  products: Product[];
}

// Type assertion for imported JSON data
const typedProductsData = productsData as ProductsData;

const SessaoProduct: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const productsPerPage = 4; // Fixado em 4 produtos

  // Calcula o número total de páginas
  const totalPages = Math.ceil(typedProductsData.products.length / productsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + productsPerPage;
      return nextIndex >= typedProductsData.products.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevPageIndex = prevIndex - productsPerPage;
      return prevPageIndex < 0 ? 
        (totalPages - 1) * productsPerPage : 
        prevPageIndex;
    });
  };

  // Modal functions
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Pega exatamente 4 produtos para mostrar
  const visibleProducts = typedProductsData.products.slice(currentIndex, currentIndex + productsPerPage);
  
  // Se não tivermos 4 produtos completos, pegamos do início da lista
  const displayProducts = visibleProducts.length === productsPerPage ? 
    visibleProducts : 
    [...visibleProducts, ...typedProductsData.products.slice(0, productsPerPage - visibleProducts.length)];

  return (
    <section className="products" id="products">
      <div className="products__container">
        <h2 className="products__title">Produtos relacionados</h2>
        <p className="products__subtitle">Confira nossa seleção de produtos premium para você</p>
        
        <div className="products__carousel">
          <button
            className="products__nav-button products__nav-button--prev"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="products__grid">
            {displayProducts.map((product) => (
              <div 
                key={product.productName} 
                className="products__card"
                onClick={() => openProductModal(product)}
              >
                <img
                  src={product.photo}
                  alt={product.productName}
                  className="products__image"
                />
                <p className="products__name">{product.descriptionShort}</p>
                <span className="products__price-original">R$ 30,90</span>
                <span className="products__price-current">R$ {product.price.toFixed(2)}</span>
                <span className="products__installments">
                  ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
                </span>
                <span className="products__shipping">
                  <Truck size={16} />
                  Frete grátis
                </span>
                <button 
                  className="products__button"
                  onClick={(e) => {
                    e.stopPropagation(); 
                  }}
                >
                  COMPRAR
                </button>
              </div>
            ))}
          </div>

          <button
            className="products__nav-button products__nav-button--next"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="product-modal">
          <div className="product-modal__overlay" onClick={closeProductModal}></div>
          <div className="product-modal__content">
            <button className="product-modal__close" onClick={closeProductModal}>
              <X size={24} />
            </button>
            <div className="product-modal__layout">
              <div className="product-modal__image-container">
                <img 
                  src={selectedProduct.photo} 
                  alt={selectedProduct.productName} 
                  className="product-modal__image"
                />
              </div>
              <div className="product-modal__info">
                <h2 className="product-modal__title">{selectedProduct.descriptionShort}</h2>
                <p className="product-modal__description">{selectedProduct.description || 'LOREM IPSUM DOLOR SIT AMET'}</p>
                <div className="product-modal__price-container">
                  <span className="product-modal__price-original">R$ 30,90</span>
                  <span className="product-modal__price-current">R$ {selectedProduct.price.toFixed(2)}</span>
                </div>
                <span className="product-modal__installments">
                  ou 2x de R$ {(selectedProduct.price / 2).toFixed(2)} sem juros
                </span>
                <div className="product-modal__shipping">
                  <Truck size={16} />
                  <span>Frete grátis</span>
                </div>
                <div className="product-modal__quantity">
                  <button 
                    className="product-modal__quantity-btn" 
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <input 
                    type="text" 
                    value={quantity.toString().padStart(2, '0')} 
                    className="product-modal__quantity-input" 
                    readOnly 
                  />
                  <button 
                    className="product-modal__quantity-btn"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="product-modal__buy-button">COMPRAR</button>
                <a href="#" className="product-modal__more-link">Veja mais detalhes do produto &gt;</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SessaoProduct;