import React from "react";
import "./Booking.css";

const vehicles = [
  {
    id: 1,
    name: "Swift Dzire",
    image: "/images/fleet/Swift-Dzire.jpg",
    seats: "4+1 Seats",
    luggage: "2 Bags",
    type: "Sedan",
    desc: "Comfortable sedan for airport transfers, city rides and business travel.",
  },
  {
    id: 2,
    name: "Maruti Ertiga",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "MPV",
    desc: "Ideal for family trips, airport transfers and outstation travel.",
  },
  {
    id: 3,
    name: "Toyota Rumion",
    image: "/images/fleet/Toyota-Rumion.jpg",
    seats: "6+1 Seats",
    luggage: "3 Bags",
    type: "Premium MPV",
    desc: "Luxury MPV for comfortable long-distance journeys.",
  },
  {
    id: 4,
    name: "Kia Carens",
    image: "/images/fleet/Kia-Carens.jpg",
    seats: "6+1 Seats",
    luggage: "4 Bags",
    type: "Luxury MPV",
    desc: "Premium family vehicle with spacious interiors.",
  },
  {
    id: 5,
    name: "Innova",
    image: "/images/fleet/Innova-Cab.jpg",
    seats: "7 Seats",
    luggage: "4 Bags",
    type: "SUV",
    desc: "Trusted vehicle for corporate and outstation travel.",
  },
  {
    id: 6,
    name: "Innova Crysta",
    image: "/images/fleet/Innova-Crysta.jpg",
    seats: "7 Seats",
    luggage: "5 Bags",
    type: "Premium SUV",
    desc: "Luxury chauffeur-driven SUV for premium travel experience.",
  },
  {
    id: 7,
    name: "Tempo Traveller",
    image: "/images/fleet/Tempo-Traveller.jpg",
    seats: "12-17 Seats",
    luggage: "10 Bags",
    type: "Traveller",
    desc: "Perfect for group tours, picnics and corporate outings.",
  },
  {
    id: 8,
    name: "Force Urbania",
    image: "/images/fleet/Urbania-Bus.jpg",
    seats: "17 Seats",
    luggage: "12 Bags",
    type: "Luxury Van",
    desc: "Executive luxury vehicle for group transportation.",
  },
  {
    id: 9,
    name: "Luxury Bus",
    image: "/images/fleet/bus.jpg",
    seats: "32-50 Seats",
    luggage: "Large",
    type: "Luxury Bus",
    desc: "Best choice for weddings, school trips and corporate events.",
  },
];

const Booking = () => {
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
              <h2 className="wt-title">Booking</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

   <section className="booking-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="booking-subtitle">
            TRUSTLINE TRAVELS
          </span>

          <h2 className="booking-title">
            Book Your Perfect Ride
          </h2>

          <p className="booking-text">
            Choose from our premium fleet for airport transfers,
            local travel and outstation trips.
          </p>
        </div>

        {vehicles.map((car, index) => (
          <div
            className={`booking-card row align-items-center ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
            key={car.id}
          >
            <div className="col-lg-5">
              <div className="booking-image">
                <img
                  src={car.image}
                  alt={car.name}
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-7">

              <span className="vehicle-type">
                {car.type}
              </span>

              <h3>{car.name}</h3>

              <p>{car.desc}</p>

              <div className="booking-features">

                <div>
                  <i className="fas fa-users"></i>
                  <span>{car.seats}</span>
                </div>

                <div>
                  <i className="fas fa-suitcase"></i>
                  <span>{car.luggage}</span>
                </div>

                <div>
                  <i className="fas fa-snowflake"></i>
                  <span>Air Conditioned</span>
                </div>

                <div>
                  <i className="fas fa-user-tie"></i>
                  <span>Professional Driver</span>
                </div>

                <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Local & Outstation</span>
                </div>

                <div>
                  <i className="fas fa-clock"></i>
                  <span>24×7 Available</span>
                </div>

              </div>

              <div className="booking-actions mt-4">

                <a
                  href={`https://wa.me/918087080034?text=Hi,%20I%20want%20to%20book%20${car.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success me-3"
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  Book {car.name}
                </a>

                <a
                  href="tel:+918087080034"
                  className="btn btn-outline-danger"
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

export default Booking;