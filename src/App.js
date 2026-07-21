
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header';
import HeroSection from './components/HeroSlider';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactSection from './pages/ContactSection';
import Punetomumbaicab from './pages/Pune to Mumbai Cabs';
import ScrollToTop from './components/ScrollToTop';
import Punetomumbaiairportcab from './pages/Pune to Mumbai Airport Cab';
import Punetomumbaiinternatinalairportcab from './pages/Pune to Mumbai International Airport Cab';
import Punetomumbaionewaycab from './pages/Pune to Mumbai One Way Cab';
import Punemumbaicarhire from './pages/Pune Mumbai Car Hire';
import Punetomumbaitaxifare from './pages/Pune to Mumbai Taxi Fare';
import Punetomumbaionlinecabbooking from './pages/Pune to Mumbai Online Cab Booking';
import Pimpprichichwadtomumbaicab from './pages/Pimpri Chinchwad to Mumbai Cab';
import Banertomumbaicabs from './pages/Baner to Mumbai Cabs';
import Hinjewaditomumbaicbs from './pages/Hinjewadi to Mumbai Cabs';
import Pimplesaudagartomumbaicabservice from './pages/Pimple Saudagar to Mumbai Cab Service';
import Wakadtomumbaicabs from './pages/Wakad to Mumbai Cabs';
import Hadapsartomumbaicabs from './pages/Hadapsar to Mumbai Cabs';
import Kalyaninagartomumbaitaxi from './pages/Kalyani Nagar to Mumbai Taxi';
import Koregaonparktomumbaicabs from './pages/Koregaon Park to Mumbai Cabs';
import Kothrudtomumbaicabs from './pages/Kothrud to Mumbai Cabs';
import Kharaditomumbaicab from './pages/Kharadi to Mumbai Cabs';
import Shivajinagartomumbaicabs from './pages/Shivajinagar to Mumbai Cabs';
import Punetomumbaiertigacab from './pages/Pune to Mumbai Ertiga Cab';
import Punetomumbaiinnovacrystacabs from './pages/Pune to Mumbai Innova Crysta Cabs';
import Punetomumaisedancabs from './pages/Pune to Mumbai Sedan Cab';
import Kondhwatomumbaicabs from './pages/Kondhwa to Mumbai Cabs';
import Vimannagartomumbaicabs from './pages/Viman Nagar to Mumbai Cabs';
import Katrajtomumbaicabservice from './pages/Katraj to Mumbai Cab Service';
import Punestationtomumbaicabservice from './pages/Pune Station to Mumbai Cabs Service';
import Boatclubroadtomumbaicab from './pages/Boat Club Road to Mumbai Cabs';
import Vishrantwaditomumbaicab from './pages/Vishrantwadi to Mumbai Cabs';
import Alanditomumbaicabservice from './pages/Alandi to Mumbai Cabs Service';
import Wagholitomumbaicabs from './pages/Wagholi to Mumbai Cabs';
import Cabserviceinpimprichichwad from './pages/Cab Service in Pimpri Chinchwad';
import Cheapestcabserviceinpune from './pages/Cheapest Cab Service in Pune';
import Bestcabserviceinpune from './pages/Best Cab Service in Pune';
import Punetomumbairoundtripcabfare from './pages/Pune to Mumbai Round Trip Cab Fare';
import Punetomumbaicabbooking from './pages/Pune to Mumbai Cab Booking';
import Bookcabfrompunetomumbai from './pages/Book Cab from Pune to Mumbai';
import Punetonavimumaiairportcab from './pages/Pune to Navi Mumbai Airport Cab';
import Punetonavimumbaicab from './pages/Pune to Navi Mumbai Cab';
import Punetonavimumbaiinnovacrysta from './pages/Pune to Navi Mumbai Innova Crysta';
import Punetomumbaiairportdropinnova from './pages/Pune to Mumbai Airport Drop Innova';
import Punetopanvelcabs from './pages/Pune to Panvel Cabs';
import Punemulundcabservice from './pages/Pune Mulund Cab Service';
import Punetomumbaidarshancab from './pages/Pune to Mumbai Darshan Cab';
import Punetomumbaidarshanpackage from './pages/Pune to Mumbai Darshan Package';
import Punetodadarcab from './pages/Pune to Dadar Cab';
import Punetobadracab from './pages/Pune to Bandra Cab';
import Punetovasaivirarcab from './pages/Pune to Vasai & Virar Cab';
import Punetopowaicab from './pages/Pune to Powai Cab';
import Punemumbaitaxiservice from './pages/Pune Mumbai Taxi Service';
import Onewaycabpunetomumbai from './pages/One Way Cab Pune to Mumbai';
import Punetomiraroadcab from './pages/Pune to Mira Road Cab';
import Punetomumbaiairportreturncab from './pages/Pune to Mumbai Airport Return Cab';
import Punetoborivalicab from './pages/Pune to Borivali Cab';
import Punetokalyancab from './pages/Pune to Kalyan Cab';
import Taxifrompunetomumbaiairport from './pages/Taxi From Pune to Mumbai Airport';
import Punetomumbaiairportinnovacrysta from './pages/Pune to Mumbai Airport Innova Crysta';
import Punetomumbaiairportertigacab from './pages/Pune to Mumbai Airport Ertiga Cab';
import Bestcabservicepunetomumbai from './pages/Best Cab Service Pune to Mumbai';
import Puneairporttomumbaiairportcab from './pages/Pune Airport to Mumbai Airport Cab';
import Bestmumbaitopunecabservice from './pages/Best Mumbai to Pune Cab Service';
import Onlinemumbaitopunecabbooking from './pages/Online Mumbai to Pune Cab Booking';
import Mumbaitopunecab from './pages/Mumbai to Pune Cabs';
import Mumbaiairporttopunecabs from './pages/Mumbai Airport to Pune Cabs';
import Dadartopunecabs from './pages/Dadar to Pune Cabs';
import Mumbaitopuneonewaycab from './pages/Mumbai to Pune One Way Cab';
import Andheritopunecab from './pages/Andheri to Pune Cabs';
import Bandratopunecabs from './pages/Bandra to Pune Cabs';
import Santacruztopunecabs from './pages/Santacruz to Pune Cabs';
import Mumbaicentraltopunecab from './pages/Mumbai Central to Pune Cab';
import Borivalitopunecabs from './pages/Borivali to Pune Cabs';
import Mumbaitopimprichichwadcab from './pages/Mumbai to Pimpri Chinchwad Cab';
import Navimumbaitopunecab from './pages/Navi Mumbai to Pune Cab';
import Mumbaiairporttopunecitycab from './pages/Mumbai Airport to Pune City Cab';
import Mumbaitopunedailycab from './pages/Mumbai to Pune Daily Cabs';
import Mumbaitopuneonlinecab from './pages/Mumbai to Pune Online Cab';
import Mumbapunecabbooking from './pages/Mumbai Pune Cab Booking';
import Jogeshwaritopunecabservice from './pages/Jogeshwari to Pune Cab Service';
import Goregaontopunecabs from './pages/Goregaon to Pune Cab';
import Kandivalitoopunecab from './pages/Kandivali to Pune Cab';
import Vileparletopunecabservice from './pages/Vile Parle to Pune Cab Service';
import Bhanduptopunecab from './pages/Bhandup to Pune Cabs';
import Ghatkopartopunecabservice from './pages/Ghatkopar to Pune Cab Service';
import Kurlatopunetaxiservice from './pages/Kurla to Pune Taxi Service';
import Powaimumbaipunecabservice from './pages/Powai Mumbai Pune Cab Service';
import Chemburtopunecab from './pages/Chembur to Pune Cab';
import Terminalonetwothreemumbai from './pages/Terminal 1,2,3 Mumbai Airport to Pune Cab';
import Thanetopunecab from './pages/Thane to Pune Cabs';
import Vikhrolitopunecabservice from './pages/Vikhroli to Pune Cab Services';
import Mumbaitopuneinnovacrystacab from './pages/Mumbai to Pune Innova Crysta Cab';
import Mumbaiairporttopuneertigaonrent from './pages/Mumbai Airport to Pune Ertiga on Rent';
import Mumbaiairportcarrental from './pages/Mumbai Airport Car Rental';
import Panveltopunecab from './pages/Panvel to Pune Cab';
import Churchgatetopunecabservice from './pages/Church Gate to Pune Cab Service';
import Bycullatopunecabservice from './pages/Byculla to Pune Cab Service';
import Vashitopunecabs from './pages/Vashi to Pune Cabs';
import Kharghartopunecabs from './pages/Kharghar to Pune Cabs';
import Mankhurdtopunecab from './pages/Mankhurd to Pune Cab';
import Punemumbaidailycabservice from './pages/Pune Mumbai Daily Cab Service';
import Onewaytaximumbaitopune from './pages/One Way Taxi Mumbai to Pune';
import Innovacrystaonrentpune from './pages/Innova Crysta on Rent in Pune';
import Ertigacabbookinginpune from './pages/Ertiga Cab Booking in Pune';
import Kiacarenceonrentinpune from './pages/Kia Carens On Rent in Pune';
import Swiftdzireonrentinpune from './pages/Swift Dzire On Rent in Pune';
import Sedancabsbookingonpune from './pages/Sedan Cabs Booking in Pune';
import Forceurbaniaonrentinpune from './pages/Force Urbania On Rent in Pune';
import Fortuneronrentinpune from './pages/Fortuner On Rent in Pune';
import Miraroadtopunecab from './pages/Mira Road to Pune Cab';
import Dahisartopunecab from './pages/Dahisar to Pune Cabs';
import Mahimtopunecabservice from './pages/Mahim to Pune Cab Service';
import Maladtopunecab from './pages/Malad to Pune Cab';
import Navimumbaiairportcabservice from './pages/Navi Mumbai Airport Cab Service';
import Mumbaiairportcabsservice from './pages/Mumbai Airport Cab Service';
import Mumbaitopuneairportcabs from './pages/Mumbai to Pune Airport Cabs';
import Ourfleets from './pages/Ourfleets';
import Packages from './pages/Packages';
import PuneMumbaiCab from './pages/PuneMumbaiCab';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Enquiry from './pages/Enquiry';
import Services from './pages/Services';
import ContactButtons from './components/ContactButtons';

function App() {
  return (
    <Router>
     {/* <Header/> */}
      <ContactButtons />
      <ScrollToTop />
<Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutSection />} />

        <Route path="/term-condition" element={<TermsConditions />} />
        <Route path="/our-fleet" element={<Ourfleets />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pune-mumbai-cabs" element={<PuneMumbaiCab />} />
        <Route path="/contact-us" element={<ContactSection />} />
        <Route path="/pune-to-mumbai-cabs" element={<Punetomumbaicab />} />


<Route path="/pune-to-mumbai-airport-cab" element={<Punetomumbaiairportcab />} />
<Route path="/pune-to-mumbai-international-airport-cab" element={<Punetomumbaiinternatinalairportcab />} />
<Route path="/pune-to-mumbai-one-way-cab" element={<Punetomumbaionewaycab />} />
<Route path="/pune-mumbai-car-hire" element={<Punemumbaicarhire />} />
<Route path="/pune-to-mumbai-taxi-fare" element={<Punetomumbaitaxifare />} />
<Route path="/pune-to-mumbai-online-cab-booking" element={<Punetomumbaionlinecabbooking />} />
<Route path="/pimpri-chinchwad-to-mumbai-cab" element={<Pimpprichichwadtomumbaicab />} />
<Route path="/baner-to-mumbai-cabs" element={<Banertomumbaicabs />} />
<Route path="/hinjewadi-to-mumbai-cabs" element={<Hinjewaditomumbaicbs />} />
<Route path="/pimple-saudagar-to-mumbai-cab-service" element={<Pimplesaudagartomumbaicabservice />} />
<Route path="/wakad-to-mumbai-cabs" element={<Wakadtomumbaicabs />} />
<Route path="/hadapsar-to-mumbai-cabs" element={<Hadapsartomumbaicabs />} />
<Route path="/kalyani-nagar-to-mumbai-taxi" element={<Kalyaninagartomumbaitaxi />} />
<Route path="/koregaon-park-to-mumbai-cabs" element={<Koregaonparktomumbaicabs />} />
<Route path="/kothrud-to-mumbai-cabs" element={<Kothrudtomumbaicabs />} />
<Route path="/kharadi-to-mumbai-cabs" element={<Kharaditomumbaicab />} />
<Route path="/shivajinagar-to-mumbai-cabs" element={<Shivajinagartomumbaicabs />} />
<Route path="/pune-to-mumbai-ertiga-cab" element={<Punetomumbaiertigacab />} />
<Route path="/pune-to-mumbai-innova-crysta-cabs" element={<Punetomumbaiinnovacrystacabs />} />
<Route path="/pune-to-mumbai-sedan-cab" element={<Punetomumaisedancabs />} />
<Route path="/kondhwa-to-mumbai-cabs" element={<Kondhwatomumbaicabs />} />
<Route path="/viman-nagar-to-mumbai-cabs" element={<Vimannagartomumbaicabs />} />
<Route path="/katraj-to-mumbai-cab-service" element={<Katrajtomumbaicabservice />} />
<Route path="/pune-station-to-mumbai-cabs-service" element={<Punestationtomumbaicabservice />} />
<Route path="/boat-club-road-to-mumbai-cabs" element={<Boatclubroadtomumbaicab />} />
<Route path="/vishrantwadi-to-mumbai-cabs" element={<Vishrantwaditomumbaicab />} />
<Route path="/alandi-to-mumbai-cabs-service" element={<Alanditomumbaicabservice />} />
<Route path="/wagholi-to-mumbai-cabs" element={<Wagholitomumbaicabs />} />
<Route path="/cab-service-in-pimpri-chinchwad" element={<Cabserviceinpimprichichwad />} />
<Route path="/cheapest-cab-service-in-pune" element={<Cheapestcabserviceinpune />} />
<Route path="/best-cab-service-in-pune" element={<Bestcabserviceinpune />} />
<Route path="/pune-to-mumbai-round-trip-cab-fare" element={<Punetomumbairoundtripcabfare />} />
<Route path="/pune-to-mumbai-cab-booking" element={<Punetomumbaicabbooking />} />
<Route path="/book-cab-from-pune-to-mumbai" element={<Bookcabfrompunetomumbai />} />
<Route path="/pune-to-navi-mumbai-airport-cab" element={<Punetonavimumaiairportcab />} />
<Route path="/pune-to-navi-mumbai-cab" element={<Punetonavimumbaicab />} />
<Route path="/pune-to-navi-mumbai-innova-crysta" element={<Punetonavimumbaiinnovacrysta />} />

<Route path="/pune-to-mumbai-airport-drop-innova" element={<Punetomumbaiairportdropinnova />} />
<Route path="/pune-to-panvel-cabs" element={<Punetopanvelcabs />} />
<Route path="/pune-mulund-cab-service" element={<Punemulundcabservice />} />
<Route path="/pune-to-mumbai-darshan-cab" element={<Punetomumbaidarshancab />} />
<Route path="/pune-to-mumbai-darshan-package" element={<Punetomumbaidarshanpackage />} />
<Route path="/pune-to-dadar-cab" element={<Punetodadarcab />} />
<Route path="/pune-to-bandra-cab" element={<Punetobadracab />} />
<Route path="/pune-to-vasai-virar-cab" element={<Punetovasaivirarcab />} />
<Route path="/pune-to-powai-cab" element={<Punetopowaicab />} />
<Route path="/pune-mumbai-taxi-service" element={<Punemumbaitaxiservice />} />
<Route path="/one-way-cab-pune-to-mumbai" element={<Onewaycabpunetomumbai />} />
<Route path="/pune-to-mira-road-cab" element={<Punetomiraroadcab />} />
<Route path="/pune-to-mumbai-airport-return-cab" element={<Punetomumbaiairportreturncab />} />
<Route path="/pune-to-borivali-cab" element={<Punetoborivalicab />} />
<Route path="/pune-to-kalyan-cab" element={<Punetokalyancab />} />
<Route path="/taxi-from-pune-to-mumbai-airport" element={<Taxifrompunetomumbaiairport />} />
<Route path="/pune-to-mumbai-airport-innova-crysta" element={<Punetomumbaiairportinnovacrysta />} />
<Route path="/pune-to-mumbai-airport-ertiga-cab" element={<Punetomumbaiairportertigacab />} />
<Route path="/best-cab-service-pune-to-mumbai" element={<Bestcabservicepunetomumbai />} />
<Route path="/pune-airport-to-mumbai-airport-cab" element={<Puneairporttomumbaiairportcab />} />
<Route path="/best-mumbai-to-pune-cab-service" element={<Bestmumbaitopunecabservice />} />
<Route path="/online-mumbai-to-pune-cab-booking" element={<Onlinemumbaitopunecabbooking />} />
<Route path="/mumbai-to-pune-cabs" element={<Mumbaitopunecab />} />
<Route path="/mumbai-airport-to-pune-cabs" element={<Mumbaiairporttopunecabs />} />
<Route path="/dadar-to-pune-cabs" element={<Dadartopunecabs />} />
<Route path="/mumbai-to-pune-one-way-cab" element={<Mumbaitopuneonewaycab />} />
<Route path="/andheri-to-pune-cabs" element={<Andheritopunecab />} />
<Route path="/bandra-to-pune-cabs" element={<Bandratopunecabs />} />
<Route path="/santacruz-to-pune-cabs" element={<Santacruztopunecabs />} />
<Route path="/mumbai-central-to-pune-cab" element={<Mumbaicentraltopunecab />} />
<Route path="/borivali-to-pune-cabs" element={<Borivalitopunecabs />} />
<Route path="/mumbai-to-pimpri-chinchwad-cab" element={<Mumbaitopimprichichwadcab />} />
<Route path="/navi-mumbai-to-pune-cab" element={<Navimumbaitopunecab />} />
<Route path="/mumbai-airport-to-pune-city-cab" element={<Mumbaiairporttopunecitycab />} />
<Route path="/mumbai-to-pune-daily-cabs" element={<Mumbaitopunedailycab />} />

<Route path="/mumbai-to-pune-online-cab" element={<Mumbaitopuneonlinecab />} />
<Route path="/mumbai-pune-cab-booking" element={<Mumbapunecabbooking />} />
<Route path="/jogeshwari-to-pune-cab-service" element={<Jogeshwaritopunecabservice />} />
<Route path="/goregaon-to-pune-cab" element={<Goregaontopunecabs />} />
<Route path="/kandivali-to-pune-cab" element={<Kandivalitoopunecab />} />
<Route path="/vile-parle-to-pune-cab-service" element={<Vileparletopunecabservice />} />
<Route path="/bhandup-to-pune-cabs" element={<Bhanduptopunecab />} />
<Route path="/ghatkopar-to-pune-cab-service" element={<Ghatkopartopunecabservice />} />
<Route path="/kurla-to-pune-taxi-service" element={<Kurlatopunetaxiservice />} />
<Route path="/powai-mumbai-pune-cab-service" element={<Powaimumbaipunecabservice />} />
<Route path="/chembur-to-pune-cab" element={<Chemburtopunecab />} />
<Route path="/terminal-1-2-3-mumbai-airport-to-pune-cab" element={<Terminalonetwothreemumbai />} />
<Route path="/thane-to-pune-cabs" element={<Thanetopunecab />} />
<Route path="/vikhroli-to-pune-cab-services" element={<Vikhrolitopunecabservice />} />
<Route path="/mumbai-to-pune-innova-crysta-cab" element={<Mumbaitopuneinnovacrystacab />} />
<Route path="/mumbai-airport-to-pune-ertiga-on-rent" element={<Mumbaiairporttopuneertigaonrent />} />
<Route path="/mumbai-airport-car-rental" element={<Mumbaiairportcarrental />} />
<Route path="/panvel-to-pune-cab" element={<Panveltopunecab />} />
<Route path="/church-gate-to-pune-cab-service" element={<Churchgatetopunecabservice />} />
<Route path="/byculla-to-pune-cab-service" element={<Bycullatopunecabservice />} />
<Route path="/vashi-to-pune-cabs" element={<Vashitopunecabs />} />
<Route path="/kharghar-to-pune-cabs" element={<Kharghartopunecabs />} />
<Route path="/mankhurd-to-pune-cab" element={<Mankhurdtopunecab />} />
<Route path="/pune-mumbai-daily-cab-service" element={<Punemumbaidailycabservice />} />
<Route path="/one-way-taxi-mumbai-to-pune" element={<Onewaytaximumbaitopune />} />
<Route path="/innova-crysta-on-rent-in-pune" element={<Innovacrystaonrentpune />} />
<Route path="/ertiga-cab-booking-in-pune" element={<Ertigacabbookinginpune />} />
<Route path="/kia-carens-on-rent-in-pune" element={<Kiacarenceonrentinpune />} />
<Route path="/swift-dzire-on-rent-in-pune" element={<Swiftdzireonrentinpune />} />
<Route path="/sedan-cabs-booking-in-pune" element={<Sedancabsbookingonpune />} />
<Route path="/force-urbania-on-rent-in-pune" element={<Forceurbaniaonrentinpune />} />
<Route path="/fortuner-on-rent-in-pune" element={<Fortuneronrentinpune />} />
<Route path="/mira-road-to-pune-cab" element={<Miraroadtopunecab />} />
<Route path="/dahisar-to-pune-cabs" element={<Dahisartopunecab />} />
<Route path="/mahim-to-pune-cab-service" element={<Mahimtopunecabservice />} />
<Route path="/malad-to-pune-cab" element={<Maladtopunecab />} />
<Route path="/navi-mumbai-airport-cab-service" element={<Navimumbaiairportcabservice />} />
<Route path="/mumbai-airport-cab-service" element={<Mumbaiairportcabsservice />} />
<Route path="/mumbai-to-pune-airport-cabs" element={<Mumbaitopuneairportcabs />} />
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
