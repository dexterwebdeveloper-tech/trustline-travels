// import React, { useState } from "react";
// import "./BookingForm.css";

// export default function BookingForm() {
//   const [form, setForm] = useState({
//     pickup: "",
//     drop: "",
//     date: "",
//     name: "",
//     vehicle: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const bookNow = () => {
//     const msg = `*Trustline Travels Booking*

// Name : ${form.name}

// Pickup : ${form.pickup}

// Drop : ${form.drop}

// Date & Time : ${form.date}

// Vehicle : ${form.vehicle}`;

//     window.open(
//       `https://wa.me/918087080034?text=${encodeURIComponent(msg)}`,
//       "_blank"
//     );
//   };
//   const getCurrentDateTime = () => {
//   const now = new Date();

//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");

//   return `${year}-${month}-${day}T${hours}:${minutes}`;
// };

//   return (
//     <section className="booking-section">

//     <div className="booking-container">


//         <h5>ONLINE BOOKING</h5>

//         <h2>Book Your Cab Now</h2>

//         <div className="booking-grid">
//  <div className="form-group">
//                 <label>Customer Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     onChange={handleChange}
//                 />
//             </div>
// <div className="form-group">
//     <label>Phone Number</label>
//     <input
//         type="tel"
//         name="phone"
//         placeholder="Enter Phone Number"
//         onChange={handleChange}
//     />
// </div>
//             <div className="form-group">
//                 <label>Pickup Location</label>
//                 <input
//                     type="text"
//                     name="pickup"
//                     placeholder="Enter Pickup Location"
//                     onChange={handleChange}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Drop Location</label>
//                 <input
//                     type="text"
//                     name="drop"
//                     placeholder="Enter Drop Location"
//                     onChange={handleChange}
//                 />
//             </div>
// <div className="form-group">
//   <label>Time & Date</label>
//   <input
//     type="datetime-local"
//     name="datetime"
//     min={getCurrentDateTime()}
//     onChange={handleChange}
//     required
//   />
// </div>

           
//             <div className="form-group">
//                 <label>Vehicle Type</label>

//                 <select name="vehicle" onChange={handleChange}>
//                     <option>Select Vehicle</option>
//                     <option>Sedan</option>
//                     <option>SUV</option>
//                     <option>Innova</option>
//                     <option>Tempo Traveller</option>
//                 </select>

//             </div>

//         </div>

//         <button className="book-btn" onClick={bookNow}>
//             Book via WhatsApp
//         </button>

//     </div>

// </section>
//   );
// }/


import React, { useState } from "react";
import "./BookingForm.css";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    datetime: "",
    vehicle: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getCurrentDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const bookNow = () => {
    const { name, phone, pickup, drop, datetime, vehicle } = form;

    // Check empty fields
    if (
      !name.trim() ||
      !phone.trim() ||
      !pickup.trim() ||
      !drop.trim() ||
      !datetime ||
      !vehicle
    ) {
      alert("Please fill all the required fields.");
      return;
    }

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const msg = `🚖 *Trustline Travels Booking*

👤 Customer Name: ${name}

📞 Phone Number: ${phone}

📍 Pickup Location: ${pickup}

📍 Drop Location: ${drop}

📅 Date & Time: ${datetime}

🚘 Vehicle Type: ${vehicle}`;

    window.open(
      `https://wa.me/918087080034?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section className="booking-section">
      <div className="booking-container">

        <h5>ONLINE BOOKING</h5>

        {/* <h2>Book Your Cab Now</h2> */}

        <div className="booking-grid">

          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Customer Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={form.phone}
              onChange={handleChange}
              maxLength={10}
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickup"
              placeholder="Enter Pickup Location"
              value={form.pickup}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Drop Location</label>
            <input
              type="text"
              name="drop"
              placeholder="Enter Drop Location"
              value={form.drop}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time & Date</label>
            <input
              type="datetime-local"
              name="datetime"
              value={form.datetime}
              min={getCurrentDateTime()}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Vehicle Type</label>
            <select
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              required
            >
              <option value="">Select Vehicle</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Innova">Innova</option>
              <option value="Tempo Traveller">Tempo Traveller</option>
            </select>
          </div>

        </div>

        <button className="book-btn" onClick={bookNow}>
          Book Now
        </button>

      </div>
    </section>
  );
}