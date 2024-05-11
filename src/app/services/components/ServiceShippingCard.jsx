"use client";

import Button from "@/components/ui/Button";
import { fadeInAnimationVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const ServiceShippingCard = ({ data, index }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants("y", 60, 0, 0.5 * index)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="p-[30px] border border-[#ededed]"
    >
      <div className="mb-[10px] xs:mb-[14px]">
        <h3 className="my-0 font-general-sans text-[18px] xs:text-[24px] leading-[28px] xs:leading-[30px] font-semibold">
          {data.title}
        </h3>
      </div>

      <div className="mb-[10px] xs:mb-[20px] md:mb-[26px] cLg:mb-[32px] w-full cLg:w-[364px]">
        <p className="text-[13px] xs:text-[15px] md:text-[16px] leading-[23px] xs:leading-[25px] md:leading-[28px] text-[#3d3d3d]">
          {data.desc}
        </p>
      </div>

      <Button
        href="/contact"
        text="contact experts"
        icon
        transparent
        color
        className="hover:text-[#e54530] p-0"
        padding="p-0"
      />
    </motion.div>
  );
};

export default ServiceShippingCard;
