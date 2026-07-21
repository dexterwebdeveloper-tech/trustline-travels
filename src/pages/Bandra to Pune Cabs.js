import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Bandratopunecabs() {



  const cardData = {


  keyword: "Bandra to Pune Cabs",

  headingDescription: "Trustline Travels provides reliable Bandra to Pune cab services with safe, comfortable, and affordable transportation for business travel, corporate meetings, airport transfers, family trips, and outstation journeys. Whether you need a one-way taxi or a round-trip cab, our professional chauffeurs ensure timely pickups, smooth highway travel, and a hassle-free journey from Bandra to Pune. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury vehicles to match every travel requirement. With transparent pricing, doorstep pickup, easy online booking, experienced drivers, well-maintained cars, flexible travel schedules, and 24/7 customer support, Trustline Travels is your trusted choice for Bandra to Pune taxi services.",

  topPlaces: [
    {
      title: "Balewadi",
      description: "Balewadi is a rapidly developing commercial and residential destination in Pune, known for Balewadi High Street, corporate offices, premium housing projects, restaurants, and modern infrastructure. It is a preferred location for professionals and business travelers."
    },
    {
      title: "Aundh",
      description: "Aundh is one of Pune's premium localities featuring corporate offices, educational institutions, healthcare facilities, shopping areas, and excellent connectivity. It is popular among professionals, families, and visitors looking for convenient city access."
    },
    {
      title: "Talawade IT Park",
      description: "Talawade IT Park is an emerging technology hub in Pune, housing software companies, IT firms, business centers, and corporate campuses. It attracts professionals and companies requiring reliable transportation solutions."
    },
    {
      title: "Wakad",
      description: "Wakad is a fast-growing suburb near Hinjewadi, known for IT professionals, residential projects, commercial complexes, restaurants, and excellent connectivity to Pune's major business areas."
    },
    {
      title: "Chakan Industrial Area",
      description: "Chakan Industrial Area is one of Maharashtra's major manufacturing hubs, home to automobile companies, engineering industries, logistics centers, and large industrial units. It is an important destination for corporate and industrial travel."
    },
    {
      title: "Pune Airport",
      description: "Pune Airport connects the city with major destinations across India and serves business travelers, tourists, and corporate passengers. It is a key location for airport transfers and professional travel requirements."
    },
    {
      title: "Aga Khan Palace",
      description: "Aga Khan Palace is a historic landmark in Pune known for its beautiful architecture and connection with India's freedom movement. It is a popular destination for tourists, history lovers, and cultural visitors."
    },
    {
      title: "Pataleshwar Cave Temple",
      description: "Pataleshwar Cave Temple is an ancient rock-cut temple located in central Pune, featuring impressive stone carvings and historical architecture. It attracts visitors interested in heritage and spirituality."
    },
    {
      title: "Lonavala",
      description: "Lonavala is a scenic hill station between Mumbai and Pune, famous for waterfalls, viewpoints, caves, lush greenery, and pleasant weather. It is a popular weekend getaway for families and travelers."
    },
    {
      title: "Sinhagad Fort",
      description: "Sinhagad Fort is a historic hill fort near Pune offering beautiful mountain views, trekking experiences, and insights into Maharashtra's rich history. It is a favorite destination for adventure lovers and nature enthusiasts."
    }
  ],






"services": [
  {
    "name": "Bandra Terminus to Pune Cab",
    "description": "Book Bandra Terminus to Pune Cab for safe and comfortable intercity travel with professional chauffeurs, clean AC vehicles, transparent pricing, doorstep pickup, and reliable service. Choose Sedan, Ertiga, Innova Crysta, SUV, and premium cars for business trips, family travel, airport transfers, railway pickup, and outstation journeys."
  },
  {
    "name": "Bandra Terminus to Pune Taxi Fare",
    "description": "Check Bandra Terminus to Pune Taxi Fare with affordable rates, fixed pricing options, multiple vehicle choices, experienced drivers, and comfortable taxi service for one way and round trip travel."
  },
  {
    "name": "Bandra to Pune Taxi",
    "description": "Book Bandra to Pune Taxi for convenient travel with professional drivers, spacious vehicles, AC comfort, luggage support, and reliable transportation between Mumbai and Pune."
  },
  {
    "name": "Bandra to Pune Taxi Fare",
    "description": "Get Bandra to Pune Taxi Fare details with transparent charges, affordable packages, premium vehicles, and comfortable chauffeur-driven travel options."
  },
  {
    "name": "Bandra to Pune One Way Taxi",
    "description": "Choose Bandra to Pune One Way Taxi for direct destination travel with no return charges, fixed fares, doorstep pickup, and comfortable AC vehicles."
  },
  {
    "name": "Taxi from Bandra Terminus to Pune",
    "description": "Reserve Taxi from Bandra Terminus to Pune with experienced chauffeurs, clean cars, flexible booking, affordable pricing, and safe highway transportation."
  },
  {
    "name": "Bandra to Pune Drop Taxi",
    "description": "Book Bandra to Pune Drop Taxi for point-to-point travel with professional drivers, economical fares, premium cars, and hassle-free destination drop service."
  },
  {
    "name": "Bandra to Pune Innova Taxi Fare",
    "description": "Check Bandra to Pune Innova Taxi Fare for premium family travel with spacious seating, AC comfort, luggage space, and reliable Innova cab service."
  },
  {
    "name": "Bandra to Pune Ertiga Car Fare",
    "description": "Get Bandra to Pune Ertiga Car Fare with affordable pricing, comfortable seating, professional drivers, and reliable Ertiga taxi service for families and groups."
  },
  {
    "name": "Bandra to Pune Round Trip Cab Booking",
    "description": "Book Bandra to Pune Round Trip Cab Booking for flexible return travel with premium vehicles, experienced chauffeurs, transparent fares, and convenient schedules."
  },
  {
    "name": "Mumbai to Pune Taxi Fare",
    "description": "Check Mumbai to Pune Taxi Fare with affordable rates, multiple vehicle options, fixed pricing, and comfortable intercity travel solutions."
  },
  {
    "name": "Mumbai to Pune Car Rental",
    "description": "Choose Mumbai to Pune Car Rental with chauffeur-driven Sedan, Ertiga, Innova Crysta, SUV, and premium cars for business, family, and private travel."
  },
  {
    "name": "Bandra Kurla Complex to Pune Cab",
    "description": "Book Bandra Kurla Complex to Pune Cab for corporate and business travel with professional chauffeurs, comfortable vehicles, punctual pickup, and reliable service."
  },
  {
    "name": "Bandra Kurla Complex to Pune Cab Fare",
    "description": "Find Bandra Kurla Complex to Pune Cab Fare with transparent pricing, affordable travel packages, and premium vehicle options."
  },
  {
    "name": "Bandra Terminus to Pune Taxi",
    "description": "Reserve Bandra Terminus to Pune Taxi for railway pickup and intercity travel with clean AC cars, trained drivers, and comfortable journeys."
  },
  {
    "name": "Best Cab Service Mumbai to Pune",
    "description": "Choose Best Cab Service Mumbai to Pune for reliable transportation with premium vehicles, experienced chauffeurs, affordable fares, and 24x7 booking support."
  },
  {
    "name": "Cab Service in Bandra Mumbai",
    "description": "Book Cab Service in Bandra Mumbai for local and outstation travel with professional drivers, well-maintained vehicles, airport transfers, and affordable pricing."
  },
  {
    "name": "Bandra to Pune Innova Crysta Cab",
    "description": "Travel with Bandra to Pune Innova Crysta Cab featuring luxury interiors, spacious seating, AC comfort, luggage capacity, and premium chauffeur service."
  },
  {
    "name": "Bandra to Pune Ertiga Cab",
    "description": "Book Bandra to Pune Ertiga Cab for family and group travel with comfortable seating, reliable drivers, affordable fares, and smooth highway journeys."
  },
  {
    "name": "Bandra to Pimpri Chinchwad Cab",
    "description": "Choose Bandra to Pimpri Chinchwad Cab for business and personal travel with experienced chauffeurs, clean vehicles, flexible pickup, and transparent pricing."
  },
  {
    "name": "Bandra to Outstation Cab Service",
    "description": "Book Bandra to Outstation Cab Service for long-distance journeys with premium cars, professional drivers, affordable rates, and reliable travel support."
  },
  {
    "name": "Bandra Terminus Taxi Service for Outstation",
    "description": "Choose Bandra Terminus Taxi Service for Outstation travel with comfortable vehicles, experienced chauffeurs, timely pickup, and safe highway transportation."
  },
  {
    "name": "Bandra to Pune Cab",
    "description": "Book Bandra to Pune Cab for one way, round trip, airport, and outstation travel with Sedan, Ertiga, Innova Crysta, SUV, and premium vehicle options."
  },
  {
    "name": "Bandra to Pune Taxi",
    "description": "Choose Bandra to Pune Taxi for affordable and comfortable travel with professional drivers, AC vehicles, transparent fares, and reliable service."
  },
  {
    "name": "Bandra to Pune Cab Service",
    "description": "Reserve Bandra to Pune Cab Service with experienced chauffeurs, clean vehicles, doorstep pickup, affordable pricing, and smooth intercity transportation."
  },
  {
    "name": "Bandra to Pune Taxi Service",
    "description": "Book Bandra to Pune Taxi Service for safe journeys with premium cars, flexible schedules, professional drivers, and customer-friendly support."
  },
  {
    "name": "Bandra to Pune Cab Booking",
    "description": "Complete Bandra to Pune Cab Booking online with quick confirmation, multiple car choices, transparent pricing, and hassle-free reservation."
  },
  {
    "name": "Cab from Bandra to Pune",
    "description": "Hire Cab from Bandra to Pune with chauffeur-driven vehicles, comfortable seating, luggage space, and reliable long-distance travel service."
  },
  {
    "name": "Bandra to Pune Car Rental",
    "description": "Choose Bandra to Pune Car Rental with premium cars for business trips, family travel, airport transfers, and private journeys."
  },
  {
    "name": "Bandra to Pune One Way Cab",
    "description": "Book Bandra to Pune One Way Cab for direct travel with affordable fares, professional chauffeurs, and comfortable AC vehicles."
  },
  {
    "name": "Cheap Bandra to Pune Cab",
    "description": "Choose Cheap Bandra to Pune Cab with budget-friendly pricing, reliable service, clean cars, and experienced drivers."
  },
  {
    "name": "Book Bandra to Pune Cab Online",
    "description": "Book Bandra to Pune Cab Online with instant confirmation, secure reservation, flexible travel options, and professional chauffeur support."
  },
  {
    "name": "Bandra to Pune Outstation Cab",
    "description": "Travel with Bandra to Pune Outstation Cab featuring safe highway travel, premium vehicles, experienced drivers, and affordable packages."
  },
  {
    "name": "Bandra to Pune Airport Cab",
    "description": "Reserve Bandra to Pune Airport Cab for airport transfers with timely pickup, luggage assistance, AC vehicles, and dependable travel service."
  },
  {
    "name": "24x7 Bandra to Pune Taxi Service",
    "description": "Get 24x7 Bandra to Pune Taxi Service with round-the-clock booking support, professional chauffeurs, and comfortable transportation."
  },
  {
    "name": "Best Bandra to Pune Cab Service",
    "description": "Choose Best Bandra to Pune Cab Service for premium vehicles, affordable fares, experienced drivers, and reliable Mumbai Pune travel solutions."
  }
],

"tableData": [
  ["Bandra Terminus to Pune Cab", "Bandra Terminus to Pune Taxi Fare"],
  ["Bandra to Pune Taxi", "Bandra to Pune Taxi Fare"],
  ["Bandra to Pune One Way Taxi", "Taxi from Bandra Terminus to Pune"],
  ["Bandra to Pune Drop Taxi", "Bandra to Pune Innova Taxi Fare"],
  ["Bandra to Pune Ertiga Car Fare", "Bandra to Pune Round Trip Cab Booking"],
  ["Mumbai to Pune Taxi Fare", "Mumbai to Pune Car Rental"],
  ["Bandra Kurla Complex to Pune Cab", "Bandra Kurla Complex to Pune Cab Fare"],
  ["Bandra Terminus to Pune Taxi", "Best Cab Service Mumbai to Pune"],
  ["Cab Service in Bandra Mumbai", "Bandra to Pune Innova Crysta Cab"],
  ["Bandra to Pune Ertiga Cab", "Bandra to Pimpri Chinchwad Cab"],
  ["Bandra to Outstation Cab Service", "Bandra Terminus Taxi Service for Outstation"],
  ["Bandra to Pune Cab", "Bandra to Pune Taxi"],
  ["Bandra to Pune Cab Service", "Bandra to Pune Taxi Service"],
  ["Bandra to Pune Cab Booking", "Bandra to Pune Car Rental"],
  ["Bandra to Pune One Way Cab", "Cheap Bandra to Pune Cab"],
  ["Book Bandra to Pune Cab Online", "Bandra to Pune Outstation Cab"],
  ["Bandra to Pune Airport Cab", "24x7 Bandra to Pune Taxi Service"],
  ["Best Bandra to Pune Cab Service", ""]
],





whychoose: [
  {
    WhyChooseheading: "Trusted Bandra to Pune Cab Service",
    WhyChoosedescription: "Trustline Travels provides reliable Bandra to Pune cab services with comfortable vehicles, experienced chauffeurs, and smooth intercity travel solutions."
  },
  {
    WhyChooseheading: "Convenient Pickup from Bandra",
    WhyChoosedescription: "Get doorstep pickup from Bandra East, Bandra West, hotels, offices, railway stations, and nearby locations with direct drop anywhere in Pune."
  },
  {
    WhyChooseheading: "Safe Mumbai Pune Expressway Travel",
    WhyChoosedescription: "Our professional drivers ensure a secure and comfortable journey with excellent knowledge of the Mumbai-Pune route."
  },
  {
    WhyChooseheading: "Wide Range of Cab Options",
    WhyChoosedescription: "Choose from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers based on your group size and comfort needs."
  },
  {
    WhyChooseheading: "Affordable & Transparent Pricing",
    WhyChoosedescription: "Enjoy competitive Bandra to Pune cab fares with clear quotations and no hidden charges before confirming your ride."
  },
  {
    WhyChooseheading: "One Way and Round Trip Booking",
    WhyChoosedescription: "Select one-way travel, return journeys, or customized cab packages according to your schedule and travel requirements."
  },
  {
    WhyChooseheading: "Suitable for Every Type of Journey",
    WhyChoosedescription: "Our Bandra to Pune cabs are ideal for corporate travel, airport transfers, family trips, medical visits, and personal travel."
  },
  {
    WhyChooseheading: "24/7 Booking & Travel Support",
    WhyChoosedescription: "Book your cab anytime with quick confirmation, reliable assistance, and complete support throughout your journey."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Bandra to Pune cab service?",
    answer: "Yes, Trustline Travels offers dependable Bandra to Pune cab services for one-way trips, round trips, airport transfers, and business travel."
  },
  {
    question: "Can I book a one-way cab from Bandra to Pune?",
    answer: "Yes, one-way cab services are available from Bandra to Pune with flexible pickup and drop facilities."
  },
  {
    question: "Do you provide pickup from Bandra East and Bandra West?",
    answer: "Yes, we provide pickup from both Bandra East and Bandra West along with nearby Mumbai locations."
  },
  {
    question: "Which cars are available for Bandra to Pune travel?",
    answer: "Our available vehicles include Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers."
  },
  {
    question: "Can I book a Bandra to Pune cab for Mumbai Airport transfer?",
    answer: "Yes, we provide airport transfer cabs from Bandra and nearby Mumbai Airport areas to Pune."
  },
  {
    question: "Is Bandra to Pune cab service available 24 hours?",
    answer: "Yes, our cab services are available 24/7 for convenient travel according to your preferred timing."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless included in the confirmed fare."
  },
  {
    question: "Can I reserve my Bandra to Pune cab before travel?",
    answer: "Yes, advance booking is recommended to get your preferred vehicle and scheduled pickup time."
  },
  {
    question: "Is this cab service useful for corporate travelers?",
    answer: "Yes, our Bandra to Pune cab service supports corporate meetings, office travel, employee transportation, and business journeys."
  },
  {
    question: "How can I book Bandra to Pune Cabs with Trustline Travels?",
    answer: "Provide your pickup location, Pune destination, travel date, passenger details, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Chirag Mehta",
    feedback: "The Bandra to Pune ride was organized perfectly with timely pickup and excellent driver coordination. The comfortable vehicle made the long-distance journey smooth and enjoyable.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Snehal Patil",
    feedback: "A great travel experience with professional service, clean interiors, and easy communication. Trustline Travels made the complete journey from Bandra to Pune convenient and relaxing.",
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
  "name": "Bandra to Pune Cabs Service",
  "image": "https://www.trustlinetravels.com/assets/images/bandra-to-pune-cabs.webp",
  "description": "Book Bandra to Pune cab service with Trustline Travels for safe, comfortable, and affordable intercity travel. Get one-way, round-trip, airport, and outstation taxi services from Bandra Mumbai to Pune with Sedan, Ertiga, SUV, Innova, Innova Crysta, and premium cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "7834"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/bandra-to-pune-cabs"
  }
};



  return (
    <div>


<Helmet>
  <title>Bandra to Pune Cabs | One Way Taxi Service | +91 8087080034</title>

  <meta
    name="description"
    content="Book Bandra to Pune cab service with Trustline Travels for reliable and affordable intercity travel. Get one-way, round-trip, airport, and private taxi services with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7."
  />

  <meta
    name="keywords"
    content="bandra terminus to pune cab, bandra terminus to pune taxi fare, bandra to pune taxi, bandra to pune taxi fare, bandra to pune one way taxi, taxi from bandra terminus to pune, bandra to pune cab service, Bandra to Pune Cabs, Bandra Pune One Way Cab, Bandra Pune Round Trip Taxi, Bandra Pune Outstation Cab, Bandra Pune Innova Crysta Taxi, Bandra Pune Airport Cab"
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
              <img src='/images/keyword/96.jpg' alt='img' className='img-fluid' />
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

export default Bandratopunecabs;