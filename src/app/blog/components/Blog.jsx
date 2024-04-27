import BlogCard from "@/components/ui/BlogCard";
import { getBlogs } from "@/lib/data";

const Blogs = async () => {
  const blogs = JSON.parse(JSON.stringify(await getBlogs()));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 cLg:grid-cols-3 gap-5 xs:gap-6">
      {blogs.map((item) => (
        <BlogCard key={item.title} data={item} />
      ))}
    </div>
  );
};

export default Blogs;
