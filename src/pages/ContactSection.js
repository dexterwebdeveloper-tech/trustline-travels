import React from "react";

const ContactSection = () => {
  return (
    <>

      {/* Breadcrumb */}
    <div
  className="wt-bnr-inr site-bg-dark twm-primary-overlay-wrap"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.75) 100%), url('/images/banner-10.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <div className="twm-primary-overlay"></div>

      <div className="container">
        <div className="wt-bnr-inr-entry">
          <div className="banner-title-ouer">
            <div className="banner-title-name">
              <h2 className="wt-title">Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Contact Section */}
      <div className="contact-area-2 space-top" id="contact-sec">
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">Our Contact Information</h2>
          </div>

          <div className="row gy-4 justify-content-center">

            {/* Phone */}
            <div className="col-xl-4 col-lg-4 col-md-4 contact-feature-wrap">
              <div className="contact-feature">

                <div className="contact-feature-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div className="media-body">
                  <p className="contact-feature_label">Call Us</p>

                  <a href="tel:+918087080034" className="contact-feature_link">
                    +91 8087080034
                  </a>

                  <a href="tel:+919421185217" className="contact-feature_link">
                    +91 9421185217
                  </a>
                </div>

              </div>
            </div>

            {/* Email */}
            <div className="col-xl-4 col-lg-4 col-md-4 contact-feature-wrap">
              <div className="contact-feature">

                <div className="contact-feature-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div className="media-body">
                  <p className="contact-feature_label">Email Us</p>

                  <a
                    href="mailto:booking@trustlinetravels.com"
                    className="contact-feature_link"
                  >
                    booking@trustlinetravels.com
                  </a>

                </div>

              </div>
            </div>

            {/* Address */}
            <div className="col-xl-4 col-lg-4 col-md-4 contact-feature-wrap">
              <div className="contact-feature">

                <div className="contact-feature-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div className="media-body">
                  <p className="contact-feature_label">Office Address</p>

                  <span className="contact-feature_link">
                    Trustline Travels<br />
                    Office No 3 ,Shive Pride, Lane No 14, Swami Samarth Nagar, Sathe Nagar, Lohegaon, Pune, Maharashtra-411047.
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.312616842194!2d73.9153899!3d18.6040642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6bfd5524791%3A0xfbf3c0e22f3b3da6!2sShiv%20Pride!5e1!3m2!1sen!2sin!4v1784539067038!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </>
  );
};

export default ContactSection;