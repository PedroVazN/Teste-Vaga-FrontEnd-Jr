import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { SecaoHero } from './components/SecaoHero';
import { SecaoCategorias } from './components/SecaoCategorias';
import { SecaoMarcas } from './components/SecaoMarcas';
import { SecaoProdutos } from './components/SecaoProdutos';
import { SecaoParceiros } from './components/SecaoParceiros';
import { SecaoProdutosRelacionados } from './components/SecaoProdutosRelacionados';
import { SecaoNewsletter } from './components/SecaoNewsletter';
import { Rodape } from './components/Rodape';
import produtosData from './data/produtos.json';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Usando o arquivo JSON local
    setProducts(produtosData.products);
  }, []);

  return (
    <div className="app">
      <Header />
      <SecaoHero />
      <SecaoCategorias />
      <SecaoMarcas />
      <SecaoProdutos products={products} />
      <SecaoParceiros />
      <SecaoProdutosRelacionados products={products} />
      <SecaoNewsletter />
      <Rodape />
    </div>
  );
}

export default App;