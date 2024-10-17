import React from 'react';

const Main = () => {
  return (
    <div className='h-screen flex flex-col'>
      {/* Navigation Bar */}
      <nav className='w-full bg-blue-900 text-white p-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>MyApp</div>
        <div className='space-x-4'>
          <a href="#" className='hover:text-gray-300'>Home</a>
          <a href="#" className='hover:text-gray-300'>About</a>
          <a href="#" className='hover:text-gray-300'>Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className='flex-grow flex items-center justify-center'>
        <div className='-400 w-[90%] h-[90%] flex'>
          <div className='w-1/2 h-full flex flex-col items-center justify-center p-4'>
            <h1 className='text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-[#EBA1FF] mb-4'>Explore your localities</h1>
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
              height="70%" // Adjust the height as needed
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;