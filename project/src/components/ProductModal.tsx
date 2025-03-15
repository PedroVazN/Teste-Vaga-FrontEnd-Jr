import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    productName: string;
    descriptionShort: string;
    descriptionLong?: string;
    price: number;
    photo: string;
    stock?: number;
    sku?: string;
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-md max-w-2xl w-full relative">
        <button 
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row p-6">
          <div className="md:w-1/2 mb-4 md:mb-0 flex items-center justify-center">
            <img 
              src={product.photo} 
              alt={product.productName} 
              className="max-h-64 object-contain"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-xl font-bold mb-2">{product.descriptionShort}</h2>
            
            <p className="text-gray-600 mb-4">{product.descriptionLong || 'Descrição detalhada não disponível.'}</p>
            
            <div className="mb-4">
              <span className="text-gray-500 line-through mr-2">R$ 30,90</span>
              <span className="text-2xl font-bold text-gray-900">R$ {product.price.toFixed(2)}</span>
              <p className="text-sm text-gray-600">
                ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
              </p>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="mr-3">Quantidade:</span>
              <div className="flex border border-gray-300 rounded">
                <button 
                  className="px-3 py-1 border-r border-gray-300"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button 
                  className="px-3 py-1 border-l border-gray-300"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            
            {product.stock && (
              <p className="text-sm text-gray-600 mb-4">
                Estoque: {product.stock} unidades
              </p>
            )}
            
            {product.sku && (
              <p className="text-xs text-gray-500 mb-4">
                SKU: {product.sku}
              </p>
            )}
            
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;