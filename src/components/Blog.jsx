import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";
import Section from "./ui/Section";
import BlogCard from "./ui/BlogCard";
import { getBlogs } from "@/lib/data";

const Blog = async () => {
  const blogs = JSON.parse(JSON.stringify(await getBlogs(3)));

  return (
    <Section className="max-container">
      <div className="flex-between flex-col md:flex-row mb-[50px]">
        <div>
          <SectionTitle
            subtitle="news & media"
            title="news & articles"
            start
            margin="m-0"
            responsive
          />
          <div className="overflow-hidden max-w-[457px] w-full">
            <p className="text-[#3d3d3d] text-[13px] leading-[23px] xs:text-[16px] xs:leading-[26px] md:text-[18px] md:leading-[28px] text-center md:text-left">
              Curabitur non nulla sit amet nisl tempus convallis quis lectus.
              porttitor nibh Curabitur arcu erat accum.
            </p>
          </div>
        </div>

        <Button
          href="/blog "
          text="more articles"
          className="ml-2.5 hover:bg-[#e54530] hover:text-white "
          color
          transparent
          icon
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 cLg:grid-cols-3 gap-5 xs:gap-6">
        {blogs.map((item) => (
          <BlogCard key={item.date} data={item} />
        ))}
      </div>
    </Section>
  );
};

export default Blog;
