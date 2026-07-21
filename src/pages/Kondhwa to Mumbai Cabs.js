import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Kondhwatomumbaicabs() {



  const cardData = {


  keyword: "Kondhwa to Mumbai Cabs",

  headingDescription: "Trustline Travels provides reliable Kondhwa to Mumbai cab services with comfortable vehicles, experienced chauffeurs, and affordable travel solutions for business trips, airport transfers, family journeys, and outstation travel. Whether you need a one-way taxi or a round-trip cab, we ensure safe, punctual, and hassle-free transportation with well-maintained cars. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and premium vehicles suitable for every travel requirement. With transparent pricing, doorstep pickup, easy online booking, and 24/7 customer support, Trustline Travels is the trusted choice for Kondhwa to Mumbai taxi services.",

  topPlaces: [
    {
      title: "Peninsula Corporate Park",
      description: "Peninsula Corporate Park in Lower Parel is a premium business destination with multinational companies, financial institutions, and modern corporate offices."
    },
    {
      title: "Mindspace Malad",
      description: "Mindspace Malad is a leading IT and commercial business park housing technology companies, corporate offices, and professional service providers."
    },
    {
      title: "Airoli IT Park",
      description: "Airoli IT Park is a major technology hub in Navi Mumbai featuring global IT companies, software firms, and advanced corporate campuses."
    },
    {
      title: "Mahape IT Park",
      description: "Mahape IT Park is a prominent business location known for IT companies, software development centers, and multinational organizations."
    },
    {
      title: "TTC Industrial Area",
      description: "TTC Industrial Area in Navi Mumbai is a major industrial corridor with manufacturing units, logistics companies, and commercial establishments."
    },
    {
      title: "Mumbai Central Railway Station",
      description: "Mumbai Central Railway Station is a major transport hub connecting Mumbai with important cities across India through extensive rail services."
    },
    {
      title: "Worli Sea Face",
      description: "Worli Sea Face is a popular waterfront destination offering beautiful Arabian Sea views, peaceful surroundings, and scenic city landscapes."
    },
    {
      title: "Elephanta Caves",
      description: "Elephanta Caves is a UNESCO World Heritage Site famous for ancient rock-cut temples, historic sculptures, and cultural significance."
    },
    {
      title: "Global Vipassana Pagoda",
      description: "Global Vipassana Pagoda is a peaceful meditation monument known for its grand golden dome, architecture, and serene atmosphere."
    },
    {
      title: "Aksa Beach",
      description: "Aksa Beach is a quiet coastal destination near Mumbai known for its natural beauty, relaxing environment, and weekend getaway experience."
    }
  ],





"services": [
  {
    "name": "Kondhwa to Mumbai Cab Service",
    "description": "Book Kondhwa to Mumbai cab service for comfortable and reliable outstation travel with AC vehicles, professional drivers, and affordable pricing. Perfect for airport transfers, business trips, family journeys, and one-way travel from Kondhwa to Mumbai. Choose from Sedan, Ertiga, Innova Crysta, and SUV cab options based on your travel requirements."
  },
  {
    "name": "Kondhwa to Mumbai Cab",
    "description": "Hire Kondhwa to Mumbai cab for safe and smooth highway travel with doorstep pickup, clean vehicles, and experienced chauffeurs. Suitable for Mumbai airport drops, corporate travel, railway station transfers, and personal trips."
  },
  {
    "name": "Kondhwa to Mumbai Taxi",
    "description": "Get Kondhwa to Mumbai taxi service with comfortable AC cars, transparent fares, and reliable drivers. Available for one-way, round-trip, and outstation travel with flexible booking options."
  },
  {
    "name": "Kondhwa to Mumbai Cab Fare",
    "description": "Check Kondhwa to Mumbai cab fare with affordable pricing options for Sedan, Ertiga, and Innova Crysta vehicles. Transparent charges help customers plan their travel budget without hidden costs."
  },
  {
    "name": "Kondhwa to Mumbai Airport Cab",
    "description": "Book Kondhwa to Mumbai Airport cab for timely airport pickup and drop service. Professional drivers ensure smooth travel with luggage assistance and comfortable AC vehicles for domestic and international airport transfers."
  },
  {
    "name": "Kondhwa to Navi Mumbai Cab",
    "description": "Reserve Kondhwa to Navi Mumbai cab service for convenient city and business travel. Enjoy private cab facilities with experienced drivers and well-maintained vehicles."
  },
  {
    "name": "NIBM Road to Mumbai Cab",
    "description": "Book NIBM Road to Mumbai cab for reliable outstation transportation with doorstep pickup, affordable rates, and comfortable vehicles suitable for families and corporate travelers."
  },
  {
    "name": "NIBM Road to Mumbai Airport Cab",
    "description": "Get NIBM Road to Mumbai Airport cab service for hassle-free airport transfers with punctual pickup, spacious luggage space, and professional chauffeur service."
  },
  {
    "name": "Cab Service in NIBM Road Pune",
    "description": "Reliable cab service in NIBM Road Pune offering local taxi, airport transfer, corporate travel, and outstation cab solutions with Sedan, Ertiga, and Innova Crysta options."
  },
  {
    "name": "Undri Road to Mumbai Cab Service",
    "description": "Book Undri Road to Mumbai cab service for comfortable long-distance travel with experienced drivers, AC vehicles, and flexible one-way and round-trip options."
  },
  {
    "name": "Taxi Service in Undri Pune",
    "description": "Affordable taxi service in Undri Pune for local rides, airport transfers, and outstation journeys with reliable vehicles and professional drivers."
  },
  {
    "name": "Katraj to Mumbai Cab Service",
    "description": "Hire Katraj to Mumbai cab service for smooth highway travel with private cabs, transparent pricing, and multiple vehicle choices for families and groups."
  },
  {
    "name": "Katraj to Mumbai Airport Cab Service",
    "description": "Book Katraj to Mumbai Airport cab service for comfortable airport transfers with timely pickup, luggage support, and experienced drivers."
  },
  {
    "name": "Kondana to Bandra Cab Service",
    "description": "Get Kondana to Bandra cab service for convenient Mumbai city travel with private AC cars and professional chauffeurs."
  },
  {
    "name": "Kondana to Dadar Cab Service",
    "description": "Book Kondana to Dadar cab service for railway, business, and personal travel with reliable vehicles and affordable fares."
  },
  {
    "name": "Kondana to Mumbai Airport Cab",
    "description": "Choose Kondana to Mumbai Airport cab for safe airport transfers with comfortable seating, timely service, and professional drivers."
  },
  {
    "name": "Cab Service in Kondhwa Pune",
    "description": "Cab service in Kondhwa Pune provides airport taxis, corporate travel, local rides, and outstation cab services with premium vehicles and experienced drivers."
  },
  {
    "name": "Velocity Cabs Pune",
    "description": "Velocity Cabs Pune offers reliable Pune Mumbai cab services, airport transfers, corporate transportation, and outstation travel with quality vehicles and professional drivers."
  },
  {
    "name": "Cab Service in Pune",
    "description": "Our cab service in Pune provides comfortable transportation solutions including local taxi, airport cab, corporate travel, and long-distance outstation services."
  },
  {
    "name": "Pune to Mumbai Airport Cab",
    "description": "Book Pune to Mumbai Airport cab for reliable airport pickup and drop service with AC Sedan, Ertiga, and Innova Crysta vehicles."
  },
  {
    "name": "Pune Mumbai Cab",
    "description": "Affordable Pune Mumbai cab service for business travel, family trips, airport transfers, and one-way journeys with professional drivers."
  },
  {
    "name": "Kondhwa to Outstation Cab Service",
    "description": "Kondhwa to outstation cab service provides comfortable long-distance travel solutions with private vehicles, experienced drivers, and flexible booking plans."
  },
  {
    "name": "Kondhwa to Mumbai Taxi Service",
    "description": "Book Kondhwa to Mumbai taxi service for safe and affordable travel with AC cabs, doorstep pickup, and reliable customer support."
  },
  {
    "name": "Kondhwa to Mumbai Cab Booking",
    "description": "Reserve Kondhwa to Mumbai cab booking online with easy confirmation, transparent fares, and multiple vehicle options for every travel need."
  },
  {
    "name": "Cab from Kondhwa to Mumbai",
    "description": "Hire cab from Kondhwa to Mumbai for private and comfortable travel with professional drivers, clean vehicles, and smooth highway journeys."
  },
  {
    "name": "Kondhwa to Mumbai Car Rental",
    "description": "Choose Kondhwa to Mumbai car rental service for chauffeur-driven cars suitable for airport transfers, business meetings, and family travel."
  },
  {
    "name": "Kondhwa to Mumbai One Way Cab",
    "description": "Book Kondhwa to Mumbai one way cab for economical single-side travel without return charges. Ideal for airport drops and relocation journeys."
  },
  {
    "name": "Cheap Kondhwa to Mumbai Cab",
    "description": "Affordable Kondhwa to Mumbai cab service offering budget-friendly fares, comfortable cars, and dependable drivers."
  },
  {
    "name": "Kondhwa to Mumbai Taxi Fare",
    "description": "Get competitive Kondhwa to Mumbai taxi fare with transparent pricing for Sedan, SUV, Ertiga, and Innova cab options."
  },
  {
    "name": "Book Kondhwa to Mumbai Cab Online",
    "description": "Book Kondhwa to Mumbai cab online with quick confirmation, flexible travel options, and reliable outstation cab service."
  },
  {
    "name": "Kondhwa to Mumbai Outstation Cab",
    "description": "Kondhwa to Mumbai outstation cab service provides safe and comfortable long-distance travel with experienced highway drivers."
  },
  {
    "name": "24x7 Kondhwa to Mumbai Taxi Service",
    "description": "24x7 Kondhwa to Mumbai taxi service available anytime for airport transfers, emergency travel, corporate trips, and family journeys."
  },
  {
    "name": "Best Kondhwa to Mumbai Cab Service",
    "description": "Choose the best Kondhwa to Mumbai cab service with reliable vehicles, professional chauffeurs, affordable pricing, and customer-focused travel solutions."
  }
],

"tableData": [
  ["Kondhwa to Mumbai Cab Service", "Kondhwa to Mumbai Cab"],
  ["Kondhwa to Mumbai Taxi", "Kondhwa to Mumbai Cab Fare"],
  ["Kondhwa to Mumbai Airport Cab", "Kondhwa to Navi Mumbai Cab"],
  ["NIBM Road to Mumbai Cab", "NIBM Road to Mumbai Airport Cab"],
  ["Undri Road to Mumbai Cab Service", "Katraj to Mumbai Cab Service"],
  ["Katraj to Mumbai Airport Cab Service", "Kondana to Bandra Cab Service"],
  ["Kondana to Dadar Cab Service", "Kondana to Mumbai Airport Cab"],
  ["Cab Service in Kondhwa Pune", "Velocity Cabs Pune"],
  ["Cab Service in Pune", "Pune Mumbai Cab"],
  ["Kondhwa to Outstation Cab Service", "Kondhwa to Mumbai Taxi Service"],
  ["Kondhwa to Mumbai Cab Booking", "Cab from Kondhwa to Mumbai"],
  ["Kondhwa to Mumbai Car Rental", "Kondhwa to Mumbai One Way Cab"],
  ["Cheap Kondhwa to Mumbai Cab", "Kondhwa to Mumbai Taxi Fare"],
  ["Book Kondhwa to Mumbai Cab Online", "Kondhwa to Mumbai Outstation Cab"],
  ["24x7 Kondhwa to Mumbai Taxi Service", "Best Kondhwa to Mumbai Cab Service"]
],





whychoose: [
  {
    WhyChooseheading: "Reliable Kondhwa to Mumbai Cab Service",
    WhyChoosedescription: "Trustline Travels provides comfortable Kondhwa to Mumbai cab services with reliable pickups and smooth travel for personal, corporate, and airport journeys."
  },
  {
    WhyChooseheading: "Convenient Pickup from Kondhwa Area",
    WhyChoosedescription: "Get doorstep pickup from Kondhwa, NIBM Road, Undri, Mohammadwadi, Wanowrie, and nearby Pune locations."
  },
  {
    WhyChooseheading: "Experienced Drivers for Pune Mumbai Travel",
    WhyChoosedescription: "Our professional chauffeurs ensure safe, comfortable, and timely journeys through the Pune-Mumbai highway routes."
  },
  {
    WhyChooseheading: "Affordable & Transparent Cab Fares",
    WhyChoosedescription: "Enjoy competitive pricing with clear fare details and no hidden charges for your Kondhwa to Mumbai cab booking."
  },
  {
    WhyChooseheading: "Multiple Vehicle Options Available",
    WhyChoosedescription: "Choose from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers based on your travel needs."
  },
  {
    WhyChooseheading: "Flexible One Way & Round Trips",
    WhyChoosedescription: "Book one-way cabs, return trips, or customized travel plans according to your preferred schedule."
  },
  {
    WhyChooseheading: "Airport & Business Travel Facility",
    WhyChoosedescription: "Our cab services are suitable for Mumbai Airport transfers, corporate meetings, family visits, and outstation travel."
  },
  {
    WhyChooseheading: "Quick Booking Assistance",
    WhyChoosedescription: "Receive instant quotations and fast booking confirmation with dedicated support from our travel team."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Kondhwa to Mumbai cab service?",
    answer: "Yes, Trustline Travels offers reliable cab services from Kondhwa to Mumbai for one-way trips, round trips, airport transfers, and business travel."
  },
  {
    question: "Can I book a one-way cab from Kondhwa to Mumbai?",
    answer: "Yes, we provide affordable one-way cab services with convenient pickup options from Kondhwa and nearby areas."
  },
  {
    question: "Which vehicles are available for Kondhwa to Mumbai travel?",
    answer: "Our fleet includes Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers for different passenger requirements."
  },
  {
    question: "Do you provide pickup from NIBM Road and Undri?",
    answer: "Yes, we provide doorstep pickup from Kondhwa, NIBM Road, Undri, Mohammadwadi, Wanowrie, and surrounding locations."
  },
  {
    question: "Can I book a cab from Kondhwa to Mumbai Airport?",
    answer: "Yes, we provide direct airport transfer services from Kondhwa to Mumbai Airport Terminal 1 and Terminal 2."
  },
  {
    question: "Are toll and parking charges included in the cab fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless included in your booking quotation."
  },
  {
    question: "Is Kondhwa to Mumbai cab service available 24 hours?",
    answer: "Yes, Trustline Travels provides cab services throughout the day and night according to customer travel requirements."
  },
  {
    question: "Can I schedule my cab booking in advance?",
    answer: "Yes, advance booking is available to ensure vehicle availability and timely pickup."
  },
  {
    question: "Do you provide cabs for corporate travel from Kondhwa?",
    answer: "Yes, our cab services are suitable for professionals traveling to Mumbai for meetings, events, and official work."
  },
  {
    question: "How can I book a Kondhwa to Mumbai cab with Trustline Travels?",
    answer: "Share your pickup location, travel date, destination, and preferred vehicle details to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Mahesh Jadhav",
    feedback: "I booked a cab from Kondhwa to Mumbai and had a very comfortable experience with Trustline Travels. The driver was punctual, the vehicle was clean, and the journey was smooth.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Rina Patil",
    feedback: "Trustline Travels arranged a perfect cab for our family trip from Kondhwa to Mumbai. The service was professional, the car was spacious, and the complete ride was hassle-free.",
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
  "name": "Kondhwa to Mumbai Cab Service",
  "image": "https://www.trustlinetravels.com/assets/images/kondhwa-to-mumbai-cab.webp",
  "description": "Book Kondhwa to Mumbai cab service for safe, comfortable, and affordable intercity travel. Trustline Travels offers one-way, round-trip, airport transfers, and private taxi services with Sedan, Ertiga, SUV, Innova, Innova Crysta, and luxury cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "5834"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/kondhwa-to-mumbai-cab"
  }
};




  return (
    <div>
<Helmet>
  <title>Kondhwa to Mumbai Cab | Airport & One Way Taxi | +91 8087080034</title>

  <meta
    name="description"
    content="Book Kondhwa to Mumbai cab service with Trustline Travels for affordable one-way, round-trip, and airport transfers. Get Sedan, Ertiga, SUV, Innova, and Innova Crysta taxis with professional drivers available 24x7."
  />

  <meta
    name="keywords"
    content="kondhwa to mumbai cab fare, kondhwa to mumbai airport cab, kondhwa to navi mumbai cab, Cab Service In Kondhwa, nibm road to mumbai cab, NIBM Road to Mumbai airport cab, cab service in nibm road, Cabs Service Undri Road, taxi service in undri pune, Taxi Service Katraj, katraj to mumbai cab service, katraj to mumbai airport cab, kondhwa to mumbai taxi, kondhwa to mumbai one way cab, pune to mumbai cab"
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
              <img src='/images/keyword/50.jpg' alt='img' className='img-fluid' />
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

export default Kondhwatomumbaicabs;