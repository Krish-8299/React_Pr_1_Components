import BlogCard from "./BlogCard";
import blogSectionData from "./blogsectiondata";

const BlogSection = () => {
  return (
    <section className="py-5">
      <div className="container">

        <h1 className="fw-bold mb-5">
          FROM THE BLOG
        </h1>

        <div className="row">
          {blogSectionData.map((item, index) => (
            <BlogCard key={index} blog={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
