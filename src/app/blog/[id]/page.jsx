import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { blogDetailsList } from "@/constants";
import { getBlog, getBlogDetails } from "@/lib/data";
import Image from "next/image";

const page = async ({ params }) => {
  const blogId = params.id;
  const blog = JSON.parse(JSON.stringify(await getBlog(blogId)));
  const details = JSON.parse(JSON.stringify(await getBlogDetails(blogId)));

  const formattedDate = () => {
    const dateString = blog.date;
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Section
      className="max-container"
      padding="pt-[100px] xs:pt-[135px] md:pt-[159px] cLg:pt-[180px] pb-[20px] xs:pb-[30px] md:pb-[60px] cLg:pb-[80px]"
    >
      <SectionTitle
        title="blog details"
        subtitle="blog details"
        desc="Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
      />

      <div className="flex flex-col max-w-[872px] w-full mx-auto">
        <div className="mb-[30px] xs:mb-[35px] md:mb-[40px] cLg:mb-[70px]">
          <div className="uppercase text-[12px] xs:text-[14px] leading-[120%] tracking-[.98px] text-[#3d3d3d] mb-[10px] cLg:mb-[16px]">
            Courier / {formattedDate()}
          </div>
          <div className="overflow-hidden w-full">
            <h1 className="my-0 font-general-sans text-[18px] leading-[28px] xs:text-[40px] md:text-[55px] cLg:text-[68px] xs:leading-[50px] md:leading-[65px] cLg:leading-[78px] font-semibold">
              {blog.title}
            </h1>
          </div>
        </div>

        <div className="relative overflow-hidden mb-[24px] xs:mb-[30px] md:mb-[40px] cLg:mb-[55px]">
          <Image src={details.imgUrl} width={872} height={409} alt="blog img" />
        </div>

        <div className="overflow-hidden mb-[15px] xs:mb-[20px]">
          <h2 className="text-[22px] xs:text-[28px] md:text-[30px] cLg:text-[36px] leading-[32px] xs:leading-[38px] md:leading-[40px] my-0 font-general-sans font-medium">
            {blog.title}
          </h2>
        </div>

        <div className="overflow-hidden mb-[20px] xs:mb-[40px] cLg:mb-[76px]">
          <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
            {details.desc}
          </p>
        </div>

        <div className="mb-[24px] xs:mb-[30px] md:text-[40px] cLg:mb-[55px]">
          <div className="grid gap-[24px] grid-cols-1 xs:grid-cols-2">
            {details.imgUrls.map((url) => (
              <div key={url} className="relative overflow-hidden">
                <Image src={url} width={424} height={330} alt="img-urls" />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden mb-[15px] xs:mb-[20px]">
          <h2 className="text-[22px] xs:text-[28px] md:text-[30px] cLg:text-[36px] leading-[32px] xs:leading-[38px] md:leading-[40px] my-0 font-general-sans font-medium">
            {blog.title}
          </h2>
        </div>

        <div className="mb-0 xs:mb-[20px] cLg:mb-[26px]">
          <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
            Voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet ut et voluptates repudiandae sint et molestiae non lorem
            dolor recusandae. Itaque earum rerum hic tenetur a sapiente delectus
            ut aut reiciendis.
          </p>
        </div>

        <div className="mb-0 md:mb-[26px] py-[30px] xs:py-[60px] md:py-[66px] px-[14px] xs:px-[40px] md:px-[70px] text-center blog-details-quote-bg">
          <div className="mb-[10px] flex-center">
            <Image
              src="/quote-icon.svg"
              width={40}
              height={40}
              alt="quote-icon"
            />
          </div>
          <div className="relative max-w-[721px] w-full mb-[22px] border-l border-[#e54530]">
            <p className="pl-[3px] mb-0 font-general-sans text-[14px] xs:text-[20px] md:text-[24px] leading-[24px] xs:leading-[30px] md:leading-[34px] italic">
              Puod maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut reru Temporibus autem quibusdam et aut
              officiis
            </p>
          </div>

          <div className="text-[#3d3d3d] text-[12px] xs:text-[14px] leading-[120%] tracking-[.98px]">
            BY : JOHNSON CHARLES
          </div>
        </div>

        <div className="overflow-hidden mb-[20px]">
          <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
            omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
            debitis aut rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
            tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
          </p>
        </div>

        <div className="mb-[12px] xs:mb-[20px]">
          <ul>
            {blogDetailsList.map((item) => (
              <li
                key={item}
                className="flex items-center gap-[5px] xs:gap-[15px] mb-[12px] cLg:mb-[8px]"
              >
                <div className="w-[5px] xs:w-[7px] h-[5px] xs:h-[7px] bg-[#e54530]" />
                <p className="text-[12px] xs:text-[16px] md:text-[17px] cLg:text-[18px] leading-[22px] xs:leading-[26px] md:leading-[27px] cLg:leading-[28px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden">
          <p className="text-[#3d3d3d] text-[13px] xs:text-[16px] cLg:text-[18px] leading-[23px] xs:leading-[26px] cLg:leading-[28px] mb-0">
            Debitis aut rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae omnis voluptas assumenda est, omnis
            dolor repellendus. Temporibus autem quibusdam et aut officiis
            debitis aut rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
            tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
          </p>
        </div>
      </div>
    </Section>
  );
};

export default page;
