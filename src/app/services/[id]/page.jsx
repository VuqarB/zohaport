import { getMainServiceDetails } from "@/lib/data";
import ServiceDetails from "../components/ServiceDetails";
import ServiceShipping from "../components/ServiceShipping";

const page = async ({ params }) => {
  const serviceId = params.id;
  const details = JSON.parse(
    JSON.stringify(await getMainServiceDetails(serviceId))
  );

  return (
    <>
      <div className="flex flex-col max-w-[872px] w-full mx-auto">
        <ServiceDetails data={details} />
        <ServiceShipping serviceId={serviceId} />
      </div>
    </>
  );
};

export default page;
