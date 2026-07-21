import React from "react";

const brandLogos = [
  "w1.png",
  "w2.png",
  "w3.png",
  "w4.png",
  "w5.png",
  "w6.png",
  "w1.png",
  "w2.png",
  "w3.png",
  "w5.png",
];

const ClientSlider = () => {
  return (
    <div className="twm-client-slider1-wrap site-bg-white">
      <div className="twm-client-slider1">
        <div className="owl-carousel home-client-carousel3 owl-btn-vertical-center">
          {brandLogos.map((logo, index) => (
            <div className="item" key={index}>
              <div className="ow-client-logo">
                <div className="client-logo client-logo-media">
                  <a href="/cars-grid-4">
                    <img
                      src={`/images/client-logo/dark/${logo}`}
                      alt={`Brand ${index + 1}`}
                    />
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

export default ClientSlider;