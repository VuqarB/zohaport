"use client";

import React from "react";
import Section from "./ui/Section";
import { adverts } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Adverts = () => {
  return (
    <Section padding="pt-[60px] pb-[80px] xs:pt-[80px] xs:pb-[100px] md:pt-[100px] md:pb-[120px] cLg:pt-[40px] cLg:pb-[180px]">
      <div className="bg-[#e54530] w-full cLg:rotate-[4deg] clg:translate-x-[-300px] cLg:translate-y-[-16px]">
        <div className="py-2">
          <Marquee speed={150}>
            {adverts.map((item, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={item}
                  className="w-[40px] xs:w-[78px] object-cover mx-2.5 md:mx-6"
                  width={78}
                  height={51}
                  alt="adverts-img"
                />
                <h2 className="my-0 font-general-sans text-white text-[15px] xs:text-[16px] md:text-[18px] font-medium leading-[120%] uppercase">
                  best cargo solution
                </h2>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="relative z-[2] bg-[#050505] w-full cLg:rotate-[-4deg] clg:translate-x-[-300px] cLg:translate-y-[-106px]">
        <div className="py-2">
          <Marquee speed={150} direction="right">
            {adverts.map((item, index) => (
              <div key={index} className="flex items-center translate-x-20">
                <Image
                  src={item}
                  className="w-[40px] xs:w-[78px] object-cover mx-2.5 md:mx-6"
                  width={78}
                  height={51}
                  alt="adverts-img"
                />
                <h2 className="my-0 font-general-sans text-white text-[15px] xs:text-[16px] md:text-[18px] font-medium leading-[120%] uppercase">
                  best cargo solution
                </h2>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
};

export default Adverts;
