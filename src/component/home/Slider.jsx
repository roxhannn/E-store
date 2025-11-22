"use client"
import React, { useEffect, useState } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    "https://akns-images.eonline.com/eol_images/Entire_Site/2022724/rs_640x640-220824161753-1.png",
    // "https://geeklane.in/cdn/shop/files/emojiwake_transparent.png?v=1731590614&width=1000",
    "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen/products/2014660/2014660_p_overear_solohd_c7_cmyk_thrqrtleft/2014660",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1500 ${
            currentIndex === index ? "opacity-500" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
