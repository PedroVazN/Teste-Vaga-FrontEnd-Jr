export function SecaoMarcas() {
  return (
    <div className="container brand-section">
      <h2 className="brand-section__title">Navegue por marcas</h2>
      <div className="brand-section__grid">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="brand-section__item">
            <img src="/logo.svg" alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
