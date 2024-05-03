"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const LogisticCard = ({ data, index }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants("y", 40, 0, 0.25 * index)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="relative overflow-hidden p-[35px] border border-[#ededed] logistic-hover h-full">
        <div className="relative flex mb-[46px]">
          <Image src={data.icon} width={86} height={86} alt="logistic-img" />
          <Image
            src={data.iconHovered}
            className="logistic-icon-hover"
            width={86}
            height={86}
            alt="logistic-img"
          />
        </div>
        <div className="text-[20px] xs:text-[22px] md:text-[24px] leading-[26px] xs:leading-[28px] md:leading-[30px] font-semibold mb-[15px] font-general-sans text-[#050505] logistic-title">
          {data.title}
        </div>
        <p className="text-[13px] xs:text-[16px] md:text-[18px] leading-[23px] xs:leading-[26px] md:leading-[28px] text-[#3d3d3d] logistic-subtitle">
          {data.desc}
        </p>

        <div className="absolute inset-0 z-[-1] logistic-bg flex shrink-0">
          <Image
            src={data.bgUrl}
            width={412}
            height={359}
            alt="logistic-img"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LogisticCard;
