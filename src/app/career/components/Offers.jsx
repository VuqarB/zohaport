import OfferCard from "./OfferCard";
import { getCareerOffers } from "@/lib/data";

const Offers = async () => {
  const careerOffers = JSON.parse(JSON.stringify(await getCareerOffers()))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 cLg:gap-5">
      {careerOffers.map((item) => (
        <OfferCard key={item.title} data={item} />
      ))}
    </div>
  );
};

export default Offers;
