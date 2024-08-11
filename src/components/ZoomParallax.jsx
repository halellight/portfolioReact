import React from "react";

import styles from "./styles.module.scss";

import Picture1 from "../images/landing4.png";
import Picture2 from "../images/newimagine.svg";
import Picture3 from "../images/newimagine2.svg";
import Picture4 from "../images/image4.png";
import Picture5 from "../images/Frame 48095688.svg";
import Picture6 from "../images/figo.svg";
import Picture7 from "../images/THUMBNAIL.svg";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    // eslint-disable-next-line no-undef
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div style={{ scale }} key={index} className={styles.el}>
              <div className={styles.imageContainer}>
                <img
                  src={src}
                  alt="ima"
                  className={styles.image} // Add styles for your image
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
