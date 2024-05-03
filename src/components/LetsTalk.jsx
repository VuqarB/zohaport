"use client";

import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";
import Section from "./ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const LetsTalk = () => {
  return (
    <Section className="max-container">
      <div className="flex-center flex-col w-full py-[60px] xs:pt-[80px] xs:pb-[60px] md:py-[100px] cLg:pt-[160px] cLg:pb-[120px]">
        <motion.div
          variants={fadeInAnimationVariants("y", 100, 0, 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Image
            src="/cta-img.svg"
            className="mb-9"
            width={334}
            height={165}
            alt="cta"
          />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants("y", 100, 0, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
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
        </motion.div>

        <Button text="let’s talk" href="/contact" className="w-3/5 md:w-auto" />
      </div>
    </Section>
  );
};

export default LetsTalk;
