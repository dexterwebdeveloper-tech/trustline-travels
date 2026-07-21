import React from "react";

const AboutSection = () => {
  return (
    <div
      className="section-full site-bg-white p-t150 p-b120 twm-abus-section-wrap wow fadeInDown"
      data-wow-offset="100"
      data-wow-delay="0.2"
    >
      <div className="container">
        <div className="row twm-abus-section">
          {/* Left Section */}
          <div className="col-lg-7 col-md-12">
            <div className="twm-abus-left">
              <div className="twm-media">
                <img src="/images/abus-pic.jpg" alt="About Us" />

                <div className="twm-abus-video">
                  <a
                    href="https://vimeo.com/337649532"
                    className="mfp-video"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon fa fa-play"></i>
                  </a>
                </div>

                <div className="twm-abus-year-section">
                  <div className="tem-abus-year-content">
                    <span>Since</span>
                    <h2 className="year-title">2016</h2>
                  </div>
                </div>
              </div>

              <div className="twm-media2">
                <img src="/images/car-pic1.png" alt="Car" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-5 col-md-12">
            <div className="section-head left aside-section">
              <div className="twm-sm-title left">About Us</div>

              <h2 className="twm-large-title site-text-dark">
                We Have Many Provided
                <br />
                Assistance To People And
                <br />
                Companies In This Field
              </h2>

              <div className="section-head-detail">
                I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will
                give you a complete account of the system, and expound the
                actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects,
                dislikes, or avoids pleasure itself, because it is
                pleasure.
              </div>
            </div>

            <div className="twm-inline-list2">
              <ul>
                <li>All Type Vehicle Available</li>
                <li>You Get 24/7 Roadside Assistance</li>
                <li>We Are The UK’s Largest Provider</li>
              </ul>
            </div>

            <div className="twm-btn-left">
              <a href="/about-us" className="site-button">
                <em>Read More</em>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;