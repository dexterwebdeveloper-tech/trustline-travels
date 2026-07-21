import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Wakadtomumbaicabs() {



  const cardData = {


     keyword: "Wakad to Mumbai Cabs",

  headingDescription: "Trustline Travels provides dependable Wakad to Mumbai cab services with comfortable, affordable, and chauffeur-driven taxis for corporate travel, airport transfers, business meetings, family vacations, and outstation journeys. Whether you're planning a one-way trip or a round-trip, our experienced drivers ensure a safe, punctual, and hassle-free travel experience. Our fleet includes AC Sedans, SUVs, Ertiga, Innova Crysta, Tempo Travellers, and premium cars to suit every travel requirement. With transparent pricing, doorstep pickup, easy online booking, and 24/7 customer assistance, Trustline Travels is the preferred choice for reliable Wakad to Mumbai taxi services.",

  topPlaces: [
    {
      title: "Peninsula Corporate Park",
      description: "Peninsula Corporate Park in Lower Parel is a premium commercial destination housing multinational companies, financial institutions, and corporate headquarters."
    },
    {
      title: "Turbhe Industrial Area",
      description: "Turbhe Industrial Area is a major industrial and logistics hub in Navi Mumbai, home to manufacturing units, warehouses, and commercial establishments."
    },
    {
      title: "MIDC Andheri",
      description: "MIDC Andheri is one of Mumbai's oldest industrial and business zones, accommodating engineering companies, IT firms, and corporate offices."
    },
    {
      title: "Hiranandani Business Park",
      description: "Hiranandani Business Park in Powai is a renowned commercial destination with leading IT companies, multinational corporations, and modern office spaces."
    },
    {
      title: "Chhatrapati Shivaji Maharaj International Airport",
      description: "Mumbai's international airport provides world-class domestic and international connectivity, serving millions of business and leisure travelers annually."
    },
    {
      title: "Lokmanya Tilak Terminus",
      description: "Lokmanya Tilak Terminus is one of Mumbai's busiest railway terminals, offering convenient rail connectivity to major cities across India."
    },
    {
      title: "Sanjay Gandhi National Park",
      description: "Sanjay Gandhi National Park is a vast green sanctuary known for wildlife, nature trails, boating, and the historic Kanheri Caves."
    },
    {
      title: "Aksa Beach",
      description: "Aksa Beach is a peaceful coastal retreat famous for its scenic shoreline, tranquil atmosphere, and relaxing weekend experience."
    },
    {
      title: "Nehru Planetarium",
      description: "Nehru Planetarium is a popular educational attraction featuring astronomy shows, science exhibitions, and interactive learning experiences."
    },
    {
      title: "Worli Sea Face",
      description: "Worli Sea Face is a picturesque waterfront promenade offering panoramic views of the Arabian Sea and the iconic Bandra-Worli Sea Link."
    }
  ],





"services": [
  {
    "name": "Wakad to Mumbai Cab",
    "description": "Book Wakad to Mumbai cab for safe and comfortable intercity travel with Sedan, Ertiga, Innova Crysta, SUV, and luxury vehicles. Enjoy doorstep pickup, professional chauffeurs, transparent pricing, and reliable one-way, round-trip, airport, and corporate travel services available 24x7."
  },
  {
    "name": "Wakad to Mumbai Airport Cab",
    "description": "Reserve Wakad to Mumbai Airport cab for timely airport transfers to domestic and international terminals. Flight tracking, luggage assistance, experienced drivers, and comfortable AC vehicles ensure a hassle-free journey."
  },
  {
    "name": "Wakad to Dadar Cab",
    "description": "Book Wakad to Dadar cab for railway station transfers, business meetings, and family travel with fixed pricing, punctual pickups, and professional chauffeur service."
  },
  {
    "name": "Taxi Wakad to Mumbai International Airport",
    "description": "Reliable taxi from Wakad to Mumbai International Airport with direct transfers to Chhatrapati Shivaji Maharaj International Airport, flight monitoring, and premium chauffeur-driven vehicles."
  },
  {
    "name": "Wakad to Mumbai Domestic Airport Cab Fare",
    "description": "Check Wakad to Mumbai Domestic Airport cab fare with transparent pricing for Sedan, Ertiga, Innova Crysta, SUVs, and premium vehicles. Affordable airport transfer packages are available 24x7."
  },
  {
    "name": "Wakad to Mumbai Innova Taxi Fare",
    "description": "Know Wakad to Mumbai Innova taxi fare for premium highway travel. Spacious seating, luxury interiors, and transparent pricing make Innova Crysta ideal for family and corporate travel."
  },
  {
    "name": "Wakad to Borivali Cab",
    "description": "Reserve Wakad to Borivali cab with comfortable AC vehicles, experienced chauffeurs, fixed fares, and reliable transportation for business and family trips."
  },
  {
    "name": "Wakad to Mumbai Ertiga Taxi",
    "description": "Choose Wakad to Mumbai Ertiga taxi for spacious family travel, airport transfers, and group transportation with affordable fares and professional drivers."
  },
  {
    "name": "Pune to Mumbai Airport Cab",
    "description": "Book Pune to Mumbai Airport cab with direct transfers to all airport terminals, professional chauffeurs, luggage assistance, and comfortable AC vehicles."
  },
  {
    "name": "Pune to Mumbai Ertiga Cab",
    "description": "Reliable Pune to Mumbai Ertiga cab service offering spacious seating, comfortable interiors, affordable fares, and experienced drivers for airport and outstation travel."
  },
  {
    "name": "Pune to Mumbai Innova Cab",
    "description": "Premium Pune to Mumbai Innova cab provides luxury seating, extra luggage capacity, smooth highway travel, and professional chauffeur service for business and family trips."
  },
  {
    "name": "Wakad to Mumbai Cab Booking Online",
    "description": "Book Wakad to Mumbai cab online with instant confirmation, transparent pricing, secure reservations, and multiple vehicle options for one-way and round-trip travel."
  },
  {
    "name": "Wakad to Mumbai Airport Cab Charges",
    "description": "Check Wakad to Mumbai Airport cab charges with fixed fares for Sedan, Ertiga, Innova Crysta, SUVs, and luxury vehicles. No hidden costs and affordable airport transfer packages."
  },
  {
    "name": "Wakad to Andheri Cab Charges",
    "description": "Know Wakad to Andheri cab charges with transparent pricing, comfortable AC vehicles, and professional chauffeurs for convenient business and airport travel."
  },
  {
    "name": "Wakad to Dadar Cabs",
    "description": "Book Wakad to Dadar cabs with timely pickup, fixed pricing, experienced drivers, and comfortable vehicles for railway station transfers and business travel."
  },
  {
    "name": "Wakad to Navi Mumbai Cabs",
    "description": "Reliable Wakad to Navi Mumbai cabs for corporate travel, airport transfers, family trips, and one-way transportation with multiple vehicle choices."
  },
  {
    "name": "Wakad to Navi Mumbai Innova Crysta",
    "description": "Book Wakad to Navi Mumbai Innova Crysta for premium travel with spacious seating, luxury interiors, and professional chauffeurs for comfortable long-distance journeys."
  },
  {
    "name": "Cab Service in Wakad",
    "description": "Professional cab service in Wakad for local travel, airport transfers, outstation journeys, employee transportation, and corporate travel with Sedan, Ertiga, Innova Crysta, SUVs, and luxury vehicles."
  },
  {
    "name": "Taxi Service in Wakad Pune",
    "description": "Reliable taxi service in Wakad Pune offering local cabs, airport transfers, intercity travel, and outstation taxi services with experienced drivers and transparent pricing."
  },
  {
    "name": "Best Car Service in Wakad",
    "description": "Choose the best car service in Wakad for airport transfers, corporate transportation, sightseeing, family travel, and outstation journeys with premium chauffeur-driven vehicles."
  },
  {
    "name": "Pune Wakad Innova Crysta on Rent",
    "description": "Hire Innova Crysta in Wakad Pune for Mumbai airport transfers, business meetings, family vacations, and outstation travel with luxury seating and professional drivers."
  },
  {
    "name": "Pune Mumbai Velocity Cabs",
    "description": "Pune Mumbai Velocity Cabs provides reliable one-way, airport transfer, corporate travel, and round-trip taxi services with transparent pricing and premium vehicles."
  },
  {
    "name": "Cab Service in Pune",
    "description": "Our cab service in Pune offers local taxi services, airport transfers, corporate transportation, and outstation travel with comfortable chauffeur-driven vehicles."
  },
  {
    "name": "Pune Mumbai Cab",
    "description": "Reliable Pune Mumbai cab service for airport transfers, business travel, sightseeing, family trips, and one-way or round-trip journeys."
  },
  {
    "name": "Best Cab Service in Wakad Pune",
    "description": "Experience the best cab service in Wakad Pune with professional chauffeurs, clean vehicles, affordable fares, instant booking, and dependable customer support."
  },
  {
    "name": "Wakad to Mumbai Cabs",
    "description": "Book Wakad to Mumbai cabs for affordable and comfortable travel with Sedan, Ertiga, Innova Crysta, SUVs, and premium vehicles available throughout the day."
  },
  {
    "name": "Wakad to Mumbai Taxi",
    "description": "Professional Wakad to Mumbai taxi service with fixed pricing, experienced drivers, comfortable AC vehicles, and reliable transportation for every travel need."
  },
  {
    "name": "Wakad to Mumbai Cab Service",
    "description": "Choose Wakad to Mumbai cab service for one-way travel, airport transfers, corporate trips, sightseeing, and round-trip packages with transparent pricing."
  },
  {
    "name": "Wakad to Mumbai Taxi Service",
    "description": "Our Wakad to Mumbai taxi service provides safe, reliable, and comfortable travel with experienced chauffeurs and multiple vehicle categories."
  },
  {
    "name": "Wakad to Mumbai Cab Booking",
    "description": "Book Wakad to Mumbai cab with instant online confirmation, flexible pickup schedules, fixed pricing, and 24x7 customer support."
  },
  {
    "name": "Cab from Wakad to Mumbai",
    "description": "Reserve a cab from Wakad to Mumbai for airport transfers, business meetings, sightseeing, family travel, and corporate transportation with professional drivers."
  },
  {
    "name": "Wakad to Mumbai Car Rentals",
    "description": "Wakad to Mumbai car rentals offer one-way, airport, business, and round-trip travel with Sedan, Ertiga, Innova Crysta, SUVs, and luxury chauffeur-driven vehicles."
  },
  {
    "name": "Wakad to Mumbai One Way Cabs",
    "description": "Book Wakad to Mumbai one way cabs and pay only for your single trip. Ideal for airport transfers, office visits, business travel, and personal transportation."
  },
  {
    "name": "Cheap Wakad to Mumbai Cab",
    "description": "Affordable Wakad to Mumbai cab service with clean AC vehicles, experienced chauffeurs, transparent pricing, and reliable intercity transportation."
  },
  {
    "name": "Wakad to Mumbai Taxi Fare",
    "description": "Check Wakad to Mumbai taxi fare with transparent pricing for Sedan, Ertiga, Innova Crysta, SUVs, and luxury vehicles suitable for every travel budget."
  },
  {
    "name": "Book Wakad to Mumbai Cab Online",
    "description": "Book Wakad to Mumbai cab online with instant confirmation, secure reservations, professional drivers, and multiple vehicle options available 24x7."
  },
  {
    "name": "Wakad to Mumbai Outstation Cabs",
    "description": "Reliable Wakad to Mumbai outstation cabs for long-distance travel with experienced chauffeurs, comfortable vehicles, and flexible pickup schedules."
  },
  {
    "name": "24x7 Wakad to Mumbai Taxi Service",
    "description": "Our 24x7 Wakad to Mumbai taxi service is available round the clock for airport transfers, emergency travel, business meetings, and family trips."
  },
  {
    "name": "Best Wakad to Mumbai Cab Service",
    "description": "Experience the best Wakad to Mumbai cab service with premium vehicles, professional chauffeurs, transparent pricing, instant booking, and outstanding customer support."
  }
],

"tableData": [
  ["Wakad to Mumbai Cab", "Wakad to Mumbai Airport Cab"],
  ["Wakad to Dadar Cab", "Taxi Wakad to Mumbai International Airport"],
  ["Wakad to Mumbai Domestic Airport Cab Fare", "Wakad to Mumbai Innova Taxi Fare"],
  ["Wakad to Borivali Cab", "Wakad to Mumbai Ertiga Taxi"],
  ["Pune to Mumbai Airport Cab", "Pune to Mumbai Ertiga Cab"],
  ["Pune to Mumbai Innova Cab", "Wakad to Mumbai Cab Booking Online"],
  ["Wakad to Mumbai Airport Cab Charges", "Wakad to Andheri Cab Charges"],
  ["Wakad to Dadar Cabs", "Wakad to Navi Mumbai Cabs"],
  ["Wakad to Navi Mumbai Innova Crysta", "Cab Service in Wakad"],
  ["Taxi Service in Wakad Pune", "Best Car Service in Wakad"],
  ["Pune Wakad Innova Crysta on Rent", "Pune Mumbai Velocity Cabs"],
  ["Cab Service in Pune", "Pune Mumbai Cab"],
  ["Best Cab Service in Wakad Pune", "Wakad to Mumbai Cabs"],
  ["Wakad to Mumbai Taxi", "Wakad to Mumbai Cab Service"],
  ["Wakad to Mumbai Taxi Service", "Wakad to Mumbai Cab Booking"],
  ["Cab from Wakad to Mumbai", "Wakad to Mumbai Car Rentals"],
  ["Wakad to Mumbai One Way Cabs", "Cheap Wakad to Mumbai Cab"],
  ["Wakad to Mumbai Taxi Fare", "Book Wakad to Mumbai Cab Online"],
  ["Wakad to Mumbai Outstation Cabs", "24x7 Wakad to Mumbai Taxi Service"],
  ["Best Wakad to Mumbai Cab Service", ""]
],






whychoose: [
  {
    WhyChooseheading: "Trusted Wakad to Mumbai Cab Service",
    WhyChoosedescription: "Trustline Travels offers dependable Wakad to Mumbai cab services with timely pickups and comfortable travel for every journey."
  },
  {
    WhyChooseheading: "Convenient Pickup from Wakad & Nearby Areas",
    WhyChoosedescription: "We provide doorstep pickup from Wakad, Tathawade, Hinjewadi, Pimple Saudagar, Kalewadi, and surrounding localities."
  },
  {
    WhyChooseheading: "Safe Expressway Travel",
    WhyChoosedescription: "Our experienced chauffeurs ensure a secure and hassle-free journey via the Mumbai-Pune Expressway with complete driving professionalism."
  },
  {
    WhyChooseheading: "Reasonable & Transparent Pricing",
    WhyChoosedescription: "Travel with confidence knowing our fares are competitive, clearly explained, and free from hidden charges."
  },
  {
    WhyChooseheading: "Comfortable Fleet for Every Passenger",
    WhyChoosedescription: "Choose from clean and well-maintained Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers."
  },
  {
    WhyChooseheading: "Flexible Travel Plans",
    WhyChoosedescription: "Book one-way, round-trip, airport transfer, or customized travel packages according to your schedule."
  },
  {
    WhyChooseheading: "Suitable for Business & Family Trips",
    WhyChoosedescription: "Whether you're traveling for corporate meetings, vacations, medical visits, or personal work, we have the right cab for you."
  },
  {
    WhyChooseheading: "Fast Booking & Dedicated Support",
    WhyChoosedescription: "Get instant fare quotations, quick confirmations, and responsive customer support for every booking."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Wakad to Mumbai cab service?",
    answer: "Yes, Trustline Travels offers reliable Wakad to Mumbai cab services for one-way, round-trip, airport, and corporate travel."
  },
  {
    question: "Can I book a one-way cab from Wakad to Mumbai?",
    answer: "Yes, we provide affordable one-way cab services without charging return fare, making travel economical."
  },
  {
    question: "Which vehicles are available for Wakad to Mumbai travel?",
    answer: "Our fleet includes Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers for all types of travelers."
  },
  {
    question: "Do you provide pickup from nearby areas of Wakad?",
    answer: "Yes, we provide pickup from Wakad, Tathawade, Hinjewadi, Pimple Saudagar, Kalewadi, Vishal Nagar, and nearby locations."
  },
  {
    question: "Can I book a cab from Wakad to Mumbai Airport?",
    answer: "Yes, we provide direct airport transfers to Mumbai Airport Terminal 1 and Terminal 2 from Wakad."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless specified in your booking quotation."
  },
  {
    question: "Is your Wakad to Mumbai cab service available 24/7?",
    answer: "Yes, Trustline Travels provides cab services throughout the day and night for your travel convenience."
  },
  {
    question: "Can I book a cab in advance?",
    answer: "Yes, advance reservations are recommended to ensure your preferred vehicle and pickup timing."
  },
  {
    question: "Do you offer cabs for office and corporate travel?",
    answer: "Yes, our Wakad to Mumbai cab service is frequently used by corporate professionals for meetings, conferences, and official travel."
  },
  {
    question: "How can I book a Wakad to Mumbai cab with Trustline Travels?",
    answer: "Simply share your pickup address, destination, travel date, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Prashant More",
    feedback: "I needed a reliable cab from Wakad to Mumbai for a client presentation, and Trustline Travels delivered outstanding service. The pickup was punctual, and the journey was smooth from start to finish.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Aishwarya Patil",
    feedback: "Trustline Travels arranged our family trip from Wakad to Mumbai in an Innova Crysta. The vehicle was spotless, the driver was courteous, and the overall experience was comfortable and enjoyable.",
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
  "name": "Wakad to Mumbai Cab Service",
  "image": "https://www.trustlinetravels.com/assets/images/wakad-to-mumbai-cab.webp",
  "description": "Book Wakad to Mumbai cab service for safe, comfortable, and affordable intercity travel. Trustline Travels offers one-way, round-trip, and airport taxi services with Sedan, Ertiga, SUV, Innova, Innova Crysta, and luxury cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6124"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/wakad-to-mumbai-cab"
  }
};




  return (
    <div>

<Helmet>
  <title>Wakad to Mumbai Cab | Airport & One Way Taxi | +91 8087080034</title>

  <meta
    name="description"
    content="Book Wakad to Mumbai cab service with Trustline Travels for reliable one-way, round-trip, and airport transfers. Get affordable Sedan, Ertiga, SUV, Innova, and Innova Crysta taxi services with professional drivers available 24x7."
  />

  <meta
    name="keywords"
    content="wakad to mumbai cab, wakad to mumbai airport cab, wakad dadar cab, taxi wakad to mumbai international airport, wakad to mumbai domestic airport cab fare, wakad to mumbai innova cab, wakad to mumbai taxi service, wakad to mumbai one way cab, wakad to mumbai airport taxi, wakad to mumbai ertiga cab, wakad pune to mumbai cab, wakad mumbai cab booking, wakad to mumbai drop taxi"
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
              <img src='/images/keyword/40.jpg' alt='img' className='img-fluid' />
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

export default Wakadtomumbaicabs;