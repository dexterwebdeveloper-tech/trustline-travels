import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Mumbaitopuneonewaycab() {



  const cardData = {


  keyword: "Mumbai to Pune One Way Cab",

  headingDescription: "Trustline Travels offers reliable Mumbai to Pune one way cab services with safe, comfortable, and affordable taxi solutions for business trips, airport transfers, corporate travel, family journeys, and outstation rides. Our professional chauffeurs ensure timely pickups, smooth highway travel, and a hassle-free one-way journey from Mumbai to Pune. Choose from a wide range of vehicles including AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury cars based on your travel needs. With transparent one-way fares, doorstep pickup, easy online booking, experienced drivers, well-maintained vehicles, and 24/7 customer support, Trustline Travels is your trusted choice for Mumbai to Pune one way taxi service.",

  topPlaces: [
    {
      title: "Hinjewadi",
      description: "Hinjewadi is Pune's largest IT and business destination, home to multinational companies, technology parks, startups, and corporate offices. It is a major location for professionals, IT employees, and business travelers arriving from Mumbai."
    },
    {
      title: "Kharadi",
      description: "Kharadi is a rapidly developing commercial hub in Pune, known for EON IT Park, global companies, corporate offices, and modern business infrastructure. It attracts thousands of IT professionals and corporate visitors every day."
    },
    {
      title: "Pimpri Chinchwad",
      description: "Pimpri Chinchwad is a major industrial and commercial region known for automobile industries, manufacturing companies, engineering businesses, and corporate establishments. It is an important destination for business and industrial travel."
    },
    {
      title: "Viman Nagar",
      description: "Viman Nagar is a premium locality near Pune Airport, featuring IT companies, shopping malls, luxury hotels, restaurants, and commercial spaces. It is a preferred destination for business travelers and airport passengers."
    },
    {
      title: "Magarpatta City",
      description: "Magarpatta City is a modern integrated township with IT parks, corporate offices, residential communities, and lifestyle facilities. It is a popular destination for professionals, families, and corporate travelers."
    },
    {
      title: "Baner",
      description: "Baner is one of Pune's fast-growing commercial and residential areas, known for IT offices, business centers, restaurants, educational institutions, and premium housing projects. It is a preferred location for professionals and visitors."
    },
    {
      title: "Aga Khan Palace",
      description: "Aga Khan Palace is a historic Pune landmark famous for its beautiful architecture and connection with India's freedom movement. It attracts tourists, history enthusiasts, and cultural visitors throughout the year."
    },
    {
      title: "Shaniwar Wada",
      description: "Shaniwar Wada is a famous historical fortification and one of Pune's most iconic attractions. Known for Maratha history, impressive architecture, and cultural significance, it is a must-visit heritage destination."
    },
    {
      title: "Lonavala",
      description: "Lonavala is a scenic hill station located on the Mumbai-Pune route, famous for waterfalls, valleys, viewpoints, caves, and pleasant weather. It is a popular stopover and weekend destination for travelers."
    },
    {
      title: "Khandala",
      description: "Khandala is a beautiful hill destination near Lonavala known for mountain views, greenery, waterfalls, and peaceful surroundings. It is a favorite attraction for families, couples, and nature lovers traveling between Mumbai and Pune."
    }
  ],






"services": [
  {
    "name": "Mumbai Pune Cab One Way",
    "description": "Book Mumbai Pune Cab One Way for affordable one-side travel with professional chauffeurs, clean AC vehicles, transparent pricing, and comfortable journeys. Choose Sedan, Ertiga, Innova Crysta, SUV, and premium cars for business trips, family travel, airport transfers, and outstation rides."
  },
  {
    "name": "One Way Taxi Mumbai to Pune",
    "description": "Choose One Way Taxi Mumbai to Pune for direct destination travel without return charges. Enjoy fixed fares, experienced drivers, doorstep pickup, spacious luggage capacity, and reliable intercity transportation."
  },
  {
    "name": "Mumbai Pune One Way Drop",
    "description": "Book Mumbai Pune One Way Drop service for convenient point-to-point travel with premium vehicles, professional chauffeurs, affordable fares, and smooth highway journeys."
  },
  {
    "name": "One Way Cab Pune to Mumbai Airport",
    "description": "Reserve One Way Cab Pune to Mumbai Airport for reliable airport transfers with timely pickup, clean AC cars, luggage assistance, and experienced drivers."
  },
  {
    "name": "One Way Mumbai to Pune",
    "description": "Travel with One Way Mumbai to Pune cab service featuring comfortable vehicles, transparent pricing, flexible booking, and safe highway transportation."
  },
  {
    "name": "Pune to Mumbai Airport One Way Cab",
    "description": "Book Pune to Mumbai Airport One Way Cab for hassle-free airport travel with professional chauffeurs, premium cars, affordable fares, and punctual airport drop service."
  },
  {
    "name": "Mumbai Pune One Way Innova Taxi",
    "description": "Choose Mumbai Pune One Way Innova Taxi for premium family travel with spacious seating, luxury comfort, AC facilities, and experienced drivers."
  },
  {
    "name": "Mumbai Pune One Way Sedan Taxi",
    "description": "Book Mumbai Pune One Way Sedan Taxi for economical and comfortable travel with clean vehicles, professional drivers, and transparent one-way fares."
  },
  {
    "name": "Mumbai to Pune One Way Ertiga Drop",
    "description": "Reserve Mumbai to Pune One Way Ertiga Drop for family and group journeys with spacious seating, luggage space, affordable rates, and reliable service."
  },
  {
    "name": "Mumbai to Pune One Way Cab",
    "description": "Book Mumbai to Pune One Way Cab for direct travel with experienced chauffeurs, comfortable AC vehicles, fixed pricing, and dependable intercity transportation."
  },
  {
    "name": "Mumbai Pune Cab One Way",
    "description": "Choose Mumbai Pune Cab One Way service for safe and affordable travel with multiple vehicle options, professional drivers, and flexible pickup locations."
  },
  {
    "name": "One Way Cab Pune to Mumbai",
    "description": "Travel with One Way Cab Pune to Mumbai featuring clean cars, trained chauffeurs, affordable fares, and convenient booking options."
  },
  {
    "name": "Pune to Mumbai Taxi One Way",
    "description": "Book Pune to Mumbai Taxi One Way for comfortable point-to-point transportation with premium vehicles, fixed rates, and reliable service."
  },
  {
    "name": "Pune Mumbai Cab One Way",
    "description": "Reserve Pune Mumbai Cab One Way for business, family, and personal travel with professional drivers and comfortable AC vehicles."
  },
  {
    "name": "One Way Taxi Mumbai to Pune Airport",
    "description": "Choose One Way Taxi Mumbai to Pune Airport for smooth airport connectivity with timely service, experienced chauffeurs, and premium vehicles."
  },
  {
    "name": "One Way Pune to Mumbai",
    "description": "Book One Way Pune to Mumbai cab for affordable travel with transparent pricing, doorstep pickup, and reliable highway journeys."
  },
  {
    "name": "Mumbai One Way Cab",
    "description": "Get Mumbai One Way Cab service with flexible booking, professional chauffeurs, clean vehicles, and comfortable long-distance transportation."
  },
  {
    "name": "Mumbai Pune One Way Taxi",
    "description": "Choose Mumbai Pune One Way Taxi for safe intercity travel with fixed fares, premium cars, and experienced drivers."
  },
  {
    "name": "Best Cab Service Mumbai to Pune",
    "description": "Select Best Cab Service Mumbai to Pune for premium travel experience with affordable rates, reliable vehicles, and professional chauffeur support."
  },
  {
    "name": "Dadar to Pune Cab",
    "description": "Book Dadar to Pune Cab for comfortable travel with AC vehicles, experienced drivers, affordable pricing, and doorstep pickup service."
  },
  {
    "name": "Dadar to Pune Taxi",
    "description": "Choose Dadar to Pune Taxi for reliable intercity travel with clean cars, transparent fares, and professional chauffeurs."
  },
  {
    "name": "Dadar to Pune Cab Service",
    "description": "Reserve Dadar to Pune Cab Service with premium vehicles, trained drivers, flexible schedules, and comfortable transportation."
  },
  {
    "name": "Dadar to Pune Taxi Service",
    "description": "Book Dadar to Pune Taxi Service for safe journeys with affordable fares, AC vehicles, and dependable customer support."
  },
  {
    "name": "Dadar to Pune Cab Booking",
    "description": "Complete Dadar to Pune Cab Booking online with quick confirmation, multiple car options, transparent pricing, and easy reservation."
  },
  {
    "name": "Cab from Dadar to Pune",
    "description": "Hire Cab from Dadar to Pune with professional chauffeurs, premium vehicles, and reliable transportation for business and family travel."
  },
  {
    "name": "Dadar to Pune Car Rental",
    "description": "Choose Dadar to Pune Car Rental with Sedan, Ertiga, Innova Crysta, SUV, and luxury cars for comfortable journeys."
  },
  {
    "name": "Dadar to Pune One Way Cab",
    "description": "Book Dadar to Pune One Way Cab for affordable single-side travel with experienced drivers and clean AC vehicles."
  },
  {
    "name": "Cheap Dadar to Pune Cab",
    "description": "Choose Cheap Dadar to Pune Cab with budget-friendly pricing, reliable service, and comfortable travel options."
  },
  {
    "name": "Book Dadar to Pune Cab Online",
    "description": "Book Dadar to Pune Cab Online with instant confirmation, secure booking, vehicle selection, and professional chauffeur service."
  },
  {
    "name": "Dadar to Pune Outstation Cabs",
    "description": "Travel with Dadar to Pune Outstation Cabs featuring safe highway travel, premium vehicles, and experienced drivers."
  },
  {
    "name": "Dadar to Pune Airport Cab",
    "description": "Reserve Dadar to Pune Airport Cab for punctual airport transfers with luggage assistance, comfortable cars, and reliable service."
  },
  {
    "name": "24x7 Dadar to Pune Taxi Service",
    "description": "Get 24x7 Dadar to Pune Taxi Service with round-the-clock availability, professional chauffeurs, and quick booking support."
  },
  {
    "name": "Best Dadar to Pune Cab Service",
    "description": "Choose Best Dadar to Pune Cab Service for affordable fares, premium vehicles, experienced drivers, and dependable travel solutions."
  }
],

"tableData": [
  ["Mumbai Pune Cab One Way", "One Way Taxi Mumbai to Pune"],
  ["Mumbai Pune One Way Drop", "One Way Cab Pune to Mumbai Airport"],
  ["One Way Mumbai to Pune", "Pune to Mumbai Airport One Way Cab"],
  ["Mumbai Pune One Way Innova Taxi", "Mumbai Pune One Way Sedan Taxi"],
  ["Mumbai to Pune One Way Ertiga Drop", "Mumbai to Pune One Way Cab"],
  ["Mumbai Pune Cab One Way", "One Way Cab Pune to Mumbai"],
  ["Pune to Mumbai Taxi One Way", "Pune Mumbai Cab One Way"],
  ["One Way Taxi Mumbai to Pune", "One Way Pune to Mumbai"],
  ["Mumbai One Way Cab", "Mumbai Pune One Way Taxi"],
  ["Best Cab Service Mumbai to Pune", "Dadar to Pune Cab"],
  ["Dadar to Pune Taxi", "Dadar to Pune Cab Service"],
  ["Dadar to Pune Taxi Service", "Dadar to Pune Cab Booking"],
  ["Cab from Dadar to Pune", "Dadar to Pune Car Rental"],
  ["Dadar to Pune One Way Cab", "Cheap Dadar to Pune Cab"],
  ["Book Dadar to Pune Cab Online", "Dadar to Pune Outstation Cabs"],
  ["Dadar to Pune Airport Cab", "24x7 Dadar to Pune Taxi Service"],
  ["Best Dadar to Pune Cab Service", ""]
],





whychoose: [
  {
    WhyChooseheading: "Reliable Mumbai to Pune One Way Cab",
    WhyChoosedescription: "Trustline Travels provides affordable one way cab services from Mumbai to Pune with comfortable vehicles, experienced drivers, and convenient travel solutions."
  },
  {
    WhyChooseheading: "Cost-Effective One Way Travel",
    WhyChoosedescription: "Travel economically with our one way cab service that allows you to pay only for your journey without additional return charges."
  },
  {
    WhyChooseheading: "Professional Drivers for Safe Journey",
    WhyChoosedescription: "Our trained chauffeurs ensure safe, smooth, and timely travel with excellent knowledge of the Mumbai-Pune Expressway route."
  },
  {
    WhyChooseheading: "Pickup Anywhere in Mumbai",
    WhyChoosedescription: "Get convenient pickup from Mumbai Airport, railway stations, hotels, offices, and residential areas with direct drop anywhere in Pune."
  },
  {
    WhyChooseheading: "Multiple Vehicle Choices",
    WhyChoosedescription: "Select from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers according to your comfort and passenger requirements."
  },
  {
    WhyChooseheading: "Transparent One Way Cab Fare",
    WhyChoosedescription: "Receive clear pricing details before booking with competitive rates and no hidden charges for your Mumbai to Pune one way trip."
  },
  {
    WhyChooseheading: "Perfect for Business & Personal Trips",
    WhyChoosedescription: "Our one way cabs are ideal for corporate travel, family visits, airport transfers, relocation, and personal journeys."
  },
  {
    WhyChooseheading: "Quick Booking with 24/7 Support",
    WhyChoosedescription: "Book your Mumbai to Pune one way cab anytime with instant confirmation and dedicated customer assistance."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Mumbai to Pune one way cab service?",
    answer: "Yes, Trustline Travels offers reliable one way cab services from Mumbai to Pune with flexible pickup and drop options."
  },
  {
    question: "What is the benefit of booking a one way cab?",
    answer: "One way cab service is economical because customers pay only for their travel route without paying unnecessary return trip charges."
  },
  {
    question: "Can I book a one way cab from Mumbai Airport to Pune?",
    answer: "Yes, we provide direct one way cab services from Mumbai Airport to Pune with convenient pickup arrangements."
  },
  {
    question: "Which vehicles are available for Mumbai to Pune one way travel?",
    answer: "Our fleet includes Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers for different travel requirements."
  },
  {
    question: "Is Mumbai to Pune one way cab service available 24 hours?",
    answer: "Yes, our one way cab service is available throughout the day and night for your convenience."
  },
  {
    question: "Do you provide doorstep pickup in Mumbai?",
    answer: "Yes, doorstep pickup is available from homes, offices, hotels, airports, railway stations, and major Mumbai locations."
  },
  {
    question: "Are toll and parking charges included in the one way fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless included in the confirmed booking quotation."
  },
  {
    question: "Can I book a one way cab in advance?",
    answer: "Yes, advance booking is recommended to secure your preferred vehicle and travel timing."
  },
  {
    question: "Is this service suitable for corporate travelers?",
    answer: "Yes, Mumbai to Pune one way cabs are suitable for business professionals, office travel, and corporate transportation."
  },
  {
    question: "How can I book Mumbai to Pune One Way Cab with Trustline Travels?",
    answer: "Share your pickup location, Pune destination, travel date, passenger details, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Yash Malhotra",
    feedback: "The one way cab service offered excellent convenience with smooth coordination and timely pickup. The comfortable vehicle and professional driver made the Mumbai to Pune journey pleasant.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Riya Bhatia",
    feedback: "A dependable travel option with fair pricing and quality service. The driver maintained excellent professionalism, and the complete one way journey was managed perfectly.",
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
  "name": "Mumbai to Pune One Way Cab Service",
  "image": "https://www.trustlinetravels.com/assets/images/mumbai-to-pune-one-way-cab.webp",
  "description": "Book Mumbai to Pune one way cab service with Trustline Travels for affordable and comfortable intercity travel. Get reliable one-way drop taxi services with Sedan, Ertiga, SUV, Innova, Innova Crysta, and premium cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "7689"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/mumbai-to-pune-one-way-cab"
  }
};








  return (
    <div>
<Helmet>
  <title>Mumbai to Pune One Way Cab | Drop Taxi Service | +91 8087080034</title>

  <meta
    name="description"
    content="Book Mumbai to Pune one way cab with Trustline Travels for safe and affordable travel. Get one-way drop taxi services with Sedan, Ertiga, SUV, Innova, and Innova Crysta options for Mumbai Pune routes available 24x7."
  />

  <meta
    name="keywords"
    content="mumbai pune cab one way, one way taxi mumbai to pune, mumbai pune one way drop, one way cab pune to mumbai airport, one way mumbai to pune, pune to mumbai airport one way cab, mumbai pune one way innova taxi, mumbai pune one way sedan taxi, mumbai pune one way drop, mumbai to pune one way ertiga drop, Mumbai to Pune One Way Cab, Mumbai Pune One Way Taxi, Mumbai Pune Drop Taxi, Mumbai Pune One Way Cab Booking"
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
              <img src='/images/keyword/94.jpg' alt='img' className='img-fluid' />
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

export default Mumbaitopuneonewaycab;