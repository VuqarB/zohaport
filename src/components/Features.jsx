import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import { getFeatures } from "@/lib/data";
import Feature from "./ui/Feature";

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
 
        <div className="w-full py-[60px] px-0 xs:py-20 xs:px-5 md:py-[100px] md:px-10 cLg:py-0 cLg:pr-[90px] cLg:pl-[75px] features-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 cLg:grid-cols-custom-columns gap-[30px] cLg:gap-0 w-full xs:pb-20 md:pb-0">
            {features.map((feature, index) => (
              <Feature key={feature.title} index={index} data={feature} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
