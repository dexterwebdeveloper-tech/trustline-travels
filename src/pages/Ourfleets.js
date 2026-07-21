import React from "react";

// const cars = [
//   {
//     id: 1,
//     name: "Luxury Bus",
//     image: "/images/fleet/bus.jpg",
//     price: 6500,
//   },
//   {
//     id: 2,
//     name: "Innova Cab",
//     image: "/images/fleet/Innova-Cab.jpg",
//     price: 18,
//   },
//   {
//     id: 3,
//     name: "Innova Crysta",
//     image: "/images/fleet/Innova-Crysta.jpg",
//     price: 22,
//   },
//   {
//     id: 4,
//     name: "Kia Carens",
//     image: "/images/fleet/Kia-Carens.jpg",
//     price: 18,
//   },
//   {
//     id: 5,
//     name: "Maruti Ertiga",
//     image: "/images/fleet/Maruti-Ertiga.jpg",
//     price: 16,
//   },
//   {
//     id: 6,
//     name: "Swift Dzire",
//     image: "/images/fleet/Swift-Dzire.jpg",
//     price: 14,
//   },
//   {
//     id: 7,
//     name: "Tempo Traveller",
//     image: "/images/fleet/Tempo-Traveller.jpg",
//     price: 28,
//   },
//   {
//     id: 8,
//     name: "Toyota Rumion",
//     image: "/images/fleet/Toyota-Rumion.jpg",
//     price: 17,
//   },
//   {
//     id: 9,
//     name: "Urbania Bus",
//     image: "/images/fleet/Urbania-Bus.jpg",
//     price: 35,
//   },
// ];


const cars = [
  {
    id: 1,
    name: "Luxury Bus",
    image: "/images/fleet/bus.jpg",
    seats: "40-50 Seats",
    bags: "40 Bags",
    type: "Luxury Bus",
    fuel: "Diesel",
  },
  {
    id: 2,
    name: "Innova Cab",
    image: "/images/fleet/Innova-Cab.jpg",
    seats: "7 Seats",
    bags: "4 Bags",
    type: "SUV",
    fuel: "Diesel",
  },
  {
    id: 3,
    name: "Innova Crysta",
    image: "/images/fleet/Innova-Crysta.jpg",
    seats: "7 Seats",
    bags: "4 Bags",
    type: "SUV",
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Kia Carens",
    image: "/images/fleet/Kia-Carens.jpg",
    seats: "6 Seats",
    bags: "3 Bags",
    type: "MUV",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Maruti Ertiga",
    image: "/images/fleet/Maruti-Ertiga.jpg",
    seats: "7 Seats",
    bags: "3 Bags",
    type: "MUV",
    fuel: "CNG",
  },
  {
    id: 6,
    name: "Swift Dzire",
    image: "/images/fleet/Swift-Dzire.jpg",
    seats: "4 Seats",
    bags: "2 Bags",
    type: "Sedan",
    fuel: "Petrol",
  },
  {
    id: 7,
    name: "Tempo Traveller",
    image: "/images/fleet/Tempo-Traveller.jpg",
    seats: "17 Seats",
    bags: "10 Bags",
    type: "Traveller",
    fuel: "Diesel",
  },
  {
    id: 8,
    name: "Toyota Rumion",
    image: "/images/fleet/Toyota-Rumion.jpg",
    seats: "7 Seats",
    bags: "3 Bags",
    type: "MUV",
    fuel: "Petrol",
  },
  {
    id: 9,
    name: "Urbania Bus",
    image: "/images/fleet/Urbania-Bus.jpg",
    seats: "17 Seats",
    bags: "12 Bags",
    type: "Luxury Van",
    fuel: "Diesel",
  },
];

const Ourfleets = () => {
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
              <h2 className="wt-title">Our Fleets</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  

    <div className="section-full p-t150 p-b120 site-bg-white twm-cars-section-wrap">
      <div className="container">
        <div className="section-content">
          <div className="twm-cars-section m-b30">
            <div className="row">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="col-lg-4 col-md-6 m-b30 wow fadeInDown"
                  data-wow-delay="0.2s"
                >
                  <div className="twm-vehicle-fleet-bx twm-custom-grid-3">
                    <div className="twm-media">
                      <div className="twm-media-pic">
                        <img src={car.image} alt={car.name} />
                      </div>

                
                    </div>

                    {/* <div className="twm-vehicle-fleet-content">
                      <h3 className="twm-v-title text-center">
                        <a>{car.name}</a>
                      </h3>

                      <ul className="twm-vehicle-facility">
                        <li>
                          <span>
                            <img
                              src="images/icons/car-seat.svg"
                              alt="Seat"
                            />
                          </span>
                          4 Seat
                        </li>

                        <li>
                          <span>
                            <img
                              src="images/icons/bag.svg"
                              alt="Bag"
                            />
                          </span>
                          4 Bags
                        </li>

                        <li>
                          <span>
                            <img
                              src="images/icons/car.svg"
                              alt="SUV"
                            />
                          </span>
                          SUV
                        </li>
                      </ul>

                      <ul className="twm-vehicle-fuel-type">
                        <li>Petrol</li>
                        <li>
                          <del>Diesel</del>
                        </li>
                        <li>
                          <del>Electric</del>
                        </li>
                      </ul>
                    </div> */}

             <div className="twm-vehicle-fleet-content">

    <h3 className="fleet-title">
        {car.name}
    </h3>

    <div className="fleet-info">

        <div className="fleet-item">
            <i className="fa-solid fa-chair"></i>
            <span>{car.seats}</span>
        </div>

        <div className="fleet-item">
            <i className="fa-solid fa-suitcase"></i>
            <span>{car.bags}</span>
        </div>

        <div className="fleet-item">
            <i className="fa-solid fa-car-side"></i>
            <span>{car.type}</span>
        </div>

        <div className="fleet-item">
            <i className="fa-solid fa-gas-pump"></i>
            <span>{car.fuel}</span>
        </div>

    </div>

    <a href="/booking" className="fleet-btn">
        Book Now
        <i className="fa-solid fa-arrow-right"></i>
    </a>

</div>
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ourfleets;