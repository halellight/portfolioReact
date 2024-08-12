import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <div className="bg-[#001B19] text-[#afa18f] py-12 px-12">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-[#4e525a] lg:text-[36px] md:text-[36px] text-[20px] font-bold">
            EXPERIENCE
          </h2>

          <div className="space-y-12 mt-12">
            <ExperienceItem
              year="NOW"
              title="Design Lead (Customer)"
              company="EASE"
              link="https://ease-beta.vercel.app/"
            />
            <ExperienceItem
              year="2022"
              title="Network Engineer"
              company="Huawei"
              link="https://www.huawei.com/en/"
            />
            <ExperienceItem
              year="2022"
              title="System Analyst"
              company="NNPC"
              link="https://nnpcgroup.com/"
            />
            <ExperienceItem
              year="2021"
              title="Product Designer"
              company="Light Global Partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ year, title, company, link }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = title.split(" ");

  return (
    <div className="flex flex-col md:flex-row justify-between" ref={container}>
      <div className="lg:text-3xl md:text-[36px] text-[20px] font-semibold">
        {year}
      </div>
      <div className="text-right md:text-right mt-4 md:mt-0">
        <p className="lg:text-[64px] md:text-[48px] text-[26px] font-semibold flex flex-wrap">
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
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-m md:text-lg lg:text-xl text-[#00A699]"
          >
            {company}
          </a>
        ) : (
          <p className="text-m md:text-lg lg:text-xl text-[#00A699]">
            {company}
          </p>
        )}
      </div>
    </div>
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

export default Experience;
