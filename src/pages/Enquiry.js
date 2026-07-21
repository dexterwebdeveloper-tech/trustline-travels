import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    vehicle: "",
    pickup: "",
    drop: "",
    triptype: "One Way",
    date: "",
    time: "",
    passengers: "1",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const data = new FormData();

    data.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
    data.append("subject", "New Trustline Travels Enquiry");

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();

    if (result.success) {
      setStatus("success");

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        vehicle: "",
        pickup: "",
        drop: "",
        triptype: "One Way",
        date: "",
        time: "",
        passengers: "1",
        message: "",
      });

    } else {
      setStatus("error");
    }

    setLoading(false);
  };

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
              <h2 className="wt-title">Enquiry</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section className="enquiry-section py-5">

      <div className="container">

        <div className="enquiry-box">

          <div className="text-center mb-5">

            <span className="small-title">
              TRUSTLINE TRAVELS
            </span>

            <h2>
              Get Your Instant Cab Quote
            </h2>

            <p>
              Fill the enquiry form and our team will contact you
              shortly with the best fare.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-lg-6 mb-4">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-lg-6 mb-4">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-lg-6 mb-4">

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-lg-6 mb-4">

                <select
                  className="form-select"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Vehicle</option>
                  <option>Swift Dzire</option>
                  <option>Maruti Ertiga</option>
                  <option>Toyota Rumion</option>
                  <option>Kia Carens</option>
                  <option>Innova</option>
                  <option>Innova Crysta</option>
                  <option>Tempo Traveller</option>
                  <option>Force Urbania</option>
                  <option>Luxury Bus</option>
                </select>

              </div>
                            <div className="col-lg-6 mb-4">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Pickup Location"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-lg-6 mb-4">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Drop Location"
                  name="drop"
                  value={formData.drop}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-lg-6 mb-4">

                <select
                  className="form-select"
                  name="triptype"
                  value={formData.triptype}
                  onChange={handleChange}
                >
                  <option>One Way</option>
                  <option>Round Trip</option>
                  <option>Airport Transfer</option>
                  <option>Local</option>
                  <option>Corporate</option>
                </select>

              </div>

              <div className="col-lg-6 mb-4">

                <select
                  className="form-select"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6 Passengers</option>
                  <option value="7">7 Passengers</option>
                  <option value="8+">8+ Passengers</option>
                </select>

              </div>

              <div className="col-lg-6 mb-4">
  <input
    type="date"
    className="form-control"
    name="date"
    value={formData.date}
    onChange={handleChange}
    min={new Date().toISOString().split("T")[0]}
    required
  />
</div>

              <div className="col-lg-6 mb-4">

                <input
                  type="time"
                  className="form-control"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />

              </div>

              <div className="col-12 mb-4">

                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Additional Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>

              <div className="col-12 text-center">

                <button
                  type="submit"
                  className="btn btn-danger px-5 py-3 rounded-pill fw-bold"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane me-2"></i>
                      Get Instant Quote
                    </>
                  )}
                </button>

              </div>

              <div className="col-12 mt-4 text-center">

                {status === "success" && (
                  <div className="alert alert-success rounded-4">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you! Your enquiry has been submitted successfully.
                    Our team will contact you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div className="alert alert-danger rounded-4">
                    <i className="fas fa-times-circle me-2"></i>
                    Something went wrong. Please try again.
                  </div>
                )}

              </div>

            </div>

          </form>

        </div>

      </div>

    </section>

</>
  );
};

export default Enquiry;