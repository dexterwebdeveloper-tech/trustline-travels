import React from "react";

const steps = [
  {
    number: "01",
    title: "Choose Your Destination",
    description:
      "Explore your favorite destinations with Trustline Travels and select the best travel packages designed for a safe, comfortable, and memorable journey.",
  },
  {
    number: "02",
    title: "Customize Your Trip",
    description:
      "Create your perfect travel plan with flexible options, personalized services, and packages that suit your budget, preferences, and requirements.",
  },
  {
    number: "03",
    title: "Confirm Your Booking",
    description:
      "Confirm your travel details easily with our support team and enjoy a smooth booking process with reliable service and complete assistance.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description:
      "Begin your journey with Trustline Travels and experience comfortable rides, professional support, and unforgettable travel moments.",
  },
];

const WorkingSteps = () => {
  return (
    <div
      className="section-full py-3 site-bg-white twm-w-steps-section-wrap wow fadeInDown"
      data-wow-offset="100"
      data-wow-delay="0.2"
      style={{
        backgroundImage: "url('/images/step-bg.png')",
      }}
    >
      <div className="container">

        {/* Section Title */}
        <div className="section-head center">
          <div className="twm-sm-title left">
            How It Works
          </div>

          <h2 className="twm-large-title site-text-dark">
            Simple Steps To Start Your Journey
          </h2>
        </div>


        {/* Steps */}
        <div className="section-content">
          <div className="row twm-w-steps-section">

            {steps.map((step, index) => (
              <div
                className="col-lg-3 col-md-6 m-b30"
                key={index}
              >
                <div className="twm-w-steps">

                  <div className="twm-w-step-count">
                    <span>{step.number}</span>
                  </div>


                  <div className="twm-w-step-detail">
                    <h3 className="twm-title">
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>


          {/* Bottom Travel Image */}
          {/* <div className="twm-adv-show">
            <img
              src="/images/adv-car.png"
              alt="Trustline Travels"
              className="img-fluid"
            />
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default WorkingSteps;