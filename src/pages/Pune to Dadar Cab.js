import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Punetodadarcab() {



  const cardData = {


  keyword: "Pune to Dadar Cab",

  headingDescription: "Trustline Travels provides reliable Pune to Dadar cab services with comfortable, safe, and affordable transportation for business travel, corporate meetings, railway station transfers, hospital visits, family trips, and outstation journeys. Whether you need a one-way taxi or a round-trip cab, our experienced chauffeurs ensure punctual pickups and a smooth, hassle-free journey. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury vehicles to suit every travel requirement. With transparent pricing, doorstep pickup, easy online booking, flexible travel schedules, and 24/7 customer support, Trustline Travels is your trusted choice for Pune to Dadar taxi services.",

  topPlaces: [
    {
      title: "Dadar West",
      description: "Dadar West is one of Mumbai's busiest commercial and residential localities, known for shopping markets, business establishments, famous temples, educational institutions, and excellent connectivity through road and railway networks. It serves as an important destination for business travelers, tourists, and daily commuters."
    },
    {
      title: "Dadar East",
      description: "Dadar East is a prominent transportation and commercial hub featuring corporate offices, hospitals, retail markets, railway connectivity, and easy access to central and south Mumbai. It is widely visited for business meetings, medical appointments, and convenient city travel."
    },
    {
      title: "Prabhadevi",
      description: "Prabhadevi is a premium business and residential locality located adjacent to Dadar, offering corporate offices, commercial towers, luxury hotels, and excellent connectivity. It is also home to several important landmarks and attracts professionals from across Mumbai."
    },
    {
      title: "Parel",
      description: "Parel is one of Mumbai's leading commercial districts, housing multinational companies, financial institutions, renowned hospitals, premium office towers, and modern business centers. It has become a preferred destination for corporate travelers and business professionals."
    },
    {
      title: "Kamala Mills",
      description: "Kamala Mills is a renowned commercial complex in Lower Parel featuring corporate headquarters, media companies, startups, restaurants, and premium office spaces. It is one of Mumbai's most vibrant business and lifestyle destinations."
    },
    {
      title: "One International Center",
      description: "One International Center is a landmark commercial tower offering world-class office spaces for multinational corporations, financial institutions, and global businesses. It represents Mumbai's modern corporate landscape with premium infrastructure and facilities."
    },
    {
      title: "Shivaji Park",
      description: "Shivaji Park is one of Mumbai's most iconic public spaces, famous for its historical significance, cricket legacy, jogging tracks, and peaceful green surroundings. It is a favorite recreational destination for families and sports enthusiasts."
    },
    {
      title: "Siddhivinayak Temple",
      description: "Located near Dadar, Siddhivinayak Temple is one of India's most revered Lord Ganesha temples. Thousands of devotees and visitors come here daily to seek blessings and experience the temple's peaceful spiritual atmosphere."
    },
    {
      title: "Worli Sea Face",
      description: "Worli Sea Face is a scenic waterfront promenade offering breathtaking views of the Arabian Sea, cool sea breeze, and the iconic Bandra-Worli Sea Link. It is a popular destination for evening walks and photography."
    },
    {
      title: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
      description: "One of India's finest museums, this heritage landmark houses an extraordinary collection of sculptures, paintings, archaeological artifacts, and cultural exhibits. Its magnificent architecture and historical importance make it a must-visit attraction in Mumbai."
    }
  ],






"services": [
  {
    "name": "Pune to Dadar Cab",
    "description": "Book a Pune to Dadar Cab for safe, comfortable, and affordable intercity travel with experienced drivers and clean AC vehicles. Choose from Sedan, Ertiga, Innova Crysta, SUV, and premium cabs for one-way trips, round trips, railway station transfers, business travel, family journeys, and airport connectivity with doorstep pickup, transparent pricing, professional chauffeurs, and 24x7 customer support."
  },
  {
    "name": "Pune to Dadar Cab Service",
    "description": "Our Pune to Dadar Cab Service offers reliable one-way and round-trip travel with well-maintained vehicles, punctual pickups, experienced drivers, flexible schedules, and affordable fares for families, tourists, and corporate travelers."
  },
  {
    "name": "Pune to Dadar Taxi",
    "description": "Choose a Pune to Dadar Taxi for comfortable travel with professional chauffeurs, sanitized AC cars, transparent billing, and convenient pickup and drop services for business meetings, family trips, and railway station transfers."
  },
  {
    "name": "Pune to Dadar Taxi Servicem",
    "description": "Book Pune to Dadar Taxi Servicem for dependable intercity transportation with clean vehicles, experienced drivers, flexible departure timings, and excellent customer support throughout your journey."
  },
  {
    "name": "Pune to Dadar Cab Booking",
    "description": "Complete your Pune to Dadar Cab Booking with instant confirmation, multiple vehicle choices, transparent pricing, and doorstep pickup for a smooth and hassle-free travel experience."
  },
  {
    "name": "Online Pune to Dadar Cab Booking",
    "description": "Use Online Pune to Dadar Cab Booking to reserve your preferred vehicle quickly with secure booking, instant confirmation, flexible schedules, and reliable chauffeur-driven taxi services."
  },
  {
    "name": "Book Pune to Dadar Cab",
    "description": "Book Pune to Dadar Cab anytime for business travel, family outings, railway station transfers, and comfortable long-distance journeys with experienced drivers and premium vehicles."
  },
  {
    "name": "Pune to Dadar One Way Cab",
    "description": "Choose a Pune to Dadar One Way Cab and pay only for your single journey while enjoying affordable fares, comfortable AC vehicles, and professional chauffeur service."
  },
  {
    "name": "Pune to Dadar Round Trip Cab",
    "description": "Book a Pune to Dadar Round Trip Cab with flexible return schedules, affordable package pricing, reliable drivers, and clean vehicles for convenient travel."
  },
  {
    "name": "Pune to Dadar Outstation Cab",
    "description": "Travel comfortably with our Pune to Dadar Outstation Cab service offering premium vehicles, experienced chauffeurs, safe highway travel, and 24x7 customer assistance."
  },
  {
    "name": "Pune to Dadar Car Rental",
    "description": "Choose Pune to Dadar Car Rental with chauffeur-driven Sedan, Ertiga, Innova Crysta, SUV, and premium vehicles for comfortable personal, family, and corporate travel."
  },
  {
    "name": "Pune to Dadar Private Cab",
    "description": "Hire a Pune to Dadar Private Cab for exclusive travel with privacy, flexible pickup timings, comfortable seating, and experienced professional drivers."
  },
  {
    "name": "Pune to Dadar AC Cab",
    "description": "Book a Pune to Dadar AC Cab featuring clean air-conditioned vehicles, comfortable seating, experienced chauffeurs, and reliable intercity transportation."
  },
  {
    "name": "Pune to Dadar Intercity Cab",
    "description": "Our Pune to Dadar Intercity Cab service provides safe, convenient, and affordable travel with premium vehicles, punctual pickups, and experienced drivers."
  },
  {
    "name": "Pune to Dadar Drop Taxi",
    "description": "Choose Pune to Dadar Drop Taxi for direct destination drop with comfortable vehicles, transparent fares, professional drivers, and timely arrival."
  },
  {
    "name": "Pune to Dadar Travel Cab",
    "description": "Book Pune to Dadar Travel Cab for family vacations, corporate travel, personal journeys, and railway station transfers with reliable chauffeur-driven vehicles."
  },
  {
    "name": "Pune to Dadar Taxi Booking",
    "description": "Complete your Pune to Dadar Taxi Booking online with instant confirmation, affordable pricing, premium vehicles, and dependable taxi services."
  },
  {
    "name": "Pune to Dadar Cab Fare",
    "description": "Check Pune to Dadar Cab Fare with transparent pricing for Sedan, Ertiga, Innova Crysta, SUV, and premium vehicles without hidden charges."
  },
  {
    "name": "Pune to Dadar Taxi Fare",
    "description": "View Pune to Dadar Taxi Fare with affordable rates, multiple vehicle options, transparent billing, and comfortable chauffeur-driven travel."
  },
  {
    "name": "Pune to Dadar Cab Price",
    "description": "Find Pune to Dadar Cab Price for one-way, round-trip, private, and outstation travel with budget-friendly packages and premium service quality."
  },
  {
    "name": "Pune to Dadar Cab Charges",
    "description": "Know Pune to Dadar Cab Charges with fixed pricing, no hidden fees, professional drivers, and comfortable AC vehicles."
  },
  {
    "name": "Pune to Dadar Taxi Cost",
    "description": "Compare Pune to Dadar Taxi Cost across Sedan, Ertiga, Innova Crysta, SUV, and premium cabs with transparent pricing and excellent service."
  },
  {
    "name": "Pune to Dadar Cab Cost",
    "description": "Check Pune to Dadar Cab Cost with affordable travel packages suitable for business trips, railway station transfers, and family journeys."
  },
  {
    "name": "Affordable Pune to Dadar Cab",
    "description": "Book an Affordable Pune to Dadar Cab with economical pricing, experienced chauffeurs, comfortable vehicles, and reliable customer support."
  },
  {
    "name": "Cheap Pune to Dadar Cab",
    "description": "Choose a Cheap Pune to Dadar Cab offering budget-friendly fares, safe travel, clean AC cars, and dependable intercity taxi services."
  },
  {
    "name": "Lowest Fare Pune to Dadar Cab",
    "description": "Get the Lowest Fare Pune to Dadar Cab with competitive pricing, professional drivers, transparent billing, and quality travel experience."
  },
  {
    "name": "Fixed Fare Pune to Dadar Cab",
    "description": "Enjoy Fixed Fare Pune to Dadar Cab service with upfront pricing, no hidden charges, comfortable vehicles, and experienced chauffeurs."
  },
  {
    "name": "Hinjewadi to Dadar Cab",
    "description": "Book a Hinjewadi to Dadar Cab with doorstep pickup, premium vehicles, experienced drivers, and comfortable one-way or round-trip travel."
  },
  {
    "name": "Wakad to Dadar Cab",
    "description": "Choose Wakad to Dadar Cab for affordable intercity travel with clean AC vehicles, punctual pickups, and professional chauffeur service."
  },
  {
    "name": "Baner to Dadar Cab",
    "description": "Hire a Baner to Dadar Cab for safe, comfortable, and reliable travel with experienced drivers and premium vehicle options."
  },
  {
    "name": "Kharadi to Dadar Cab",
    "description": "Book Kharadi to Dadar Cab for convenient intercity transportation with transparent pricing, comfortable vehicles, and professional chauffeurs."
  },
  {
    "name": "Hadapsar to Dadar Cab",
    "description": "Choose Hadapsar to Dadar Cab with reliable pickup, comfortable AC vehicles, experienced drivers, and affordable taxi fares."
  },
  {
    "name": "Pimpri Chinchwad to Dadar Cab",
    "description": "Book Pimpri Chinchwad to Dadar Cab for smooth travel with premium chauffeur-driven vehicles, fixed fares, and timely pickups."
  },
  {
    "name": "Viman Nagar to Dadar Cab",
    "description": "Hire Viman Nagar to Dadar Cab with comfortable vehicles, experienced drivers, and reliable intercity taxi services."
  },
  {
    "name": "Kothrud to Dadar Cab",
    "description": "Book Kothrud to Dadar Cab for safe, affordable, and comfortable travel with professional chauffeurs and clean AC vehicles."
  },
  {
    "name": "Aundh to Dadar Cab",
    "description": "Choose Aundh to Dadar Cab for premium intercity travel with punctual pickup, comfortable cars, and transparent pricing."
  },
  {
    "name": "Shivajinagar to Dadar Cab",
    "description": "Book Shivajinagar to Dadar Cab with doorstep pickup, reliable drivers, premium AC vehicles, and affordable fares for one-way and round-trip travel."
  },
  {
    "name": "Pune to Dadar Railway Station Cab",
    "description": "Reserve a Pune to Dadar Railway Station Cab for timely station transfers with experienced chauffeurs, spacious luggage capacity, comfortable vehicles, and dependable service."
  },
  {
    "name": "Best Pune to Dadar Cab Service",
    "description": "Choose the Best Pune to Dadar Cab Service for premium travel with affordable fares, professional drivers, well-maintained vehicles, 24x7 support, and reliable intercity transportation."
  },
  {
    "name": "Reliable Pune to Dadar Taxi",
    "description": "Book a Reliable Pune to Dadar Taxi with experienced chauffeurs, transparent pricing, clean AC vehicles, and comfortable long-distance travel for business, family, and personal journeys."
  }
],

"tableData": [
  ["Pune to Dadar Cab", "Pune to Dadar Cab Service"],
  ["Pune to Dadar Taxi", "Pune to Dadar Taxi Servicem"],
  ["Pune to Dadar Cab Booking", "Online Pune to Dadar Cab Booking"],
  ["Book Pune to Dadar Cab", "Pune to Dadar One Way Cab"],
  ["Pune to Dadar Round Trip Cab", "Pune to Dadar Outstation Cab"],
  ["Pune to Dadar Car Rental", "Pune to Dadar Private Cab"],
  ["Pune to Dadar AC Cab", "Pune to Dadar Intercity Cab"],
  ["Pune to Dadar Drop Taxi", "Pune to Dadar Travel Cab"],
  ["Pune to Dadar Taxi Booking", "Pune to Dadar Cab Fare"],
  ["Pune to Dadar Taxi Fare", "Pune to Dadar Cab Price"],
  ["Pune to Dadar Cab Charges", "Pune to Dadar Taxi Cost"],
  ["Pune to Dadar Cab Cost", "Affordable Pune to Dadar Cab"],
  ["Cheap Pune to Dadar Cab", "Lowest Fare Pune to Dadar Cab"],
  ["Fixed Fare Pune to Dadar Cab", "Hinjewadi to Dadar Cab"],
  ["Wakad to Dadar Cab", "Baner to Dadar Cab"],
  ["Kharadi to Dadar Cab", "Hadapsar to Dadar Cab"],
  ["Pimpri Chinchwad to Dadar Cab", "Viman Nagar to Dadar Cab"],
  ["Kothrud to Dadar Cab", "Aundh to Dadar Cab"],
  ["Shivajinagar to Dadar Cab", "Pune to Dadar Railway Station Cab"],
  ["Best Pune to Dadar Cab Service", "Reliable Pune to Dadar Taxi"]
],





whychoose: [
  {
    WhyChooseheading: "Reliable Pune to Dadar Cab Service",
    WhyChoosedescription: "Trustline Travels provides dependable Pune to Dadar cab services with comfortable vehicles for business trips, family travel, hospital visits, and airport connectivity."
  },
  {
    WhyChooseheading: "Convenient Doorstep Pickup",
    WhyChoosedescription: "Enjoy pickup from your home, office, hotel, Pune Airport, Pune Railway Station, or any location across Pune for a hassle-free journey."
  },
  {
    WhyChooseheading: "Skilled Drivers for Expressway Travel",
    WhyChoosedescription: "Our experienced chauffeurs ensure a safe, smooth, and punctual ride via the Mumbai-Pune Expressway to Dadar."
  },
  {
    WhyChooseheading: "Transparent & Affordable Cab Fare",
    WhyChoosedescription: "Travel with confidence through competitive pricing, upfront fare quotations, and absolutely no hidden charges."
  },
  {
    WhyChooseheading: "Wide Selection of Vehicles",
    WhyChoosedescription: "Choose from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers based on your comfort and travel requirements."
  },
  {
    WhyChooseheading: "One-Way and Round-Trip Services",
    WhyChoosedescription: "Book flexible one-way cabs, return journeys, or customized travel packages according to your schedule."
  },
  {
    WhyChooseheading: "Suitable for Every Travel Purpose",
    WhyChoosedescription: "Our Pune to Dadar cab service is ideal for corporate meetings, family visits, railway station transfers, shopping, and medical appointments."
  },
  {
    WhyChooseheading: "Instant Booking with 24/7 Support",
    WhyChoosedescription: "Receive immediate fare estimates, quick booking confirmation, and dedicated customer assistance anytime."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Pune to Dadar cab service?",
    answer: "Yes, Trustline Travels offers reliable Pune to Dadar cab services for one-way travel, round trips, business travel, family visits, and station transfers."
  },
  {
    question: "Can I book a one-way cab from Pune to Dadar?",
    answer: "Yes, we provide affordable one-way cab services with flexible pickup timings from any location in Pune."
  },
  {
    question: "Which vehicles are available for Pune to Dadar travel?",
    answer: "Our fleet includes Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers to suit different travel requirements."
  },
  {
    question: "Do you provide pickup from Pune Airport and Railway Station?",
    answer: "Yes, we offer pickup from Pune Airport, Pune Railway Station, hotels, offices, and residential areas across Pune."
  },
  {
    question: "Can I book a round-trip cab to Dadar?",
    answer: "Yes, Trustline Travels provides flexible round-trip cab packages for business, personal, and family travel."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless specifically included in your booking quotation."
  },
  {
    question: "Is Pune to Dadar cab service available 24/7?",
    answer: "Yes, our cab services are available round the clock for early morning, daytime, and late-night travel."
  },
  {
    question: "Can I reserve my cab in advance?",
    answer: "Yes, advance booking is recommended to ensure your preferred vehicle and pickup schedule."
  },
  {
    question: "Do you provide cabs for corporate and family travel?",
    answer: "Yes, our Pune to Dadar cab service is suitable for business executives, families, tourists, and individual travelers."
  },
  {
    question: "How can I book a Pune to Dadar cab with Trustline Travels?",
    answer: "Simply share your pickup location, destination, travel date, passenger count, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Rahul Bhosale",
    feedback: "Trustline Travels made my Pune to Dadar journey comfortable and stress-free. The driver was punctual, the vehicle was spotless, and the entire trip was managed professionally.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Kavita Shah",
    feedback: "We booked a cab from Pune to Dadar for a family visit, and the service exceeded our expectations. The booking process was simple, the fare was transparent, and the ride was smooth from start to finish.",
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
  "name": "Pune to Dadar Cab Service",
  "image": "https://www.trustlinetravels.com/assets/images/pune-to-dadar-cab.webp",
  "description": "Book Pune to Dadar cab service with Trustline Travels for safe, comfortable, and affordable intercity travel. Get one-way, round-trip, outstation, and private taxi services with Sedan, Ertiga, SUV, Innova, Innova Crysta, and premium cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "6482"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/pune-to-dadar-cab"
  }
};






  return (
    <div>
<Helmet>
  <title>Pune to Dadar Cab | One Way & Round Trip Taxi | +91 8087080034</title>

  <meta
    name="description"
    content="Book Pune to Dadar cab service with Trustline Travels for reliable one-way, round-trip, and outstation travel. Get affordable Sedan, Ertiga, SUV, Innova, and Innova Crysta taxis with professional drivers available 24x7."
  />

  <meta
    name="keywords"
    content="Pune to dadar cab fare, Pune to dadar taxi fare, Pune to dadar taxi, Pune to Dadar Cab, Pune to Dadar Cab Service, Pune to Dadar Taxi, Pune to Dadar Taxi Service, Pune to Dadar Cab Booking, Online Pune to Dadar Cab Booking, Book Pune to Dadar Cab, Pune to Dadar One Way Cab, Pune to Dadar Round Trip Cab, Pune to Dadar Outstation Cab, Pune to Dadar Car Rental, Pune to Dadar Private Cab, Pune to Dadar AC Cab, Pune to Dadar Intercity Cab, Pune Dadar taxi service"
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
              <img src='/images/keyword/73.jpg' alt='img' className='img-fluid' />
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

export default Punetodadarcab;