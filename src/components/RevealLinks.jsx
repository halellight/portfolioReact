import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  const [navopen, setNavOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const handleNav = () => {
    setNavOpen(!navopen);
    setIsActive(!isActive);
  };

  return (
    <section className="grid place-content-center gap-8 bg-[#001B19] px-8 py-24 text-[#afa18f]">
      <FlipLink href="#landing">HOME</FlipLink>
      <FlipLink href="#wyfim">ABOUT</FlipLink>
      <FlipLink href="#contact">CONTACT</FlipLink>
      <FlipLink href="#projects">WORK</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
export default RevealLinks;
