"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const WhyUsImg = () => {
  return (
    <motion.div
      variants={fadeInAnimationVariants("x", 100, 0, 0.3)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="relative"
    >
      <div className="relative left-0 cLg:left-[30px] overflow-hidden mb-[30px] cLg:mb-0">
        <Image
          src="/why-us-img.png"
          className="w-full cLg:max-w-[486px]"
          width={486}
          height={653}
          alt="why-choose-us-img"
        />
      </div>
      <div className="hidden cLg:block absolute top-[-29px] left-0 z-[-1] w-[53%] h-[109%] why-us-img-border" />
    </motion.div>
  );
};

export default WhyUsImg;
