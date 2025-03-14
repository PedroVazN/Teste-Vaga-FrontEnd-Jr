import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Rodape() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img src="/logo.svg" alt="Logo" className="footer__logo" />
            <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__social">
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Youtube size={24} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="footer__title">Institucional</h3>
            <ul className="footer__links">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Ajuda</h3>
            <ul className="footer__links">
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
