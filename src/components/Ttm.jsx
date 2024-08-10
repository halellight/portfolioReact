import React, { useRef } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { useScroll } from "framer-motion";

// import Section2 from "";
const Ttm = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Ttm;
