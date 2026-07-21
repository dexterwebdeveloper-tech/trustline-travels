import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Mumbapunecabbooking() {



  const cardData = {


  keyword: "Mumbai Pune Cab Booking",

  headingDescription: "Trustline Travels provides easy and reliable Mumbai Pune cab booking services with safe, comfortable, and affordable transportation for business travel, airport transfers, corporate meetings, family trips, and outstation journeys. Whether you need a one-way taxi, round-trip cab, or customized travel solution, our professional chauffeurs ensure timely pickups and a smooth journey between Mumbai and Pune. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury vehicles to meet every passenger requirement. With transparent pricing, doorstep pickup, simple online booking, experienced drivers, well-maintained cars, flexible schedules, and 24/7 customer support, Trustline Travels is your trusted choice for Mumbai Pune taxi services.",

  topPlaces: [
    {
      title: "Balewadi",
      description: "Balewadi is a fast-growing commercial and residential destination in Pune, known for Balewadi High Street, business spaces, premium housing projects, restaurants, and modern infrastructure. It attracts professionals and corporate travelers."
    },
    {
      title: "Yerwada",
      description: "Yerwada is an important commercial locality in Pune featuring business offices, IT companies, government establishments, hotels, and excellent connectivity to Pune Airport and central areas."
    },
    {
      title: "Pimple Saudagar",
      description: "Pimple Saudagar is a well-developed residential and commercial area known for modern housing projects, shopping destinations, restaurants, and easy connectivity to Pimpri Chinchwad and Pune IT hubs."
    },
    {
      title: "Tathawade",
      description: "Tathawade is an emerging Pune suburb featuring educational institutions, commercial developments, residential projects, and convenient access to Hinjewadi and Pimpri Chinchwad business areas."
    },
    {
      title: "Kalyani Nagar",
      description: "Kalyani Nagar is a premium Pune locality offering IT companies, business centers, luxury hotels, restaurants, and modern commercial infrastructure. It is a popular destination for professionals and visitors."
    },
    {
      title: "Hadapsar",
      description: "Hadapsar is a major commercial and residential hub known for Magarpatta City, IT companies, business parks, educational institutions, and excellent connectivity. It is preferred by daily commuters and corporate travelers."
    },
    {
      title: "Dagdusheth Halwai Ganpati Temple",
      description: "Dagdusheth Halwai Ganpati Temple is one of Pune's most famous cultural landmarks, attracting devotees and tourists due to its rich heritage, spiritual importance, and grand celebrations."
    },
    {
      title: "Shinde Chhatri",
      description: "Shinde Chhatri is a historic monument in Pune known for its unique architecture, cultural significance, and beautiful craftsmanship. It is a popular attraction for history and architecture enthusiasts."
    },
    {
      title: "Lonavala",
      description: "Lonavala is a scenic hill station between Mumbai and Pune, famous for waterfalls, valleys, viewpoints, caves, and pleasant weather. It is one of the most popular weekend destinations in Maharashtra."
    },
    {
      title: "Kamshet",
      description: "Kamshet is a beautiful hill destination near Pune known for lakes, greenery, adventure activities, and paragliding experiences. It is a popular getaway for nature lovers and adventure seekers."
    }
  ],






"services": [
  {
    "name": "Mumbai to Pune Taxi Fare Return",
    "description": "Check Mumbai to Pune Taxi Fare Return for affordable round-trip travel with transparent pricing, comfortable AC vehicles, professional chauffeurs, and flexible return schedules."
  },
  {
    "name": "Mumbai to Wanwadi Cab Service",
    "description": "Book Mumbai to Wanwadi Cab Service for safe intercity travel with clean cars, experienced drivers, affordable fares, and reliable pickup options."
  },
  {
    "name": "Mumbai to Mundhwa Cab Service",
    "description": "Choose Mumbai to Mundhwa Cab Service for comfortable travel with professional chauffeurs, AC vehicles, and convenient door-to-door transportation."
  },
  {
    "name": "Mumbai to Wadgaon Sheri Cab Service",
    "description": "Book Mumbai to Wadgaon Sheri Cab Service with reliable drivers, premium vehicles, transparent pricing, and smooth highway travel."
  },
  {
    "name": "Mumbai to Nigdi Cab Service",
    "description": "Reserve Mumbai to Nigdi Cab Service for affordable outstation travel with clean vehicles, experienced chauffeurs, and comfortable journeys."
  },
  {
    "name": "Mumbai to Swargate Cab",
    "description": "Book Mumbai to Swargate Cab for convenient travel with AC cars, professional drivers, flexible booking, and reliable transportation."
  },
  {
    "name": "Mumbai to Pune Station Cab",
    "description": "Choose Mumbai to Pune Station Cab for timely pickup and drop service with comfortable vehicles, affordable fares, and experienced chauffeurs."
  },
  {
    "name": "Mumbai to Shivaji Nagar Cab",
    "description": "Book Mumbai to Shivaji Nagar Cab for safe intercity travel with premium cars, professional drivers, and hassle-free booking."
  },
  {
    "name": "Mumbai Pune Taxi Booking",
    "description": "Complete Mumbai Pune Taxi Booking for reliable travel with multiple vehicle options, transparent fares, and comfortable chauffeur-driven service."
  },
  {
    "name": "Mumbai to Pune Taxi Booking Online",
    "description": "Book Mumbai to Pune Taxi Booking Online with instant confirmation, easy reservation, clean AC vehicles, and professional drivers."
  },
  {
    "name": "Cheap Cab Mumbai to Pune",
    "description": "Choose Cheap Cab Mumbai to Pune for budget-friendly travel with quality cars, experienced chauffeurs, and affordable pricing."
  },
  {
    "name": "Mumbai Pune Drop Taxi",
    "description": "Book Mumbai Pune Drop Taxi for one-way travel with direct destination drop, fixed fares, comfortable vehicles, and reliable service."
  },
  {
    "name": "Mumbai Pune Private Cab Booking",
    "description": "Reserve Mumbai Pune Private Cab Booking for exclusive travel with privacy, flexible schedules, premium cars, and professional drivers."
  },
  {
    "name": "Mumbai Pune Outstation Cab Booking",
    "description": "Choose Mumbai Pune Outstation Cab Booking for safe long-distance journeys with AC vehicles, trained chauffeurs, and affordable fares."
  },
  {
    "name": "Mumbai Pune AC Cab Booking",
    "description": "Book Mumbai Pune AC Cab Booking for comfortable highway travel with well-maintained air-conditioned cars and reliable service."
  },
  {
    "name": "Mumbai Pune Innova Cab Booking",
    "description": "Reserve Mumbai Pune Innova Cab Booking for family and group travel with spacious seating, luggage space, and premium comfort."
  },
  {
    "name": "Mumbai Pune Cab Per Km Rate",
    "description": "Check Mumbai Pune Cab Per Km Rate with transparent pricing, multiple vehicle options, and affordable travel packages."
  },
  {
    "name": "Mumbai Pune One Way Taxi Price",
    "description": "Find Mumbai Pune One Way Taxi Price for direct travel with fixed fares, comfortable vehicles, and no hidden charges."
  },
  {
    "name": "Mumbai Pune Airport Cab Booking",
    "description": "Book Mumbai Pune Airport Cab Booking for airport transfers with timely pickup, professional chauffeurs, and comfortable AC cars."
  },
  {
    "name": "Mumbai Pune Round Trip Cab Booking",
    "description": "Reserve Mumbai Pune Round Trip Cab Booking with flexible return timing, premium vehicles, affordable fares, and reliable service."
  }
],

"tableData": [
  ["Mumbai to Pune Taxi Fare Return", "Mumbai to Wanwadi Cab Service"],
  ["Mumbai to Mundhwa Cab Service", "Mumbai to Wadgaon Sheri Cab Service"],
  ["Mumbai to Nigdi Cab Service", "Mumbai to Swargate Cab"],
  ["Mumbai to Pune Station Cab", "Mumbai to Shivaji Nagar Cab"],
  ["Mumbai Pune Taxi Booking", "Mumbai to Pune Taxi Booking Online"],
  ["Cheap Cab Mumbai to Pune", "Mumbai Pune Drop Taxi"],
  ["Mumbai Pune Private Cab Booking", "Mumbai Pune Outstation Cab Booking"],
  ["Mumbai Pune AC Cab Booking", "Mumbai Pune Innova Cab Booking"],
  ["Mumbai Pune Cab Per Km Rate", "Mumbai Pune One Way Taxi Price"],
  ["Mumbai Pune Airport Cab Booking", "Mumbai Pune Round Trip Cab Booking"]
],





whychoose: [
  {
    WhyChooseheading: "Reliable Mumbai Pune Cab Booking Service",
    WhyChoosedescription: "Trustline Travels provides convenient Mumbai Pune cab booking with comfortable vehicles, professional drivers, and dependable travel solutions for every journey."
  },
  {
    WhyChooseheading: "Quick & Hassle-Free Booking Process",
    WhyChoosedescription: "Book your Mumbai Pune cab easily with fast confirmation, simple coordination, and complete assistance for your travel requirements."
  },
  {
    WhyChooseheading: "Experienced Drivers for Smooth Travel",
    WhyChoosedescription: "Our trained chauffeurs ensure safe and comfortable rides with excellent knowledge of Mumbai-Pune Expressway routes and traffic conditions."
  },
  {
    WhyChooseheading: "Wide Range of Travel Options",
    WhyChoosedescription: "Select from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers according to your passenger and luggage needs."
  },
  {
    WhyChooseheading: "Transparent Fare Before Booking",
    WhyChoosedescription: "Get clear Mumbai Pune cab fare details before confirmation with competitive pricing and no hidden charges."
  },
  {
    WhyChooseheading: "Pickup from Any Mumbai Location",
    WhyChoosedescription: "Book pickup from Mumbai Airport, railway stations, offices, hotels, residential areas, and other major locations across Mumbai."
  },
  {
    WhyChooseheading: "One Way & Round Trip Booking Facility",
    WhyChoosedescription: "Choose one-way cabs, return journeys, airport transfers, or customized travel packages based on your schedule."
  },
  {
    WhyChooseheading: "24/7 Customer Support",
    WhyChoosedescription: "Our support team is available round the clock to help with bookings, vehicle selection, and travel assistance."
  }
]

};

const faqData = [
  {
    question: "How can I book a Mumbai Pune cab with Trustline Travels?",
    answer: "You can book your Mumbai Pune cab by sharing pickup location, destination, travel date, passenger details, and preferred vehicle to get instant confirmation."
  },
  {
    question: "Does Trustline Travels provide online Mumbai Pune cab booking?",
    answer: "Yes, we provide easy online booking options with quick response and reliable travel arrangements."
  },
  {
    question: "Can I book a one-way cab from Mumbai to Pune?",
    answer: "Yes, one-way cab booking is available for passengers who need direct travel from Mumbai to Pune."
  },
  {
    question: "Which vehicles are available for Mumbai Pune cab booking?",
    answer: "We offer Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers for different travel requirements."
  },
  {
    question: "Can I book a cab from Mumbai Airport to Pune?",
    answer: "Yes, airport transfer cab booking is available from Mumbai Airport Terminal 1 and Terminal 2 to Pune."
  },
  {
    question: "Is Mumbai Pune cab booking available 24 hours?",
    answer: "Yes, you can book Mumbai Pune cabs anytime with our 24/7 customer support."
  },
  {
    question: "Are fares fixed during cab booking?",
    answer: "Fare details are shared clearly before booking confirmation to maintain complete pricing transparency."
  },
  {
    question: "Can I book a return cab from Pune to Mumbai?",
    answer: "Yes, round-trip cab booking options are available for passengers requiring return travel."
  },
  {
    question: "Do you provide corporate Mumbai Pune cab bookings?",
    answer: "Yes, we provide corporate travel solutions for business meetings, employee transportation, and regular office travel."
  },
  {
    question: "Why choose Trustline Travels for Mumbai Pune Cab Booking?",
    answer: "Trustline Travels offers reliable vehicles, experienced drivers, easy booking, transparent pricing, and comfortable travel between Mumbai and Pune."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Vishal More",
    feedback: "The Mumbai Pune cab booking process was quick and smooth. Trustline Travels provided excellent service with a clean vehicle, punctual driver, and comfortable journey.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Priyanka Shah",
    feedback: "A very convenient booking experience with professional support. The cab arrived on time and the complete Mumbai to Pune journey was safe and relaxing.",
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
  "name": "Mumbai Pune Cab Booking",
  "image": "https://www.trustlinetravels.com/assets/images/mumbai-pune-cab-booking.webp",
  "description":
    "Book Mumbai Pune Cab Booking with Trustline Travels for safe, reliable, and affordable taxi services. We provide one-way and round-trip cab booking from Mumbai to Pune including Wanwadi, Mundwa, Wadgaon Sheri, Nigdi, Swargate, Pune Railway Station, and all Pune locations with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7.",
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
    "url": "https://www.trustlinetravels.com/mumbai-pune-cab-booking"
  }
};



  return (
    <div>
<Helmet>
  <title>Mumbai Pune Cab Booking | Book Taxi Online | +91 8087080034</title>

  <meta
    name="description"
    content="Book Mumbai Pune Cab Booking with Trustline Travels for affordable one-way and round-trip taxi services. Travel comfortably to Wanwadi, Mundwa, Wadgaon Sheri, Nigdi, Swargate, Pune Railway Station, and all Pune locations with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7."
  />

  <meta
    name="keywords"
    content="mumbai to pune taxi fare return, mumbai to wanwadi cab service, mumbai to mundwa cab service, mumbai to wadgaon sheri cab service, mumbai to nigdi cab service, mumbai to swargate cab, mumbai to pune station cab, mumbai pune cab booking, mumbai to pune taxi booking, online mumbai pune cab booking, one way mumbai pune cab"
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
              <img src='/images/keyword/105.jpg' alt='img' className='img-fluid' />
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

export default Mumbapunecabbooking;