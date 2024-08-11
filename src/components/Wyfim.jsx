import React, { useRef } from "react";
import styles from "./clean.module.scss";
import Picture1 from "../images/Frame 48095914.svg";
import Picture2 from "../images/Frame 48095931.svg";
import Picture3 from "../images/Frame 48095932.svg";
import Picture4 from "../images/Frame 48095933.svg";
import { useScroll, useTransform, motion } from "framer-motion";

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
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, rotateZ, opacity, top }, index) => (
          <div key={index} className={styles.main}>
            <div className={styles.el}>
              {index === 0 && <p>TOOLS I WORK WITH</p>}
              <motion.div
                style={{ src, rotateZ, opacity, top }}
                className={styles.imageContainer}
              >
                <img src={src} alt={`imagine-${index}`} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wyfim;
