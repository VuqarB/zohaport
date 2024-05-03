"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const Testimonal = ({ data }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants('y', 40, 0, 0.5)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="pt-[25px] pb-[36px] border border-[#ededed] hover:border-transparent sm:max-w-[312px] w-full transition-all duration-300 ease-linear testimonal-hover"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4 px-[15px]">
          <Image
            src={data.imgUrl}
            className="h-[199px] object-cover"
            width={110}
            height={199}
            alt="testimonal-img"
          />
          <div>
            <Image
              src="/testimonial-quote-icon.svg"
              className="mb-[15px]"
              width={40}
              height={40}
              alt="testimonal-quote"
            />
            <h3 className="font-general-sans text-inherit text-[16px] xs:text-[20px] md:text-[22px] leading-[26px] xs:leading-[30px] md:leading-[32px] font-semibold mb-[7px]">
              {data.name}
            </h3>
            <p className="text-[#3d3d3d] text-[12px] xs:text-[15px] md:text-[16px] leading-[120%] tracking-[1.12px] uppercase">
              {data.position}
            </p>
          </div>
        </div>

        <div className="relative px-5 pt-4 xs:pt-[30px] md:pt-10">
          <p className="text-[13px] leading-[23px] xs:text-[16px] xs:leading-[26px] text-[#3d3d3d] mb-0">
            {data.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonal;
