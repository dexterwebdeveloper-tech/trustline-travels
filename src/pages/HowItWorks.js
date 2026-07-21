import React from "react";

const HowItWorks = () => {
  return (
    <div
      className="section-full site-bg-light twm-how-it-work-wrap wow fadeInDown"
      data-wow-offset="100"
      data-wow-delay="0.2"
    >
      <div className="section-content">
        <div className="twm-how-it-work-section container-fluid">
          <div className="row">

            {/* Left Image */}
            <div className="col-lg-6 col-md-12">
              <div className="twm-how-it-work-media">
                <img
                  src="/images/howw.png"
                  alt="Trustline Travels Process"
                  className="img-fluid"
                />
              </div>
            </div>


            {/* Right Content */}
            <div className="col-lg-6 col-md-12">
              <div className="twm-how-it-work-content">

                {/* Title */}
                <div className="section-head left">
                  <div className="twm-sm-title left">
                    How It Works
                  </div>

                  <h2 className="twm-large-title site-text-dark">
                    Your Journey With Trustline Travels
                  </h2>
                </div>


                <div className="row">

                  {/* Step 1 */}
                  <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                    <div className="twm-w-steps-st2">
                      <div className="twm-w-step-count">
                        <span>01</span>
                      </div>

                      <div className="twm-w-step-detail">
                        <h3 className="twm-title">
                          Choose Your Destination
                        </h3>

                        <p>
                          Select your preferred destination and travel package
                          with our wide range of travel options.
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Step 2 */}
                  <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                    <div className="twm-w-steps-st2">
                      <div className="twm-w-step-count">
                        <span>02</span>
                      </div>

                      <div className="twm-w-step-detail">
                        <h3 className="twm-title">
                          Plan Your Trip
                        </h3>

                        <p>
                          Customize your travel plan with comfortable
                          transportation and personalized services.
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Step 3 */}
                  <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                    <div className="twm-w-steps-st2">
                      <div className="twm-w-step-count">
                        <span>03</span>
                      </div>

                      <div className="twm-w-step-detail">
                        <h3 className="twm-title">
                          Confirm Booking
                        </h3>

                        <p>
                          Confirm your travel details and enjoy a smooth,
                          hassle-free booking experience.
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Step 4 */}
                  <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                    <div className="twm-w-steps-st2">
                      <div className="twm-w-step-count">
                        <span>04</span>
                      </div>

                      <div className="twm-w-step-detail">
                        <h3 className="twm-title">
                          Enjoy Your Journey
                        </h3>

                        <p>
                          Travel safely and comfortably with Trustline Travels
                          and create unforgettable memories.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* End Right Content */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;