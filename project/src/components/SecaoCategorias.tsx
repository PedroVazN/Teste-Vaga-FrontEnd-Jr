import CategoryButton from './CategoryButton';
import { Package, Store, Wine, PenTool as Tool, Heart as HeartIcon, Dumbbell, Shirt, Home } from 'lucide-react';

export function SecaoCategorias() {
  return (
    <section className="categories-section">
      <div className="categories-section__grid">
        <CategoryButton icon={<Package />} label="Tecnologia" />
        <CategoryButton icon={<Store />} label="Supermercado" />
        <CategoryButton icon={<Wine />} label="Bebidas" />
        <CategoryButton icon={<Tool />} label="Ferramentas" />
        <CategoryButton icon={<HeartIcon />} label="Saúde" />
        <CategoryButton icon={<Dumbbell />} label="Esportes" />
        <CategoryButton icon={<Shirt />} label="Moda" />
        <CategoryButton icon={<Home />} label="Casa" />
      </div>
    </section>
  );
}
