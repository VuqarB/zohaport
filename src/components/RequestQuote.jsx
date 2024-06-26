"use client";

import SectionTitle from "./ui/SectionTitle";
import Input from "./ui/Input";
import Section from "./ui/Section";
import Image from "next/image";
import Select from "./ui/Select";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { sendRequest } from "@/lib/api";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motion";

const RequestQuote = () => {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    sendRequest(data);
    reset();
  }

  return (
    <Section className="max-container" padding="p-0">
      <div className="flex flex-col cLg:flex-row gap-[70px]">
        <div className="flex-1 relative">
          <motion.div
            variants={fadeInAnimationVariants("x", -100, 0, 0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className="relative left-0 cLg:left-[30px] mb-[30px] cLg:mb-0 overflow-hidden">
              <Image
                src="/request-quote-img.png"
                className="w-full cLg:w-auto"
                width={474}
                height={698}
                alt="request-qoute-img"
              />
            </div>
            <div className="absolute top-[-33px] cLg:top-[-29px] left-0 z-[-1] w-[53%] h-[103%] cLg:h-[106%] quote-b" />
          </motion.div>
        </div>
        <div className="flex-[1.2]">
          <SectionTitle subtitle="request quote" start margin="mb-0" />
          <motion.div
            variants={fadeInAnimationVariants("y", 40, 0, 0.175)}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="overflow-hidden mb-[45px]"
          >
            <h2 className="text-[20px] xs:text-[34px] md:text-[40px] cLg:text-[48px] leading-[30px] xs:leading-[44px] md:leading-[50px] cLg:leading-[58px] font-semibold">
              Request a Quote
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInAnimationVariants("y", 100, 0, 0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="mb-[15px]"
          >
            <form
              className="flex flex-col gap-[16px] xs:gap-[24px] cLg:gap-[28px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-0 font-general-sans text-[#050505] text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] font-medium"
                  >
                    Personal Data
                  </label>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-5">
                  <Input
                    type="text"
                    placeholder="Name"
                    registerName="name"
                    register={register}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    registerName="email"
                    register={register}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone"
                    registerName="phone"
                    register={register}
                  />
                  <Input
                    type="text"
                    placeholder="Address"
                    registerName="address"
                    register={register}
                  />
                </div>
              </div>
              <div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-0 font-general-sans text-[#050505] text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] font-medium"
                  >
                    Shipment Data
                  </label>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-5">
                  <Select
                    defaultOption="Sea Fright"
                    options={[
                      { value: "sea-fright-1", name: "Sea Fright" },
                      { value: "sea-fright-2", name: "Sea Fright" },
                    ]}
                    registerName="seaFright"
                    register={register}
                  />
                  <Select
                    defaultOption="Incotems"
                    options={[
                      { value: "incomets-1", name: "Incomets" },
                      { value: "incomets-2", name: "Incomets" },
                    ]}
                    registerName="incomets"
                    register={register}
                  />
                  <Input
                    type="text"
                    placeholder="Delivery City"
                    registerName="deliveryCity"
                    register={register}
                  />
                  <Input
                    type="text"
                    placeholder="City of Departure"
                    registerName="cityOfDeparture"
                    register={register}
                  />
                  <Input
                    type="text"
                    placeholder="Width"
                    registerName="width"
                    register={register}
                  />
                  <Input
                    type="text"
                    placeholder="Length"
                    registerName="length"
                    register={register}
                  />
                </div>
              </div>
              <div>
                <Button text="send now" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default RequestQuote;
