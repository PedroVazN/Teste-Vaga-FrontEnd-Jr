import { Search, ShoppingCart, Heart, User } from 'lucide-react';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Top Bar */}
        <div className="header__top-bar">
          <div className="header__info-items">
            <span className="header__info-item">
              <img src="/shield.svg" alt="Security" />
              Compra 100% segura
            </span>
            <span className="header__info-item">
              <img src="/truck.svg" alt="Shipping" />
              Frete grátis acima de R$ 200
            </span>
            <span className="header__info-item">
              <img src="/credit-card.svg" alt="Payment" />
              Parcele suas compras
            </span>
          </div>
        </div>

        {/* Main Header */}
        <div className="header__main">
          <img src="/logo.svg" alt="Logo" className="header__logo" />
          
          <div className="header__search">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="header__search-input"
            />
            <Search className="header__search-icon" size={20} />
          </div>

          <div className="header__actions">
            <button className="header__action-button">
              <User size={24} />
            </button>
            <button className="header__action-button">
              <Heart size={24} />
            </button>
            <button className="header__action-button">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <button className="header__nav-button">TODAS CATEGORIAS</button>
          <button className="header__nav-button">SUPERMERCADO</button>
          <button className="header__nav-button">LIVROS</button>
          <button className="header__nav-button">MODA</button>
          <button className="header__nav-button">LANÇAMENTOS</button>
          <button className="header__nav-button header__nav-button--highlight">OFERTAS DO DIA</button>
          <button className="header__nav-button header__nav-button--subscription">
            <img src="/gift.svg" alt="Assinatura" />
            ASSINATURA
          </button>
        </nav>
      </div>
    </header>
  );
}