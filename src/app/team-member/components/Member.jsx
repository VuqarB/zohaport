"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const Member = ({ data }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants("y", 60, 0, 0.5)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Link
        href="/"
        className="block relative w-full overflow-hidden team-hover"
      >
        <Image
          src={data.imgUrl}
          className="team-img w-full"
          width={311}
          height={276}
          alt="team-member"
        />

        <div className="absolute h-full w-full flex items-end justify-center team-bg team-detail">
          <div className="text-center pb-[20px]">
            <h3 className="mt-0 mb-[5px] font-general-sans text-[20px] leading-[28px] text-[#e54530] font-semibold capitalize">
              {data.name}
            </h3>
            <p className="text-white text-[14px] leading-[24px] uppercase">
              {data.occupation}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Member;
