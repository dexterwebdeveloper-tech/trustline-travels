import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetomumbaitaxifare() {



  const cardData = {


     keyword: "Pune to Mumbai Taxi Fare",

  headingDescription: "Trustline Travels offers affordable Pune to Mumbai taxi fare with transparent pricing, reliable service, and comfortable travel for business trips, airport transfers, family vacations, and outstation journeys. Our taxi fares are competitively priced with no hidden charges, ensuring complete value for your money. Whether you book a one-way cab or a round-trip taxi, you can choose from AC Sedans, SUVs, Ertiga, Innova Crysta, Tempo Travellers, and luxury vehicles to match your travel needs. With experienced chauffeurs, doorstep pickup, 24/7 booking support, and well-maintained cars, Trustline Travels is the trusted choice for budget-friendly Pune to Mumbai taxi services.",

  topPlaces: [
    {
      title: "Chhatrapati Shivaji Maharaj International Airport",
      description: "Mumbai Airport is one of India's busiest aviation hubs, offering excellent domestic and international connectivity for business and leisure travelers."
    },
    {
      title: "Bandra Kurla Complex (BKC)",
      description: "BKC is Mumbai's leading financial and commercial district, attracting business professionals with corporate offices, banks, and convention centers."
    },
    {
      title: "Lower Parel",
      description: "Lower Parel is a thriving commercial destination featuring business parks, multinational companies, shopping malls, and premium hotels."
    },
    {
      title: "Navi Mumbai",
      description: "Navi Mumbai is a fast-growing business city known for IT parks, commercial complexes, educational institutions, and modern infrastructure."
    },
    {
      title: "SEEPZ MIDC",
      description: "SEEPZ MIDC is a prominent technology and export zone housing leading software companies, IT firms, and manufacturing businesses."
    },
    {
      title: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
      description: "CSMT is a historic railway station and UNESCO World Heritage Site that serves as one of Mumbai's major transportation hubs."
    },
    {
      title: "Jio World Convention Centre",
      description: "Located in BKC, Jio World Convention Centre hosts business conferences, exhibitions, trade shows, and international corporate events."
    },
    {
      title: "Powai Business District",
      description: "Powai is home to Hiranandani Business Park, technology companies, startups, educational institutions, and premium residential developments."
    },
    {
      title: "Marine Drive",
      description: "Marine Drive is Mumbai's famous coastal boulevard offering spectacular sea views, evening walks, and one of the city's most iconic skylines."
    },
    {
      title: "NESCO Business Centre",
      description: "NESCO Business Centre in Goregaon is a popular venue for exhibitions, trade fairs, corporate meetings, and large-scale business events."
    }
  ],





"services": [
  {
    "name": "Pune to Mumbai Fare by Cab",
    "description": "Check Pune to Mumbai fare by cab with transparent pricing for Sedan, Ertiga, Innova Crysta, and SUV vehicles. Our fixed fare includes comfortable AC travel, professional chauffeurs, and flexible pickup options for one-way, round-trip, airport transfer, and corporate travel. Pricing is shared in advance without hidden charges, making it easy to plan your intercity journey."
  },
  {
    "name": "Pune to Mumbai Taxi Charges",
    "description": "Know Pune to Mumbai taxi charges before your journey with affordable rates based on vehicle type, trip duration, tolls, and travel requirements. Suitable for business travelers, families, airport transfers, and outstation travel with reliable chauffeur service."
  },
  {
    "name": "Taxi Fare from Pune to Mumbai Airport",
    "description": "Get the latest taxi fare from Pune to Mumbai Airport for domestic and international terminals. Transparent airport transfer pricing, punctual pickups, luggage assistance, and comfortable AC vehicles ensure a smooth airport journey."
  },
  {
    "name": "Pune to Mumbai Cheap Cabs",
    "description": "Book Pune to Mumbai cheap cabs for economical one-way, round-trip, and airport travel without compromising comfort or safety. Clean vehicles, professional drivers, and fixed pricing provide excellent value for every traveler."
  },
  {
    "name": "Best Cab Service Pune to Mumbai",
    "description": "Choose the best cab service Pune to Mumbai for dependable intercity transportation. Our fleet includes Sedan, Ertiga, Innova Crysta, SUVs, and premium vehicles with experienced chauffeurs, transparent pricing, and 24x7 customer support."
  },
  {
    "name": "Best Cab Service from Pune to Mumbai Airport",
    "description": "Book the best cab service from Pune to Mumbai Airport for hassle-free airport transfers. Timely pickups, flight monitoring, comfortable vehicles, and experienced drivers ensure you reach the airport safely and on schedule."
  },
  {
    "name": "Best Mumbai Pune Cab Service",
    "description": "Our best Mumbai Pune cab service provides comfortable one-way, return, airport, and corporate travel with affordable fares, professional drivers, and clean AC vehicles for every journey."
  },
  {
    "name": "Best Pune to Mumbai Cab Service",
    "description": "Experience the best Pune to Mumbai cab service with premium customer support, well-maintained vehicles, experienced chauffeurs, fixed pricing, and reliable intercity transportation throughout the year."
  },
  {
    "name": "Pune to Mumbai Ertiga Cab",
    "description": "Book Pune to Mumbai Ertiga cab for comfortable family and group travel. Spacious seating, luggage capacity, affordable pricing, and experienced chauffeurs make it ideal for airport transfers and long-distance journeys."
  },
  {
    "name": "Pune to Mumbai Innova Cab",
    "description": "Premium Pune to Mumbai Innova cab offers luxury seating, smooth highway travel, spacious interiors, and professional chauffeur service for families, corporate travelers, and airport passengers."
  },
  {
    "name": "Pune to Mumbai Round Trip Cab Fare",
    "description": "Check Pune to Mumbai round trip cab fare with economical return packages designed for business meetings, sightseeing, family travel, and same-day return trips. Transparent pricing ensures complete peace of mind."
  },
  {
    "name": "Pune to Mumbai Shared Cab Fare",
    "description": "Affordable Pune to Mumbai shared cab fare option for budget-conscious travelers looking to reduce travel costs while enjoying safe, comfortable, and reliable transportation."
  },
  {
    "name": "Pune to Mumbai Innova Crysta Taxi Fare",
    "description": "Know Pune to Mumbai Innova Crysta taxi fare with transparent pricing for premium travel. Spacious seating, superior comfort, and extra luggage capacity make it perfect for long-distance journeys."
  },
  {
    "name": "Pune to Mumbai Airport Drop Innova Taxi Fare",
    "description": "Check Pune to Mumbai Airport drop Innova taxi fare for comfortable airport transfers. Premium Innova Crysta vehicles provide luxury seating, luggage space, and punctual transportation to all Mumbai airport terminals."
  },
  {
    "name": "Pune to Mumbai Ertiga Taxi Fare",
    "description": "Affordable Pune to Mumbai Ertiga taxi fare suitable for families and small groups. Fixed pricing, comfortable travel, and professional drivers ensure a pleasant journey."
  },
  {
    "name": "Pune to Mumbai Cab Round Trip",
    "description": "Book Pune to Mumbai cab round trip with flexible return schedules for business visits, sightseeing, corporate travel, and family outings. Multiple vehicle options are available with affordable package pricing."
  },
  {
    "name": "Pune to Mumbai Velocity Cabs Taxi Fare",
    "description": "Check Pune to Mumbai Velocity Cabs taxi fare for one-way, airport, and round-trip travel. Transparent rates, clean vehicles, and experienced chauffeurs provide dependable intercity transportation."
  },
  {
    "name": "Pune to Mumbai Taxi Fare",
    "description": "Get Pune to Mumbai taxi fare for Sedan, Ertiga, Innova Crysta, SUVs, and luxury vehicles with fixed pricing, no hidden charges, and professional chauffeur service."
  },
  {
    "name": "Pune to Mumbai Taxi Charges",
    "description": "Compare Pune to Mumbai taxi charges for different vehicle categories and choose the option that best suits your budget and travel requirements with transparent billing."
  },
  {
    "name": "Pune to Mumbai Cab Price",
    "description": "Check Pune to Mumbai cab price before booking and select from affordable Sedan, Ertiga, Innova Crysta, SUV, and luxury vehicle options for airport, business, and family travel."
  },
  {
    "name": "Pune to Mumbai Cab Fare Per KM",
    "description": "Know Pune to Mumbai cab fare per km with transparent pricing policies and affordable per-kilometer rates for one-way, round-trip, and customized travel requirements."
  },
  {
    "name": "Pune to Mumbai Taxi Cost",
    "description": "Estimate Pune to Mumbai taxi cost based on your preferred vehicle category, travel schedule, and trip type. Fixed fare packages help travelers avoid unexpected expenses."
  },
  {
    "name": "Pune Mumbai Car Hire",
    "description": "Book Pune Mumbai car hire for business travel, airport transfers, sightseeing, and family trips with comfortable AC vehicles, professional drivers, and affordable rental packages."
  },
  {
    "name": "Pune to Mumbai Car Hire",
    "description": "Professional Pune to Mumbai car hire service with Sedan, Ertiga, Innova Crysta, SUVs, and luxury vehicles for safe, reliable, and comfortable intercity transportation."
  },
  {
    "name": "Car Hire from Pune to Mumbai",
    "description": "Hire a private car from Pune to Mumbai with flexible pickup timing, transparent pricing, experienced chauffeurs, and comfortable vehicles for business and leisure travel."
  },
  {
    "name": "Pune to Mumbai Car Rentals",
    "description": "Pune to Mumbai car rentals provide one-way, airport transfer, corporate, sightseeing, and round-trip packages with multiple vehicle choices and professional chauffeur service."
  },
  {
    "name": "Pune Mumbai Taxi Service",
    "description": "Reliable Pune Mumbai taxi service offering one-way, airport, corporate, and family transportation with affordable fares, clean vehicles, and experienced drivers."
  },
  {
    "name": "Cheap Pune to Mumbai Taxi Fare",
    "description": "Book cheap Pune to Mumbai taxi fare packages without compromising on comfort, safety, or punctuality. Budget-friendly pricing makes intercity travel economical for every passenger."
  },
  {
    "name": "Pune Mumbai One Way Taxi Fare",
    "description": "Check Pune Mumbai one way taxi fare with fixed pricing for Sedan, Ertiga, Innova Crysta, and SUV vehicles. Pay only for your single journey with no return charges."
  },
  {
    "name": "Best Pune Mumbai Car Hire Service",
    "description": "Experience the best Pune Mumbai car hire service with premium vehicles, professional chauffeurs, transparent pricing, and 24x7 customer support for every travel requirement."
  },
  {
    "name": "Affordable Pune Mumbai Cab Fare",
    "description": "Affordable Pune Mumbai cab fare offers economical travel solutions for airport transfers, business trips, family vacations, and corporate transportation with no hidden costs."
  },
  {
    "name": "Pune to Mumbai Taxi Booking",
    "description": "Book Pune to Mumbai taxi online with instant confirmation, fixed pricing, multiple vehicle options, professional chauffeurs, and reliable customer support for comfortable intercity travel."
  }
],

"tableData": [
  ["Pune to Mumbai Fare by Cab", "Pune to Mumbai Taxi Charges"],
  ["Taxi Fare from Pune to Mumbai Airport", "Pune to Mumbai Cheap Cabs"],
  ["Best Cab Service Pune to Mumbai", "Best Cab Service from Pune to Mumbai Airport"],
  ["Best Mumbai Pune Cab Service", "Best Pune to Mumbai Cab Service"],
  ["Pune to Mumbai Ertiga Cab", "Pune to Mumbai Innova Cab"],
  ["Pune to Mumbai Round Trip Cab Fare", "Pune to Mumbai Shared Cab Fare"],
  ["Pune to Mumbai Innova Crysta Taxi Fare", "Pune to Mumbai Airport Drop Innova Taxi Fare"],
  ["Pune to Mumbai Ertiga Taxi Fare", "Pune to Mumbai Cab Round Trip"],
  ["Pune to Mumbai Velocity Cabs Taxi Fare", "Pune to Mumbai Taxi Fare"],
  ["Pune to Mumbai Taxi Charges", "Pune to Mumbai Cab Price"],
  ["Pune to Mumbai Cab Fare Per KM", "Pune to Mumbai Taxi Cost"],
  ["Pune Mumbai Car Hire", "Pune to Mumbai Car Hire"],
  ["Car Hire from Pune to Mumbai", "Pune to Mumbai Car Rentals"],
  ["Pune Mumbai Taxi Service", "Cheap Pune to Mumbai Taxi Fare"],
  ["Pune Mumbai One Way Taxi Fare", "Best Pune Mumbai Car Hire Service"],
  ["Affordable Pune Mumbai Cab Fare", "Pune to Mumbai Taxi Booking"]
],






whychoose: [
  {
    WhyChooseheading: "Competitive Pune to Mumbai Taxi Fare",
    WhyChoosedescription: "Trustline Travels offers affordable Pune to Mumbai taxi fares with transparent pricing for one-way and round-trip travel."
  },
  {
    WhyChooseheading: "No Hidden Charges",
    WhyChoosedescription: "Our fare structure is clear and upfront, ensuring you know the total estimated cost before confirming your booking."
  },
  {
    WhyChooseheading: "Comfortable Travel Experience",
    WhyChoosedescription: "Travel in clean, air-conditioned vehicles that are regularly maintained for safe and comfortable intercity journeys."
  },
  {
    WhyChooseheading: "Experienced Chauffeurs",
    WhyChoosedescription: "Professional drivers with extensive highway experience ensure a smooth and secure trip between Pune and Mumbai."
  },
  {
    WhyChooseheading: "Multiple Vehicle Categories",
    WhyChoosedescription: "Choose from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers according to your budget and travel needs."
  },
  {
    WhyChooseheading: "Convenient Pickup Service",
    WhyChoosedescription: "Doorstep pickup is available from homes, hotels, offices, Pune Airport, railway stations, and nearby areas."
  },
  {
    WhyChooseheading: "Suitable for Every Travel Purpose",
    WhyChoosedescription: "Our taxi services are ideal for airport transfers, business meetings, family visits, medical appointments, and leisure trips."
  },
  {
    WhyChooseheading: "Instant Fare Quote & Booking",
    WhyChoosedescription: "Contact our team anytime to receive a quick taxi fare estimate and immediate booking confirmation."
  }
]

};

const faqData = [
  {
    question: "What is the Pune to Mumbai taxi fare with Trustline Travels?",
    answer: "The taxi fare depends on the selected vehicle type, travel date, trip type, and pickup or drop location. Contact us for an accurate quotation."
  },
  {
    question: "Do you offer one-way taxi fare from Pune to Mumbai?",
    answer: "Yes, we provide affordable one-way taxi fares along with round-trip options to suit different travel requirements."
  },
  {
    question: "Which vehicles are available for Pune to Mumbai taxi service?",
    answer: "You can choose from Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers."
  },
  {
    question: "Are toll and parking charges included in the taxi fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless specified in your booking quotation."
  },
  {
    question: "Can I get a taxi fare for Mumbai Airport?",
    answer: "Yes, we provide competitive taxi fares for transfers to Mumbai Airport Terminal 1 and Terminal 2."
  },
  {
    question: "Is your taxi service available throughout the day?",
    answer: "Yes, Trustline Travels offers Pune to Mumbai taxi services 24 hours a day, including late-night and early-morning travel."
  },
  {
    question: "Can I pre-book my taxi?",
    answer: "Yes, advance booking is recommended to ensure vehicle availability and your preferred pickup time."
  },
  {
    question: "Do you provide taxi services for corporate travel?",
    answer: "Yes, we regularly serve business travelers with reliable taxi services between Pune and Mumbai."
  },
  {
    question: "Can I choose my preferred vehicle before booking?",
    answer: "Yes, you can select the vehicle category that best suits your budget, luggage, and passenger requirements."
  },
  {
    question: "How can I get the best Pune to Mumbai taxi fare from Trustline Travels?",
    answer: "Simply share your travel details, including pickup location, destination, travel date, and preferred vehicle, to receive an instant fare estimate and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Sagar Patil",
    feedback: "I compared several taxi providers before choosing Trustline Travels, and their Pune to Mumbai taxi fare was both competitive and transparent. The journey was comfortable, and the service exceeded my expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Komal Deshmukh",
    feedback: "Trustline Travels offered a fair taxi fare with no hidden charges. The booking was quick, the cab was well-maintained, and our family reached Mumbai safely and on time.",
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
  "name": "Pune to Mumbai Taxi Fare",
  "image": "https://www.trustlinetravels.com/assets/images/pune-to-mumbai-taxi-fare.webp",
  "description": "Check Pune to Mumbai taxi fare and book affordable cab service with Trustline Travels. We offer transparent pricing for one-way, round-trip, and airport transfers with Sedan, SUV, Ertiga, Innova, Innova Crysta, and luxury cabs available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5471"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/pune-to-mumbai-taxi-fare"
  }
};



  return (
    <div>
<Helmet>
  <title>Pune to Mumbai Taxi Fare | Affordable Cab Charges | +91 8087080034</title>

  <meta
    name="description"
    content="Check Pune to Mumbai taxi fare and book affordable cab service with Trustline Travels. Get the best taxi charges for one-way, round-trip, and Mumbai Airport transfers with Sedan, SUV, Ertiga, Innova, and Innova Crysta taxis available 24x7."
  />

  <meta
    name="keywords"
    content="pune to mumbai fare by cab, pune to mumbai taxi charges, taxi fare from pune to mumbai airport, pune to mumbai cheap cabs, best cab service pune to mumbai, best cab service from pune to mumbai airport, best mumbai pune cab service, pune to mumbai taxi fare, pune to mumbai cab fare, pune mumbai taxi price, affordable pune to mumbai taxi, cheap pune to mumbai cab, one way pune to mumbai cab fare, pune to mumbai airport taxi fare"
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
              <img src='/images/keyword/34.jpg' alt='img' className='img-fluid' />
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

export default Punetomumbaitaxifare;