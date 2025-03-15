import React from 'react';
import '../styles/components/_footer.scss';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-container">
            {/* Option 1: Use a text logo instead of an image */}
            <h2 className="text-logo">
              <span className="highlight">e</span>converse
            </h2>
            
            {/* Option 2: Uncomment this if you have the logo image in public folder */}
            {/* <img src="https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/Logo.png?raw=true" alt="Econverse" className="footer-logo" /> */}
          </div>
          <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Termos</h3>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;