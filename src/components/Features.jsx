import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import Image from "next/image";
import { getFeatures } from "@/lib/data";

const Features = async () => {
  const features = JSON.parse(JSON.stringify(await getFeatures()));

  return (
    <Section className="max-container overflow-hidden">
      <div className="flex-center flex-col">
        <SectionTitle
          subtitle="features"
          title="Special Features"
          desc="Curabitur non nulla sit amet nisl tempus convallis quis lectus. porttitor nibh. Curabitur arcu erat accu msan id imperdiet et porttitor."
        />

        <div className="w-full py-[60px] px-0 xs:py-20 xs:px-5 md:py-[100px] md:px-10 cLg:py-0 cLg:pr-[90px] cLg:pl-[75px]">
          <div className="grid grid-cols-1 md:grid-cols-2 cLg:grid-cols-custom-columns gap-[30px] cLg:gap-0 w-full xs:pb-20 md:pb-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative w-full cLg:w-[355px] mr-0 last:mr-0 cLg:mr-[70px] px-4 xs:px-0"
              >
                <div className="flex-center flex-col p-5 xs:p-[30px] md:py-10 cLg:py-[70px] px-0 cLg:px-5 w-full md:w-[293px] mr-[45px] cLg:mr-0 translate-y-0 feature-hover transition-all duration-300 ease-linear">
                  <div className="flex-center mb-[22px]">
                    <Image
                      src={feature.icon}
                      alt="feature-icon"
                      width={47}
                      height={47}
                      className="feature-img transition-all duration-300 ease-linear w-[32px] h-[32px] xs:w-[47] xs:h-[47]"
                    />
                  </div>

                  <h4 className="text-[18px] xs:text-[20] leading-[28px] xs:leading-[30px] md:text-[22px] md:leading-[32px] font-semibold mb-3">
                    {feature.title}
                  </h4>

                  <div className="md:max-w-[253px] w-full mx-auto">
                    <p className="text-[13px] xs:text-[16px] leading-[23px] xs:leading-[28px] text-[#3d3d3d] text-center">
                      {feature.desc}
                    </p>
                  </div>
                </div>

                {index !== 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-[1px] h-[90px] bg-[#dee0e3] -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
