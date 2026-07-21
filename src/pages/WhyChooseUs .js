// import React from "react";

// const features = [
//   {
//     icon: "/images/w-choose-icon/icon-1.png",
//     title: "Deals For Every Budget",
//     description:
//       "Incredible prices on every car, van, bike and package worldwide. Book vehicles at incredible prices.",
//   },
//   {
//     icon: "/images/w-choose-icon/icon-2.png",
//     title: "Flexible Pricing",
//     description:
//       "Customization, paving the way for unforgettable adventures and seamless mobility solutions.",
//   },
//   {
//     icon: "/images/w-choose-icon/icon-3.png",
//     title: "Quality At Minimum Expense",
//     description:
//       "Enjoy quality service at an affordable price without compromising on comfort or reliability.",
//   },
//   {
//     icon: "/images/w-choose-icon/icon-4.png",
//     title: "Free Pick-Up & Drop-Off",
//     description:
//       "Enjoy free pickup and drop-off services, adding an extra layer of convenience to your rental experience.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <div
//       className="section-full site-bg-white twm-w-chooseus-section-wrap wow fadeInDown"
//       data-wow-offset="100"
//       data-wow-delay="0.2"
//     >
//       <div className="container">
//         <div className="row twm-w-chooseus-section">
//           {/* Left Section */}
//           <div className="col-lg-5 col-md-12">
//             <div className="section-head left">
//               <div className="twm-sm-title left">Our Features</div>

//               <h2 className="twm-large-title site-text-dark">
//                 Why Choose Us?
//               </h2>

//               <div className="section-head-detail">
//                 Discover a world of convenience, safety, and customization,
//                 paving the way for unforgettable adventures and seamless
//                 mobility solutions.
//               </div>
//             </div>

//             <div className="twm-list-icon-style1">
//               <ul>
//                 {features.map((item, index) => (
//                   <li key={index}>
//                     <div className="twm-list-icon-style-bx">
//                       <div className="twm-icon-bx">
//                         <span>
//                           <img src={item.icon} alt={item.title} />
//                         </span>
//                       </div>

//                       <div className="twm-icon-bx-detail">
//                         <h3 className="twm-title">{item.title}</h3>
//                         <p>{item.description}</p>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="col-lg-7 col-md-12">
//             <div className="twm-w-chooseus-media">
//               <div className="twm-media">
//                 <img
//                   src="/images/need-h-pic.png"
//                   alt="Why Choose Us"
//                 />
//               </div>

//               <div className="twm-need-help-bx">
//                 <div className="twm-need-help-content">
//                   <span>Need any help?</span>
//                   <h3 className="twm-title">+71 202 102 2124</h3>
//                 </div>

//                 <div className="twm-need-help-icon">
//                   <img
//                     src="/images/24-clock.png"
//                     alt="24 Hours Support"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;



import React from "react";

const features = [
  {
    icon: "/images/w-choose-icon/icon-1.png",
    title: "Affordable Travel Packages",
    description:
      "Explore destinations with Trustline Travels through budget-friendly packages designed for comfortable and memorable journeys.",
  },
  {
    icon: "/images/w-choose-icon/icon-2.png",
    title: "Flexible Travel Solutions",
    description:
      "Choose customized travel plans, flexible bookings, and personalized services that match your travel needs.",
  },
  {
    icon: "/images/w-choose-icon/icon-3.png",
    title: "Safe & Reliable Service",
    description:
      "Travel with confidence with our well-maintained vehicles, experienced drivers, and trusted travel assistance.",
  },
  {
    icon: "/images/w-choose-icon/icon-4.png",
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always available to assist you before, during, and after your journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="section-full site-bg-white twm-w-chooseus-section-wrap wow fadeInDown"
      data-wow-offset="100"
      data-wow-delay="0.2"
    >
      <div className="container">
        <div className="row twm-w-chooseus-section">

          {/* Left Section */}
          <div className="col-lg-5 col-md-12">
            <div className="section-head left">
              <div className="twm-sm-title left">
                Our Services
              </div>

              <h2 className="twm-large-title site-text-dark">
                Why Choose Trustline Travels?
              </h2>

              <div className="section-head-detail">
                Experience hassle-free travel with Trustline Travels. 
                We provide safe, comfortable, and reliable transportation 
                solutions for business trips, family vacations, and special journeys.
              </div>
            </div>

            <div className="twm-list-icon-style1">
              <ul>
                {features.map((item, index) => (
                  <li key={index}>
                    <div className="twm-list-icon-style-bx">

                      <div className="twm-icon-bx">
                        <span>
                          <img src={item.icon} alt={item.title} />
                        </span>
                      </div>

                      <div className="twm-icon-bx-detail">
                        <h3 className="twm-title">
                          {item.title}
                        </h3>

                        <p>
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* Right Section */}
          <div className="col-lg-7 col-md-12">
            <div className="twm-w-chooseus-media">

              <div className="twm-media">
                <img
                  src="/images/tempo.png"
                  alt="Trustline Travels"
                />
              </div>


              <div className="twm-need-help-bx">

                <div className="twm-need-help-content">
                  <span>
                    Need Travel Assistance?
                  </span>

                  <h3 className="twm-title">
                    +91 8087080034
                  </h3>
                </div>


                <div className="twm-need-help-icon">
                  <img
                    src="/images/24-clock.png"
                    alt="24 Hours Support"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;