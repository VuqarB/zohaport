import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { getMainServiceShipping } from "@/lib/data";
import ServiceShippingCard from "./ServiceShippingCard";

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
        {serviceShipping.map((shipping, index) => (
          <ServiceShippingCard
            key={shipping.title}
            index={index}
            data={shipping}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServiceShipping;
