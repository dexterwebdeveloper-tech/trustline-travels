import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Kharghartopunecabs() {



  const cardData = {


  keyword: "Kharghar to Pune Cabs",

  headingDescription: "Trustline Travels provides reliable Kharghar to Pune cab services with safe, comfortable, and affordable transportation for business travel, corporate meetings, airport transfers, family trips, industrial visits, and outstation journeys. Whether you need a one-way taxi or a round-trip cab, our professional chauffeurs ensure timely pickups, smooth travel via the Mumbai-Pune Expressway, and a comfortable journey from Kharghar to Pune. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury vehicles to suit every travel requirement. With transparent pricing, doorstep pickup, easy online booking, experienced drivers, well-maintained vehicles, flexible travel schedules, and 24/7 customer support, Trustline Travels is your trusted choice for Kharghar to Pune taxi services.",

  topPlaces: [
    {
      title: "Hinjewadi IT Park",
      description: "Hinjewadi IT Park is Pune's largest technology and corporate hub, home to multinational companies, software firms, startups, and business campuses. It is one of the most preferred destinations for professionals traveling from Mumbai."
    },
    {
      title: "Kharadi",
      description: "Kharadi is a major IT and commercial destination featuring EON IT Park, corporate offices, financial companies, hotels, and modern business infrastructure. It attracts thousands of professionals and business travelers."
    },
    {
      title: "Pimpri Chinchwad",
      description: "Pimpri Chinchwad is a major industrial and commercial region known for automobile companies, manufacturing units, engineering industries, corporate offices, and excellent infrastructure."
    },
    {
      title: "Wakad",
      description: "Wakad is a fast-growing Pune suburb offering premium residential projects, commercial complexes, restaurants, educational institutions, and easy connectivity to Hinjewadi and other IT areas."
    },
    {
      title: "Chakan MIDC",
      description: "Chakan MIDC is a leading industrial corridor near Pune, housing automobile manufacturers, engineering companies, logistics centers, and large production facilities. It is an important destination for business travel."
    },
    {
      title: "Magarpatta City",
      description: "Magarpatta City is a modern integrated township with IT parks, corporate offices, shopping destinations, residential communities, and lifestyle facilities. It is a preferred location for corporate executives and families."
    },
    {
      title: "Dagdusheth Halwai Ganpati Temple",
      description: "Dagdusheth Halwai Ganpati Temple is one of Pune's most famous religious landmarks, attracting devotees and tourists with its rich heritage, beautiful decoration, and spiritual importance."
    },
    {
      title: "Aga Khan Palace",
      description: "Aga Khan Palace is a historic Pune monument known for its beautiful architecture, gardens, and connection with India's freedom movement. It is a popular destination for tourists and history lovers."
    },
    {
      title: "Lonavala",
      description: "Lonavala is a scenic hill station located between Mumbai and Pune, famous for waterfalls, viewpoints, caves, valleys, and pleasant weather. It is a popular weekend getaway destination."
    },
    {
      title: "Bhushi Dam",
      description: "Bhushi Dam near Lonavala is a famous tourist attraction known for flowing water during monsoon, scenic surroundings, and a refreshing natural atmosphere. It is a favorite destination for families and travelers."
    }
  ],






"services": [
  {
    "name": "Kharghar to Pune Taxi",
    "description": "Book Kharghar to Pune Taxi with clean AC Sedan, Ertiga, Innova, Innova Crysta, and SUV vehicles for safe and comfortable intercity travel. Enjoy fixed fares, professional chauffeurs, doorstep pickup, online booking, luggage assistance, one way and round trip options, corporate travel, family trips, and reliable 24x7 customer support."
  },
  {
    "name": "Kharghar to Pune Cab Cost",
    "description": "Check Kharghar to Pune Cab Cost with transparent pricing, affordable fare packages, multiple vehicle choices, fixed rates, and no hidden charges for comfortable outstation travel."
  },
  {
    "name": "Bandra Kurla Complex to Pune Cab",
    "description": "Reserve Bandra Kurla Complex to Pune Cab with premium AC vehicles, experienced drivers, corporate travel options, airport transfers, fixed pricing, and comfortable highway journeys."
  },
  {
    "name": "Mahim to Pune Cab Fare",
    "description": "Find Mahim to Pune Cab Fare with transparent rates, Sedan, Ertiga, Innova Crysta, and SUV options along with professional chauffeurs and reliable service."
  },
  {
    "name": "Kanjurmarg to Pune Cab",
    "description": "Book Kanjurmarg to Pune Cab for safe and comfortable travel with clean vehicles, experienced drivers, affordable fares, and convenient doorstep pickup."
  },
  {
    "name": "Mumbra to Pune Cab Service",
    "description": "Choose Mumbra to Pune Cab Service for reliable outstation transportation with AC vehicles, fixed fares, professional chauffeurs, and flexible pickup timings."
  },
  {
    "name": "Vikhroli to Pune Cab Service",
    "description": "Book Vikhroli to Pune Cab Service with premium vehicles, transparent pricing, online booking, experienced drivers, and comfortable intercity travel."
  },
  {
    "name": "Kharghar to Pune One Way Cab",
    "description": "Reserve Kharghar to Pune One Way Cab with instant confirmation, fixed pricing, clean AC cars, professional chauffeurs, and hassle-free doorstep pickup."
  },
  {
    "name": "Kharghar to Pune Round Trip Cab",
    "description": "Choose Kharghar to Pune Round Trip Cab with flexible return schedules, premium vehicles, affordable packages, and reliable chauffeur-driven travel."
  },
  {
    "name": "Kalina to Pune Cab",
    "description": "Book Kalina to Pune Cab for business travel, family journeys, airport transfers, and comfortable long-distance transportation with experienced drivers."
  },
  {
    "name": "Cab Service in Kharghar Mumbai",
    "description": "Hire Cab Service in Kharghar Mumbai for local rides, airport transfers, Pune trips, outstation travel, and corporate transportation with professional chauffeurs."
  },
  {
    "name": "Ertiga Cab in Kharghar Mumbai",
    "description": "Book Ertiga Cab in Kharghar Mumbai for spacious six-seater travel, family trips, airport transfers, and comfortable outstation journeys."
  },
  {
    "name": "Ertiga Taxi Fare in Kharghar",
    "description": "Check Ertiga Taxi Fare in Kharghar with affordable pricing, transparent packages, professional drivers, and comfortable AC vehicles."
  },
  {
    "name": "Innova Cab in Kharghar",
    "description": "Reserve Innova Cab in Kharghar for family travel, corporate trips, airport transfers, group journeys, and premium chauffeur-driven comfort."
  },
  {
    "name": "Kharghar Cab Service",
    "description": "Choose Kharghar Cab Service for reliable local and outstation travel with well-maintained vehicles, experienced drivers, online booking, and 24x7 assistance."
  },
  {
    "name": "Outstation Cab Service in Kharghar",
    "description": "Book Outstation Cab Service in Kharghar for Pune, Mumbai Airport, Nashik, Lonavala, Shirdi, and other destinations with fixed fares and comfortable vehicles."
  },
  {
    "name": "Best Taxi Service in Kharghar",
    "description": "Choose the Best Taxi Service in Kharghar with professional chauffeurs, clean AC cars, affordable fares, online booking, and dependable customer support."
  },
  {
    "name": "Kharghar to Pune Cab",
    "description": "Book Kharghar to Pune Cab with Sedan, Ertiga, Innova Crysta, SUV, and premium vehicles for smooth highway travel, airport transfers, family trips, and corporate journeys."
  },
  {
    "name": "Kharghar to Pune Cabs",
    "description": "Reserve Kharghar to Pune Cabs with multiple vehicle options, fixed fares, professional drivers, online booking, and comfortable one way or round trip travel."
  },
  {
    "name": "Kharghar to Pune Cab Service",
    "description": "Our Kharghar to Pune Cab Service offers affordable pricing, premium AC vehicles, experienced chauffeurs, doorstep pickup, and reliable intercity transportation."
  },
  {
    "name": "Kharghar to Pune Taxi Service",
    "description": "Travel with Kharghar to Pune Taxi Service featuring clean vehicles, transparent fares, flexible timings, luggage assistance, and safe highway journeys."
  },
  {
    "name": "Kharghar to Pune One Way Cab",
    "description": "Choose Kharghar to Pune One Way Cab for direct travel with affordable rates, professional drivers, AC vehicles, and quick online confirmation."
  },
  {
    "name": "Kharghar to Pune Taxi Fare",
    "description": "Check Kharghar to Pune Taxi Fare with fixed packages, transparent pricing, multiple vehicle categories, and no hidden charges."
  },
  {
    "name": "Kharghar to Pune Cab Booking",
    "description": "Complete Kharghar to Pune Cab Booking online with instant confirmation, secure reservations, flexible pickup options, and professional chauffeur service."
  },
  {
    "name": "Cab from Kharghar to Pune",
    "description": "Book Cab from Kharghar to Pune for comfortable business trips, family vacations, airport transfers, and reliable outstation journeys."
  },
  {
    "name": "Kharghar to Pune Car Rental",
    "description": "Hire Kharghar to Pune Car Rental with Sedan, Ertiga, Innova Crysta, SUV, and luxury vehicles for one way, round trip, and corporate travel."
  },
  {
    "name": "Kharghar to Pune Taxi Booking Online",
    "description": "Reserve Kharghar to Pune Taxi Booking Online with quick confirmation, transparent fares, multiple cab choices, and 24x7 customer support."
  },
  {
    "name": "Cheap Cab Kharghar to Pune",
    "description": "Book Cheap Cab Kharghar to Pune with economical fares, clean AC vehicles, experienced drivers, and dependable long-distance transportation."
  },
  {
    "name": "Kharghar to Pune Outstation Cab",
    "description": "Choose Kharghar to Pune Outstation Cab for safe travel with fixed fares, premium vehicles, professional chauffeurs, and comfortable seating."
  },
  {
    "name": "Kharghar to Pune AC Taxi Service",
    "description": "Travel with Kharghar to Pune AC Taxi Service featuring air-conditioned vehicles, affordable pricing, experienced drivers, and smooth highway rides."
  },
  {
    "name": "Kharghar to Pune Innova Cab",
    "description": "Book Kharghar to Pune Innova Cab for spacious family travel, corporate trips, airport transfers, group tours, and premium comfort."
  },
  {
    "name": "Kharghar to Pune Cab Price",
    "description": "Check Kharghar to Pune Cab Price with transparent fare estimates, fixed packages, multiple vehicle options, and affordable travel solutions."
  }
],

"tableData": [
  ["Kharghar to Pune Taxi", "Kharghar to Pune Cab Cost"],
  ["Bandra Kurla Complex to Pune Cab", "Mahim to Pune Cab Fare"],
  ["Kanjurmarg to Pune Cab", "Mumbra to Pune Cab Service"],
  ["Vikhroli to Pune Cab Service", "Kharghar to Pune One Way Cab"],
  ["Kharghar to Pune Round Trip Cab", "Kalina to Pune Cab"],
  ["Cab Service in Kharghar Mumbai", "Ertiga Cab in Kharghar Mumbai"],
  ["Ertiga Taxi Fare in Kharghar", "Innova Cab in Kharghar"],
  ["Kharghar Cab Service", "Outstation Cab Service in Kharghar"],
  ["Best Taxi Service in Kharghar", "Kharghar to Pune Cab"],
  ["Kharghar to Pune Cabs", "Kharghar to Pune Cab Service"],
  ["Kharghar to Pune Taxi Service", "Kharghar to Pune One Way Cab"],
  ["Kharghar to Pune Taxi Fare", "Kharghar to Pune Cab Booking"],
  ["Cab from Kharghar to Pune", "Kharghar to Pune Car Rental"],
  ["Kharghar to Pune Taxi Booking Online", "Cheap Cab Kharghar to Pune"],
  ["Kharghar to Pune Outstation Cab", "Kharghar to Pune AC Taxi Service"],
  ["Kharghar to Pune Innova Cab", "Kharghar to Pune Cab Price"]
],





whychoose: [
  {
    WhyChooseheading: "Reliable Kharghar to Pune Cab Service",
    WhyChoosedescription: "Trustline Travels provides dependable Kharghar to Pune cab services with comfortable vehicles, professional drivers, and smooth intercity travel solutions."
  },
  {
    WhyChooseheading: "Convenient Pickup from Kharghar",
    WhyChoosedescription: "Get doorstep pickup from Kharghar sectors, Central Park, Kharghar Railway Station, offices, hotels, and residential areas with direct drop anywhere in Pune."
  },
  {
    WhyChooseheading: "Safe & Comfortable Mumbai Pune Travel",
    WhyChoosedescription: "Our experienced chauffeurs ensure a secure and relaxing journey with excellent knowledge of the Mumbai–Pune Expressway and travel routes."
  },
  {
    WhyChooseheading: "Multiple Car Options Available",
    WhyChoosedescription: "Choose from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers based on your passenger count and comfort requirements."
  },
  {
    WhyChooseheading: "Affordable Fare with Transparency",
    WhyChoosedescription: "Enjoy competitive cab pricing with clear fare details before booking and no hidden charges during your journey."
  },
  {
    WhyChooseheading: "One Way & Round Trip Cab Facility",
    WhyChoosedescription: "Book one-way cabs, return trips, airport transfers, or customized travel plans according to your schedule."
  },
  {
    WhyChooseheading: "Perfect for Corporate & Family Trips",
    WhyChoosedescription: "Our Kharghar to Pune cabs are suitable for office travel, business meetings, family vacations, airport transfers, and personal journeys."
  },
  {
    WhyChooseheading: "24/7 Cab Booking Support",
    WhyChoosedescription: "Book your Kharghar to Pune cab anytime with instant confirmation and dedicated customer assistance for a hassle-free experience."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Kharghar to Pune cab service?",
    answer: "Yes, Trustline Travels offers reliable Kharghar to Pune cab services for one-way trips, round trips, airport transfers, and corporate travel."
  },
  {
    question: "Can I book a one-way cab from Kharghar to Pune?",
    answer: "Yes, one-way cab services are available with convenient pickup from Kharghar and direct drop anywhere in Pune."
  },
  {
    question: "Do you provide pickup from Kharghar Railway Station and sectors?",
    answer: "Yes, pickup is available from Kharghar Railway Station, all major sectors, offices, hotels, and residential areas."
  },
  {
    question: "Which vehicles are available for Kharghar to Pune travel?",
    answer: "Our fleet includes Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers for comfortable long-distance travel."
  },
  {
    question: "Is Kharghar to Pune cab service available 24 hours?",
    answer: "Yes, our cab services operate 24/7, allowing you to travel at your preferred time."
  },
  {
    question: "Can I book a return cab from Pune to Kharghar?",
    answer: "Yes, round-trip cab services are available for passengers planning return travel between Pune and Kharghar."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless included in the confirmed booking quotation."
  },
  {
    question: "Should I book my Kharghar to Pune cab in advance?",
    answer: "Yes, advance booking is recommended to ensure vehicle availability and preferred pickup timing."
  },
  {
    question: "Do you provide Kharghar to Pune cabs for corporate travel?",
    answer: "Yes, our cab services are suitable for corporate meetings, employee transportation, client visits, and business travel."
  },
  {
    question: "How can I book Kharghar to Pune Cabs with Trustline Travels?",
    answer: "Share your pickup location, Pune destination, travel date, passenger details, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Sameer Joshi",
    feedback: "Trustline Travels provided excellent Kharghar to Pune cab service with timely pickup, a clean vehicle, and a professional driver. The entire journey was smooth and comfortable.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Radhika More",
    feedback: "The cab booking process was easy and the service quality was impressive. The driver was polite, the car was comfortable, and our trip to Pune was completely stress-free.",
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
  "name": "Kharghar to Pune Cabs",
  "image": "https://www.trustlinetravels.com/assets/images/kharghar-to-pune-cabs.webp",
  "description":
    "Book Kharghar to Pune Cabs with Trustline Travels for safe, comfortable, and affordable taxi services. We provide one-way and round-trip cabs from Kharghar to Pune, Bandra Kurla Complex (BKC), Mahim, Kanjurmarg, Mumbra, Vikhroli, and all Pune locations with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "8517"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/kharghar-to-pune-cabs"
  }
};









  return (
    <div>
<Helmet>
  <title>Kharghar to Pune Cabs | One Way Taxi Service | +91 8087080034</title>

  <meta
    name="description"
    content="Book Kharghar to Pune Cabs with Trustline Travels for reliable one-way and round-trip taxi services. Travel from Kharghar, Bandra Kurla Complex, Mahim, Kanjurmarg, Mumbra, and Vikhroli to Pune with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7."
  />

  <meta
    name="keywords"
    content="kharghar to pune taxi, kharghar to pune cab cost, bandra kurla complex to pune cab, mahim to pune cab fare, kanjurmarg to pune cab, mumbra to pune cab service, vikhroli to pune cab, Kharghar to Pune Cabs, Kharghar Pune Taxi Service, Kharghar to Pune Cab Booking"
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
              <img src='/images/keyword/19.jpg' alt='img' className='img-fluid' />
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

export default Kharghartopunecabs;