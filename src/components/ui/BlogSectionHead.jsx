"use client";

import Button from "./Button";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const BlogSectionHead = () => {
  return (
    <div className="flex-between flex-col md:flex-row mb-[50px]">
      <div>
        <SectionTitle
          subtitle="news & media"
          title="news & articles"
          start
          margin="m-0"
          responsive
        />
        <motion.div
          variants={fadeInAnimationVariants("y", 40, 0, 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="overflow-hidden max-w-[457px] w-full"
        >
          <p className="text-[#3d3d3d] text-[13px] leading-[23px] xs:text-[16px] xs:leading-[26px] md:text-[18px] md:leading-[28px] text-center md:text-left">
            Curabitur non nulla sit amet nisl tempus convallis quis lectus.
            porttitor nibh Curabitur arcu erat accum.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Button
          href="/blog "
          text="more articles"
          className="ml-2.5 hover:bg-[#e54530] hover:text-white "
          color
          transparent
          icon
        />
      </motion.div>
    </div>
  );
};

export default BlogSectionHead;
