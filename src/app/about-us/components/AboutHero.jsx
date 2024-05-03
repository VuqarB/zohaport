"use client";

import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";
import { useState } from "react";
import AboutVideo from "./AboutVideo";
import CountUp from "react-countup";

const AboutHero = () => {
  const [openVideo, setOpenVideo] = useState(false);

  const handleVideo = (bool) => {
    setOpenVideo(bool);
  };

  return (
    <>
      <Section
        className="max-container relative"
        padding="pt-[100px] xs:pt-[135px] md:pt-[159px] cLg:pt-[180px] pb-[20px] xs:pb-[30px] md:pb-[60px] cLg:pb-[80px]"
      >
        <SectionTitle
          subtitle="company"
          title="about us"
          desc="Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil"
          margin="mb-[20px] xs:mb-[10px] md:mb-[40px] cLg:mb-[70px]"
        />

        <div className="relative flex flex-col cLg:flex-row w-full pt-[50px] xs:pt-[60px] px-[20px] pb-[60px] xs:pb-[80px] md:pt-[80px] md:pb-[100px] cLg:py-[120px] md:px-[66px] about-bg">
          <div className="flex flex-col cLg:max-w-[660px] w-full text-center xs:text-left">
            <motion.div
              variants={fadeInAnimationVariants("y", 60, 0, 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="overflow-hidden w-full mb-[10px] xs:mb-[18px] md:mb-[20px]"
            >
              <h2 className="my-0 text-white font-general-sans text-[19px] xs:text-[30px] md:text-[40px] cLg:text-[48px] leading-[27px] xs:leading-[40px] md:leading-[50px] cLg:leading-[58px] font-semibold capitalize">
                we are the loading <br /> experts in global transport & logistic
                services.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInAnimationVariants("y", 60, 0, 0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="overflow-hidden md:max-w-[584px] w-full mb-[16px] xs:mb-[20px] md:mb-[30px]"
            >
              <p className="mb-0 text-white text-[13px] xs:text-[16px] md:text-[18px] leading-[23px] xs:leading-[26px] md:leading-none">
                Blanditiis praesentium voluptatum dolor lorem deleniti atque
                corrupti quos amy dolores et quas molestias.voluptatem
                accusantium doloremque laudantium totam rem aperiam.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInAnimationVariants("y", 60, 0, 0.7)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="mb-[40px] cLg:mb-0"
            >
              <Button
                text="contact us"
                icon
                className="about-btn-border hover:bg-[#e54530] hover:border-[#e54530] mx-auto xs:mx-0"
                transparent
              />
            </motion.div>
          </div>

          <motion.div
            variants={fadeInAnimationVariants("x", 100, 0, 0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="static cLg:absolute top-[66px] right-[66px]"
          >
            <div
              className="block relative overflow-hidden flex-center w-full h-full cursor-pointer"
              onClick={() => handleVideo(true)}
            >
              <Image
                src="/about-video-img.png"
                className="w-full cLg:w-[459px] h-[640px] object-cover"
                width={459}
                height={672}
                alt="about-video"
              />

              <Image
                src="/about-video-icon.svg"
                className="absolute"
                width={83}
                height={83}
                alt="video-play"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInAnimationVariants("x", -100, 0, 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex items-center flex-col xs:flex-row w-full cLg:max-w-[600px] gap-[16px] md:gap-[40px] cLg:gap-[48px] pt-[30px] cLg:pt-[40px]"
        >
          <div className="relative flex-center w-full max-w-[168px]">
            <Image
              src="/counter-circle-img.svg"
              className="about-counter-circle-spin w-[90px] xs:w-[99px] md:w-[160px]"
              width={160}
              height={160}
              alt="circle"
            />
            <Image
              src="/counter-star-img.svg"
              className="absolute about-counter-star-scale w-[20px] xs:w-[40px]"
              width={40}
              height={38}
              alt="star"
            />
          </div>

          <div className="flex flex-col font-general-sans">
            <div className="flex items-center">
              <div className="w-full text-[30px] xs:text-[40px] md:text-[48px] leading-[38px] xs:leading-[48px] md:leading-[58px] font-semibold whitespace-nowrap text-center xs:text-left">
                <CountUp end={8} duration={4} /> + Years
              </div>
            </div>
            <div className="uppercase text-[16px] tracking-[1.44px] font-medium text-center cLg:text-left">
              of experience
            </div>
          </div>

          <div className="w-full max-w-[160px] h-[1px] bg-[#e54530]" />
        </motion.div>
      </Section>

      <AboutVideo openVideo={openVideo} handleVideo={handleVideo} />
    </>
  );
};

export default AboutHero;
