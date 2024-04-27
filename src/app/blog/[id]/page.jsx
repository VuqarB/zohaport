import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import { getBlog, getBlogDetails } from "@/lib/data";
import BlogDetails from "../components/BlogDetails";

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
  const date = formattedDate();

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

      <BlogDetails
        blog={blog}
        details={details}
        formattedDate={date}
      />
    </Section>
  );
};

export default page;
