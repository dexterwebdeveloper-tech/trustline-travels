import React from "react";


const PuneMumbaiCab = () => {
  return (
<>


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
              <h2 className="wt-title">Pune ⇄ Mumbai</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="pm-route-section">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">

            <span className="route-tag">
              TRUSTLINE TRAVELS
            </span>

            <h2>
              Pune <span>⇄</span> Mumbai <br />
              Premium Cab Service
            </h2>

            <p>
              Book safe, affordable and comfortable Pune to Mumbai &
              Mumbai to Pune cab service with experienced drivers.
              Enjoy one-way, round trip and airport transfers at the
              best price.
            </p>

            <div className="route-feature">

              <div>
                <i className="fas fa-check-circle"></i>
                One Way Cab
              </div>

              <div>
                <i className="fas fa-check-circle"></i>
                Round Trip
              </div>

              <div>
                <i className="fas fa-check-circle"></i>
                Airport Pickup
              </div>

              <div>
                <i className="fas fa-check-circle"></i>
                24×7 Service
              </div>

            </div>

            <div className="route-buttons">

              <a href="/booking" className="book-btn">
                Book Now
              </a>

              <a href="tel:+918087080034" className="call-btn">
                Call Now
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6">

            <div className="route-card">

              <img
                src="/images/keyword/29.jpg"
                alt="Pune Mumbai Cab"
                className="img-fluid"
              />

              {/* <div className="price-box">

                <div className="route-header">

                  <h4>Pune ⇄ Mumbai</h4>

                  <span>24×7 Available</span>

                </div>

                <div className="price-list">

                  <div className="price-item">

                    <span>🚗 Sedan</span>

                    <strong>₹2,999*</strong>

                  </div>

                  <div className="price-item">

                    <span>🚙 Ertiga</span>

                    <strong>₹3,999*</strong>

                  </div>

                  <div className="price-item">

                    <span>🚘 Innova</span>

                    <strong>₹4,999*</strong>

                  </div>

                  <div className="price-item">

                    <span>✨ Innova Crysta</span>

                    <strong>₹5,999*</strong>

                  </div>

                </div>

                <div className="route-footer">

                  <div>

                    <small>Distance</small>

                    <h6>160 KM</h6>

                  </div>

                  <div>

                    <small>Duration</small>

                    <h6>3.5 Hours</h6>

                  </div>

                </div>

              </div> */}

            </div>

          </div>

        </div>

      </div>
    </div>
</>
  );
};

export default PuneMumbaiCab;