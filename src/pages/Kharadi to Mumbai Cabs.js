import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Kharaditomumbaicab() {



  const cardData = {


  keyword: "Kharadi to Mumbai Cabs",

  headingDescription: "Trustline Travels offers reliable Kharadi to Mumbai cab services with comfortable, safe, and affordable transportation for corporate travel, airport transfers, business meetings, family trips, and outstation journeys. Whether you need a one-way taxi or a round-trip cab, our professional chauffeurs ensure timely pickups and a smooth travel experience. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury vehicles to meet every travel requirement. With transparent pricing, doorstep pickup, easy online booking, and 24/7 customer support, Trustline Travels is the trusted choice for Kharadi to Mumbai taxi services with complete comfort and reliability.",

  topPlaces: [
    {
      title: "Mindspace Malad",
      description: "Mindspace Malad is a major commercial and IT business park in Mumbai, hosting multinational companies, technology firms, and corporate offices."
    },
    {
      title: "Airoli IT Park",
      description: "Airoli IT Park is a leading technology hub in Navi Mumbai with modern corporate campuses, software companies, and multinational businesses."
    },
    {
      title: "Reliance Corporate Park",
      description: "Reliance Corporate Park in Ghansoli is a prominent corporate campus known for business operations, technology centers, and professional workplaces."
    },
    {
      title: "NESCO IT Park",
      description: "NESCO IT Park in Goregaon is a popular business destination featuring IT companies, exhibition centers, corporate events, and office spaces."
    },
    {
      title: "Wagle Estate",
      description: "Wagle Estate in Thane is an important industrial and commercial area with corporate offices, manufacturing units, and business establishments."
    },
    {
      title: "Vashi Commercial Hub",
      description: "Vashi is a well-developed commercial area in Navi Mumbai offering corporate offices, shopping centers, financial services, and business facilities."
    },
    {
      title: "Gateway of India",
      description: "Gateway of India is Mumbai's famous historical monument located near the waterfront, attracting visitors with its architecture and scenic views."
    },
    {
      title: "Haji Ali Dargah",
      description: "Haji Ali Dargah is a renowned spiritual landmark situated on an island in the Arabian Sea, admired for its beautiful structure and peaceful environment."
    },
    {
      title: "Juhu Beach",
      description: "Juhu Beach is one of Mumbai's most popular coastal destinations, known for street food, sunset views, and a lively atmosphere."
    },
    {
      title: "Kanheri Caves",
      description: "Kanheri Caves are ancient Buddhist rock-cut monuments located inside Sanjay Gandhi National Park, showcasing Mumbai's rich historical heritage."
    }
  ],





"services": [
  {
    "name": "Kharadi to Mumbai Cab",
    "description": "Book Kharadi to Mumbai cab service for comfortable and reliable intercity travel with Sedan, Ertiga, Innova Crysta, SUV, and premium vehicle options. Enjoy doorstep pickup, professional chauffeurs, transparent pricing, and safe transportation for airport transfers, business trips, family travel, sightseeing, and outstation journeys."
  },
  {
    "name": "Kharadi to Mumbai Airport Cab",
    "description": "Reserve Kharadi to Mumbai Airport cab for hassle-free airport transfers with punctual pickup, luggage assistance, flight support, and experienced drivers. Comfortable AC vehicles ensure smooth travel to domestic and international terminals."
  },
  {
    "name": "Kharadi to Mumbai Taxi Service",
    "description": "Choose Kharadi to Mumbai taxi service for safe and affordable transportation with clean vehicles, professional drivers, flexible booking options, and reliable one-way or round-trip travel."
  },
  {
    "name": "Kharadi to Mumbai One Way Cab",
    "description": "Book Kharadi to Mumbai one way cab for economical single-side travel without return charges. Ideal for airport drops, business meetings, relocation, and personal journeys."
  },
  {
    "name": "Kharadi to Mumbai International Airport Cab",
    "description": "Get Kharadi to Mumbai International Airport cab service for direct transfers to Chhatrapati Shivaji Maharaj International Airport with premium vehicles and experienced chauffeurs."
  },
  {
    "name": "Cab Service in Kharadi Pune",
    "description": "Professional cab service in Kharadi Pune for local rides, airport transfers, corporate travel, and outstation journeys with Sedan, Ertiga, Innova Crysta, SUV, and luxury cars."
  },
  {
    "name": "Kharadi to Andheri Cab",
    "description": "Book Kharadi to Andheri cab for business meetings, airport connections, and personal travel with comfortable AC vehicles and experienced drivers."
  },
  {
    "name": "Kharadi to Dadar Cab Fare",
    "description": "Check Kharadi to Dadar cab fare with transparent pricing for railway station transfers, business trips, and Mumbai city travel with multiple vehicle options."
  },
  {
    "name": "Kharadi to Mumbai Airport Drop",
    "description": "Get Kharadi to Mumbai Airport drop service with timely pickup, direct routes, luggage support, and affordable chauffeur-driven cab solutions."
  },
  {
    "name": "Kharadi to Mumbai Darshan Cabs",
    "description": "Book Kharadi to Mumbai Darshan cabs for sightseeing tours covering popular Mumbai attractions with flexible schedules and comfortable vehicles."
  },
  {
    "name": "Kharadi to Mumbai Central Cabs",
    "description": "Reserve Kharadi to Mumbai Central cabs for railway station transfers, business travel, and city transportation with reliable drivers."
  },
  {
    "name": "Kharadi to Dadar Cab",
    "description": "Reliable Kharadi to Dadar cab service offering doorstep pickup, comfortable AC vehicles, and professional chauffeur support."
  },
  {
    "name": "Chandan Nagar Mumbai Taxi",
    "description": "Book Chandan Nagar Mumbai taxi service for local travel, airport transfers, corporate transportation, and outstation journeys with affordable pricing."
  },
  {
    "name": "Pune to Mumbai Ertiga Cab",
    "description": "Choose Pune to Mumbai Ertiga cab for spacious family travel, airport transfers, and group transportation with comfortable seating and experienced drivers."
  },
  {
    "name": "Pune to Mumbai Innova Cab",
    "description": "Premium Pune to Mumbai Innova cab service offers luxury seating, extra luggage space, and smooth highway travel for families, corporate clients, and long-distance passengers."
  },
  {
    "name": "Pune Mumbai Velocity Cabs",
    "description": "Pune Mumbai Velocity Cabs provides reliable one-way cab, airport transfer, corporate travel, and round-trip taxi services with premium vehicles and transparent pricing."
  },
  {
    "name": "Kharadi to Dadar Taxi",
    "description": "Book Kharadi to Dadar taxi for comfortable city travel, railway station transfers, and business visits with professional chauffeurs."
  },
  {
    "name": "Kharadi to Mumbai Cab Service",
    "description": "Kharadi to Mumbai cab service offers reliable one-way, airport, corporate, and outstation travel with clean vehicles and experienced drivers."
  },
  {
    "name": "Kharadi to Borivali Cab",
    "description": "Reserve Kharadi to Borivali cab for convenient Mumbai travel with comfortable AC cars, flexible schedules, and affordable fares."
  },
  {
    "name": "Cab Service in Kharadi",
    "description": "Trusted cab service in Kharadi for local transportation, airport pickup and drop, business travel, and long-distance taxi requirements."
  },
  {
    "name": "Cab Service Kharadi Pune",
    "description": "Professional cab service Kharadi Pune provides reliable transportation solutions with well-maintained vehicles and trained chauffeurs."
  },
  {
    "name": "Cab in Central Kharadi Pune",
    "description": "Book cab in central Kharadi Pune for local rides, airport transfers, corporate trips, and outstation travel with quick availability."
  },
  {
    "name": "Kharadi to Mumbai Airport Cab",
    "description": "Kharadi to Mumbai Airport cab service ensures timely airport travel with professional drivers, comfortable vehicles, and affordable pricing."
  },
  {
    "name": "Innova Crysta on Rent in Kharadi",
    "description": "Hire Innova Crysta on rent in Kharadi for airport transfers, Mumbai trips, family vacations, corporate travel, and premium outstation journeys."
  },
  {
    "name": "Ertiga on Rent in Kharadi",
    "description": "Rent Ertiga in Kharadi for family trips, group transportation, airport transfers, and long-distance travel with chauffeur service."
  },
  {
    "name": "Sedan Cab on Rent in Velocity Cabs Pune",
    "description": "Book Sedan cab on rent in Pune with Velocity Cabs for corporate travel, airport transfers, meetings, and comfortable city transportation."
  },
  {
    "name": "Cab Service in Pune",
    "description": "Our cab service in Pune provides local rides, airport transfers, corporate transportation, and outstation taxi services with multiple vehicle options."
  },
  {
    "name": "Pune to Mumbai Airport Cab",
    "description": "Book Pune to Mumbai Airport cab with direct pickup, timely arrival, luggage assistance, and professional chauffeur service."
  },
  {
    "name": "Pune Mumbai Cab",
    "description": "Reliable Pune Mumbai cab service for airport transfers, business trips, family journeys, and sightseeing travel with comfortable vehicles."
  },
  {
    "name": "Cab Service in Kharadi",
    "description": "Reliable Cab Service in Kharadi for local travel, airport transfers, corporate transportation, and Mumbai outstation trips."
  },
  {
    "name": "Taxi Service in Chandan Nagar Pune",
    "description": "Professional taxi service in Chandan Nagar Pune for airport travel, local rides, corporate trips, and outstation journeys."
  },
  {
    "name": "Kharadi to Mumbai Taxi",
    "description": "Book Kharadi to Mumbai taxi with professional drivers, comfortable AC cars, transparent fares, and reliable transportation."
  },
  {
    "name": "Kharadi to Mumbai Taxi Service",
    "description": "Choose Kharadi to Mumbai taxi service for safe and convenient travel with Sedan, Ertiga, Innova Crysta, SUV, and luxury vehicle options."
  },
  {
    "name": "Kharadi to Mumbai Cab Booking",
    "description": "Book Kharadi to Mumbai cab online with instant confirmation, flexible pickup timing, easy reservation, and 24x7 customer support."
  },
  {
    "name": "Cab from Kharadi to Mumbai",
    "description": "Reserve a cab from Kharadi to Mumbai for airport transfers, corporate meetings, sightseeing, and family trips with professional chauffeurs."
  },
  {
    "name": "Kharadi to Mumbai Car Rental",
    "description": "Kharadi to Mumbai car rental service provides one-way, round-trip, airport, and corporate travel options with premium chauffeur-driven vehicles."
  },
  {
    "name": "Kharadi to Mumbai One Way Cabs",
    "description": "Book Kharadi to Mumbai one way cabs for affordable single-trip travel with no return charges and comfortable vehicles."
  },
  {
    "name": "Cheap Kharadi to Mumbai Cabs",
    "description": "Affordable Kharadi to Mumbai cabs with transparent pricing, clean AC cars, professional drivers, and reliable service."
  },
  {
    "name": "Kharadi to Mumbai Taxi Fare",
    "description": "Check Kharadi to Mumbai taxi fare with competitive pricing for Sedan, Ertiga, Innova Crysta, and SUV vehicles."
  },
  {
    "name": "Book Kharadi to Mumbai Cab Online",
    "description": "Book Kharadi to Mumbai cab online with quick confirmation, multiple vehicle options, secure booking, and professional chauffeur service."
  },
  {
    "name": "Kharadi to Mumbai Outstation Cab",
    "description": "Reliable Kharadi to Mumbai outstation cab for long-distance travel with experienced drivers, comfortable vehicles, and flexible schedules."
  },
  {
    "name": "24x7 Kharadi to Mumbai Taxi Service",
    "description": "24x7 Kharadi to Mumbai taxi service available anytime for airport transfers, emergency travel, business trips, and family journeys."
  },
  {
    "name": "Best Kharadi to Mumbai Cab Service",
    "description": "Experience the best Kharadi to Mumbai cab service with premium vehicles, professional chauffeurs, transparent pricing, easy booking, and reliable customer support."
  }
],

"tableData": [
  ["Kharadi to Mumbai Cab", "Kharadi to Mumbai Airport Cab"],
  ["Kharadi to Mumbai Taxi Service", "Kharadi to Mumbai One Way Cab"],
  ["Kharadi to Mumbai International Airport Cab", "Cab Service in Kharadi Pune"],
  ["Kharadi to Andheri Cab", "Kharadi to Dadar Cab Fare"],
  ["Kharadi to Mumbai Airport Drop", "Kharadi to Mumbai Darshan Cabs"],
  ["Kharadi to Mumbai Central Cabs", "Pune to Mumbai Ertiga Cab"],
  ["Pune to Mumbai Innova Cab", "Pune Mumbai Velocity Cabs"],
  ["Kharadi to Mumbai Cab Service", "Kharadi to Borivali Cab"],
  ["Innova Crysta on Rent in Kharadi", "Ertiga on Rent in Kharadi"],
  ["Sedan Cab on Rent in Velocity Cabs Pune", "Cab Service in Pune"],
  ["Pune to Mumbai Airport Cab", "Pune Mumbai Cab"],
  ["Taxi Service in Chandan Nagar Pune", "Kharadi to Mumbai Taxi"],
  ["Kharadi to Mumbai Taxi Service", "Kharadi to Mumbai Cab Booking"],
  ["Cab from Kharadi to Mumbai", "Kharadi to Mumbai Car Rental"],
  ["Kharadi to Mumbai One Way Cabs", "Cheap Kharadi to Mumbai Cabs"],
  ["Kharadi to Mumbai Taxi Fare", "Book Kharadi to Mumbai Cab Online"],
  ["Kharadi to Mumbai Outstation Cab", "24x7 Kharadi to Mumbai Taxi Service"],
  ["Best Kharadi to Mumbai Cab Service", "Cab Service in Kharadi"]
],






whychoose: [
  {
    WhyChooseheading: "Reliable Kharadi to Mumbai Cab Service",
    WhyChoosedescription: "Trustline Travels provides dependable Kharadi to Mumbai cab services with comfortable vehicles for corporate, airport, and personal travel."
  },
  {
    WhyChooseheading: "Pickup from Kharadi IT Hub",
    WhyChoosedescription: "We offer convenient pickup from Kharadi, EON IT Park, Viman Nagar, Wagholi, Chandan Nagar, and nearby Pune areas."
  },
  {
    WhyChooseheading: "Professional Drivers for Long Distance Travel",
    WhyChoosedescription: "Our experienced chauffeurs ensure safe, smooth, and timely travel through the Pune-Mumbai Expressway."
  },
  {
    WhyChooseheading: "Clear & Affordable Cab Pricing",
    WhyChoosedescription: "Get transparent fare details with competitive rates and no hidden charges for your Kharadi to Mumbai journey."
  },
  {
    WhyChooseheading: "Comfortable Fleet Selection",
    WhyChoosedescription: "Travel in clean and well-maintained Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers."
  },
  {
    WhyChooseheading: "Flexible Travel Solutions",
    WhyChoosedescription: "Choose one-way cabs, round trips, airport transfers, or customized travel options as per your requirement."
  },
  {
    WhyChooseheading: "Corporate & Airport Travel Specialists",
    WhyChoosedescription: "Our services are ideal for IT professionals, business meetings, Mumbai Airport drops, and family trips."
  },
  {
    WhyChooseheading: "Quick Booking & Customer Support",
    WhyChoosedescription: "Get instant quotations and booking assistance from our support team for a hassle-free travel experience."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Kharadi to Mumbai cab service?",
    answer: "Yes, Trustline Travels offers reliable Kharadi to Mumbai cab services for one-way, round-trip, airport, and corporate travel."
  },
  {
    question: "Can I book a one-way cab from Kharadi to Mumbai?",
    answer: "Yes, we provide cost-effective one-way cab options for direct travel from Kharadi to Mumbai."
  },
  {
    question: "Which vehicles are available for Kharadi to Mumbai travel?",
    answer: "You can choose from Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers based on your travel needs."
  },
  {
    question: "Do you provide pickup from EON IT Park Kharadi?",
    answer: "Yes, we provide pickup services from EON IT Park, residential areas, offices, hotels, and nearby locations in Kharadi."
  },
  {
    question: "Can I book a cab from Kharadi to Mumbai Airport?",
    answer: "Yes, we provide direct airport transfer services from Kharadi to Mumbai Airport Terminal 1 and Terminal 2."
  },
  {
    question: "Are toll and parking charges included in the cab fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless mentioned in the booking."
  },
  {
    question: "Is the Kharadi to Mumbai cab service available at night?",
    answer: "Yes, Trustline Travels provides 24/7 cab availability for early morning, daytime, and late-night travel."
  },
  {
    question: "Can I schedule my Kharadi to Mumbai cab in advance?",
    answer: "Yes, advance booking is recommended to secure your preferred vehicle and pickup timing."
  },
  {
    question: "Do you provide cabs for IT professionals and corporate travel?",
    answer: "Yes, our Kharadi to Mumbai cab services are designed for IT employees, business travelers, and corporate requirements."
  },
  {
    question: "How can I book a Kharadi to Mumbai cab with Trustline Travels?",
    answer: "Share your pickup location, travel date, destination, and preferred vehicle details to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Rahul Shinde",
    feedback: "I booked a cab from Kharadi to Mumbai for a business meeting, and Trustline Travels provided excellent service. The driver was punctual, professional, and the ride was very comfortable.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Aarti More",
    feedback: "Our family trip from Kharadi to Mumbai was smooth and convenient with Trustline Travels. The cab was clean, spacious, and the driver ensured a safe journey throughout.",
    rating: 5
  }
];










  const Images = [
    { place: "/images/keyword/29.jpg", text: "Pune to Mumbai Cabs", link: "Pune-to-Mumbai-Cabs" },
    { place: "/images/keyword/30.jpg", text: "Pune to Mumbai Airport Cab", link: "Pune-to-Mumbai-Airport-Cab" },
    { place: "/images/keyword/31.jpg", text: "Pune to Mumbai International Airport Cab", link: "Pune-to-Mumbai-International-Airport-Cab" },
    { place: "/images/keyword/32.jpg", text: "Pune to Mumbai One Way Cab", link: "Pune-to-Mumbai-One-Way-Cab" },
    { place: "/images/keyword/33.jpg", text: "Pune Mumbai Car Hire", link: "Pune-Mumbai-Car-Hire" },
    { place: "/images/keyword/34.jpg", text: "Pune to Mumbai Taxi Fare", link: "Pune-to-Mumbai-Taxi-Fare" },
    { place: "/images/keyword/35.jpg", text: "Pune to Mumbai Online Cab Booking", link: "Pune-to-Mumbai-Online-Cab-Booking" },
    { place: "/images/keyword/36.jpg", text: "Pimpri Chinchwad to Mumbai Cab", link: "Pimpri-Chinchwad-to-Mumbai-Cab" },
    { place: "/images/keyword/37.jpg", text: "Baner to Mumbai Cabs", link: "Baner-to-Mumbai-Cabs" },
    { place: "/images/keyword/38.jpg", text: "Hinjewadi to Mumbai Cabs", link: "Hinjewadi-to-Mumbai-Cabs" },
    { place: "/images/keyword/39.jpg", text: "Pimple Saudagar to Mumbai Cab Service", link: "Pimple-Saudagar-to-Mumbai-Cab-Service" },
    { place: "/images/keyword/40.jpg", text: "Wakad to Mumbai Cabs", link: "Wakad-to-Mumbai-Cabs" },
    { place: "/images/keyword/41.jpg", text: "Hadapsar to Mumbai Cabs", link: "Hadapsar-to-Mumbai-Cabs" },
    { place: "/images/keyword/42.jpg", text: "Kalyani Nagar to Mumbai Taxi", link: "Kalyani-Nagar-to-Mumbai-Taxi" },
    { place: "/images/keyword/43.jpg", text: "Koregaon Park to Mumbai Cabs", link: "Koregaon-Park-to-Mumbai-Cabs" },
    { place: "/images/keyword/44.jpg", text: "Kothrud to Mumbai Cabs", link: "Kothrud-to-Mumbai-Cabs" },
    { place: "/images/keyword/45.jpg", text: "Kharadi to Mumbai Cabs", link: "Kharadi-to-Mumbai-Cabs" },
    { place: "/images/keyword/46.jpg", text: "Shivajinagar to Mumbai Cabs", link: "Shivajinagar-to-Mumbai-Cabs" },
    { place: "/images/keyword/47.jpg", text: "Pune to Mumbai Ertiga Cab", link: "Pune-to-Mumbai-Ertiga-Cab" },
    { place: "/images/keyword/48.jpg", text: "Pune to Mumbai Innova Crysta Cabs", link: "Pune-to-Mumbai-Innova-Crysta-Cabs" },
    { place: "/images/keyword/49.jpg", text: "Pune to Mumbai Sedan Cab", link: "Pune-to-Mumbai-Sedan-Cab" },
    { place: "/images/keyword/50.jpg", text: "Kondhwa to Mumbai Cabs", link: "Kondhwa-to-Mumbai-Cabs" },
    { place: "/images/keyword/51.jpg", text: "Viman Nagar to Mumbai Cabs", link: "Viman-Nagar-to-Mumbai-Cabs" },
    { place: "/images/keyword/52.jpg", text: "Katraj to Mumbai Cab Service", link: "Katraj-to-Mumbai-Cab-Service" },
    { place: "/images/keyword/53.jpg", text: "Pune Station to Mumbai Cabs Service", link: "Pune-Station-to-Mumbai-Cabs-Service" },
    { place: "/images/keyword/54.jpg", text: "Boat Club Road to Mumbai Cabs", link: "Boat-Club-Road-to-Mumbai-Cabs" },
    { place: "/images/keyword/55.jpg", text: "Vishrantwadi to Mumbai Cabs", link: "Vishrantwadi-to-Mumbai-Cabs" },
];











const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kharadi to Mumbai Cab Service",
  "image": "https://www.trustlinetravels.com/assets/images/kharadi-to-mumbai-cab.webp",
  "description": "Book Kharadi to Mumbai cab service for safe, comfortable, and affordable intercity travel. Trustline Travels offers one-way, round-trip, airport transfer, and local travel taxi services with Sedan, Ertiga, SUV, Innova, Innova Crysta, and luxury cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5962"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/kharadi-to-mumbai-cab"
  }
};



  return (
    <div>

<Helmet>
  <title>Kharadi to Mumbai Cab | Airport & One Way Taxi | +91 8087080034</title>

  <meta
    name="description"
    content="Book Kharadi to Mumbai cab service with Trustline Travels for affordable one-way, round-trip, airport transfers, and city travel. Choose Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs with professional drivers available 24x7."
  />

  <meta
    name="keywords"
    content="kharadi to mumbai cab, kharadi to mumbai airport cab, kharadi to mumbai taxi service, kharadi to mumbai one way cab, kharadi to mumbai international airport cab, cab service in kharadi pune, Kharadi to Andheri cab, kharadi to dadar cab fare, kharadi to mumbai airport drop, kharadi to mumbai darshan cabs, kharadi to mumbai central cabs, kharadi to dadar cab, chandan nagar mumbai taxi, pune to mumbai cab, kharadi to mumbai innova cab, kharadi to mumbai ertiga cab"
  />

  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>
</Helmet>

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
                <h2 className="wt-title">{cardData.keyword}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
















      <section>
        <div className="container-fluid" >
          <div className="row container-fluid">
            <div className="col-12 col-md-7 bg-foootr">
              <img src='/images/keyword/45.jpg' alt='img' className='img-fluid' />
              <h3 className="py-1"
                style={{
                  color: '#183765', // Red color for the title 
                  textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                  fontWeight: 'bold'
                }}


              >Trustline Travels: {cardData.keyword} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
              <div className="topPlaces">
                {/* <p className="sectionLead">{cardData.top}</p> */}

                <p className="sectionLead">Top Places to visit from {cardData.keyword} </p>
                {cardData.topPlaces.map((place, index) => (
                  <article key={index} className="placeCard borderr" tabIndex="0">
                    <span className="placeBadge">{String(index + 1).padStart(2, "0")}</span>

                    <div className="placeBody">
                      <h4 className="placeTitle">{place.title}</h4>
                      <p className="placeDesc">{place.description}</p>

                    </div>

                    <span className="placeArrow" aria-hidden>›</span>
                  </article>
                ))}
              </div>


              {/* <div className="services-section">
                {cardData.services.map((service, index) => (
                  <div key={index} className="service-row">
                  
                    <div>
                      <h4 className="service-title">{service.name}</h4>
                      <p className="service-desc">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div> */}


              <div className="services-section">
                {cardData.services.map((service, index) => (
                  <div className="service-card" key={index}>
                    <div className="service-content">
                      <h4>{service.name}</h4>
                      <span className="line"></span>
                      <p>{service.description}</p>
                    </div>

                    <div className="service-icon">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                ))}
              </div>

              <div className="keyword-grid">
                {cardData.tableData.flat().map((keyword, index) => (
                  <div key={index} className="keyword-item">
                    <span className="keyword-bullet">-</span>
                    {keyword}
                  </div>
                ))}
              </div>
              {/* <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
              <BusRatesTable /> */}

              {/* <div id="why-choose-section" className="why-choose-section">


                
                <h2 className="section-title text-white">
                  Why Choose <span>Trustline Travels</span>
                </h2>

               
                <div className="cards-grid">
                  {cardData.whychoose.map((item, index) => (
                    <div key={index} className="why-card">
                      <div className="icon-circle">{index + 1}</div>
                      <h4 className="card-heading">{item.WhyChooseheading}</h4>
                      <p className="card-desc">{item.WhyChoosedescription}</p>
                    </div>
                  ))}
                </div>
              </div> */}


              <div id="why-choose-section" className="why-choose-section">

                <h2 className="section-title text-white">
                  Why Choose <span>Trustline Travels</span>
                </h2>

                <div className="bento-grid">
                  {cardData.whychoose.map((item, index) => (
                    <div className="bento-card" key={index}>

                      <div className="bento-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h4>{item.WhyChooseheading}</h4>

                      <p>{item.WhyChoosedescription}</p>

                    </div>
                  ))}
                </div>

              </div>



              <div className="row twm-faq-section-1 m-b30">


                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                  <div className="twm-faq-info-wrap">

                    <div className="section-head left">
                      <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Trustline Travels </h2>
                    </div>


                    <div className="twm-faq-info">
                      <div className="accordion twm-acdn" id="sf-faq-accordion">

                        <FaqSection
                          title=""
                          subtitle=""
                          items={faqData}
                        />

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <TestimonialSectionKeyword
                testimonials={testimonials}
              />


              <ContactShowcase keyword={cardData.keyword} />
            </div>

            <div className='col-12 col-md-4' >
              <div className="routeList">
                {Images.map((e, i) => {
                  const isExternal = typeof e.link === "string" && /^https?:\/\//i.test(e.link);
                  const href = isExternal ? e.link : `/${String(e.link || "").replace(/^\/+/, "")}`;

                  return (
                    <a
                      key={e.link || i}
                      href={href}
                      className="routeItem"
                      aria-label={e.text}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <div className="routeThumb">
                        <img src={e.place} alt="" loading="lazy" />
                      </div>

                      <div className="routeMeta">
                        <h6 className="routeTitle">{e.text}</h6>
                        <span className="routeUnderline" />
                      </div>

                      <span className="routeArrow" aria-hidden>›</span>
                    </a>
                  );
                })}
              </div>




              <div>
                <FleetHighway />
              </div>
              <div className="pc-contact">
                <h4 className="pc-title">Contact Information</h4>

                <div className="pc-grid">
                  {/* Phones */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="fas fa-phone-alt"></i>
                      <span>Phone Numbers</span>
                    </header>

                    <div className="pc-list">
                      <a href="tel:+918087080034 " className="pc-call">+91 8087080034 </a>
                      <a href="tel:+919421185217" className="pc-call">+91 9421185217</a>
                    </div>

                    <div className="pc-cta">
                      <a
                        href="https://wa.me/918087080034 "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pc-whats"
                      >
                        <i className="bi bi-whatsapp"></i> WhatsApp
                      </a>
                      <a href="tel:+918087080034 " className="pc-primary">
                        Call Now
                      </a>
                    </div>
                  </section>

                  {/* Email */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="fa-solid fa-envelope"></i>
                      <span>Email</span>
                    </header>

                    <a href="mailto:booking@trustlinetravels.com" className="pc-email">
                      booking@trustlinetravels.com
                    </a>
                  </section>

                  {/* Address */}
                  <section className="pc-tile">
                    <header className="pc-tile-head">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Address</span>
                    </header>

                    <address className="pc-address">
                      <strong>Trustline Travels</strong><br />
                      Office  No 3 ,Shive Pride, Lane No 14,
                      Swami Samarth Nagar, Sathe Nagar,
                      Lohegaon, Pune, Maharashtra-411047.



                    </address>
                  </section>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Kharaditomumbaicab;