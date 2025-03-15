import React, { useState } from 'react';
import Header from './components/Header';
import SecaoHero from './components/SecaoHero';
import SecaoCategorias from './components/SecaoCategorias';
import produtosData from './data/produtos.json';
import { SecaoParceiros } from './components/SecaoParceiros';
import SecaoMarcas  from './components/SecaoMarcas';
import SessaoProduct from './components/SessaoProduct';
import SessaoProductRelacioned from './components/SessaoProductRelacioned';
import  SecaoNewsletter  from './components/SecaoNewsletter';
import Footer from './components/Footer';

interface Product {
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
}

interface ProdutoOriginal {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const produtosFormatados: Product[] = produtosData.products.map((produto: ProdutoOriginal) => ({
    nome: produto.productName,
    descricao: produto.descriptionShort,
    imagem: produto.photo,
    preco: produto.price
  }));

  const filteredProducts = produtosFormatados.filter(product =>
    product.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.descricao.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <main>
        <SecaoHero />
        <SecaoCategorias />
        <SessaoProductRelacioned />
        <SecaoParceiros /> 
        <SessaoProduct />
        <SecaoParceiros /> 
        <SecaoMarcas />  
        <SessaoProduct />
        <SecaoNewsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;