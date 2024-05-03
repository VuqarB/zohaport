import SectionTitle from "./SectionTitle";
import Section from "./ui/Section";
import Testimonal from "./ui/Testimonal";
import { getTestimonals } from "@/lib/data";

const Testimonals = async () => {
  const testimonals = JSON.parse(JSON.stringify(await getTestimonals()));

  return (
    <Section className="max-container" padding="pt-[60px]">
      <div className="flex-center flex-col">
        <SectionTitle
          subtitle="testimonals"
          title="what clients say"
          desc="Curabitur non nulla sit amet nisl tempus convallis quis lectus. porttitor nibh. Curabitur arcu erat accu msan id imperdiet et porttitor."
        />

        <div className="flex-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 cLg:grid-cols-4 md:gap-5 w-full">
            {testimonals.map((item) => (
              <Testimonal key={item.name} data={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonals;
