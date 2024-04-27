"use client";

import Section from "@/components/ui/Section";
import { fadeInAnimationVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const aboutCounter = [
  {
    title: "total warehouse",
    count: "145+",
  },
  {
    title: "customer satisfaction",
    count: "98%",
  },
  {
    title: "total vehicles",
    count: "76+",
  },
  {
    title: "total countries",
    count: "150+",
  },
];

const AboutCounter = () => {
  return (
    <Section className="max-container" padding="p-0">
      <motion.div
        variants={fadeInAnimationVariants("y", 100, 0, 0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="about-counter-bg py-[60px] xs:py-[70px] md:py-[80px] cLg:py-[100px]"
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-[70px]">
          {aboutCounter.map((item, index) => (
            <div className="flex-center flex-col relative" key={item.title}>
              <div className="text-[30px] xs:text-[40px] leading-[38px] xs:leading-[50px] font-semibold">
                {item.count}
              </div>
              <div className="text-[12px] xs:text-[13px] md:text-[15px] cLg:text-[16px] xs:leading-[23px] leading-[25px] cLg:leading-none font-medium text-center uppercase">
                {item.title}
              </div>
              {index !== aboutCounter.length - 1 && (
                <div className="hidden xs:block absolute top-[17%] right-[-5%] w-[1px] h-[66px] bg-[#dfdfdf]" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutCounter;
