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
             <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/ShieldCheck.png?raw=true" alt="Compra segura" />
              <span>Compra <span className="highlight">100% segura</span></span>
            </div>
            <div className="header__shipping">
              <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Truck.png?raw=true" alt="" />
              <span>Frete <span className="highlight">grátis</span> acima de R$ 200</span>
            </div>
            <div className="header__payment">
            <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/ShoppingCart.png?raw=true" alt="" />
              <span><span className="highlight">Parcele</span> suas compras</span>
            </div>
          </div>
        </div>
      </div>

      <div className="header__main container">
        <div className="header__logo">
          <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Logo.png?raw=true" alt="eConverse" />
        </div>

        <div className="header__search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está buscando?"
              onChange={handleSearchChange}
              className="search-bar__input"
            />
            <button type="button" className="search-bar__button">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        <div className="header__actions">
          <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/caixa.png?raw=true" alt="" />
          <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Heart.png?raw=true" alt="" />
          <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/UserCircle%20.png?raw=true" alt="" />
          <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/ShoppingCart.png?raw=true" alt="" />
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
            <li className="nav-menu__item nav-menu__item--assinatura">
              <a href="#assinatura">
                <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/CrownSimple.png?raw=true" alt="" />
                <span>ASSINATURA</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;