"use client";

import Link from "next/link";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { footerNav, footerUtility } from "@/constants";
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

const footerBottomLeftFadeIn = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const footerBottomRightFadeIn = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const Footer = () => {
  return (
    <footer className="overflow-hidden footer-bg pt-[60px] xs:pt-[80px] md:pt-[100px] cLg:pt-[120px]">
      <div className="max-container">
        {/* TOP */}
        <div className="mb-[20px] md:mb-[40px] cLg:mb-[120px]">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-[auto_1fr] cLg:grid-cols-[2.2fr_auto_auto_1fr] gap-[24px] xs:gap-[30px] md:gap-[40px] cLg:gap-[70px]">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={0.1}
              className="col-span-1 xs:col-span-2 md:col-span-1"
            >
              <Link
                href="/"
                className="inline-block mb-[20px] xs:mb-[22px] md:mb-[26px] cLg:mb-[32px]"
              >
                <Image
                  src="/footer-logo.svg"
                  className="w-[130px] md:w-full"
                  width={170}
                  height={50}
                  alt="logo"
                />
              </Link>

              <div className="mb-[45px]">
                <p className="text-[13px] xs:text-[17px] md:text-[18px] leading-[23px] xs:leading-[27px] md:leading-[28px] footer-link-color mb-0">
                  Blanditiis praesentium voluptatum dolor lorem deleniti atque
                  corrupti quos amy dolores et quas lorem si molestias
                  voluptatem.
                </p>
              </div>

              <div>
                <div className="mb-[22px]">
                  <h4 className="uppercase my-0 font-general-sans text-white text-[18px] font-medium tracking-[1.62px] leading-[24px]">
                    Subscribe newsletter
                  </h4>
                </div>

                <div className="mb-[15px]">
                  <form className="flex items-center">
                    <input
                      className="w-full xs:w-[347px] h-[50px] xs:h-[56px] mb-0 py-[18px] pl-[16px] xs:pl-[25px] footer-input-border bg-transparent text-white text-[12px] xs:text-[15px] md:text-[16px] leading-[12px] xs:leading-[18px] md:leading-[19px] outline-0"
                      type="text"
                      placeholder="Your email address"
                    />

                    <button className="h-[50px] xs:h-[56px] w-[50px] xs:w-[56px] py-[14px] px-[18px] bg-[#e54530] ml-[12px]">
                      <Image
                        src="/footer-form-btn-icon.svg"
                        width={14}
                        height={13}
                        alt="icon"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={0.3}
            >
              <div className="mb-[16px] xs:mb-[20px] md:mb-[26px] cLg:mb-[50px]">
                <h4 className="my-0 font-general-sans text-white text-[15px] xs:text-[16px] md:text-[20px] cLg:text-[22px] leading-[120%] font-semibold tracking-[3.74px] uppercase">
                  Navigation
                </h4>
              </div>

              <ul>
                {footerNav.map((item) => (
                  <li key={item.label} className="mb-4 xs:mb-5">
                    <Link
                      href={item.href}
                      className="text-[14px] xs:text-[16px] cLg:text-[18px] leading-[24px] xs:leading-[26px] cLg:leading-[28px] footer-link-color transition-all duration-200 ease-linear outline-0 capitalize hover:"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={0.5}
            >
              <div className="mb-[16px] xs:mb-[20px] md:mb-[26px] cLg:mb-[50px]">
                <h4 className="my-0 font-general-sans text-white text-[15px] xs:text-[16px] md:text-[20px] cLg:text-[22px] leading-[120%] font-semibold tracking-[3.74px] uppercase">
                  utility pages
                </h4>
              </div>

              <ul>
                {footerUtility.map((item) => (
                  <li key={item.label} className="mb-4 xs:mb-5">
                    <Link
                      href={item.href}
                      className="text-[14px] xs:text-[16px] cLg:text-[18px] leading-[24px] xs:leading-[26px] cLg:leading-[28px] footer-link-color transition-all duration-200 ease-linear outline-0 capitalize hover:"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={0.7}
            >
              <div className="mb-[16px] xs:mb-[20px] md:mb-[26px] cLg:mb-[50px]">
                <h4 className="my-0 font-general-sans text-white text-[15px] xs:text-[16px] md:text-[20px] cLg:text-[22px] leading-[120%] font-semibold tracking-[3.74px] uppercase">
                  contact us
                </h4>
              </div>

              <div className="mb-[20px] xs:mb-[26px]">
                <div className="text-[14px] xs:text-[16px] cLg:text-[18px] leading-[24px] xs:leading-[26px] cLg:leading-[28px] text-white">
                  +088 65952 23366
                </div>
              </div>

              <div className="mb-[20px] xs:mb-[26px]">
                <div className="text-[14px] xs:text-[16px] cLg:text-[18px] leading-[24px] xs:leading-[26px] cLg:leading-[28px] text-white">
                  Zohaport@gmail.com
                </div>
              </div>

              <div className="max-w-[254px] w-full">
                <div className="text-[14px] xs:text-[16px] cLg:text-[18px] leading-[24px] xs:leading-[26px] cLg:leading-[28px] text-white">
                  Address : 45 Anderson Road, East New York
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex-center flex-col md:flex-row md:flex-between py-5 footer-b-border">
          <motion.div
            variants={footerBottomLeftFadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-center xs:text-left text-[13px] xs:text-[16px] leading-[23px] xs:leading-[150%] footer-b-text-color mb-[20px] xs:mb-[24px] md:mb-0"
          >
            Design & Developed by{" "}
            <Link href="/" className="text-[#e54530] font-medium">
              Zohaflow
            </Link>{" "}
            - Powered by{" "}
            <Link href="/" className="text-[#e54530] font-medium">
              Webflow
            </Link>
          </motion.div>

          <motion.div
            variants={footerBottomRightFadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <ul className="flex-start gap-[18px]">
              <li className="flex-center w-[32px] h-[32px] rounded-full transition-all duration-200 ease-linear footer-social-b hover:bg-[#e54530] border-[#e54530]">
                <Link href="/" className="text-white">
                  <FacebookOutlinedIcon fontSize="small" />
                </Link>
              </li>
              <li className="flex-center w-[32px] h-[32px] rounded-full transition-all duration-200 ease-linear footer-social-b hover:bg-[#e54530] border-[#e54530]">
                <Link href="/" className="text-white">
                  <InstagramIcon fontSize="small" />
                </Link>
              </li>
              <li className="flex-center w-[32px] h-[32px] rounded-full transition-all duration-200 ease-linear footer-social-b hover:bg-[#e54530] border-[#e54530]">
                <Link href="/" className="text-white">
                  <TwitterIcon fontSize="small" />
                </Link>
              </li>
              <li className="flex-center w-[32px] h-[32px] rounded-full transition-all duration-200 ease-linear footer-social-b hover:bg-[#e54530] border-[#e54530]">
                <Link href="/" className="text-white">
                  <LinkedInIcon fontSize="small" />
                </Link>
              </li>
              <li className="flex-center w-[32px] h-[32px] rounded-full transition-all duration-200 ease-linear footer-social-b hover:bg-[#e54530] border-[#e54530]">
                <Link href="/" className="text-white">
                  <YouTubeIcon fontSize="small" key="5" />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
