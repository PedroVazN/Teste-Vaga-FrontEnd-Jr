export function SecaoParceiros() {
  return (
    <div className="container partners-section">
      <h2 className="partners-section__title">Produtos relacionados</h2>
      <div className="partners-section__view-all">
        <a href="#">Ver todos</a>
      </div>
      
      <div className="partners-section__grid">
        {/* Partner Card 1 */}
        <div className="partners-section__card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')" }}>
          <div className="partners-section__card-overlay" />
          <div className="partners-section__card-content">
            <h3 className="partners-section__card-title">Parceiros</h3>
            <p className="partners-section__card-text">Lorem ipsum dolor sit amet, consectetur</p>
            <button className="partners-section__card-button">CONFIRA</button>
          </div>
        </div>

        {/* Partner Card 2 */}
        <div className="partners-section__card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')" }}>
          <div className="partners-section__card-overlay" />
          <div className="partners-section__card-content">
            <h3 className="partners-section__card-title">Parceiros</h3>
            <p className="partners-section__card-text">Lorem ipsum dolor sit amet, consectetur</p>
            <button className="partners-section__card-button">CONFIRA</button>
          </div>
        </div>
      </div>
    </div>
  );
}
