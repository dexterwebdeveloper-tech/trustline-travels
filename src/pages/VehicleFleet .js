// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const vehicles = [
//   {
//     name: "Jeep Renegade",
//     price: "$800",
//     image: "/images/vehicle-2/pic1.png",
//   },
//   {
//     name: "Ferrari Enzo",
//     price: "$700",
//     image: "/images/vehicle-2/pic2.png",
//   },
//   {
//     name: "Mini Cooper",
//     price: "$900",
//     image: "/images/vehicle-2/pic3.png",
//   },
//   {
//     name: "Rolls Royce Cullinan",
//     price: "$500",
//     image: "/images/vehicle-2/pic4.png",
//   },
//   {
//     name: "Porsche 911",
//     price: "$800",
//     image: "/images/vehicle-2/pic5.png",
//   },
//   {
//     name: "Chevrolet Coupe",
//     price: "$800",
//     image: "/images/vehicle-2/pic6.png",
//   },
//   {
//     name: "Ford White SUV",
//     price: "$800",
//     image: "/images/vehicle-2/pic7.png",
//   },
//   {
//     name: "Toyota Crew Cab",
//     price: "$800",
//     image: "/images/vehicle-2/pic8.png",
//   },
// ];

// const VehicleFleet = () => {
//   return (
//     <div
//       className="section-full p-t150 p-b120 site-bg-white twm-blog-section-wrap"
//       data-wow-offset="100"
//       data-wow-delay="0.2"
//     >
//       <div className="container-fluid">
//         {/* Title */}
//         <div className="section-head center">
//           <div className="twm-sm-title left">Choose your car</div>
//           <h2 className="twm-large-title site-text-dark">
//             Our Vehicle Fleet
//           </h2>
//         </div>

//         {/* Swiper */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           spaceBetween={30}
//           slidesPerView={3}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             576: {
//               slidesPerView: 2,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             992: {
//               slidesPerView: 3,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {vehicles.map((car, index) => (
//             <SwiperSlide key={index}>
//               <div className="twm-vehicle-fleet-bx">
//                 <div className="twm-media">
//                   <div className="twm-media-pic">
//                     <img src={car.image} alt={car.name} />
//                   </div>

//                   <div className="twm-price-section">
//                     <div className="v-price">{car.price}</div>
//                     <div className="v-duration">/ Day</div>

//                     <a href="/cars-detail" className="v-detail">
//                       <em>Detail</em>
//                     </a>
//                   </div>
//                 </div>

//                 <div className="twm-vehicle-fleet-content">
//                   <h3 className="twm-v-title">
//                     <a href="/cars-detail">{car.name}</a>
//                   </h3>

//                   <ul className="twm-vehicle-facility">
//                     <li>
//                       <span>
//                         <img
//                           src="/images/icons/car-seat.png"
//                           alt="Seat"
//                         />
//                       </span>
//                       4 Seat
//                     </li>

//                     <li>
//                       <span>
//                         <img
//                           src="/images/icons/bag.png"
//                           alt="Bag"
//                         />
//                       </span>
//                       4 Bags
//                     </li>

//                     <li>
//                       <span>
//                         <img
//                           src="/images/icons/car.png"
//                           alt="Car"
//                         />
//                       </span>
//                       SUV
//                     </li>
//                   </ul>

//                   <ul className="twm-vehicle-fuel-type">
//                     <li>Petrol</li>
//                     <li>
//                       <del>Diesel</del>
//                     </li>
//                     <li>
//                       <del>Electric</del>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default VehicleFleet;



import React from "react";
// import "./VehicleFleet.css";
const vehicles = [
  // {
  //   name: "Toyota Innova Cab",
  //   image: "/images/fleet/Innova-Cab.jpg",
  //   seats: "7 Seats",
  //   luggage: "4 Bags",
  //   type: "Cab",
  //   fuel: "Diesel",
  // },
  {
    name: "Toyota Innova Crysta",
    image: "/images/fleet/Innova-Crysta.jpg",
    seats: "7 Seats",
    luggage: "5 Bags",
    type: "SUV",
    fuel: "Diesel",
  },
  {
    name: "Kia Carens",
    image: "/images/fleet/Kia-Carens.jpg",
    seats: "6/7 Seats",
    luggage: "4 Bags",
    type: "MUV",
    fuel: "Petrol / Diesel",
  },
  // {
  //   name: "Maruti Ertiga",
  //   image: "/images/fleet/Maruti-Ertiga.jpg",
  //   seats: "7 Seats",
  //   luggage: "3 Bags",
  //   type: "MUV",
  //   fuel: "Petrol / CNG",
  // },
  // {
  //   name: "Maruti Swift Dzire",
  //   image: "/images/fleet/Swift-Dzire.jpg",
  //   seats: "4 Seats",
  //   luggage: "2 Bags",
  //   type: "Sedan",
  //   fuel: "Petrol / CNG",
  // },
  {
    name: "Tempo Traveller",
    image: "/images/fleet/Tempo-Traveller.jpg",
    seats: "12-17 Seats",
    luggage: "10 Bags",
    type: "Traveller",
    fuel: "Diesel",
  },
  {
    name: "Toyota Rumion",
    image: "/images/fleet/Toyota-Rumion.jpg",
    seats: "7 Seats",
    luggage: "4 Bags",
    type: "MPV",
    fuel: "Petrol / CNG",
  },
  {
    name: "Force Urbania",
    image: "/images/fleet/Urbania-Bus.jpg",
    seats: "10-17 Seats",
    luggage: "12 Bags",
    type: "Luxury Van",
    fuel: "Diesel",
  },
  {
    name: "Luxury Bus",
    image: "/images/fleet/bus.jpg",
    seats: "35-50 Seats",
    luggage: "40 Bags",
    type: "Bus",
    fuel: "Diesel",
  },
];

const VehicleFleet = () => {
  return (
    <div className="section-full py-3 site-bg-white">
      <div className="container">

        {/* Heading */}
        <div className="section-head center">
          <div className="twm-sm-title">
            Our Fleets
          </div>

          <h2 className="twm-large-title site-text-dark">
            Explore Our Premium Vehicles
          </h2>
        </div>

        {/* Vehicles */}
        <div className="row">
          {vehicles.map((vehicle, index) => (
            <div className="col-12 col-md-4 mb-4 text-center" key={index}>
              <div className="twm-vehicle-fleet-bx h-100 shadow-sm">

                <div className="twm-media">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "contain",
                      background: "#fff",
                    }}
                  />
                </div>

                <div className="twm-vehicle-fleet-content p-3">

                  <h3 className="twm-v-title mb-3">
                    {vehicle.name}
                  </h3>

                  <ul className="twm-vehicle-facility list-unstyled">

                    <li className="mb-2">
                      <span>
                        <img
                          src="/images/icons/car-seat.png"
                          alt=""
                          width="20"
                        />
                      </span>{" "}
                      {vehicle.seats}
                    </li>

                    <li className="mb-2">
                      <span>
                        <img
                          src="/images/icons/bag.png"
                          alt=""
                          width="20"
                        />
                      </span>{" "}
                      {vehicle.luggage}
                    </li>

                    <li className="mb-2">
                      <span>
                        <img
                          src="/images/icons/car.png"
                          alt=""
                          width="20"
                        />
                      </span>{" "}
                      {vehicle.type}
                    </li>

                  </ul>

                  <div className="mt-3">
                    <span className="badge bg-dark">
                      {vehicle.fuel}
                    </span>
                  </div>

                 <a
  href="/booking"
  className="fleet-book-btn mt-4 d-inline-block "
>
  <em>Book Now</em>
</a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VehicleFleet;