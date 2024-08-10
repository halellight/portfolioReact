import React from "react";
import Pic1 from "../images/Group 648.png";
import { useScroll, useTransform, motion } from "framer-motion";

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{
        scale,
        rotate,
      }}
      className="h-screen sticky top-0 bg-[#1C69FF] text-[24px] flex items-center justify-center text-white"
    >
      <div className="flex flex-col gap-4 px-4 lg:px-8">
        <div className="flex cursor-pointer items-center justify-between w-full">
          <p className="font-bold text-[32px] sm:text-[42px] lg:text-[52px]">
            BUSA APP
          </p>

          {/* Rotating arrow */}
          <motion.div
            whileHover={{ rotate: -45 }} // Rotates 45 degrees on hover
            transition={{ duration: 0.5 }}
            className="text-[28px] sm:text-[36px] lg:text-[44px] cursor-pointer"
          >
            →
          </motion.div>
        </div>

        <div className="relative w-full max-w-[1157px] h-auto">
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
