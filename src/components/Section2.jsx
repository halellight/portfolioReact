import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Pic2 from "../images/image2.png";
const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="h-screen  relative bg-[#ff1c1c] text-[24px] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <div className="flex gap-4">
        <p>Scroll Perspective</p>
        <div className="relative w-[12.5vw]">
          <img src={Pic2} alt="img" placeholder="blur" fill />
        </div>
      </div>
    </motion.div>
  );
};

export default Section2;
