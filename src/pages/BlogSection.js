import React from "react";

const blogs = [
 
  {
    date: "18",
    month: "July",
    title: "Pune to Mumbai One Way Cab",
    image: "/images/keyword/32.jpg",
    url: "/Pune-to-Mumbai-One-Way-Cab",
  },

   {
    date: "14",
    month: "June",
    title: "Pune to Mumbai Innova Crysta Cabs",
    image: "/images/keyword/48.jpg",
    url: "/Pune-to-Mumbai-Innova-Crysta-Cabs",
  },
  {
    date: "26",
    month: "Sep",
    title: "Mumbai to Pune Daily Cabs",
    image: "/images/keyword/17.jpg",
    url: "/Mumbai-to-Pune-Daily-Cabs",
  },
];

const BlogSection = () => {
  return (
    <div className="section-full py-1 site-bg-white twm-blog-section-wrap">
      <div className="container">

        {/* TITLE */}
        <div className="section-head center">
          <div className="twm-sm-title left">
            Travel Updates
          </div>

          <h2 className="twm-large-title site-text-dark">
            Latest From Trustline Travels
          </h2>
        </div>


        {/* BLOG CARDS */}
        <div className="row">

          {blogs.map((blog, index) => (
            <div
              className="col-12 col-md-4 mb-4"
              key={index}
            >

              <div className="twm-blog-grid-2">

                {/* IMAGE */}
                <div className="wt-post-media">
                  <a href={blog.url}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="img-fluid"
                    />
                  </a>
                </div>


                {/* CONTENT */}
                <div className="twm-post-info-wrap">

                  {/* DATE */}
                

                  {/* TEXT */}
                  <div className="twm-post-info">

                    <div className="post-author">
                      <span className="au-name">
                        Trustline Travels
                      </span>
                    </div>


                    <h3 className="post-title">
                      <a href={blog.url}>
                        {blog.title}
                      </a>
                    </h3>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default BlogSection;