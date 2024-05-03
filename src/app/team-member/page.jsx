import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import TeamMembers from "./components/TeamMembers";

export const metadata = {
  title: "Team Member",
  description: "Team Member description"
}

const page = () => {
  return (
    <Section
      className="max-container"
      padding="pt-[116px] xs:pt-[135px] md:pt-[159px] cLg:pt-[180px] pb-[60px] xs:pb-[80px] md:pb-[100px] cLg:pb-[150px]"
    >
      <SectionTitle
        subtitle="team"
        title="team members"
        desc="Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore cum soluta nobis est eligendi optio cumque nihil"
        margin="mb-[20px] xs:mb-[10px] md:mb-[40px] cLg:mb-[70px]"
      />
      <TeamMembers />
    </Section>
  );
};

export default page;
