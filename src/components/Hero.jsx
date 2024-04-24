import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";
import Section from "./ui/Section";
import Image from "next/image";

const Hero = () => {
  return (
    <Section
      className="max-container"
      padding="pt-[116px] xs:pt-[135px] md:pt-[159px] cLg:pt-[180px] pb-[60px] xs:pb-[80px] md:pb-[100px] cLg:pb-[150px]"
    >
      <div className="flex-center flex-col md:flex-row gap-[50px] cLg:gap-[70px] 2xl:gap-[110px] w-full">
        {/* LEFT */}
        <div className="flex-[1.2] cLg:max-w-[632px] w-full">
          <div className="w-full">
            <SectionTitle
              hero
              start
              responsive
              subtitle="Cargo Solution"
              title="Fast Certified And Flexible Solution."
              margin="mb-0"
            />
            <div className="overflow-hidden md:max-w-[584px] w-full mx-auto md:mx-0 mb-[24px] xs:mb-[30px] cLg:mb-[40px]"> 
              <p className="text-[#3d3d3d] text-[13px] leading-[23px] xs:text-[16px] xs:leading-[26px] md:text-[18px] md:leading-[28px] text-center md:text-left">
                Blanditiis praesentium voluptatum dolor lorem deleniti atque
                corrupti quos amy dolores et quas molestias.voluptatem
                accusantium doloremque laudantium totam rem aperiam.
              </p>
            </div>
          </div>

          <div className="flex-center md:flex-start flex-col md:flex-row gap-2.5 w-3/5 md:w-auto mx-auto md:mx-0">
            <Button text="contact us" href="/contact" className="w-full md:w-auto flex-center" />
            <Button text="learn more" icon color transparent className="w-full md:w-auto flex-center border border-[#ededed]" />
          </div>
        </div>

        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <div className="relative left-0 flex-center mb-[30px] cLg:mb-0 overflow-hidden w-full md:w-auto">
              <Image
                src="/hero-baner-img-1.png"
                width={486}
                height={672}
                alt="hero-banner-1"
                className="w-full md:w-auto"
              />
            </div>
            <div className="static l-0 md:absolute left-[-33px] bottom-0 z-[1] w-full md:w-auto">
              <Image
                src="/hero-baner-img-2.png"
                width={264}
                height={353}
                alt="hero-banner-2"
                className="w-full md:w-auto"
              />
            </div>
            <div className="hidden md:block absolute top-[-32px] right-0 z-[-1] w-[53%] h-[110%] hero-border" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
