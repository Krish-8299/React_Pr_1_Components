const BlogCard = ({ blog }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="h-100 text-center">

        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid mb-3"
        />

        <h6 className="fw-semibold">
          {blog.title}
        </h6>

        <p className="text-muted small mb-3">
          {blog.date}
        </p>

        <button className="btn btn-outline-dark btn-sm">
          READ MORE
        </button>

      </div>
    </div>
  );
};

export default BlogCard;
