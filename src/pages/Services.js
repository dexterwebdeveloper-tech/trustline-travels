import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Pune to Mumbai Cab",
    image: "/images/keyword/61.jpg",
    desc: "Enjoy a safe, comfortable and affordable Pune to Mumbai cab service with professional drivers and well-maintained vehicles.",
    features: ["One Way", "Round Trip", "24×7 Available"],
  },
  {
    id: 2,
    title: "Mumbai to Pune Cab",
    image: "/images/keyword/91.jpg",
    desc: "Book reliable Mumbai to Pune cab service for airport transfers, business travel and family trips.",
    features: ["Instant Booking", "AC Cars", "Fixed Fare"],
  },
  {
    id: 3,
    title: "Pune to Mumbai One Way Cab",
    image: "/images/keyword/32.jpg",
    desc: "Affordable one-way taxi service with transparent pricing and experienced chauffeurs.",
    features: ["No Hidden Charges", "Fast Booking", "Luxury Cars"],
  },
  {
    id: 4,
    title: "Mumbai to Pune One Way Cab",
    image: "/images/keyword/94.jpg",
    desc: "Travel comfortably with premium vehicles and on-time pickup service.",
    features: ["24×7", "Professional Driver", "Sanitized Cars"],
  },
  {
    id: 5,
    title: "Mumbai Airport to Pune Cab",
    image: "/images/keyword/92.jpg",
    desc: "Direct airport transfers with flight tracking and timely pickup.",
    features: ["Airport Pickup", "Meet & Greet", "Fixed Fare"],
  },
  {
    id: 6,
    title: "Pune to Mumbai Airport Cab",
    image: "/images/keyword/30.jpg",
    desc: "Reach Mumbai Airport on time with comfortable airport transfer service.",
    features: ["Luxury Cars", "Door Pickup", "24×7"],
  },
 {
  id: 7,
  title: "Bandra to Pune Cabs",
  image: "/images/keyword/96.jpg",
  desc: "Book reliable Bandra to Pune cab service with comfortable vehicles, professional chauffeurs and affordable one-way or round-trip fares for a smooth journey.",
  features: [
    "One Way",
    "Round Trip",
    "24×7 Available"
  ],
},

{
  id: 8,
  title: "Andheri to Pune Cabs",
  image: "/images/keyword/95.jpg",
  desc: "Travel from Andheri to Pune in clean, well-maintained AC cabs with fixed pricing, doorstep pickup and experienced drivers for a safe and comfortable ride.",
  features: [
    "Doorstep Pickup",
    "Fixed Fare",
    "Luxury Cars"
  ],
},

{
  id: 9,
  title: "Navi Mumbai to Pune Cab",
  image: "/images/keyword/101.jpg",
  desc: "Enjoy fast and affordable Navi Mumbai to Pune cab service with premium vehicles, on-time pickups and 24×7 booking support for business and leisure travel.",
  features: [
    "Airport Transfer",
    "Professional Driver",
    "Instant Booking"
  ],
},
];

const Services = () => {
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
              <h2 className="wt-title">Services</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section className="trust-services py-5">
      <div className="container">

        {/* <div className="text-center mb-5">
          <span className="service-tag">
            TRUSTLINE TRAVELS
          </span>

          <h2 className="service-title">
            Our Premium Cab Services
          </h2>

          <p className="service-subtitle">
            Comfortable, Reliable & Affordable Cab Services between
            Pune and Mumbai with professional drivers.
          </p>
        </div> */}

        {services.map((item, index) => (

          <div
            key={item.id}
            className={`service-box row align-items-center ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >

            <div className="col-lg-5">

              <div className="service-image">

                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                />

              </div>

            </div>

            <div className="col-lg-7">

              <span className="service-badge">
                Premium Service
              </span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="service-features">

                {item.features.map((feature, i) => (

                  <span key={i}>
                    <i className="fas fa-check-circle"></i>
                    {feature}
                  </span>

                ))}

              </div>

              <div className="service-buttons mt-4">

                <a
                  href={`https://wa.me/918087080034?text=Hi,%20I%20want%20to%20book%20${encodeURIComponent(
                    item.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger me-3"
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  Book Now
                </a>

                <a
                  href="tel:+918087080034"
                  className="btn btn-outline-primary"
                >
                  <i className="fas fa-phone-alt me-2"></i>
                  Call Now
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>
    </section>

</>
  );
};

export default Services;