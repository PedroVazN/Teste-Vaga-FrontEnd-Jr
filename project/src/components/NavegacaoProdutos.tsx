interface NavegacaoProdutosProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function NavegacaoProdutos({ onPrevious, onNext }: NavegacaoProdutosProps) {
  return (
    <div className="products-navigation">
      <button 
        className="products-navigation__button products-navigation__button--prev"
        onClick={onPrevious}
        aria-label="Produtos anteriores"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button 
        className="products-navigation__button products-navigation__button--next"
        onClick={onNext}
        aria-label="Próximos produtos"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
