import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline/next';
import { gsap } from 'gsap';

const Main = () => {
  const leftContentRef = useRef(null);

  useEffect(() => {
    const animationContext = gsap.context(() => {
      gsap.fromTo(
        leftContentRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
      );
    });

    // Cleanup the GSAP context on component unmount
    return () => animationContext.revert();
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full z-50 bg-gradient-to-r from-blue-800 via-blue-600 to-[#EBA1FF] fixed text-white p-4 flex justify-between items-center shadow-lg">
        <div className="text-3xl font-serif">Local Pulse</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-[90%] h-[90%] flex lg:flex-row sm:flex-col">
          {/* Left Content with Animation */}
          <div
            ref={leftContentRef} // Animation target
            className="lg:w-1/2 sm:w-full h-full flex flex-col items-center justify-center p-4"
          >
            <h1 className="lg:text-9xl sm:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-[#EBA1FF] mb-4">
              Explore your localities
            </h1>
            <div>
              <p className="text-lg mb-4 text-center">
                Discover the best places around you. Find restaurants, parks, and more.
              </p>
              <input
                type="text"
                placeholder="Search for places..."
                className="w-full max-w-md p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Content: Spline 3D Scene */}
          <div className="lg:w-1/2 sm:w-full h-full flex items-center justify-center">
            <Spline
              scene="https://prod.spline.design/hmPDXmis7lGuKjrg/scene.splinecode"
              style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;