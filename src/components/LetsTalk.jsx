"use client";

import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";
import Section from "./ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
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

const LetsTalk = () => {
  return (
    <Section className="max-container">
      <div className="flex-center flex-col w-full">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={0.3}
        >
          <Image
            src="/cta-img.svg"
            className="mb-9"
            width={334}
            height={165}
            alt="cta"
          />
        </motion.div>

        <div>
          <SectionTitle
            subtitle="let’s talk"
            title="do you have any questions"
            margin="m-0"
          />
          <div className="overflow-hidden text-center mb-[28px] mx-auto max-w-[598px] w-full">
            <p className="text-[#3d3d3d] text-[13px] leading-[23px] xs:text-[16px] xs:leading-[26px] md:text-[18px] md:leading-[28px]">
              Curabitur non nulla sit amet nisl tempus convallis quis lectus.
              porttitor nibh. Curabitur arcu erat accu msan id imperdiet et
              porttitor.
            </p>
          </div>
        </div>

        <Button text="let’s talk" href="/contact" className="w-3/5 md:w-auto" />
      </div>
    </Section>
  );
};

export default LetsTalk;
