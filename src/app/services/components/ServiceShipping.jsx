import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { getMainServiceShipping } from "@/lib/data";

const ServiceShipping = async ({ serviceId }) => {
  const serviceShipping = JSON.parse(
    JSON.stringify(await getMainServiceShipping(serviceId))
  );

  return (
    <Section padding="pb-[60px] xs:pb-[80px] md:pb-[100px] cLg:pb-[150px]">
      <SectionTitle
        title="Ocean Freight Shipping"
        subtitle="Ocean shipping"
        start
        margin="mb-[22mb] xs:mb-[35px] md:mb-[40px] cLg:mb-[45px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {serviceShipping.map((shipping) => (
          <div
            key={shipping.title}
            className="p-[30px] border border-[#ededed]"
          >
            <div className="mb-[10px] xs:mb-[14px]">
              <h3 className="my-0 font-general-sans text-[18px] xs:text-[24px] leading-[28px] xs:leading-[30px] font-semibold">
                {shipping.title}
              </h3>
            </div>

            <div className="mb-[10px] xs:mb-[20px] md:mb-[26px] cLg:mb-[32px] w-full cLg:w-[364px]">
              <p className="text-[13px] xs:text-[15px] md:text-[16px] leading-[23px] xs:leading-[25px] md:leading-[28px] text-[#3d3d3d]">
                {shipping.desc}
              </p>
            </div>

            <Button href="/contact" text="contact experts" icon transparent color className="hover:text-[#e54530]" padding />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServiceShipping;
