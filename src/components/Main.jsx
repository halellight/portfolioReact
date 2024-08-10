import React, { useEffect, useState } from "react";
import image from "../images/praise formal b&w.jpg";
import styles from "./Main.module.scss";

const Main = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values
  const parallaxOffset1 = scrollY * 0.2; // Adjust multiplier for desired parallax effect
  const parallaxOffset2 = scrollY * 0.3;

  return (
    <div className="relative h-screen bg-[#001b19] flex justify-center items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[#afa18f] text-[128px] font-bold">
        <span
          className="block z-0 inset-0"
          style={{
            transform: `translateX(-25%) translateY(${parallaxOffset1}px)`,
          }}
        >
          Praise
        </span>
        <span
          className="block z-10 inset-0"
          style={{
            transform: `translateX(45%) translateY(${parallaxOffset2}px)`,
          }}
        >
          Chidumebi
        </span>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 h-[570px] w-[285px] items-center justify-center flex  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        id="image"
      >
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 text-sm gap-[50px] max-w-[1240px] text-[#afa18f] mx-auto">
        <span>PRAISE IBE CHIDUMEBI</span>
        <span className="text-xs">| SCROLL TO EXPLORE</span>
        <span className="cursor-pointer hover:text-[#00A699]">
          WORK WITH ME
        </span>
      </div>
    </div>
  );
};

export default Main;
