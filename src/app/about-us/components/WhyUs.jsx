import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import Image from "next/image";
import Accordion from "@/components/ui/Accordion";
import { getWhyChooseUs } from "@/lib/data";
import WhyUsImg from "./WhyUsImg";

const WhyUs = async () => {
  const whyChooseUs = JSON.parse(JSON.stringify(await getWhyChooseUs()))

  return (
    <Section
      className="max-container"
      padding="pt-[70px] pb-[60px] xs:py-[80px] md:py-[100px] cLg:py-[150px]"
    >
      <div className="grid grid-cols-1 cLg:grid-cols-[1fr_1.2fr] items-center gap-[40px] xs:gap-[70px]">
        <WhyUsImg />

        <div>
          <SectionTitle
            subtitle="why us"
            title="why choose us?"
            start
            margin="mb-[20px] xs:mb-[26px] md:mb-[40px] cLg:mb-[46px]"
          />

          <Accordion data={whyChooseUs} />
        </div>
      </div>
    </Section>
  );
};

export default WhyUs;
