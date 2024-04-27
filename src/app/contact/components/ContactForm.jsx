"use client";

import Button from "@/components/ui/Button";
import { sendEmail } from "@/lib/api";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    sendEmail(data);
    reset();
  }

  return (
    <motion.div
      variants={fadeInAnimationVariants("y", 100, 0, 0.7)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="w-full max-w-[1096px] mx-auto p-[16px] xs:p-[24px] md:p-[30px] cLg:p-[45x] border border-[#ededed]"
    >
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-[24px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="flex flex-col gap-[14px] mb-[20px] cLg:mb-[30px]">
            <label className="mb-0 font-general-sans text-[14px] xs:text-[15px] md:text-[18px] cLg:text-[20px] leading-[24px] xs:leading-[26px] md:leading-[28px] cLg:leading-[30px] font-semibold">
              Personal Data <span className="text-[#e54530]">*</span>
            </label>

            <input
              type="text"
              className="h-[44px] md:h-[48px] cLg:h-[54px] mb-0 py-[18px] px-[15px] xs:px-[25x] border border-[#ededed] text-[13px] xs:text-[14px] md:text-[15px] cLg:text-[16px] leading-[16px] xs:leading-[17px] md:leading-[18px] cLg:leading-[19px]"
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-[14px] mb-[20px] cLg:mb-[30px]">
            <label className="mb-0 font-general-sans text-[14px] xs:text-[15px] md:text-[18px] cLg:text-[20px] leading-[24px] xs:leading-[26px] md:leading-[28px] cLg:leading-[30px] font-semibold">
              Email Address <span className="text-[#e54530]">*</span>
            </label>

            <input
              type="email"
              className="h-[44px] md:h-[48px] cLg:h-[54px] mb-0 py-[18px] px-[15px] xs:px-[25x] border border-[#ededed] text-[13px] xs:text-[14px] md:text-[15px] cLg:text-[16px] leading-[16px] xs:leading-[17px] md:leading-[18px] cLg:leading-[19px]"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-[14px] mb-[20px] cLg:mb-[30px]">
            <label className="mb-0 font-general-sans text-[14px] xs:text-[15px] md:text-[18px] cLg:text-[20px] leading-[24px] xs:leading-[26px] md:leading-[28px] cLg:leading-[30px] font-semibold">
              Phone <span className="text-[#e54530]">*</span>
            </label>

            <input
              type="tel"
              className="h-[44px] md:h-[48px] cLg:h-[54px] mb-0 py-[18px] px-[15px] xs:px-[25x] border border-[#ededed] text-[13px] xs:text-[14px] md:text-[15px] cLg:text-[16px] leading-[16px] xs:leading-[17px] md:leading-[18px] cLg:leading-[19px]"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-[14px] mb-[20px] cLg:mb-[30px]">
            <label className="mb-0 font-general-sans text-[14px] xs:text-[15px] md:text-[18px] cLg:text-[20px] leading-[24px] xs:leading-[26px] md:leading-[28px] cLg:leading-[30px] font-semibold">
              Subject <span className="text-[#e54530]">*</span>
            </label>

            <input
              type="text"
              className="h-[44px] md:h-[48px] cLg:h-[54px] mb-0 py-[18px] px-[15px] xs:px-[25x] border border-[#ededed] text-[13px] xs:text-[14px] md:text-[15px] cLg:text-[16px] leading-[16px] xs:leading-[17px] md:leading-[18px] cLg:leading-[19px]"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
          </div>
        </div>

        <div>
          <label className="block font-general-sans text-[14px] xs:text-[15px] md:text-[18px] cLg:text-[20px] leading-[24px] xs:leading-[26px] md:leading-[28px] cLg:leading-[30px] font-semibold mb-[14px]">
            Message <span className="text-[#e54530]">*</span>
          </label>

          <textarea
            className="h-auto min-h-[120px] xs:min-h-[220px] md:min-h-[315px] cLg:min-h-[354px] w-full py-[10px] xs:py-[18px] px-[15px] xs:px-[20px] md:px-[25px] mb-[20px] cLg:mb-[22px] border border-[#ededed] text-[13px] xs:text-[14px] md:text-[16px] leading-[15px] xs:leading-[17px] md:leading-[19px]"
            placeholder="Write your message..."
            {...register("message", { required: true })}
          ></textarea>

          <Button text="Submit" className="w-full justify-center" />
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
