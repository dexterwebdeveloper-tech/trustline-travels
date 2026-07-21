import React, { useEffect, useState } from "react";

const Testimonialabout = () => {
  const testimonials = [
    {
      name: "Mr. Rahul Sharma",
      image: "/images/testimonial/pic1.jpg",
      review:
        "Excellent cab service from Pune to Mumbai. The driver was professional, the vehicle was clean, and the entire journey was very comfortable."
    },
    {
      name: "Miss. Priya Patil",
      image: "/images/testimonial/pic2.jpg",
      review:
        "Trustline Travels provided a smooth and safe travel experience. Booking was easy and the service quality was outstanding."
    },
    {
      name: "Mr. Amit Kulkarni",
      image: "/images/testimonial/pic3.jpg",
      review:
        "I highly recommend Trustline Travels for family and business trips. Their drivers are reliable and vehicles are well maintained."
    },
    {
      name: "Miss. Sneha Joshi",
      image: "/images/testimonial/pic1.jpg",
      review:
        "Very comfortable journey with excellent customer support. Trustline Travels made my trip completely stress-free and enjoyable."
    },
    {
      name: "Mr. Vikram Deshmukh",
      image: "/images/testimonial/pic2.jpg",
      review:
        "Affordable pricing with premium service. The pickup and drop facility was punctual and very convenient."
    },
    {
      name: "Miss. Neha Sharma",
      image: "/images/testimonial/pic3.jpg",
      review:
        "A trusted travel partner for every journey. Clean cars, polite drivers, and a wonderful travel experience."
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);


  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];


  return (
    <div className="section-full py-3 site-bg-dark twm-testimonial-section-wrap">

      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-lg-6">
            <div className="section-head left">

              <div className="twm-sm-title left">
                Testimonials
              </div>

              <h2 className="twm-large-title site- text-white">
                What Our Customers Say
              </h2>

            </div>
          </div>
        </div>


        {/* Testimonials */}
        <div className="section-content">

          <div className="row">

            {visibleTestimonials.map((item, index) => (

              <div className="col-lg-4 col-md-6 mb-4" key={index}>

                <div className="twm-testimonial2 drk-view">

                  <div className="twm-testimonial-head">

                    {/* <div className="media-pic">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div> */}


                    <div className="twm-author-detail">

                      <h3 className="twm-title">
                        {item.name}
                      </h3>

                      <div className="twm-position">
                        Happy Customer
                      </div>

                    </div>

                  </div>



                  <div className="twm-testimonial-detail">

                    <p>
                      {item.review}
                    </p>


                    <div className="twm-rating-wrap">

                      {[1,2,3,4,5].map((star)=>(
                        <span key={star}>
                          <i className="fa fa-star"></i>
                        </span>
                      ))}

                    </div>

                  </div>



                  <div className="twm-quote-icon">
                    <img
                      src="/images/quote.png"
                      alt="Quote"
                    />
                  </div>


                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Testimonialabout;