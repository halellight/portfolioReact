import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen px-12 max-h-[200vh]"
    >
      <main className="flex-col items-center justify-between w-full max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left md:text-left"
        >
          <p className="text-[#4e525a] lg:text-[48px] md:text-[36px] text-[20px] font-bold">
            ABOUT
          </p>
          <p className="text-[#afa18f] lg:text-[72px] md:text-[48px] text-[32px] font-bold mt-4">
            Hii, I'm Praise,{" "}
            <span className="text-[#00A699]">a visual designer</span> and
            front-end developer with a passion for creating intuitive and
            high-performing digital experiences.
          </p>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Landing;
