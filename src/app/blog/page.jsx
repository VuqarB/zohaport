import SectionTitle from "@/components/ui/SectionTitle";
import Section from "@/components/ui/Section";
import Blogs from "./components/Blog";

export const metadata = {
  title: "Blog",
  description: "Blog description"
}

const page = () => {
  return (
    <Section
      className="max-container"
      padding="pt-[116px] xs:pt-[135px] md:pt-[159px] cLg:pt-[180px] pb-[60px] xs:pb-[80px] md:pb-[100px] cLg:pb-[150px]"
    >
      <SectionTitle
        subtitle="blog"
        title="news & articles"
        desc="Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum."
        margin="mb-[20px] xs:mb-[10px] md:mb-[40px] cLg:mb-[70px]"
      />
      <Blogs />
    </Section>
  );
};

export default page;
