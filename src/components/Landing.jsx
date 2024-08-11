import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 0;
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure animation happens only once
    threshold: 0.1, // Trigger animation when 10% of the section is in view
  });

  return (
    <motion.div
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -50 }}
      // transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen px-12 max-h-[200vh]"
    >
      <main
        ref={ref}
        className="flex-col items-center justify-between w-full max-w-[1240px]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-left md:text-left"
        >
          <p className="text-[#4e525a] lg:text-[36px] md:text-[36px] text-[20px] font-bold">
            ABOUT
          </p>
          <p className="text-[#afa18f] lg:text-[64px] md:text-[48px] text-[32px] font-bold mt-4">
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
