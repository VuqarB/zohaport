import Button from "@/components/ui/Button";
import Image from "next/image";

const OfferCard = ({ data }) => {

  return (
    <div className="p-[13px] xs:p-[24px] border border-[#ededed] transition-all duration-300 ease-linear w-full hover:border-transparent offer-card-shadow overflow-hidden">
      <div className="mb-2.5 md:mb-3">
        <h3 className="py-0 font-general-sans text-[16px] xs:text-[20px] md:text-[22px] cLg:text-[24px] leading-[22px] xs:leading-[26px] md:leading-[28px] cLg:leading-[30px] font-semibold">
          {data.name}
        </h3>
      </div>

      <div className="flex items-center gap-[5px]">
        <Image
          src="/career-details-icon.svg"
          className="w-[20px] xs:w-[22px] md:w-auto"
          width={24}
          height={30}
          alt="location"
        />
        <div className="uppercase text-[#797979] text-[12px] xs:text-[13px] md:text-[14px] leading-[20px] xs:leading-[30px] tracking-[1.12px]">
          {data.location}
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#ededed] mt-[10px] mb-[15px] xs:my-5 md:my-[30px] my-10" />

      <div className="w-full md:max-w-[364px] mb-[25px] xs:mb-[20px] md:mb-[24px] cLg:mb-10">
        <p className="mb-0 text-[#3d3d3d] text-[13px] xs:text-[15px] cLg:text-[16px] leading-[23px] xs:leading-[25px] cLg:leading-[28px]">
          {data.info}
        </p>
      </div>

      <div className="flex-between">
        <Button
          text="apply now"
          icon
          color
          transparent
          className="border border-[#ededed] hover:bg-[#e54530] hover:border-[#e54530] hover:text-white"
        />
        <div className="font-general-sans text-[14px] xs:text-[16px] md:text-[18px] leading-[24px] xs:leading-[26px] md:leading-none font-medium tracking-[-0.54px]">
          ${data.price}
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
