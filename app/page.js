'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { FaArrowRight } from 'react-icons/fa'; // Import an icon from react-icons
import { gsap } from "gsap";
import Food from "@/components/food";
import Main from "@/components/main";
import Business from "@/components/business ";
import Service from "@/components/service";
export default function Home() {
  // Example GSAP animation
  

  return (
    <div>
     
     <Main />
     <h1 className="font-serif text-6xl pl-12">explore localities</h1>
     <Business />
      <Service />
      <Food />
    </div>
  );
}