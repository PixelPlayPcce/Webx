'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { FaArrowRight } from 'react-icons/fa'; // Import an icon from react-icons
import { gsap } from "gsap";
import Food from "@/components/food";

export default function Home() {
  // Example GSAP animation
  

  return (
    <div>
     
      <div className="mt-4">
        <iframe 
          src="https://my.spline.design/earthdayandnight-9e39d7009a71e506068829e827cd89d1/" 
          frameBorder="0" 
          width="50%" 
          height="500px" 
          style={{ pointerEvents: 'none' }}
        ></iframe>
      </div>

      <Food />
    </div>
  );
}