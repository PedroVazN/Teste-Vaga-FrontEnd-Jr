import React, { ReactNode } from 'react';
import '../styles/components/_category-button.scss';

interface CategoryButtonProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ icon, label, active = false, onClick }) => {
  return (
    <button
      className={`category-button ${active ? 'category-button--active' : ''}`}
      onClick={onClick}
    >
      <div className="category-button__icon">{icon}</div>
      <span className="category-button__label">{label}</span>
    </button>
  );
};

export default CategoryButton;