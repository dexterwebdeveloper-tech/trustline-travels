// import React from "react";

// const ExploreBrandsSection = () => {
//   return (
//     <div className="section-full twm-explore-section-wrap site-bg-primary">
//       <div className="container">
//         <div className="row">
//           {/* Left Section */}
//           <div className="col-xl-4 col-lg-12">
//             <div className="section-head left">
//               <div className="twm-sm-title left site-text-white">
//                 Car Brands
//               </div>
//               <h2 className="twm-large-title site-text-white">
//                 Explore Our Premium Brands
//               </h2>
//             </div>
//           </div>

//           {/* Center Image */}
//           <div className="col-xl-6 col-lg-12">
//             <div className="twm-mid-section-car">
//               <div className="twm-media">
//                 <img
//                   src="/images/explore-sec-image.png"
//                   alt="Explore Brands"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Button */}
//           <div className="col-xl-2 col-lg-12">
//             <div className="twm-mid-section-btn">
//               <a href="/cars-grid-4" className="site-button">
//                 <em>View All Brands</em>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreBrandsSection;

import React from "react";

const ExploreBrandsSection = () => {
  return (
    <div className="section-full twm-explore-section-wrap site-bg-primary">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-xl-4 col-lg-12">
            <div className="section-head left">
              <div className="twm-sm-title left site-text-white">
                Trustline Travels
              </div>
              <h2 className="twm-large-title site-text-white">
                Explore Our Premium
                <br />
                Travel Services
              </h2>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-xl-6 col-lg-12">
            <div className="twm-mid-section-car">
              <div className="twm-media">
                <img
                  src="/images/innova.png"
                  // src="/images/explore-sec-image.png"
                  alt="Trustline Travels"
                />
              </div>
            </div>
          </div>

          {/* Right Button */}
          <div className="col-xl-2 col-lg-12">
            <div className="twm-mid-section-btn">
              <a href="/service" className="site-button">
                <em>Explore Services</em>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreBrandsSection;