import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const shops = [
  { id: 1, name: "Coffee Shop", image: "/shop1.png", info: "Best coffee in town" },
  { id: 2, name: "Bookstore", image: "/shop2.png", info: "Wide selection of books" },
  { id: 3, name: "Bakery", image: "/shop1.png", info: "Fresh pastries daily" },
];

const ShopCard = ({ shop }) => (
  <div className="bg-slate-200  rounded-lg shadow-xl p-6 w-full h-full flex flex-col items-center justify-center">
    <img src={shop.image} alt={shop.name} className="w-full h-2/3 object-cover mb-4 rounded" />
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
    <div className="relative w-full h-full">
      <div className="flex items-center justify-center h-full">
        <button onClick={prevSlide} className="absolute left-0 z-10">
          <ChevronLeft size={32} />
        </button>
        <div className="w-3/4 h-3/4">
          <ShopCard shop={items[currentIndex]} />
        </div>
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
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.9537363155047!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776d0a44de6e0!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1697548807418!5m2!1sen!2sau"
        width="100%"
        height="80%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg border-0"
      ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 flex items-center justify-center">
        <Carousel items={shops} />
      </div>
    </div>
  );
};

export default Business;