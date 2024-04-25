"use client";

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
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

const BlogCard = ({ data }) => {
  const formattedDate = () => {
    const dateString = data.date;
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={0.5}
      className="pt-[20px] px-[25px] pb-[35px] border border-[#ededed] blog-card-hover"
    >
      <div className="relative overflow-hidden">
        <Image
          src={data.imgUrl}
          className="blog-img w-full"
          width={362}
          height={282}
          alt="blog-img"
        />
      </div>

      <div className="pt-[35px] pb-0">
        <div className="uppercase text-[12px] xs:text-[14px] leading-[120%] tracking-[.98px] text-[#3d3d3d] mb-[15px]">
          Courier / {formattedDate()}
        </div>
        <div className="mb-10 text-[17px] xs:text-[19px] md:text-[24px] leading-[27px] xs:leading-[28px] md:leading-[34px] text-[#050505] font-semibold">
          {data.title}
        </div>
      </div>
      <Button
        href={`/blog/${data._id}`}
        text="continue reading"
        className="blog-btn"
        color
        transparent
        icon
        left
        padding="p-0"
      />
    </motion.div>
  );
};

export default BlogCard;
