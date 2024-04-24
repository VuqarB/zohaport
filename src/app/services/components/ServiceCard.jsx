import Button from "@/components/ui/Button";
import Image from "next/image";

const ServiceCard = ({ data }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] xs:gap-[24px] md:gap-[36px] p-[13px] xs:py-[20px] xs:px-[20px] md:pr-[25px] md:pl-[25px] border border-[#ededed]">
      <Image src={data.imgUrl} className="w-full sm:w-[210px]" width={210} height={221} alt="service-img" />

      <div>
        <div className="text-[#3d3d3d] text-[13px] xs:text-[14px] leading-[120%] tracking-[.98px] mb-[6px] xs:mb-[13px] md:mb-[15px] uppercase">
          {data.subtitle}
        </div>

        <div className="w-full xs:max-w-[310px] mb-2.5 md:mb-5 cLg:mb-10">
          <h2 className="text-[18px] xs:text-[22px] md:text-[24px] leading-[28px] xs:leading-[32px] md:leading-[30px] font-semibold my-0 font-general-sans">
            {data.title}
          </h2>
        </div>

        <Button
          href={`/services/${data._id}`}
          text="know more"
          icon
          transparent
          color
          padding="p-0"
          className="hover:text-[#e54530]"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
