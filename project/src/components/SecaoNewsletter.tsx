import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/components/_newsletter.scss';

const SessaoNewsletter: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && acceptTerms) {
      console.log('Form submitted:', { name, email, acceptTerms });

      setName('');
      setEmail('');
      setAcceptTerms(false);
    }
  };
  
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Inscreva-se na nossa newsletter</h2>
        <p className="newsletter-description">
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Compania.
        </p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              required
            />
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">INSCREVER</button>
          </div>
          
          <div className="form-checkbox">
            <label>
              <input 
                type="checkbox" 
                checked={acceptTerms}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAcceptTerms(e.target.checked)}
                required
              />
              <span>Aceito os termos e condições</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessaoNewsletter;