import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Truck, X } from 'lucide-react';
import productsData from '../data/produtos.json';
import '../styles/components/_product-modal.scss';

/**
 * Interface que define a estrutura de um produto
 */
interface Product {
  productName: string;        // Nome do produto
  descriptionShort: string;   // Descrição curta do produto mostrada nos cards
  photo: string;              // URL da imagem do produto
  price: number;              // Preço do produto
  description?: string;       // Descrição detalhada opcional mostrada no modal
}

/**
 * Interface que define a estrutura do arquivo de dados de produtos
 */
interface ProductsData {
  products: Product[];        // Array de objetos Product
}

// Asserção de tipo para garantir que productsData tem a estrutura esperada
const typedProductsData = productsData as ProductsData;

/**
 * SessaoProductRelacioned - Componente que exibe produtos relacionados em formato de carrossel
 * com filtragem por categoria e um modal para visualização detalhada do produto
 */
const SessaoProductRelacioned: React.FC = () => {
  // Estado para rastrear o índice atual na lista de produtos para paginação do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Estado para rastrear qual categoria está atualmente selecionada
  const [activeCategory, setActiveCategory] = useState('CELULAR');
  
  // Estado para rastrear qual produto está selecionado para exibição no modal (null se nenhum modal)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Número de produtos a serem exibidos por página no carrossel
  const productsPerPage = 4;
  
  // Categorias de produtos disponíveis para filtragem
  const categories = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

  // Calcula o número total de páginas necessárias para exibir todos os produtos
  const totalPages = Math.ceil(typedProductsData.products.length / productsPerPage);

  /**
   * Move para o próximo conjunto de produtos no carrossel
   * Volta ao início se estiver no final
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + productsPerPage;
      return nextIndex >= typedProductsData.products.length ? 0 : nextIndex;
    });
  };

  /**
   * Move para o conjunto anterior de produtos no carrossel
   * Vai para o final se estiver no início
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevPageIndex = prevIndex - productsPerPage;
      return prevPageIndex < 0 ?
         (totalPages - 1) * productsPerPage :
         prevPageIndex;
    });
  };
  
  /**
   * Abre o modal de detalhes do produto com o produto selecionado
   * Também impede a rolagem da página enquanto o modal estiver aberto
   * @param product - O produto a ser exibido no modal
   */
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Impede a rolagem quando o modal está aberto
  };
  
  /**
   * Fecha o modal de detalhes do produto e restaura a rolagem da página
   */
  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto'; // Reativa a rolagem
  };

  // Obtém exatamente os produtos para a página atual
  const visibleProducts = typedProductsData.products.slice(currentIndex, currentIndex + productsPerPage);
    
  // Se não tivermos produtos suficientes para preencher a página, voltamos ao início
  const displayProducts = visibleProducts.length === productsPerPage ?
    visibleProducts :
    [...visibleProducts, ...typedProductsData.products.slice(0, productsPerPage - visibleProducts.length)];

  // Estado para rastrear a quantidade do produto no modal
  const [quantity, setQuantity] = useState(1);

  /**
   * Aumenta a contagem de quantidade para o produto selecionado
   */
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  /**
   * Diminui a contagem de quantidade para o produto selecionado
   * Não irá abaixo de 1
   */
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <section className="products" id="products">
      <div className="products__container">
        {/* Título da seção */}
        <h2 className="products__title">Produtos relacionados</h2>
        
        {/* Botões de filtragem por categoria */}
        <div className="products__categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`products__category ${
                activeCategory === category ? 'products__category--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Carrossel de produtos com controles de navegação */}
        <div className="products__carousel">
          {/* Botão de página anterior */}
          <button
            className="products__nav-button products__nav-button--prev"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Exibição em grade de produtos */}
          <div className="products__grid">
            {displayProducts.map((product) => (
              <div 
                key={product.productName} 
                className="products__card"
                onClick={() => openProductModal(product)}
              >
                {/* Imagem do produto */}
                <img
                  src={product.photo}
                  alt={product.productName}
                  className="products__image"
                />
                {/* Informações do produto */}
                <p className="products__name">{product.descriptionShort}</p>
                <span className="products__price-original">R$ 30,90</span>
                <span className="products__price-current">R$ {product.price.toFixed(2)}</span>
                <span className="products__installments">
                  ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
                </span>
                {/* Indicador de frete grátis */}
                <span className="products__shipping">
                  <Truck size={16} />
                  Frete grátis
                </span>
                {/* Botão de compra - interrompe a propagação do evento para evitar a abertura do modal */}
                <button 
                  className="products__button"
                  onClick={(e) => {
                    e.stopPropagation(); // Impede o acionamento do clique no card
                    // Lida com o clique no botão de compra, se necessário
                  }}
                >
                  COMPRAR
                </button>
              </div>
            ))}
          </div>

          {/* Botão de próxima página */}
          <button
            className="products__nav-button products__nav-button--next"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Modal do Produto - Renderizado apenas quando um produto está selecionado */}
      {selectedProduct && (
        <div className="product-modal">
          {/* Overlay semitransparente que fecha o modal quando clicado */}
          <div className="product-modal__overlay" onClick={closeProductModal}></div>
          <div className="product-modal__content">
            {/* Botão fechar */}
            <button className="product-modal__close" onClick={closeProductModal}>
              <X size={24} />
            </button>
            <div className="product-modal__layout">
              {/* Contêiner de imagem do produto */}
              <div className="product-modal__image-container">
                <img 
                  src={selectedProduct.photo} 
                  alt={selectedProduct.productName} 
                  className="product-modal__image"
                />
              </div>
              {/* Contêiner de detalhes do produto */}
              <div className="product-modal__info">
                {/* Informações do produto */}
                <h2 className="product-modal__title">{selectedProduct.descriptionShort}</h2>
                <p className="product-modal__description">{selectedProduct.description || 'LOREM IPSUM DOLOR SIT AMET'}</p>
                {/* Informações de preço */}
                <div className="product-modal__price-container">
                  <span className="product-modal__price-original">R$ 30,90</span>
                  <span className="product-modal__price-current">R$ {selectedProduct.price.toFixed(2)}</span>
                </div>
                <span className="product-modal__installments">
                  ou 2x de R$ {(selectedProduct.price / 2).toFixed(2)} sem juros
                </span>
                {/* Informações de envio */}
                <div className="product-modal__shipping">
                  <Truck size={16} />
                  <span>Frete grátis</span>
                </div>
                {/* Controles de seleção de quantidade */}
                <div className="product-modal__quantity">
                  <button 
                    className="product-modal__quantity-btn" 
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <input 
                    type="text" 
                    value={quantity.toString().padStart(2, '0')} // Formata para sempre mostrar 2 dígitos
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
                {/* Botão de compra */}
                <button className="product-modal__buy-button">COMPRAR</button>
                {/* Link para mais detalhes */}
                <a href="#" className="product-modal__more-link">Veja mais detalhes do produto &gt;</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SessaoProductRelacioned;