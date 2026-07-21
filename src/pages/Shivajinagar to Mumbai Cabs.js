import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Shivajinagartomumbaicabs() {



  const cardData = {


  keyword: "Shivajinagar to Mumbai Cabs",

  headingDescription: "Trustline Travels provides reliable Shivajinagar to Mumbai cab services with comfortable vehicles, professional drivers, and affordable travel solutions for business trips, airport transfers, family vacations, and outstation journeys. Whether you need a one-way taxi or a round-trip cab, we ensure a safe and smooth journey with timely pickups and well-maintained cars. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury vehicles to match every travel requirement. With transparent pricing, easy online booking, doorstep pickup, and 24/7 customer support, Trustline Travels is the trusted choice for Shivajinagar to Mumbai taxi services.",

  topPlaces: [
    {
      title: "One International Center",
      description: "One International Center in Lower Parel is a premium commercial destination with multinational companies, corporate offices, and modern business facilities."
    },
    {
      title: "Mahape IT Park",
      description: "Mahape IT Park is a major technology hub in Navi Mumbai, housing software companies, IT businesses, and corporate workplaces."
    },
    {
      title: "MIDC Marol",
      description: "MIDC Marol is a prominent business and industrial area near Mumbai Airport, featuring corporate offices, logistics companies, and commercial establishments."
    },
    {
      title: "Mindspace Malad",
      description: "Mindspace Malad is a leading business park offering office spaces for IT companies, multinational corporations, and service-based organizations."
    },
    {
      title: "Belapur CBD",
      description: "Belapur CBD is Navi Mumbai's important commercial district with government offices, financial institutions, and corporate centers."
    },
    {
      title: "Kamala Mills",
      description: "Kamala Mills is a popular commercial hub in Lower Parel known for corporate offices, media companies, startups, restaurants, and business spaces."
    },
    {
      title: "Sanjay Gandhi National Park",
      description: "Sanjay Gandhi National Park is a green escape in Mumbai featuring wildlife, nature trails, boating, and the historic Kanheri Caves."
    },
    {
      title: "Marine Drive",
      description: "Marine Drive is Mumbai's iconic seaside promenade known for beautiful coastal views, evening walks, and the famous Queen's Necklace skyline."
    },
    {
      title: "Siddhivinayak Temple",
      description: "Siddhivinayak Temple is one of Mumbai's most visited religious destinations, attracting devotees from different parts of India."
    },
    {
      title: "Bandra Fort",
      description: "Bandra Fort is a historic seaside attraction offering panoramic views of the Arabian Sea and the Bandra-Worli Sea Link."
    }
  ],





"services": [
  {
    "name": "Shivajinagar to Mumbai Cab",
    "description": "Book Shivajinagar to Mumbai cab service for safe and comfortable intercity travel with Sedan, Ertiga, Innova Crysta, SUV, and premium car options. Enjoy doorstep pickup, experienced chauffeurs, transparent pricing, and reliable transportation for airport transfers, business trips, family travel, sightseeing, and outstation journeys."
  },
  {
    "name": "Shivajinagar to Mumbai Innova Crysta",
    "description": "Hire Shivajinagar to Mumbai Innova Crysta cab for premium long-distance travel with spacious seating, luxury interiors, extra luggage capacity, and comfortable highway journeys. Ideal for families, corporate groups, and airport transfers."
  },
  {
    "name": "Pune Station to Mumbai Cab Service",
    "description": "Book Pune Station to Mumbai cab service for railway passenger transfers, business travel, airport drops, and personal journeys with professional drivers and comfortable AC vehicles."
  },
  {
    "name": "Pune to Mumbai Cab Round Trip",
    "description": "Choose Pune to Mumbai cab round trip service for flexible return travel, business meetings, sightseeing, and family trips with affordable packages and reliable vehicles."
  },
  {
    "name": "Bundgarden to Mumbai Cab",
    "description": "Book Bundgarden to Mumbai cab for convenient intercity travel with experienced chauffeurs, clean vehicles, and affordable pricing for one-way and round-trip journeys."
  },
  {
    "name": "Yerwada to Mumbai Cab Service",
    "description": "Reliable Yerwada to Mumbai cab service for airport transfers, corporate travel, and personal trips with Sedan, Ertiga, Innova Crysta, and SUV options."
  },
  {
    "name": "Camp to Mumbai Cab Service",
    "description": "Reserve Camp to Mumbai cab service for comfortable transportation with doorstep pickup, professional drivers, and flexible travel options."
  },
  {
    "name": "Wakdewadi to Mumbai Cab",
    "description": "Book Wakdewadi to Mumbai cab for safe and affordable travel with well-maintained AC cars and experienced chauffeurs."
  },
  {
    "name": "Khadki to Mumbai Cab Service",
    "description": "Get Khadki to Mumbai cab service for airport transfers, business trips, and outstation travel with comfortable vehicles and reliable service."
  },
  {
    "name": "Swargate to Mumbai Cabs",
    "description": "Book Swargate to Mumbai cabs for convenient travel between Pune and Mumbai with multiple vehicle categories and professional drivers."
  },
  {
    "name": "Pune to Mumbai Ertiga Cab",
    "description": "Choose Pune to Mumbai Ertiga cab for spacious family travel, group transportation, airport transfers, and comfortable highway journeys."
  },
  {
    "name": "Pune to Mumbai Innova Cab",
    "description": "Premium Pune to Mumbai Innova cab service offers luxury seating, smooth travel, extra luggage space, and professional chauffeurs for business and family trips."
  },
  {
    "name": "Cab Service in Shivaji Nagar Pune",
    "description": "Professional cab service in Shivaji Nagar Pune for local rides, airport transfers, corporate transportation, and outstation journeys with reliable vehicles."
  },
  {
    "name": "Shivajinagar to Dadar Cab Service",
    "description": "Book Shivajinagar to Dadar cab service for railway station transfers, Mumbai city travel, and business visits with comfortable AC cars."
  },
  {
    "name": "Shivaji Nagar to Andheri Cab Service",
    "description": "Reliable Shivaji Nagar to Andheri cab service for airport connectivity, office travel, and personal journeys with professional chauffeurs."
  },
  {
    "name": "Pune Station to Mumbai Cab",
    "description": "Reserve Pune Station to Mumbai cab for direct travel from railway station with timely pickup, luggage assistance, and comfortable vehicles."
  },
  {
    "name": "Best Cab Service Pune to Mumbai",
    "description": "Experience the best cab service Pune to Mumbai with premium vehicles, trained drivers, transparent pricing, and easy booking options."
  },
  {
    "name": "Innova Crysta on Rent in Shivaji Nagar Pune",
    "description": "Hire Innova Crysta on rent in Shivaji Nagar Pune for airport transfers, family trips, corporate travel, and premium outstation journeys with chauffeur service."
  },
  {
    "name": "Ertiga on Rent in Shivaji Nagar",
    "description": "Rent Ertiga in Shivaji Nagar for family travel, group transportation, airport transfers, and long-distance journeys with affordable rental plans."
  },
  {
    "name": "Velocity Cabs Pune",
    "description": "Velocity Cabs Pune provides reliable one-way taxi, airport transfer, corporate cab, and round-trip services with premium vehicles and professional drivers."
  },
  {
    "name": "Cab Service in Pune",
    "description": "Our cab service in Pune offers local taxi, airport transfers, corporate transportation, and outstation travel with Sedan, Ertiga, Innova Crysta, and SUV vehicles."
  },
  {
    "name": "Pune to Mumbai Airport Cab",
    "description": "Book Pune to Mumbai Airport cab with direct airport transfer service, punctual pickup, flight support, luggage assistance, and comfortable AC vehicles."
  },
  {
    "name": "Pune Mumbai Cab",
    "description": "Reliable Pune Mumbai cab service for airport transfers, business trips, family journeys, sightseeing, and one-way or round-trip travel."
  },
  {
    "name": "Cab Service in Shivaji Nagar Pune Station",
    "description": "Get cab service in Shivaji Nagar Pune Station area for railway transfers, airport travel, local rides, and outstation journeys."
  },
  {
    "name": "Shivajinagar to Mumbai Taxi",
    "description": "Book Shivajinagar to Mumbai taxi with clean vehicles, experienced drivers, affordable fares, and flexible booking options."
  },
  {
    "name": "Shivajinagar to Mumbai Cab Service",
    "description": "Shivajinagar to Mumbai cab service provides safe, comfortable, and reliable transportation for airport, corporate, family, and personal travel."
  },
  {
    "name": "Shivajinagar to Mumbai Taxi Service",
    "description": "Choose Shivajinagar to Mumbai taxi service for dependable travel with professional chauffeurs and multiple vehicle options."
  },
  {
    "name": "Shivajinagar to Mumbai Cab Booking",
    "description": "Book Shivajinagar to Mumbai cab online with instant confirmation, easy reservations, flexible pickup timing, and 24x7 support."
  },
  {
    "name": "Cab from Shivajinagar to Mumbai",
    "description": "Reserve a cab from Shivajinagar to Mumbai for airport transfers, meetings, sightseeing, and family trips with professional drivers."
  },
  {
    "name": "Shivajinagar to Mumbai Car Rental",
    "description": "Shivajinagar to Mumbai car rental service offers one-way, round-trip, airport, and corporate travel options with chauffeur-driven vehicles."
  },
  {
    "name": "Shivajinagar to Mumbai One Way Cab",
    "description": "Book Shivajinagar to Mumbai one way cab for affordable single-side travel without return charges. Suitable for airport drops and business trips."
  },
  {
    "name": "Cheap Shivajinagar to Mumbai Cab",
    "description": "Affordable Shivajinagar to Mumbai cab service with transparent pricing, clean AC vehicles, experienced drivers, and reliable transportation."
  },
  {
    "name": "Shivajinagar to Mumbai Taxi Fare",
    "description": "Check Shivajinagar to Mumbai taxi fare with competitive rates for Sedan, Ertiga, Innova Crysta, and SUV vehicles."
  },
  {
    "name": "Book Shivajinagar to Mumbai Cab Online",
    "description": "Book Shivajinagar to Mumbai cab online with quick confirmation, multiple vehicle choices, secure booking, and professional chauffeur service."
  },
  {
    "name": "Shivajinagar to Mumbai Outstation Cab",
    "description": "Reliable Shivajinagar to Mumbai outstation cab for long-distance travel with experienced drivers, comfortable cars, and flexible schedules."
  },
  {
    "name": "Shivajinagar to Mumbai Airport Cab",
    "description": "Book Shivajinagar to Mumbai Airport cab for timely airport transfers with luggage support, flight assistance, and premium AC vehicles."
  },
  {
    "name": "24x7 Shivajinagar to Mumbai Taxi Service",
    "description": "24x7 Shivajinagar to Mumbai taxi service available anytime for airport transfers, emergency travel, corporate trips, and family journeys."
  },
  {
    "name": "Best Shivajinagar to Mumbai Cab Service",
    "description": "Choose the best Shivajinagar to Mumbai cab service with premium vehicles, professional chauffeurs, transparent fares, easy booking, and reliable customer support."
  }
],

"tableData": [
  ["Shivajinagar to Mumbai Cab", "Shivajinagar to Mumbai Innova Crysta"],
  ["Pune Station to Mumbai Cab Service", "Pune to Mumbai Cab Round Trip"],
  ["Bundgarden to Mumbai Cab", "Yerwada to Mumbai Cab Service"],
  ["Camp to Mumbai Cab Service", "Wakdewadi to Mumbai Cab"],
  ["Khadki to Mumbai Cab Service", "Swargate to Mumbai Cabs"],
  ["Pune to Mumbai Ertiga Cab", "Pune to Mumbai Innova Cab"],
  ["Cab Service in Shivaji Nagar Pune", "Shivajinagar to Dadar Cab Service"],
  ["Shivaji Nagar to Andheri Cab Service", "Pune Station to Mumbai Cab"],
  ["Best Cab Service Pune to Mumbai", "Innova Crysta on Rent in Shivaji Nagar Pune"],
  ["Ertiga on Rent in Shivaji Nagar", "Velocity Cabs Pune"],
  ["Cab Service in Pune", "Pune to Mumbai Airport Cab"],
  ["Pune Mumbai Cab", "Shivajinagar to Mumbai Taxi"],
  ["Shivajinagar to Mumbai Cab Service", "Shivajinagar to Mumbai Taxi Service"],
  ["Shivajinagar to Mumbai Cab Booking", "Cab from Shivajinagar to Mumbai"],
  ["Shivajinagar to Mumbai Car Rental", "Shivajinagar to Mumbai One Way Cab"],
  ["Cheap Shivajinagar to Mumbai Cab", "Shivajinagar to Mumbai Taxi Fare"],
  ["Book Shivajinagar to Mumbai Cab Online", "Shivajinagar to Mumbai Outstation Cab"],
  ["Shivajinagar to Mumbai Airport Cab", "24x7 Shivajinagar to Mumbai Taxi Service"],
  ["Best Shivajinagar to Mumbai Cab Service", "Cab Service in Shivaji Nagar Pune"]
],






whychoose: [
  {
    WhyChooseheading: "Reliable Shivajinagar to Mumbai Cab Service",
    WhyChoosedescription: "Trustline Travels provides comfortable and dependable cab services from Shivajinagar to Mumbai for business trips, airport transfers, and personal journeys."
  },
  {
    WhyChooseheading: "Convenient Central Pune Pickup",
    WhyChoosedescription: "Get easy pickup from Shivajinagar, Deccan, FC Road, JM Road, Pune Station, and nearby central Pune locations."
  },
  {
    WhyChooseheading: "Experienced Drivers for Pune Mumbai Route",
    WhyChoosedescription: "Our skilled drivers have excellent knowledge of highway routes and provide safe, smooth, and timely travel."
  },
  {
    WhyChooseheading: "Transparent Fare Structure",
    WhyChoosedescription: "Enjoy clear pricing with competitive cab rates and no hidden charges during your Shivajinagar to Mumbai journey."
  },
  {
    WhyChooseheading: "Comfortable Vehicle Choices",
    WhyChoosedescription: "Select from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers based on passenger requirements."
  },
  {
    WhyChooseheading: "One Way & Round Trip Flexibility",
    WhyChoosedescription: "Book convenient one-way cabs, return trips, or customized travel packages as per your schedule."
  },
  {
    WhyChooseheading: "Ideal for Airport & Corporate Travel",
    WhyChoosedescription: "Our cab service is suitable for Mumbai Airport transfers, office meetings, corporate travel, and family trips."
  },
  {
    WhyChooseheading: "Fast Booking Assistance",
    WhyChoosedescription: "Receive quick quotations and smooth booking support from our team for a hassle-free travel experience."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Shivajinagar to Mumbai cab service?",
    answer: "Yes, Trustline Travels offers reliable cab services from Shivajinagar to Mumbai for one-way trips, round trips, airport transfers, and corporate travel."
  },
  {
    question: "Can I book a one-way cab from Shivajinagar to Mumbai?",
    answer: "Yes, we provide affordable one-way cab services for passengers looking for direct and comfortable travel."
  },
  {
    question: "Which cars are available for Shivajinagar to Mumbai travel?",
    answer: "Our fleet includes Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers for different group sizes."
  },
  {
    question: "Do you provide pickup from Pune Station and nearby areas?",
    answer: "Yes, pickup is available from Shivajinagar, Pune Station, Deccan, FC Road, JM Road, and surrounding locations."
  },
  {
    question: "Can I book a cab from Shivajinagar to Mumbai Airport?",
    answer: "Yes, we provide direct airport transfer cabs from Shivajinagar to Mumbai Airport Terminal 1 and Terminal 2."
  },
  {
    question: "Are toll and parking charges included in the fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless included in the booking details."
  },
  {
    question: "Is Shivajinagar to Mumbai cab service available 24 hours?",
    answer: "Yes, Trustline Travels provides cab services throughout the day and night according to customer travel needs."
  },
  {
    question: "Can I book my cab before the travel date?",
    answer: "Yes, advance booking is available and recommended for preferred vehicle selection and timely pickup."
  },
  {
    question: "Do you provide cabs for corporate travel from Shivajinagar?",
    answer: "Yes, our cab services are suitable for professionals traveling to Mumbai for meetings, events, and business purposes."
  },
  {
    question: "How can I book a Shivajinagar to Mumbai cab with Trustline Travels?",
    answer: "Share your pickup location, destination, travel date, and preferred vehicle to get an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Nitin Joshi",
    feedback: "I booked a cab from Shivajinagar to Mumbai for official work. Trustline Travels provided a clean vehicle, professional driver, and a comfortable journey with perfect timing.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Kavita Patil",
    feedback: "The cab service from Shivajinagar to Mumbai was smooth and convenient. The driver was polite, the car was well-maintained, and the overall experience was excellent.",
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
  "name": "Shivajinagar to Mumbai Cab Service",
  "image": "https://www.trustlinetravels.com/assets/images/shivajinagar-to-mumbai-cab.webp",
  "description": "Book Shivajinagar to Mumbai cab service for safe, comfortable, and affordable intercity travel. Trustline Travels offers one-way, round-trip, and airport taxi services with Sedan, Ertiga, SUV, Innova, Innova Crysta, and luxury cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "4529"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/shivajinagar-to-mumbai-cab"
  }
};






  return (
    <div>
<Helmet>
  <title>Shivajinagar to Mumbai Cab | Round Trip Taxi Service | +91 8087080034</title>

  <meta
    name="description"
    content="Book Shivajinagar to Mumbai cab service with Trustline Travels for reliable one-way, round-trip, and airport transfers. Get Sedan, SUV, Ertiga, Innova, and Innova Crysta cabs with professional drivers available 24x7."
  />

  <meta
    name="keywords"
    content="shivajinagar to mumbai innova crysta, pune station to mumbai cab service, pune to mumbai cab round trip, bundgarden to Mumbai Cab, yerwada to mumbai cab service, camp to mumbai cab service, wakdewadi to Mumbai cab, khadki to mumbai cab service, shivajinagar to mumbai cab, shivajinagar to mumbai taxi, shivajinagar to mumbai airport cab, pune station to mumbai taxi, pune to mumbai innova cab, pune to mumbai round trip taxi"
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
              <img src='/images/keyword/46.jpg' alt='img' className='img-fluid' />
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

export default Shivajinagartomumbaicabs;