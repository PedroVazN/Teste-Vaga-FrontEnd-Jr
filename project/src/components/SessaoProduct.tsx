import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Truck, X } from 'lucide-react';
import productsData from '../data/produtos.json';
import '../styles/components/_product-modal.scss';

// Define os tipos com base na estrutura do seu arquivo products.json
interface Product {
  productName: string;        // Nome do produto
  descriptionShort: string;   // Descrição curta do produto
  photo: string;              // URL da imagem
  price: number;              // Preço do produto
  description?: string;       // Descrição detalhada (opcional)
}

interface ProductsData {
  products: Product[];        // Array de produtos
}

// Asserção de tipo para os dados JSON importados
const typedProductsData = productsData as ProductsData;

/* Componente SessaoProduct - Exibe produtos relacionados em um carrossel
  com navegação e modal de detalhes do produto */

const SessaoProduct: React.FC = () => {
  // Estados principais
  const [currentIndex, setCurrentIndex] = useState(0);                    // Índice atual no carrossel
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Produto selecionado para o modal
  const [quantity, setQuantity] = useState(1);                            // Quantidade no modal
  const productsPerPage = 4;                                              // Fixado em 4 produtos por página

  // Cálculo de páginas totais para navegação
  const totalPages = Math.ceil(typedProductsData.products.length / productsPerPage);

  //Avança para o próximo conjunto de produtos
   
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + productsPerPage;
      return nextIndex >= typedProductsData.products.length ? 0 : nextIndex;
    });
  };

  // Retorna ao conjunto anterior de produtos
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevPageIndex = prevIndex - productsPerPage;
      return prevPageIndex < 0 ?
        (totalPages - 1) * productsPerPage :
        prevPageIndex;
    });
  };

  // Funções para controle do modal
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Impede rolagem quando o modal está aberto
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; // Reativa rolagem
  };

  // Controle de quantidade no modal
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Seleciona produtos a serem exibidos
  const visibleProducts = typedProductsData.products.slice(currentIndex, currentIndex + productsPerPage);

  // Complementa com produtos do início se não tiver 4 completos
  const displayProducts = visibleProducts.length === productsPerPage ?
    visibleProducts :
    [...visibleProducts, ...typedProductsData.products.slice(0, productsPerPage - visibleProducts.length)];

  return (
    <section className="products" id="products">
      <div className="products__container">
        {/* Cabeçalho da seção */}
        <h2 className="products__title">Produtos relacionados</h2>
        <p className="products__subtitle">Ver Mais</p>

        {/* Carrossel de produtos */}
        <div className="products__carousel">
          {/* Botão anterior */}
          <button className="products__nav-button products__nav-button--prev" onClick={prevSlide}>
            <ChevronLeft size={20} />
          </button>

          {/* Grid de produtos */}
          <div className="products__grid">
            {displayProducts.map((product) => (
              <div key={product.productName} className="products__card" onClick={() => openProductModal(product)}>
                <img src={product.photo} alt={product.productName} className="products__image" />
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
                <button className="products__button" onClick={(e) => { e.stopPropagation(); }}>
                  COMPRAR
                </button>
              </div>
            ))}
          </div>

          {/* Botão próximo */}
          <button className="products__nav-button products__nav-button--next" onClick={nextSlide}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Modal de produto - apenas visível quando um produto está selecionado */}
      {selectedProduct && (
        <div className="product-modal">
          <div className="product-modal__overlay" onClick={closeProductModal}></div>
          <div className="product-modal__content">
            <button className="product-modal__close" onClick={closeProductModal}>
              <X size={24} />
            </button>
            <div className="product-modal__layout">
              {/* Seção de imagem */}
              <div className="product-modal__image-container">
                <img src={selectedProduct.photo} alt={selectedProduct.productName} className="product-modal__image" />
              </div>
              {/* Seção de informações */}
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
                {/* Controle de quantidade */}
                <div className="product-modal__quantity">
                  <button className="product-modal__quantity-btn" onClick={decrementQuantity}>-</button>
                  <input
                    type="text"
                    value={quantity.toString().padStart(2, '0')}
                    className="product-modal__quantity-input"
                    readOnly
                  />
                  <button className="product-modal__quantity-btn" onClick={incrementQuantity}>+</button>
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