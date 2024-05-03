import Section from "./ui/Section";
import SectionTitle from "./SectionTitle";
import { getServices } from "@/lib/data";
import ServiceSectionBody from "./ui/ServiceSectionBody";

const Services = async () => {
  const services = JSON.parse(JSON.stringify(await getServices()));

  return (
    <Section padding="py-[60px] xs:py-[70px] md:pb-[100px] md:pt-[90px] cLg:pt-[150px] cLg:pb-0">
      <div className="max-container">
        <SectionTitle
          subtitle="main services"
          title="What We Offer"
          desc="Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam."
          white
          noStar
        />

        <ServiceSectionBody services={services} />
      </div>
      <div className="bg-service" />
    </Section>
  );
};

export default Services;
