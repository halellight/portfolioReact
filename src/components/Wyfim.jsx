import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../images/Frame 48095914.svg";
import Picture2 from "../images/Frame 48095931.svg";
import Picture3 from "../images/Frame 48095932.svg";
import Picture4 from "../images/Frame 48095933.svg";

const Wyfim = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const rotate4 = useTransform(scrollYProgress, [0, 1], [-2, 9]);
  const rotate5 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const rotate6 = useTransform(scrollYProgress, [0, 1], [-2, 4]);
  const rotate7 = useTransform(scrollYProgress, [0, 1], [-2, -5]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const top1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const top2 = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const top3 = useTransform(scrollYProgress, [0, 1], [100, 50]);
  const top4 = useTransform(scrollYProgress, [0, 1], [150, 100]);

  const pictures = [
    {
      src: Picture1,
      rotateZ: rotate4,
      opacity: opacity1,
      top: top1,
    },
    {
      src: Picture2,
      rotateZ: rotate5,
      opacity: opacity2,
      top: top2,
    },
    {
      src: Picture3,
      rotateZ: rotate6,
      opacity: opacity3,
      top: top3,
    },
    {
      src: Picture4,
      rotateZ: rotate7,
      opacity: opacity4,
      top: top4,
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen bg-[#001b19] overflow-hidden">
        {pictures.map(({ src, rotateZ, opacity, top }, index) => (
          <div
            key={index}
            className="w-full h-full flex items-center justify-center absolute -top-16"
          >
            <div className="flex flex-col justify-center items-center gap-5">
              {index === 0 && (
                <p className="text-[#4e525a] lg:text-[36px] md:text-[30px] text-[20px] font-bold">
                  TOOLS I WORK WITH
                </p>
              )}
              <motion.div
                style={{ rotateZ, opacity, top }}
                className="h-[5vh] relative mt-20 lg:h-[20vh] md:h-[10vh]"
              >
                <img
                  src={src}
                  alt={`imagine-${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wyfim;
