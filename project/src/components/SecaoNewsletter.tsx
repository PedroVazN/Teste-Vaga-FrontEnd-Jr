import { useState } from 'react';

export function SecaoNewsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="newsletter">
      <div className="container newsletter__container">
        <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
        <p className="newsletter__text">Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        <div className="newsletter__form">
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="newsletter__input"
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter__input"
          />
          <button className="newsletter__button">INSCREVER</button>
        </div>
        <label className="newsletter__checkbox-label">
          <input type="checkbox" />
          Aceito os termos e condições
        </label>
      </div>
    </div>
  );
}
