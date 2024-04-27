"use client";

import { contactInfo } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const ContactInfo = () => {
  return (
    <motion.div
      variants={fadeInAnimationVariants("y", 100, 0, 0.5)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="w-full max-w-[1166px] mx-auto mb-[30px] md:mb-[40px] cLg:mb-[80px] py-[45px] xs:py-[60px] cLg:py-[80px] px-[20px] cLg:px-[100px] contact-bg"
    >
      <div className="flex-between flex-col md:flex-row w-full">
        {contactInfo.map((item) => (
          <div
            className="text-center md:even:border-r md:even:border-l md:even:border-[#dfdfdf] md:even:px-[26px] cLg:even:px-[100px] mb-[24px] md:mb-0"
            key={item.title}
          >
            <div className="flex-center mb-[24px]">
              <Image
                src={item.icon}
                width={34}
                height={38}
                alt="contact-icon"
              />
            </div>

            <div className="font-general-sans text-[12px] md:text-[16px] font-semibold tracking-[1.44px] leading-[22px] xs:leading-[24px] md:leading-[26px] cLg:leading-none">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
