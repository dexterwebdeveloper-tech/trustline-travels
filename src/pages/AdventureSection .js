import React from "react";

const AdventureSection = () => {
  return (
    <div
      className="section-full py-3 site-bg-dark twm-step-towards-section-wrap wow fadeInDown"
      data-wow-offset="100"
      data-wow-delay="0.2"
    >
      <div
        className="twm-half-bg-pic"
        style={{ backgroundImage: "url('/images/half-bg-pic.jpg')" }}
      ></div>

      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="section-head left">
              <div className="twm-sm-title left">
                Travel With Confidence
              </div>
              <h2 className="twm-large-title text-white">
                Your Journey Begins With Trustline Travels
              </h2>
            </div>
          </div>
        </div>

        {/* Section Content */}
        <div className="section-content">
          <div className="row twm-step-towards-section">

            {/* Card 1 */}
            <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
              <div className="twm-icon-style-left large-set in-dark-area">
                <div className="twm-media">
                  <img
                    src="/images/icons/label.png"
                    alt="Affordable Travel Packages"
                  />
                </div>
                <div className="twm-content">
                  <h3 className="twm-title">
                    Affordable Travel Packages
                  </h3>
                  <p>
                    Discover budget-friendly travel packages designed for
                    families, groups, and business travelers without
                    compromising on comfort or quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
              <div className="twm-icon-style-left large-set in-dark-area">
                <div className="twm-media">
                  <img
                    src="/images/icons/customer-support.png"
                    alt="24/7 Customer Support"
                  />
                </div>
                <div className="twm-content">
                  <h3 className="twm-title">
                    24/7 Customer Support
                  </h3>
                  <p>
                    Our dedicated support team is available around the clock
                    to assist with bookings, itinerary changes, and travel
                    assistance whenever you need us.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-xl-4 col-lg-4 col-md-4 m-b30">
              <div className="twm-icon-style-left large-set in-dark-area">
                <div className="twm-media">
                  <img
                    src="/images/icons/parking-area.png"
                    alt="Safe & Comfortable Travel"
                  />
                </div>
                <div className="twm-content">
                  <h3 className="twm-title">
                    Safe & Comfortable Travel
                  </h3>
                  <p>
                    Travel with experienced drivers and well-maintained
                    vehicles, ensuring every journey is safe, reliable, and
                    comfortable from start to finish.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureSection;