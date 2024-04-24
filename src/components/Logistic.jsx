import React from "react";
import Section from "./ui/Section";
import SectionTitle from "./SectionTitle";
import LogisticCard from "./ui/LogisticCard";
import { getLogistic } from "@/lib/data";

const Logistic = async () => {
  const logistic = JSON.parse(JSON.stringify(await getLogistic()))

  return (
    <Section className="max-container">
      <div className="max-w-[730px] w-full mx-auto text-center">
        <SectionTitle
          subtitle="easy logistic solution"
          title="Your time is saved via logistic and transportation solutions"
          desc="Curabitur non nulla sit amet nisl tempus convallis quis lectus. porttitor nibh. Curabitur arcu erat accu msan id imperdiet et porttitor."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 cLg:grid-cols-3 gap-6">
        {logistic.map((item) => (
          <LogisticCard key={item.title} data={item} />
        ))}
      </div>
    </Section>
  );
};

export default Logistic;
