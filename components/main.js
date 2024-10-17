import React from 'react';

const Main = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-red-400 w-[90%] h-[90%] flex'>
      <div className='w-1/2 h-full bg-red-50 flex flex-col items-center justify-center p-4'>
          <h1 className='text-6xl font-serif mb-4'>Explore your localities</h1>
          <p className='text-lg mb-4 text-center'>
            Discover the best places around you. Find restaurants, parks, and more.
          </p>
          <input 
            type="text" 
            placeholder="Search for places..." 
            className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className='w-1/2 h-full flex items-center justify-center'>
          <iframe className='rounded-lg'
            src="https://my.spline.design/crystalball-10c9e3f92adfce3d580f2a9291bc080d/" 
            frameBorder="0" 
            width="80%" // Adjust the width as needed
            height="80%" // Adjust the height as needed
            
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Main;