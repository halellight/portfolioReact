import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Landing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const paragraph =
    "Hii, I'm Praise, a visual designer and front-end developer with a passion for creating intuitive and high-performing digital experiences.";
  const words = paragraph.split(" ");

  return (
    <motion.div className="flex justify-center items-center min-h-screen px-12 max-h-[200vh]">
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
          <p
            ref={container}
            className="text-[#afa18f] lg:text-[64px] md:text-[48px] text-[32px] font-bold mt-4 flex flex-wrap"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </motion.div>
      </main>
    </motion.div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Landing;
