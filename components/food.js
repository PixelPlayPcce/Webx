import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Food = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/adi.png",
    "/food2.png",
    "/food3.png",
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen bg-red-400 '>
      <h1 className='text-center text-5xl font-serif p-5 mb-10'>Local Cuisines</h1>
     <div className='bg-blue-200 flex items-center justify-center h-1/2'>
      <div className='relative w-full max-w-3xl h-80'>
        {images.map((src, index) => {
          const position = (index - currentIndex + images.length) % images.length;
          let className = 'absolute top-0 transition-all duration-300 ';
          if (position === 0) {
            className += 'left-1/2 -translate-x-1/2 z-20 scale-100';
          } else if (position === 1 || position === images.length - 1) {
            className += position === 1 ? 'right-0 z-10 scale-75 opacity-60' : 'left-0 z-10 scale-75 opacity-60';
          } else {
            className += 'hidden';
          }
          
          return (
            <div key={src} className={className}>
              <Image src={src} alt={`food-${index}`} width={400} height={400} className="rounded-lg shadow-lg" />
              <h1 className='bg-white'>thali</h1>
            </div>
          );
        })}
      </div>
      </div>
      <h1 className='font-serif text-2xl'> information</h1>
      <div className='grid grid-cols-3 w-[85%] space-x-6'>
       
       <div className='bg-blue-200'>1</div>
         <div className='bg-blue-200'>2</div>
            <div className='bg-blue-200'>3</div>
      </div>
    </div>
  );
};

export default Food;