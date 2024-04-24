import Section from "./ui/Section";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { getSponsors } from "@/lib/data";

const Sponsors = async () => {
  const sponsors = JSON.parse(JSON.stringify(await getSponsors()));

  return (
    <Section
      className="max-container flex w-full overflow-hidden"
      padding="py-10"
    >
      <Marquee speed={150}>
        {sponsors.map((item) => (
          <div key={item.id} className="mr-[40px] xs:mr-[60px] md:mr-[90px]">
            <Image
              src={item.imgUrl}
              className="w-[90px] xs:w-[100px] md:w-full"
              width={127}
              height={40}
              alt="sponsor-img"
            />
          </div>
        ))}
      </Marquee>
    </Section>
  );
};

export default Sponsors;
