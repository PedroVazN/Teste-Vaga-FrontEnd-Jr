export function SecaoParceiros() {
  return (
    <div className="container partners-section">
      <div className="partners-section__view-all">
      </div>
      
      <div className="partners-section__grid">
        {/* Partner Card 1 */}
        <div className="partners-section__card" style={{ backgroundImage: "url('https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/bannerParceiros.png?raw=true')" }}>
          <div className="partners-section__card-overlay" />
          <div className="partners-section__card-content">
            <h3 className="partners-section__card-title">Parceiros</h3>
            <p className="partners-section__card-text">Lorem ipsum dolor <br />sit amet, consectetur</p>
            <button className="partners-section__card-button">CONFIRA</button>
          </div>
        </div>
        
        {/* Partner Card 2 - Identical to first card to match Image 1 */}
        <div className="partners-section__card" style={{ backgroundImage: "url('https://github.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/blob/main/project/src/images/bannerParceiros.png?raw=true')" }}>
          <div className="partners-section__card-overlay" />
          <div className="partners-section__card-content">
            <h3 className="partners-section__card-title">Parceiros</h3>
            <p className="partners-section__card-text">Lorem ipsum dolor  <br />sit amet, consectetur</p>
            <button className="partners-section__card-button">CONFIRA</button>
          </div>
        </div>
      </div>
    </div>
  );
}