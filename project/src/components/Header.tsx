import React from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiCalendar, FiShield, FiTruck, FiCreditCard } from 'react-icons/fi';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="container">
          <div className="header__top-info">
            <div className="header__security">
              <FiShield size={16} />
              <span>Compra 100% segura</span>
            </div>
            <div className="header__shipping">
              <FiTruck size={16} />
              <span>Frete grátis acima de R$ 200</span>
            </div>
            <div className="header__payment">
              <FiCreditCard size={16} />
              <span>Parcele suas compras</span>
            </div>
          </div>
        </div>
      </div>

      <div className="header__main container">
        <div className="header__logo">
          <img src="https://raw.githubusercontent.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/refs/heads/main/project/src/images/Logo.png" alt="eConverse" />
        </div>

        <div className="header__search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está buscando?"
              onChange={handleSearchChange}
              className="search-bar__input"
            />
            <button className="search-bar__button">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        <div className="header__actions">
          <button className="header__action-btn">
            <FiCalendar size={20} />
            <span>Assinatura</span>
          </button>
          <button className="header__action-btn">
            <FiHeart size={20} />
            <span>Favoritos</span>
          </button>
          <button className="header__action-btn">
            <FiUser size={20} />
            <span>Minha Conta</span>
          </button>
          <button className="header__action-btn">
            <FiShoppingCart size={20} />
            <span>Carrinho</span>
          </button>
        </div>
      </div>

      <nav className="header__nav">
        <div className="container">
          <ul className="nav-menu">
            <li className="nav-menu__item"><a href="#categorias">TODAS CATEGORIAS</a></li>
            <li className="nav-menu__item"><a href="#supermercado">SUPERMERCADO</a></li>
            <li className="nav-menu__item"><a href="#livros">LIVROS</a></li>
            <li className="nav-menu__item"><a href="#moda">MODA</a></li>
            <li className="nav-menu__item"><a href="#lancamentos">LANÇAMENTOS</a></li>
            <li className="nav-menu__item nav-menu__item--highlight"><a href="#ofertas">OFERTAS DO DIA</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;