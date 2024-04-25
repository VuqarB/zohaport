import Section from "./ui/Section";
import BlogCard from "./ui/BlogCard";
import { getBlogs } from "@/lib/data";
import BlogSectionHead from "./ui/BlogSectionHead";

const Blog = async () => {
  const blogs = JSON.parse(JSON.stringify(await getBlogs(3)));

  return (
    <Section className="max-container">
      <BlogSectionHead />

      <div className="grid grid-cols-1 md:grid-cols-2 cLg:grid-cols-3 gap-5 xs:gap-6">
        {blogs.map((item) => (
          <BlogCard key={item.date} data={item} />
        ))}
      </div>
    </Section>
  );
};

export default Blog;
