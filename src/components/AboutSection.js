import React from "react";
import HowItWorks from "../pages/HowItWorks";
import Testimonialabout from "../pages/Testimonialabout";

const AboutSection = () => {
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
              <h2 className="wt-title">About us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div
      className="section-full site-bg-light twm-abus-section-wrap wow fadeInDown pt-3"
      data-wow-offset="100"
      data-wow-delay="0.2"
    >
      <div className="row">
        {/* Left Content */}
        <div className="col-lg-6 col-md-12">
          <div className="twm-abus-st2-section">
            {/* Title */}
           <div className="section-head left">
  <div className="twm-sm-title left">About Trustline Travels</div>

  <h2 className="twm-large-title site-text-dark">
    Travel with Trustline Travels
  </h2>

  <div className="section-head-detail">
    Trustline Travels is one of the leading cab service providers for Pune to
    Mumbai and Mumbai to Pune travel. We are committed to providing safe,
    reliable, and affordable taxi services for individuals, families,
    corporate clients, and tourists. Whether you need a one-way cab,
    round-trip taxi, airport transfer, or customized travel package, our
    professional drivers and well-maintained vehicles ensure a smooth and
    comfortable journey every time.

    <br /><br />

    Our services are available 24×7, making it easy for customers to book a
    cab anytime. We focus on punctuality, transparent pricing, customer
    satisfaction, and a hassle-free travel experience. From business trips to
    family vacations, Trustline Travels is your trusted travel partner for
    every journey between Pune and Mumbai.
  </div>
</div>

            {/* Features List */}
  <div className="twm-inline-list2">
  <ul>
    <li>
      <i className="fa fa-check"></i>
      24×7 Pune to Mumbai & Mumbai to Pune Cab Service
    </li>

    <li>
      <i className="fa fa-check"></i>
      One-Way, Round Trip & Airport Transfers
    </li>

    <li>
      <i className="fa fa-check"></i>
      Professional & Verified Drivers
    </li>

    <li>
      <i className="fa fa-check"></i>
      Clean, Sanitized & Well-Maintained Vehicles
    </li>

    <li>
      <i className="fa fa-check"></i>
      Affordable & Transparent Pricing
    </li>

    <li>
      <i className="fa fa-check"></i>
      Online & Phone Booking Available
    </li>

    <li>
      <i className="fa fa-check"></i>
      Corporate & Family Travel Solutions
    </li>

    <li>
      <i className="fa fa-check"></i>
      Door-to-Door Pickup & Drop Service
    </li>
  </ul>
</div>

           
          
          </div>
        </div>

        {/* Right Image */}
        <div
          className="col-lg-6 col-md-12 twm-abus2right-pic"
          // style={{
          //   backgroundImage: "url('/images/ab-us.jpg')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <img src="/images/About.png"/>
          <div className="abus2-right-pic">
            {/* <h2 className="twm-title">For Rental</h2> */}
          </div>
        </div>
      </div>
    </div>
    <HowItWorks/>
    <Testimonialabout/>
  </>
  );
};

export default AboutSection;