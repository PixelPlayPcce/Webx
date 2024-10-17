import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

const products = [
  { id: 1, name: 'perfume', price: 59, image: '/pro1.png' },
  { id: 2, name: 'rice', price: 299.99, image: '/pro2.png' },
  { id: 3, name: 'pottery', price: 149.99, image: '/pro3.png' },
  
];

const Store = () => {
  return (
    <div className=" flex flex-col ">
     

      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-[#EBA1FF]">Store</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3 pb-16">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 flex flex-col bg-slate-200">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price.toFixed(2)}</p>
              <button className="mt-auto bg-blue-700 t text-white py-2 px-4 rounded hover:bg-blue-300 transition-colors">
                buy
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Store;