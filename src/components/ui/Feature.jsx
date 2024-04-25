"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const Feature = ({ data, index }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants("y", 40, 0, 0.25 * index)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      key={data.title}
      className="relative w-full cLg:w-[355px] mr-0 last:mr-0 cLg:mr-[70px] px-4 xs:px-0"
    >
      <div className="flex-center flex-col p-5 xs:p-[30px] md:py-10 cLg:py-[70px] px-0 cLg:px-5 w-full md:w-[293px] mr-[45px] cLg:mr-0 translate-y-0 feature-hover transition-all duration-300 ease-linear">
        <div className="flex-center mb-[22px]">
          <Image
            src={data.icon}
            alt="feature-icon"
            width={47}
            height={47}
            className="feature-img transition-all duration-300 ease-linear w-[32px] h-[32px] xs:w-[47] xs:h-[47]"
          />
        </div>

        <h4 className="text-[18px] xs:text-[20] leading-[28px] xs:leading-[30px] md:text-[22px] md:leading-[32px] font-semibold mb-3">
          {data.title}
        </h4>

        <div className="md:max-w-[253px] w-full mx-auto">
          <p className="text-[13px] xs:text-[16px] leading-[23px] xs:leading-[28px] text-[#3d3d3d] text-center">
            {data.desc}
          </p>
        </div>
      </div>

      {index !== 2 && (
        <div className="hidden md:block absolute top-1/2 right-0 w-[1px] h-[90px] bg-[#dee0e3] -translate-y-1/2" />
      )}
    </motion.div>
  );
};

export default Feature;
