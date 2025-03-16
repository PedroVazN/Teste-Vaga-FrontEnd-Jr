const SecaoCategorias: React.FC = () => {
  const categorias = [
    { nome: 'Tecnologia', imagem: 'src/images/tecnologia.svg' },
    { nome: 'Supermercado', imagem: 'src/images/supermercados.png' },
    { nome: 'Bebidas', imagem: 'src/images/whiskey.png' },
    { nome: 'Ferramentas', imagem: 'src/images/ferramentas.png' },
    { nome: 'Saúde', imagem: 'src/images/cuidados-de-saude.png' },
    { nome: 'Esportes e Fitness', imagem: 'https://raw.githubusercontent.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/refs/heads/main/project/src/images/corrida%201.png?token=GHSAT0AAAAAAC6HWYCJ5JYN4QR37X2NAMDSZ6VNQMA' },
    { nome: 'Moda', imagem: 'https://raw.githubusercontent.com/PedroVazN/Teste-Vaga-FrontEnd-Jr/refs/heads/main/project/src/images/moda%201.png?token=GHSAT0AAAAAAC6HWYCJLF374R6P4FLHXHHOZ6VNQGA' },
  ];

  return (
    <section className="categories-section">
      <div className="categories-section__container">
        <div className="categories-section__grid">
          {categorias.map((categoria, index) => (
            <button key={index} className="category-button">
              <div className="category-button__icon">
                <img src={categoria.imagem} alt={categoria.nome} className="category-button__image" />
              </div>
              <span className="category-button__label">{categoria.nome}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoCategorias;