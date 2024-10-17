import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const shops = [
  { id: 1, name: "Coffee Shop", image: "/shop1.png", info: "Best coffee in town" },
  { id: 2, name: "Bookstore", image: "/shop2.png", info: "Wide selection of books" },
  { id: 3, name: "Bakery", image: "/api/placeholder/300/200", info: "Fresh pastries daily" },
];

const ShopCard = ({ shop }) => (
  <div className="bg-white rounded-lg shadow-md p-6 w-100">
    <img src={shop.image} alt={shop.name} className="w-90 h-80 object-cover mb-4 rounded" />
    <h3 className="text-xl font-semibold mb-2">{shop.name}</h3>
    <p className="text-base text-gray-600">{shop.info}</p>
  </div>
);

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-full">
        
      <div className="flex items-center justify-center">
        <button onClick={prevSlide} className="absolute left-0 z-10">
          <ChevronLeft size={32} />
        </button>
        <ShopCard shop={items[currentIndex]} />
        <button onClick={nextSlide} className="absolute right-0 z-10">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 h-1/2 md:h-full p-4">
        <div className="w-full h-full p-6 flex items-center justify-center">
          <img
            src="/map.png"
            alt="Business Location"
            className="max-w-full max-h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 flex items-center justify-center">
        <Carousel items={shops} />
      </div>
    </div>
  );
};

export default Business;