import React from "react";
import Pic1 from "../images/SCREEN 03.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{
        scale,
        rotate,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
      className="h-screen sticky top-0 bg-[#1C69FF] text-[24px] flex items-center justify-center text-white"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          {/* First "Scroll Perspective" p tag with Playfair Display font */}
          <p className="text-700 text-[36px]">Scroll Perspective</p>

          {/* Rotating arrow */}
          <motion.div
            whileHover={{ rotate: -45 }} // Rotates 90 degrees on hover
            transition={{ duration: 0.5 }}
            className="text-[36px] cursor-pointer"
          >
            →
          </motion.div>
        </div>

        <div className="relative" style={{ width: "1157px", height: "615px" }}>
          <img
            src={Pic1}
            alt="im"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Section1;
