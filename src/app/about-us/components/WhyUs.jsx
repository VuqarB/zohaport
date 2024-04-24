import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import Image from "next/image";
import Accordion from "@/components/ui/Accordion";
import { getWhyChooseUs } from "@/lib/data";

const WhyUs = async () => {
  const whyChooseUs = JSON.parse(JSON.stringify(await getWhyChooseUs()))

  return (
    <Section
      className="max-container"
      padding="pt-[70px] pb-[60px] xs:py-[80px] md:py-[100px] cLg:py-[150px]"
    >
      <div className="grid grid-cols-1 cLg:grid-cols-[1fr_1.2fr] items-center gap-[40px] xs:gap-[70px]">
        <div className="relative">
          <div className="relative left-0 cLg:left-[30px] overflow-hidden mb-[30px] cLg:mb-0">
            <Image
              src="/why-us-img.png"
              className="w-full cLg:max-w-[486px]"
              width={486}
              height={653}
              alt="why-choose-us-img"
            />
          </div>
          <div className="hidden cLg:block absolute top-[-29px] left-0 z-[-1] w-[53%] h-[109%] why-us-img-border" />
        </div>

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
