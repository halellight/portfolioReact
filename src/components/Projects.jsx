import React, { useRef } from "react";
import styles from "./project.module.scss";
import Image from "../images/praise formal b&w.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Define scaling transformations for text and image
  const scaleText = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  const opacity1 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        <main className={styles.main}>
          <div className={styles.body1}>
            <div>
              <motion.div
                className={styles.text}
                // style={{ scale: scaleText, opacity: opacity1 }}
              >
                <p>
                  I help companies from all over the world with{" "}
                  <span>tailor-made</span> solutions. With each project, I push
                  my work to new horizons, always putting quality first
                </p>
                <p className={styles.p1}>Always exploring...</p>
              </motion.div>
              <motion.img
                src={Image}
                alt=""
                srcset=""
                className={styles.image}
                style={{ scale: scaleImage, opacity: opacity1 }}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
