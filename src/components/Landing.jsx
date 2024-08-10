import React from "react";
import styles from "./page.module.scss";
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
      className={styles.landingContainer}
    >
      <main className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            A visual designer - with skills that havent been replaced by A.I
            (yet) - making good shit since '04
          </p>
        </motion.div>

        <div className={styles.body}>
          <p>
            Im a <span>selectively skilled</span> product designer with strong
            focus on producing high quality & impactful digital experience.
          </p>
        </div>
      </main>
    </motion.div>
  );
};

export default Landing;
