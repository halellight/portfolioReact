import React from "react";
import { useTransform, motion } from "framer-motion";
import Pic2 from "../images/SCREEN 03.jpg";

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="h-[80vh] relative bg-[#00A699] text-[24px] flex flex-col items-center justify-center text-white pt-[10vh] "
    >
      <div className="flex flex-col gap-4 px-4 lg:px-8">
        <div className="flex cursor-pointer items-center justify-between w-full">
          <p className="font-bold text-[32px] sm:text-[42px] lg:text-[52px]">
            BLOCKVOTE
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

        <div className="relative w-full max-w-[1157px] h-full">
          <img
            src={Pic2}
            alt="im"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Section2;
