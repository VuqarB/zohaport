import { getMainServices } from "@/lib/data";
import ServiceCard from "./ServiceCard";

const Services = async () => {
  const mainServices = JSON.parse(JSON.stringify(await getMainServices()));

  return (
    <div className="grid grid-cols-1 cLg:grid-cols-2 gap-[24px]">
      {mainServices.map((item) => (
        <ServiceCard key={item.title} data={item} />
      ))}
    </div>
  );
};

export default Services;
