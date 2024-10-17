import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Food = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/dish1.jpeg",
    "/dish1.jpeg",
   "/dish1.jpeg",
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen  '>
      <h1 className='text-center text-5xl font-serif  mb-10'>Local Specialities</h1>
     <div className=' flex items-center justify-center p-4 h-80 mb-32'>
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
              <Image src={src} alt={`food-${index}`} width={400} height={400} className="rounded-t-3xl shadow-lg" />
              <h1 className='bg-green-950 text-white text-2xl font-thin'>Thali</h1>
            </div>
          );
        })}
      </div>
      </div>
      <div className=' h- flex items-center justify-center'>
      
      <div className='grid grid-cols-3 w-[90%] space-x-6'>
       
       <div className='bg-slate-200  rounded-lg p-2 h-64 '>
       <h2 className='text-3xl font-bold mt-4 p-2' >Thali</h2>
       <h1 className='text-xl'>
              A perfect coastal meal featuring grilled or fried fish with curries, rice, and pickles, all seasoned with local spices and coconut.            </h1>
          </div>
          <div className='bg-slate-200  rounded-lg p-2 h-64 '>
       <h2 className='text-3xl font-bold mt-4 p-2' >Prawns Curry</h2>
            <h1 className='text-xl'>
              Juicy prawns in a spicy coconut gravy, served with rice, capturing the sweet and tangy flavors of Goan cuisine.       </h1>    </div>
              <div className='bg-slate-200  rounded-lg p-2 h-64 '>
              <h2 className='text-3xl font-bold mt-4 p-2' >Bebinca</h2>
            <h1 className='text-xl'>
              Spicy and tangy pork slow-cooked in a vinegar-based marinade, a bold and flavorful Goan classic.      </h1>
       </div>
      </div>
      </div>
    </div>
  );
};

export default Food;