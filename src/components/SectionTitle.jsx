import Image from "next/image";

const SectionTitle = ({
  hero,
  start,
  noStar,
  margin,
  subtitle,
  title,
  desc,
  white,
  responsive,
}) => {
  return (
    <div
      className={`${
        start
          ? `${
              responsive
                ? "flex-center md:flex md:items-start md:justify-center"
                : "flex items-start justify-center"
            }`
          : "flex-center"
      } flex-col ${margin || "mb-5 cLg:mb-[60px]"}`}
    >
      <div
        className={`relative ${
          start ? "flex-start" : "flex-center"
        } gap-2.5 xs:gap-4 mb-2 xs:mb-2.5 md:mb-[14px] cLg:mb-4`}
      >
        <div
          className={`${
            start && responsive
              ? "block md:hidden"
              : start && !responsive && "hidden"
          } w-[50px] h-[2px] bg-[#e54530]`}
        />
        <div className="overflow relative z-1 text-[14px] leading-[20px] md:text-[16px] xs:leading-[30px] text-[#e54530] tracking-[2px] font-medium uppercase">
          {subtitle}
        </div>
        <div className="w-[50px] h-[2px] bg-[#e54530]" />
        {!noStar && (
          <Image
            src="/star.svg"
            className={`absolute 
                  ${
                    start && !responsive
                      ? "top-[105%] xs:top-[80%] md:top-[-121%] left-[-10%]"
                      : start && responsive
                      ? "top-[-140%] xs:top-[-79%] md:top-[-121%] left-[35%] md:left-[-10%]"
                      : !start &&
                        !responsive &&
                        "top-[-140%] xs:top-[-79%] md:top-[-107%]"
                  } 
              w-[75px] md:w-[98px] z-[-1] star-spin`}
            width={98}
            height={97}
            alt="star"
          />
        )}
      </div>

      {title && (
        <h2
          className={`
                ${white ? "text-[white]" : "text-[#050505]"}
                ${
                  hero
                    ? "text-[28px] xs:text-[50px] md:text-[65px] cLg:text-[72px] leading-[38px] xs:leading-[60px] md:leading-[75px] cLg:leading-[82px] text-center md:text-left mb-[13px]"
                    : "text-[20px] xs:text-[34px] md:text-[40px] cLg:text-[48px] leading-[30px] xs:leading-[44px] md:leading-[50px] cLg:leading-[58px] mb-[14px] md:mb-4"
                }
                font-semibold capitalize font-general-sans
            `}
        >
          {title}
        </h2>
      )}

      {desc && (
        <div className="overflow-hidden md:max-w-[598px] w-full">
          <p
            className={`${white ? "text-[white]" : "text-[#3d3d3d]"} ${
              start ? "text-left" : "text-center"
            } text-[13px] leading-[23px] xs:text-[16px] xs:leading-[26px] md:text-[18px] md:leading-[28px]`}
          >
            {desc}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
