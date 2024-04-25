import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex flex-col w-full p-4 xs:p-5 md:p-10 bg-white service-card-shadow">
        <Image
          src={img}
          alt="service-img"
          width={628}
          height={268}
          className="w-full object-cover"
        />

        <div className="flex items-start flex-col pt-[30px]">
          <h2 className="xs:text-[28px] md:text-[32px] cLg:text-[29px] xs:leading-[38px] md:leading-[50px] font-semibold mb-2">
            {title}
          </h2>

          <div className="max-w-[564px] w-full mb-[30px]">
            <p className="text-[13px] xs:text-[15px] md:text-[16px] leading-[23px] xs:leading-[25px] md:leading-[26px] text-[#3d3d3d]">
              {desc}
            </p>
          </div>

          <Button
            text="Know More"
            href="/services"
            className="w-3/5 md:w-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
