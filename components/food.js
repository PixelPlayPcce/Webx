import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Food = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/dish1.jpeg',
    '/dish2.jpeg',
    '/dish2.jpeg',
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl sm:text-5xl font-serif mb-10 text-transparent p-6 bg-clip-text bg-gradient-to-r from-blue-900 to-[#EBA1FF]">
        Local Specialities
      </h1>

      {/* Carousel */}
      <div className="flex items-center justify-center p-4 mb-20">
        <div className="relative w-full max-w-3xl h-60 sm:h-80">
          {images.map((src, index) => {
            const position = (index - currentIndex + images.length) % images.length;
            let className = 'absolute top-0 transition-all duration-500 ease-in-out';

            if (position === 0) {
              className += ' left-1/2 -translate-x-1/2 z-20 scale-100';
            } else if (position === 1 || position === images.length - 1) {
              className += position === 1
                ? ' right-0 z-10 scale-75 opacity-60'
                : ' left-0 z-10 scale-75 opacity-60';
            } else {
              className += ' hidden';
            }

            return (
              <div key={src} className={className}>
                <Image
                  src={src}
                  alt={`food-${index}`}
                  width={300}
                  height={300}
                  className="rounded-t-3xl shadow-lg object-cover"
                />
                <h1 className="bg-slate-600 rounded-b-2xl p-2 text-white text-lg sm:text-2xl font-thin">
                  Thali
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      {/* Food Descriptions */}
      <div className="flex items-center justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-slate-200 rounded-lg p-4 h-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Thali</h2>
            <p className="text-base sm:text-xl">
              A perfect coastal meal featuring grilled or fried fish with curries, rice, and pickles, all seasoned with local spices and coconut.
            </p>
          </div>

          <div className="bg-slate-200 rounded-lg p-4 h-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Prawns Curry</h2>
            <p className="text-base sm:text-xl">
              Juicy prawns in a spicy coconut gravy, served with rice, capturing the sweet and tangy flavors of Goan cuisine.
            </p>
          </div>

          <div className="bg-slate-200 rounded-lg p-4 h-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Bebinca</h2>
            <p className="text-base sm:text-xl">
              Spicy and tangy pork slow-cooked in a vinegar-based marinade, a bold and flavorful Goan classic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;