import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Rodape: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-section">
          <img src="https://raw.githubusercontent.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/refs/heads/main/project/src/images/Logo.png?token=GHSAT0AAAAAAC6HWYCIRVPIWU5STHWARKWQZ6UPQTA" alt="Logo" className="footer__logo" />
        </div>

        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Sobre nós</h3>
            <ul className="footer__list">
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Nossas lojas</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li><a href="#">Parceiros e fornecedores</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Atendimento</h3>
            <ul className="footer__list">
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Dúvidas frequentes</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Termos de uso</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Minha conta</h3>
            <ul className="footer__list">
              <li><a href="#">Meus pedidos</a></li>
              <li><a href="#">Meus favoritos</a></li>
              <li><a href="#">Meus dados</a></li>
              <li><a href="#">Minhas avaliações</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Redes sociais</h3>
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <FiInstagram />
              </a>
              <a href="#" className="footer__social-link">
                <FiFacebook />
              </a>
              <a href="#" className="footer__social-link">
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          2024 Econverse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
