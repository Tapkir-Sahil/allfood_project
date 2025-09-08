// /Restaurant_Template/imgi_6_blog3.png

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/Restaurant_Template/imgi_6_blog3.png",
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes",
    },
    {
      id: 2,
      image: "/Restaurant_Template/imgi_5_blog2.png",
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes",
    },
    {
      id: 3,
      image: "/Restaurant_Template/imgi_4_blog1.png",
      date: "23 DEC, 2020",
      title: "Addiction When Food Plate Becomes",
    },
  ];

  return (
    <section className="blog-section py-5 mt-5">
      <div className="container text-center">
        {/* Heading */}
        <p className="blog-subtitle">Our New Blog News</p>
        <h2 className="blog-title">Our Recent News</h2>

        {/* Blog Cards */}
        <div className="row g-4 mt-4">
          {blogs.map((blog) => (
            <div className="col-md-6 col-lg-4" key={blog.id}>
              <div className="blog-card position-relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="img-fluid rounded"
                />
                <div className="blog-info p-3">
                  <p className="blog-date">{blog.date}</p>
                  <h5 className="blog-heading">{blog.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;