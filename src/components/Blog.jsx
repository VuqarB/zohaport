import Section from "./ui/Section";
import BlogCard from "./ui/BlogCard";
import { getBlogs } from "@/lib/data";
import BlogSectionHead from "./ui/BlogSectionHead";

const Blog = async () => {
  const blogs = JSON.parse(JSON.stringify(await getBlogs(3)));

  return (
    <Section className="max-container" padding="pt-[60px] pb-[60px] xs:pt-[80px] xs:pb-[80px] md:pt-[100px] md:pb-[100px] cLg:pt-[80px] cLg:pb-[150px]">
      <BlogSectionHead />

      <div className="grid grid-cols-1 md:grid-cols-2 cLg:grid-cols-3 gap-5 xs:gap-6">
        {blogs.map((item) => (
          <BlogCard key={item.title} data={item} />
        ))}
      </div>
    </Section>
  );
};

export default Blog;
