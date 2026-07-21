import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Mr. Rajesh Sharma",
    position: "Business Traveler",
    image: "/images/testimonial/pic1.jpg",
    text: "Trustline Travels provided an excellent travel experience. The service was comfortable, reliable, and perfectly managed from start to finish.",
    rating: 5,
  },
  {
    name: "Miss. Priya Verma",
    position: "Family Traveler",
    image: "/images/testimonial/pic2.jpg",
    text: "I had a wonderful journey with Trustline Travels. The team was professional, supportive, and made our trip completely stress-free.",
    rating: 5,
  },
  {
    name: "Mr. Amit Patel",
    position: "Corporate Client",
    image: "/images/testimonial/pic3.jpg",
    text: "Amazing travel service with comfortable vehicles and excellent support. Trustline Travels made our vacation truly memorable.",
    rating: 5,
  },
  {
    name: "Miss. Neha Singh",
    position: "Holiday Traveler",
    image: "/images/testimonial/pic4.jpg",
    text: "Thank you Trustline Travels for a safe and enjoyable journey. The arrangements were perfect and the service was outstanding.",
    rating: 5,
  },
  {
    name: "Mr. Vikram Joshi",
    position: "Regular Customer",
    image: "/images/testimonial/pic5.jpg",
    text: "A great travel partner for family and business trips. Trustline Travels offers comfort, punctuality, and reliable services.",
    rating: 5,
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="section-full py-3 site-bg-white twm-testimonial-section-wrap">
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-lg-6">
            <div className="section-head left">
              <div className="twm-sm-title left">
                Testimonial
              </div>

              <h2 className="twm-large-title site-text-dark">
                What Our Customers Say
              </h2>
            </div>
          </div>
        </div>


        {/* Custom Navigation */}
        <div className="testimonial-nav">
          <button ref={prevRef} className="testimonial-prev">
            ❮
          </button>

          <button ref={nextRef} className="testimonial-next">
            ❯
          </button>
        </div>


        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="twm-testimonial2">

                {/* Header */}
                <div className="twm-testimonial-head">

                  <div className="twm-author-detail">

                    <h3 className="twm-title">
                      {item.name}
                    </h3>

                    <div className="twm-position">
                      {item.position}
                    </div>

                  </div>

                </div>


                {/* Content */}
                <div className="twm-testimonial-detail">

                  <p>
                    {item.text}
                  </p>


                  <div className="twm-rating-wrap">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>
                        ⭐
                      </span>
                    ))}
                  </div>

                </div>


                {/* Quote */}
                <div className="twm-quote-icon">
                  <img
                    src="/images/quote.png"
                    alt="quote"
                  />
                </div>


              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </div>
  );
};

export default Testimonials;