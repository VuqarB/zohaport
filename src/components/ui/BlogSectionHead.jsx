"use client";

import Button from "./Button";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

const descFadeIn = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
    },
  }),
};

const buttonFadeIn = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    }),
  };

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
          variants={descFadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={0.3}
          className="overflow-hidden max-w-[457px] w-full"
        >
          <p className="text-[#3d3d3d] text-[13px] leading-[23px] xs:text-[16px] xs:leading-[26px] md:text-[18px] md:leading-[28px] text-center md:text-left">
            Curabitur non nulla sit amet nisl tempus convallis quis lectus.
            porttitor nibh Curabitur arcu erat accum.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={buttonFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={0.3}
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
