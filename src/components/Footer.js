import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer footer-four pt-4">
      {/* Footer Top */}
      <div className="footer-top aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            {/* Footer Contact */}
       <div className="col-lg-3">
  <div className="footer-contact footer-widget">
    <div className="footer-logo mb-3">
      <img src="/images/logo.jpg" className="img-fluid aos" alt="logo" />
    </div>

    <div className="footer-contact-info">
      <p className="text-white">
        We offer a complete range of travel services including local cabs, outstation journeys, airport transfers, corporate travel, and customized packages for every travel need.
      </p>

      {/* Phone */}
      <p className="d-flex align-items-center mb-2">
        <i className="fas fa-phone-alt me-2" style={{ color: "#CF191F" }}></i>
        <a href="tel:+918087080034 " style={{ color: "#fff", textDecoration: "none" }}>+91 8087080034 </a>
      </p>
   <p className="d-flex align-items-center mb-2">
        <i className="fas fa-phone-alt me-2" style={{ color: "#CF191F" }}></i>
        <a href="tel:+919421185217 " style={{ color: "#fff", textDecoration: "none" }}>+91 9421185217 </a>
      </p>
      {/* Address */}
      <p className="d-fle align-items-start text-white">
        
        <h6><i className="fas fa-map-marker-alt me-2 mt-1 " style={{ color: "#CF191F" }}></i>Trustline Travels</h6>
        Office No 3 ,Shive Pride, Lane No 14, Swami Samarth Nagar, Sathe Nagar, Lohegaon, Pune, Maharashtra-411047

      </p>



      
    </div>

    {/* App Icons */}
    {/* <div className="d-flex align-items-center gap-2 my-3 app-icon">
      <a href="javascript:void(0);">
        <img src="/img/icons/gpay.svg" className="img-fluid" alt="GPay" />
      </a>
      <a href="javascript:void(0);">
        <img src="/img/icons/app.svg" className="img-fluid" alt="App" />
      </a>
    </div> */}



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.312616842194!2d73.9153899!3d18.6040642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6bfd5524791%3A0xfbf3c0e22f3b3da6!2sShiv%20Pride!5e1!3m2!1sen!2sin!4v1783910452248!5m2!1sen!2sin" width="100%" height="250"   allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

    <li className="d-flex gap-3">
              <a href="https://www.instagram.com/trustlinetravels/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram text-white"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61591790897396" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f text-white"></i>
              </a>

              <a href="https://x.com/trustlinetravel" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-white"></i>
              </a>

               <a href="https://in.pinterest.com/trustlinetravel33/" target="_blank" rel="noreferrer">
                <i className="fab fa-pinterest-p text-white"></i>
              </a>
            </li>
  </div>
</div>

            {/* Footer Menus */}
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Our Services</h5>
                    <ul>
            

<li><Link to="/Pune-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Cabs</Link></li>
<li><Link to="/Pune-to-Mumbai-Airport-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Airport Cab</Link></li>
<li><Link to="/Pune-to-Mumbai-International-Airport-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai International Airport Cab</Link></li>
<li><Link to="/Pune-to-Mumbai-One-Way-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai One Way Cab</Link></li>
<li><Link to="/Pune-Mumbai-Car-Hire"><i className="fa fa-car darkcolor"></i> Pune Mumbai Car Hire</Link></li>
<li><Link to="/Pune-to-Mumbai-Taxi-Fare"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Taxi Fare</Link></li>
<li><Link to="/Pune-to-Mumbai-Online-Cab-Booking"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Online Cab Booking</Link></li>
<li><Link to="/Pimpri-Chinchwad-to-Mumbai-Cab"><i className="fa fa-car darkcolor"></i> Pimpri Chinchwad to Mumbai Cab</Link></li>
<li><Link to="/Baner-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Baner to Mumbai Cabs</Link></li>
<li><Link to="/Hinjewadi-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Hinjewadi to Mumbai Cabs</Link></li>
<li><Link to="/Pimple-Saudagar-to-Mumbai-Cab-Service"><i className="fa fa-car darkcolor"></i> Pimple Saudagar to Mumbai Cab Service</Link></li>
<li><Link to="/Wakad-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Wakad to Mumbai Cabs</Link></li>
<li><Link to="/Hadapsar-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Hadapsar to Mumbai Cabs</Link></li>
<li><Link to="/Kalyani-Nagar-to-Mumbai-Taxi"><i className="fa fa-car darkcolor"></i> Kalyani Nagar to Mumbai Taxi</Link></li>
<li><Link to="/Koregaon-Park-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Koregaon Park to Mumbai Cabs</Link></li>
<li><Link to="/Kothrud-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Kothrud to Mumbai Cabs</Link></li>
<li><Link to="/Kharadi-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Kharadi to Mumbai Cabs</Link></li>
<li><Link to="/Shivajinagar-to-Mumbai-Cabs"><i className="fa fa-car darkcolor"></i> Shivajinagar to Mumbai Cabs</Link></li>
<li><Link to="/Pune-to-Mumbai-Ertiga-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Ertiga Cab</Link></li>
<li><Link to="/Pune-to-Mumbai-Innova-Crysta-Cabs" ><i className="fa fa-car darkcolor"></i> Pune to Mumbai Innova Crysta Cabs</Link></li>
<li><Link to="/Pune-to-Mumbai-Sedan-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Sedan Cab</Link></li>
<li><Link to="/Kondhwa-to-Mumbai-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Kondhwa to Mumbai Cabs</Link></li>
<li><Link to="/Viman-Nagar-to-Mumbai-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Viman Nagar to Mumbai Cabs</Link></li>
<li><Link to="/Katraj-to-Mumbai-Cab-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Katraj to Mumbai Cab Service</Link></li>
<li><Link to="/Pune-Station-to-Mumbai-Cabs-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Pune Station to Mumbai Cabs Service</Link></li>
<li><Link to="/Boat-Club-Road-to-Mumbai-Cabs" className="d-none" ><i className="fa fa-car darkcolor"></i> Boat Club Road to Mumbai Cabs</Link></li>
<li><Link to="/Vishrantwadi-to-Mumbai-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Vishrantwadi to Mumbai Cabs</Link></li>
<li><Link to="/Alandi-to-Mumbai-Cabs-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Alandi to Mumbai Cabs Service</Link></li>
<li><Link to="/Wagholi-to-Mumbai-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Wagholi to Mumbai Cabs</Link></li>
<li><Link to="/Cab-Service-in-Pimpri-Chinchwad" className="d-none"><i className="fa fa-car darkcolor"></i> Cab Service in Pimpri Chinchwad</Link></li>
<li><Link to="/Cheapest-Cab-Service-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Cheapest Cab Service in Pune</Link></li>
<li><Link to="/Best-Cab-Service-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Best Cab Service in Pune</Link></li>
<li><Link to="/Pune-to-Mumbai-Round-Trip-Cab-Fare" className="d-none"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Round Trip Cab Fare</Link></li>
<li><Link to="/Pune-to-Mumbai-Cab-Booking" className="d-none"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Cab Booking</Link></li>
<li><Link to="/Book-Cab-from-Pune-to-Mumbai" className="d-none"><i className="fa fa-car darkcolor"></i> Book Cab from Pune to Mumbai</Link></li>
<li><Link to="/Pune-to-Navi-Mumbai-Airport-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Pune to Navi Mumbai Airport Cab</Link></li>
<li><Link to="/Pune-to-Navi-Mumbai-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Pune to Navi Mumbai Cab</Link></li>
<li><Link to="/Pune-to-Navi-Mumbai-Innova-Crysta" className="d-none"><i className="fa fa-car darkcolor"></i> Pune to Navi Mumbai Innova Crysta</Link></li>


                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Our Services</h5>
  <ul>
{/* <li><Link to="/Pune-to-Mumbai-Ertiga-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Ertiga Cab</Link></li> */}
<li><Link to="/Pune-to-Mumbai-Airport-Drop-Innova"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Airport Drop Innova</Link></li>
<li><Link to="/Pune-to-Panvel-Cabs"><i className="fa fa-car darkcolor"></i> Pune to Panvel Cabs</Link></li>
<li><Link to="/Pune-Mulund-Cab-Service"><i className="fa fa-car darkcolor"></i> Pune Mulund Cab Service</Link></li>
<li><Link to="/Pune-to-Mumbai-Darshan-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Darshan Cab</Link></li>
<li><Link to="/Pune-to-Mumbai-Darshan-Package"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Darshan Package</Link></li>
<li><Link to="/Pune-to-Dadar-Cab"><i className="fa fa-car darkcolor"></i> Pune to Dadar Cab</Link></li>
<li><Link to="/Pune-to-Bandra-Cab"><i className="fa fa-car darkcolor"></i> Pune to Bandra Cab</Link></li>
<li><Link to="/Pune-to-Vasai-Virar-Cab"><i className="fa fa-car darkcolor"></i> Pune to Vasai & Virar Cab</Link></li>
<li><Link to="/Pune-to-Powai-Cab"><i className="fa fa-car darkcolor"></i> Pune to Powai Cab</Link></li>
<li><Link to="/Pune-Mumbai-Taxi-Service"><i className="fa fa-car darkcolor"></i> Pune Mumbai Taxi Service</Link></li>
<li><Link to="/One-Way-Cab-Pune-to-Mumbai"><i className="fa fa-car darkcolor"></i> One Way Cab Pune to Mumbai</Link></li>
<li><Link to="/Pune-to-Mira-Road-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mira Road Cab</Link></li>
<li><Link to="/Pune-to-Mumbai-Airport-Return-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Airport Return Cab</Link></li>
<li><Link to="/Pune-to-Borivali-Cab"><i className="fa fa-car darkcolor"></i> Pune to Borivali Cab</Link></li>
<li><Link to="/Pune-to-Kalyan-Cab"><i className="fa fa-car darkcolor"></i> Pune to Kalyan Cab</Link></li>
<li><Link to="/Taxi-From-Pune-to-Mumbai-Airport"><i className="fa fa-car darkcolor"></i> Taxi From Pune to Mumbai Airport</Link></li>
<li><Link to="/Pune-to-Mumbai-Airport-Innova-Crysta"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Airport Innova Crysta</Link></li>
{/* <li><Link to="/Pune-to-Mumbai-Airport-Drop-Innova"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Airport Drop Innova</Link></li> */}
<li><Link to="/Pune-to-Mumbai-Airport-Ertiga-Cab"><i className="fa fa-car darkcolor"></i> Pune to Mumbai Airport Ertiga Cab</Link></li>
<li><Link to="/Best-Cab-Service-Pune-to-Mumbai"><i className="fa fa-car darkcolor"></i> Best Cab Service Pune to Mumbai</Link></li>
<li><Link to="/Pune-Airport-to-Mumbai-Airport-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Pune Airport to Mumbai Airport Cab</Link></li>
<li><Link to="/Best-Mumbai-to-Pune-Cab-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Best Mumbai to Pune Cab Service</Link></li>
<li><Link to="/Online-Mumbai-to-Pune-Cab-Booking" className="d-none"><i className="fa fa-car darkcolor"></i> Online Mumbai to Pune Cab Booking</Link></li>
<li><Link to="/Mumbai-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai to Pune Cabs</Link></li>
<li><Link to="/Mumbai-Airport-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai Airport to Pune Cabs</Link></li>
<li><Link to="/Dadar-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Dadar to Pune Cabs</Link></li>
<li><Link to="/Mumbai-to-Pune-One-Way-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai to Pune One Way Cab</Link></li>
<li><Link to="/Andheri-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Andheri to Pune Cabs</Link></li>
<li><Link to="/Bandra-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Bandra to Pune Cabs</Link></li>
<li><Link to="/Santacruz-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Santacruz to Pune Cabs</Link></li>
<li><Link to="/Mumbai-Central-to-Pune-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai Central to Pune Cab</Link></li>                   
                   <li><Link to="/Borivali-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Borivali to Pune Cabs</Link></li>
<li><Link to="/Mumbai-to-Pimpri-Chinchwad-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai to Pimpri Chinchwad Cab</Link></li>
<li><Link to="/Navi-Mumbai-to-Pune-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Navi Mumbai to Pune Cab</Link></li>
<li><Link to="/Mumbai-Airport-to-Pune-City-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai Airport to Pune City Cab</Link></li>
<li><Link to="/Mumbai-to-Pune-Daily-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai to Pune Daily Cabs</Link></li>

                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h5 className="footer-title">Our Services</h5>
                    <ul>
<li><Link to="/Mumbai-to-Pune-Online-Cab"><i className="fa fa-car darkcolor"></i> Mumbai to Pune Online Cab</Link></li>
<li><Link to="/Mumbai-Pune-Cab-Booking"><i className="fa fa-car darkcolor"></i> Mumbai Pune Cab Booking</Link></li>
<li><Link to="/Jogeshwari-to-Pune-Cab-Service"><i className="fa fa-car darkcolor"></i> Jogeshwari to Pune Cab Service</Link></li>
<li><Link to="/Goregaon-to-Pune-Cab"><i className="fa fa-car darkcolor"></i> Goregaon to Pune Cab</Link></li>
<li><Link to="/Kandivali-to-Pune-Cab"><i className="fa fa-car darkcolor"></i> Kandivali to Pune Cab</Link></li>
<li><Link to="/Vile-Parle-to-Pune-Cab-Service"><i className="fa fa-car darkcolor"></i> Vile Parle to Pune Cab Service</Link></li>
<li><Link to="/Bhandup-to-Pune-Cabs"><i className="fa fa-car darkcolor"></i> Bhandup to Pune Cabs</Link></li>
<li><Link to="/Ghatkopar-to-Pune-Cab-Service"><i className="fa fa-car darkcolor"></i> Ghatkopar to Pune Cab Service</Link></li>
<li><Link to="/Kurla-to-Pune-Taxi-Service"><i className="fa fa-car darkcolor"></i> Kurla to Pune Taxi Service</Link></li>
<li><Link to="/Powai-Mumbai-Pune-Cab-Service"><i className="fa fa-car darkcolor"></i> Powai Mumbai Pune Cab Service</Link></li>
<li><Link to="/Chembur-to-Pune-Cab"><i className="fa fa-car darkcolor"></i> Chembur to Pune Cab</Link></li>
<li><Link to="/Terminal-1-2-3-Mumbai-Airport-to-Pune-Cab"><i className="fa fa-car darkcolor"></i> Terminal 1,2,3 Mumbai Airport to Pune Cab</Link></li>
<li><Link to="/Thane-to-Pune-Cabs"><i className="fa fa-car darkcolor"></i> Thane to Pune Cabs</Link></li>
<li><Link to="/Vikhroli-to-Pune-Cab-Services"><i className="fa fa-car darkcolor"></i> Vikhroli to Pune Cab Services</Link></li>
<li><Link to="/Mumbai-to-Pune-Innova-Crysta-Cab"><i className="fa fa-car darkcolor"></i> Mumbai to Pune Innova Crysta Cab</Link></li>
<li><Link to="/Mumbai-Airport-to-Pune-Ertiga-on-Rent"><i className="fa fa-car darkcolor"></i> Mumbai Airport to Pune Ertiga on Rent</Link></li>
<li><Link to="/Mumbai-Airport-Car-Rental"><i className="fa fa-car darkcolor"></i> Mumbai Airport Car Rental</Link></li>
<li><Link to="/Panvel-to-Pune-Cab"><i className="fa fa-car darkcolor"></i> Panvel to Pune Cab</Link></li>
<li><Link to="/Church-Gate-to-Pune-Cab-Service"><i className="fa fa-car darkcolor"></i> Church Gate to Pune Cab Service</Link></li>
<li><Link to="/Byculla-to-Pune-Cab-Service"><i className="fa fa-car darkcolor"></i> Byculla to Pune Cab Service</Link></li>
<li><Link to="/Vashi-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Vashi to Pune Cabs</Link></li>
<li><Link to="/Kharghar-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Kharghar to Pune Cabs</Link></li>
<li><Link to="/Mankhurd-to-Pune-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Mankhurd to Pune Cab</Link></li>
{/* <li><Link to="/Mumbai-to-Pune-Daily-Cabs"><i className="fa fa-car darkcolor"></i> Mumbai to Pune Daily Cabs</Link></li> */}
<li><Link to="/Pune-Mumbai-Daily-Cab-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Pune Mumbai Daily Cab Service</Link></li>
<li><Link to="/One-Way-Taxi-Mumbai-to-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> One Way Taxi Mumbai to Pune</Link></li>
<li><Link to="/Innova-Crysta-on-Rent-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Innova Crysta on Rent in Pune</Link></li>
<li><Link to="/Ertiga-Cab-Booking-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Ertiga Cab Booking in Pune</Link></li>
<li><Link to="/Kia-Carens-On-Rent-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Kia Carens On Rent in Pune</Link></li>
<li><Link to="/Swift-Dzire-On-Rent-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Swift Dzire On Rent in Pune</Link></li>
<li><Link to="/Sedan-Cabs-Booking-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Sedan Cabs Booking in Pune</Link></li>
<li><Link to="/Force-Urbania-On-Rent-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Force Urbania On Rent in Pune</Link></li>
<li><Link to="/Fortuner-On-Rent-in-Pune" className="d-none"><i className="fa fa-car darkcolor"></i> Fortuner On Rent in Pune</Link></li>
<li><Link to="/Mira-Road-to-Pune-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Mira Road to Pune Cab</Link></li>
<li><Link to="/Dahisar-to-Pune-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Dahisar to Pune Cabs</Link></li>
<li><Link to="/Mahim-to-Pune-Cab-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Mahim to Pune Cab Service</Link></li>
<li><Link to="/Malad-to-Pune-Cab" className="d-none"><i className="fa fa-car darkcolor"></i> Malad to Pune Cab</Link></li>
<li><Link to="/Navi-Mumbai-Airport-Cab-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Navi Mumbai Airport Cab Service</Link></li>
<li><Link to="/Mumbai-Airport-Cab-Service" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai Airport Cab Service</Link></li>
<li><Link to="/Mumbai-to-Pune-Airport-Cabs" className="d-none"><i className="fa fa-car darkcolor"></i> Mumbai to Pune Airport Cabs</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center row-gap-3 text-center">
              <div className="col-12">
                  <p className="copyright-text text-white">
              All Rights Reserved &copy;  <span className="darkcolorrr">Trustline Travels</span> <span id="date">{new Date().getFullYear()}</span>{' '}
                <span href="#"> Developed By </span> <a href="https://www.dexterintelligence.com/" className='d-inline' target="_blank" rel="noopener noreferrer">
                <span className="darkcolorrr">&nbsp;Dexter Intelligence</span>
              </a> | Hosted By <a href="https://www.urvahosting.com/" className='d-inline ' target="_blank" rel="noopener noreferrer">
                <span className="darkcolorrr">&nbsp;Urva Hosting</span>
              </a>
              </p>
              </div>
              {/* <div className="col-lg-4">
                <div className="payment-list">
                  <a href="javascript:void(0);">
                    <img src="/img/icons/payment-01.svg" alt="img" />
                  </a>
                  <a href="javascript:void(0);">
                    <img src="/img/icons/payment-02.svg" alt="img" />
                  </a>
                  <a href="javascript:void(0);">
                    <img src="/img/icons/payment-03.svg" alt="img" />
                  </a>
                </div>
              </div> */}
              {/* <div className="col-lg-4">
                <ul className="privacy-link">
                  <li><a href="privacy-policy.html">Privacy</a></li>
                  <li><a href="terms-condition.html">Terms & Condition</a></li>
                  <li><a href="javascript:void(0);">Refund Policy</a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


