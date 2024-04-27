"use client";

import Image from "next/image";
import { blogDetailsList } from "@/constants";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const BlogDetails = ({ blog, details, formattedDate }) => {
  return (
    <div className="flex flex-col max-w-[872px] w-full mx-auto">
      <div className="mb-[30px] xs:mb-[35px] md:mb-[40px] cLg:mb-[70px]">
        <motion.div
          variants={fadeInAnimationVariants("y", 60, 0, 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="uppercase text-[12px] xs:text-[14px] leading-[120%] tracking-[.98px] text-[#3d3d3d] mb-[10px] cLg:mb-[16px]"
        >
          Courier / {formattedDate}
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants("y", 60, 0, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="overflow-hidden w-full"
        >
          <h1 className="my-0 font-general-sans text-[18px] leading-[28px] xs:text-[40px] md:text-[55px] cLg:text-[68px] xs:leading-[50px] md:leading-[65px] cLg:leading-[78px] font-semibold">
            {blog.title}
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="relative overflow-hidden mb-[24px] xs:mb-[30px] md:mb-[40px] cLg:mb-[55px]"
      >
        <Image src={details.imgUrl} width={872} height={409} alt="blog img" />
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.6)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="overflow-hidden mb-[15px] xs:mb-[20px]"
      >
        <h2 className="text-[22px] xs:text-[28px] md:text-[30px] cLg:text-[36px] leading-[32px] xs:leading-[38px] md:leading-[40px] my-0 font-general-sans font-medium">
          {blog.title}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.6)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="overflow-hidden mb-[20px] xs:mb-[40px] cLg:mb-[76px]"
      >
        <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
          {details.desc}
        </p>
      </motion.div>

      <div className="mb-[24px] xs:mb-[30px] md:text-[40px] cLg:mb-[55px]">
        <div className="grid gap-[24px] grid-cols-1 xs:grid-cols-2">
          {details.imgUrls.map((url, index) => (
            <motion.div
              variants={fadeInAnimationVariants("y", 60, 0, 0.6 * index)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              key={index}
              className="relative overflow-hidden"
            >
              <Image src={url} width={424} height={330} alt="img-urls" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.7)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="overflow-hidden mb-[15px] xs:mb-[20px]"
      >
        <h2 className="text-[22px] xs:text-[28px] md:text-[30px] cLg:text-[36px] leading-[32px] xs:leading-[38px] md:leading-[40px] my-0 font-general-sans font-medium">
          {blog.title}
        </h2>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.7)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="mb-0 xs:mb-[20px] cLg:mb-[26px]"
      >
        <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
          Voluptas assumenda est, omnis dolor repellendus. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non lorem dolor
          recusandae. Itaque earum rerum hic tenetur a sapiente delectus ut aut
          reiciendis.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.7)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="mb-0 md:mb-[26px] py-[30px] xs:py-[60px] md:py-[66px] px-[14px] xs:px-[40px] md:px-[70px] text-center blog-details-quote-bg"
      >
        <div className="mb-[10px] flex-center">
          <Image
            src="/quote-icon.svg"
            width={40}
            height={40}
            alt="quote-icon"
          />
        </div>
        <div className="relative max-w-[721px] w-full mb-[22px] border-l border-[#e54530]">
          <p className="pl-[3px] mb-0 font-general-sans text-[14px] xs:text-[20px] md:text-[24px] leading-[24px] xs:leading-[30px] md:leading-[34px] italic">
            Puod maxime placeat facere possimus, omnis voluptas assumenda est,
            omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
            debitis aut reru Temporibus autem quibusdam et aut officiis
          </p>
        </div>

        <div className="text-[#3d3d3d] text-[12px] xs:text-[14px] leading-[120%] tracking-[.98px]">
          BY : JOHNSON CHARLES
        </div>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants("y", 60, 0, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="overflow-hidden mb-[20px]"
      >
        <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
          omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
          debitis aut rerum necessitatibus saepe eveniet ut et voluptates
          repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
          tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
        </p>
      </motion.div>

      <div className="mb-[12px] xs:mb-[20px]">
        <ul>
          {blogDetailsList.map((item, index) => (
            <motion.li
              variants={fadeInAnimationVariants("y", 60, 0, 0.2 * index)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              key={item}
              className="flex items-center gap-[5px] xs:gap-[15px] mb-[12px] cLg:mb-[8px]"
            >
              <div className="w-[5px] xs:w-[7px] h-[5px] xs:h-[7px] bg-[#e54530]" />
              <p className="text-[12px] xs:text-[16px] md:text-[17px] cLg:text-[18px] leading-[22px] xs:leading-[26px] md:leading-[27px] cLg:leading-[28px]">
                {item}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div
        variants={fadeInAnimationVariants("y", 100, 0, 0.5)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="overflow-hidden"
      >
        <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
          Debitis aut rerum necessitatibus saepe eveniet ut et voluptates
          repudiandae sint et molestiae omnis voluptas assumenda est, omnis
          dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
          aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
          sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
          sapiente delectus, ut aut reiciendis voluptatibus maiores
        </p>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
