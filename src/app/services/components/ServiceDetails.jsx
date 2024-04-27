"use client";

import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { blogDetailsList } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const ServiceDetails = ({ data }) => {
  return (
    <Section
      className="max-container"
      padding="pt-[100px] xs:pt-[135px] md:pt-[159px] cLg:pt-[180px] pb-[40px] md:pb-[60px] cLg:pb-[120px]"
    >
      <SectionTitle
        title="service details"
        subtitle="ocean freigt"
        desc="Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil"
      />

      <div>
        <motion.div
          variants={fadeInAnimationVariants("y", 60, 0, 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden mb-[16px] md:mb-[30px] cLg:mb-[40px]"
        >
          <Image src={data.imgUrl} width={872} height={409} alt="blog img" />
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants("y", 60, 0, 0.5)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="overflow-hidden mb-[20px] xs:mb-[26px] cLg:mb-[30px]"
        >
          <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
            {data.desc}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants("y", 60, 0, 0.7)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="mb-[12px] xs:mb-[20px]"
        >
          <ul>
            {blogDetailsList.map((item) => (
              <li
                key={item}
                className="flex items-center gap-[5px] xs:gap-[15px] mb-[12px] cLg:mb-[8px]"
              >
                <div className="w-[5px] xs:w-[7px] h-[5px] xs:h-[7px] bg-[#e54530]" />
                <p className="text-[12px] xs:text-[16px] md:text-[17px] cLg:text-[18px] leading-[22px] xs:leading-[26px] md:leading-[27px] cLg:leading-[28px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants("y", 60, 0, 0.9)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="mb-0 xs:mb-[20px] cLg:mb-[26px]"
        >
          <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
            Taudantium totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi amet architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit amet sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants("y", 60, 0, 1.1)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Button href="/contact" text="contact us" />
        </motion.div>
      </div>
    </Section>
  );
};

export default ServiceDetails;
