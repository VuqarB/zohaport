"use client";
import { useCallback, useMemo, useState } from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const ServiceSectionBody = ({ services }) => {
  const [activeData, setActiveData] = useState(services[0]);

  const calculatedServiceDetails = useMemo(() => {
    return (id) => services.find((item) => id === item._id);
  }, [services]);

  const activeServiceDetails = useCallback(
    (id) => {
      const data = calculatedServiceDetails(id);
      setActiveData(data);
    },
    [calculatedServiceDetails]
  );

  return (
    <div className="flex justicy-center flex-col cLg:flex-row gap-[30px] cLg:gap-[110px] w-full">
      <div className="flex-1 cLg:flex-[1.5] w-full">
        <motion.div
          variants={fadeInAnimationVariants("x", -40, 0, 0.25)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <ServiceCard
            img={activeData.imgUrl}
            title={activeData.title}
            desc={activeData.desc}
          />
        </motion.div>
      </div>

      <div className="flex flex-col flex-1 w-full cLg:max-w-[471px] cLg:pt-10">
        <ul>
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              variants={fadeInAnimationVariants("y", 40, 0, 0.1 * index)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="flex items-center gap-x-2.5 xs:gap-x-5 py-[10px] xs:py-[24px] md:py-[20px] cLg:py-[30px] text-[15px] xs:text-[20px] md:text-[24px] leading-[29px] xs:leading-[28px] md:leading-[95%] font-medium xs:font-semibold service-nav-text-color service-nav-border cursor-pointer"
              onClick={() => activeServiceDetails(service._id)}
            >
              <div
                className={`${
                  activeData._id === service._id
                    ? "transition-all duration-300 ease-linear clicked-service-nav"
                    : "service-nav"
                }`}
              >
                {service.title}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceSectionBody;
