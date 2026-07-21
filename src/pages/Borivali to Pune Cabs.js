import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import FaqSection from './FAQKeyword';
import FleetHighway from './FleetHighway';
import ContactShowcase from './phoneToWhatsApp';
import TestimonialSectionKeyword from './TestimonialSectionKeyword';

function Borivalitopunecabs() {



  const cardData = {


  keyword: "Borivali to Pune Cabs",

  headingDescription: "Trustline Travels provides reliable Borivali to Pune cab services with safe, comfortable, and affordable transportation for business travel, corporate meetings, airport transfers, family trips, and outstation journeys. Whether you need a one-way taxi or a round-trip cab, our professional chauffeurs ensure timely pickups, smooth highway travel, and a comfortable journey from Borivali to Pune. Our fleet includes AC Sedans, SUVs, Innova Crysta, Ertiga, Tempo Travellers, and luxury vehicles to suit every travel requirement. With transparent pricing, doorstep pickup, easy online booking, experienced drivers, well-maintained vehicles, flexible travel schedules, and 24/7 customer support, Trustline Travels is your trusted choice for Borivali to Pune taxi services.",

  topPlaces: [
    {
      title: "Wagholi",
      description: "Wagholi is a rapidly developing area in Pune known for residential projects, commercial spaces, educational institutions, and growing business infrastructure. Its connectivity to Kharadi and major IT hubs makes it a preferred destination for professionals."
    },
    {
      title: "Kondhwa",
      description: "Kondhwa is an important residential and commercial locality in Pune featuring business establishments, educational institutions, healthcare facilities, and excellent city connectivity. It is a popular destination for families and working professionals."
    },
    {
      title: "Bavdhan",
      description: "Bavdhan is a growing residential and commercial area surrounded by hills, offering premium housing projects, offices, educational institutions, and easy access to Pune's major business locations."
    },
    {
      title: "Talegaon MIDC",
      description: "Talegaon MIDC is an emerging industrial zone near Pune, housing manufacturing companies, automobile industries, warehouses, and corporate units. It is an important destination for industrial and business travel."
    },
    {
      title: "Kalyani Nagar",
      description: "Kalyani Nagar is a premium Pune locality known for IT companies, business centers, luxury hotels, restaurants, and commercial establishments. It attracts corporate professionals and visitors throughout the year."
    },
    {
      title: "Akurdi",
      description: "Akurdi is a well-connected locality in Pune known for educational institutes, commercial areas, residential developments, and proximity to Pimpri Chinchwad industrial zones."
    },
    {
      title: "Shaniwar Wada",
      description: "Shaniwar Wada is a historic fortification and one of Pune's most famous landmarks. Known for Maratha history, impressive architecture, and cultural importance, it attracts tourists and history enthusiasts."
    },
    {
      title: "Pashan Lake",
      description: "Pashan Lake is a peaceful natural attraction in Pune surrounded by greenery and walking trails. It is a popular spot for nature lovers, photographers, and visitors looking for a relaxing experience."
    },
    {
      title: "Lonavala",
      description: "Lonavala is a scenic hill station between Mumbai and Pune, famous for waterfalls, viewpoints, caves, and lush green landscapes. It is a favorite weekend getaway for families and tourists."
    },
    {
      title: "Bhushi Dam",
      description: "Bhushi Dam near Lonavala is a popular monsoon attraction known for flowing water, scenic surroundings, and a refreshing atmosphere. It attracts tourists looking for a short nature escape near Pune."
    }
  ],






"services": [
  {
    "name": "Borivali to Pune Cab Service",
    "description": "Book Borivali to Pune Cab Service for comfortable intercity travel with professional chauffeurs, clean AC vehicles, transparent pricing, and doorstep pickup. Choose Sedan, Ertiga, Innova Crysta, SUV, and premium cars for business travel, family trips, airport transfers, and outstation journeys."
  },
  {
    "name": "Borivali to Pune Car",
    "description": "Choose Borivali to Pune Car service for safe and convenient travel with well-maintained vehicles, experienced drivers, affordable fares, comfortable seating, and reliable Mumbai Pune transportation."
  },
  {
    "name": "Borivali to Pune Taxi",
    "description": "Book Borivali to Pune Taxi for smooth long-distance travel with AC cars, professional chauffeurs, flexible booking options, luggage space, and affordable taxi rates."
  },
  {
    "name": "Borivali to Pune Taxi Service",
    "description": "Reserve Borivali to Pune Taxi Service with experienced drivers, premium vehicles, punctual pickup, transparent pricing, and comfortable travel for personal, corporate, and family journeys."
  },
  {
    "name": "Borivali to Pune Taxi Fare",
    "description": "Check Borivali to Pune Taxi Fare with affordable pricing, fixed charges, multiple vehicle options, and transparent rates for Sedan, Ertiga, Innova Crysta, and SUV cars."
  },
  {
    "name": "Borivali to Pune Cab",
    "description": "Book Borivali to Pune Cab for one-way, round-trip, and outstation travel with professional drivers, clean AC vehicles, and reliable door-to-door transportation."
  },
  {
    "name": "Pune to Borivali Cab",
    "description": "Choose Pune to Borivali Cab for return travel with comfortable vehicles, experienced chauffeurs, affordable fares, and safe highway connectivity."
  },
  {
    "name": "Cab Service in Borivali",
    "description": "Get Cab Service in Borivali for local and outstation travel with premium cars, professional drivers, airport transfers, and 24x7 booking support."
  },
  {
    "name": "Taxi Service in Borivali",
    "description": "Book Taxi Service in Borivali for reliable transportation with clean vehicles, affordable fares, experienced chauffeurs, and flexible travel solutions."
  },
  {
    "name": "Innova Crysta on Rent in Borivali",
    "description": "Hire Innova Crysta on Rent in Borivali for family trips, corporate travel, airport transfers, and private journeys with luxury comfort and spacious seating."
  },
  {
    "name": "Borivali to Pune Innova Crysta",
    "description": "Travel with Borivali to Pune Innova Crysta featuring premium interiors, AC comfort, large luggage space, and professional chauffeur service."
  },
  {
    "name": "Borivali to Pune Ertiga Cab",
    "description": "Book Borivali to Pune Ertiga Cab for group and family travel with affordable fares, comfortable seating, clean vehicles, and reliable drivers."
  },
  {
    "name": "Mumbai to Pune Cab Booking",
    "description": "Complete Mumbai to Pune Cab Booking online with instant confirmation, multiple vehicle choices, transparent pricing, and hassle-free travel."
  },
  {
    "name": "Taxi Service in Borivali for Outstation Trip",
    "description": "Choose Taxi Service in Borivali for Outstation Trip with experienced chauffeurs, premium vehicles, affordable packages, and safe long-distance journeys."
  },
  {
    "name": "Borivali to Pune Cabs",
    "description": "Book Borivali to Pune Cabs for comfortable intercity transportation with Sedan, Ertiga, Innova Crysta, SUV, and premium car options."
  },
  {
    "name": "Borivali to Pune Taxi",
    "description": "Choose Borivali to Pune Taxi for reliable travel with professional drivers, AC vehicles, transparent fares, and convenient pickup options."
  },
  {
    "name": "Borivali to Pune Cab Booking",
    "description": "Complete Borivali to Pune Cab Booking with quick confirmation, flexible schedules, multiple cars, affordable rates, and professional chauffeur service."
  },
  {
    "name": "Cab from Borivali to Pune",
    "description": "Hire Cab from Borivali to Pune with comfortable seating, luggage assistance, clean vehicles, and dependable long-distance travel service."
  },
  {
    "name": "Borivali to Pune Car Rental",
    "description": "Choose Borivali to Pune Car Rental with Sedan, Ertiga, Innova Crysta, SUV, and premium cars for personal and corporate transportation."
  },
  {
    "name": "Borivali to Pune One Way Cab",
    "description": "Book Borivali to Pune One Way Cab for direct travel with affordable fares, no return charges, experienced drivers, and comfortable AC cars."
  },
  {
    "name": "Cheap Borivali to Pune Cab",
    "description": "Select Cheap Borivali to Pune Cab with budget-friendly fares, clean vehicles, professional chauffeurs, and reliable service."
  },
  {
    "name": "Book Borivali to Pune Cab Online",
    "description": "Book Borivali to Pune Cab Online with instant confirmation, easy reservation, flexible timings, and trusted chauffeur-driven transportation."
  },
  {
    "name": "Borivali to Pune Outstation Cab",
    "description": "Travel with Borivali to Pune Outstation Cab featuring safe highway travel, premium cars, experienced drivers, and affordable packages."
  },
  {
    "name": "Borivali to Pune Airport Cab",
    "description": "Reserve Borivali to Pune Airport Cab for airport transfers with punctual pickup, comfortable AC vehicles, luggage support, and reliable service."
  },
  {
    "name": "24x7 Borivali to Pune Taxi Service",
    "description": "Get 24x7 Borivali to Pune Taxi Service with round-the-clock booking support, professional chauffeurs, and comfortable travel solutions."
  },
  {
    "name": "Best Borivali to Pune Cab Service",
    "description": "Choose Best Borivali to Pune Cab Service for premium vehicles, affordable pricing, experienced drivers, and reliable Mumbai Pune transportation."
  }
],

"tableData": [
  ["Borivali to Pune Cab Service", "Borivali to Pune Car"],
  ["Borivali to Pune Taxi", "Borivali to Pune Taxi Service"],
  ["Borivali to Pune Taxi Fare", "Borivali to Pune Cab"],
  ["Pune to Borivali Cab", "Cab Service in Borivali"],
  ["Taxi Service in Borivali", "Innova Crysta on Rent in Borivali"],
  ["Borivali to Pune Innova Crysta", "Borivali to Pune Ertiga Cab"],
  ["Mumbai to Pune Cab Booking", "Taxi Service in Borivali for Outstation Trip"],
  ["Borivali to Pune Cabs", "Borivali to Pune Taxi"],
  ["Borivali to Pune Cab Booking", "Cab from Borivali to Pune"],
  ["Borivali to Pune Car Rental", "Borivali to Pune One Way Cab"],
  ["Cheap Borivali to Pune Cab", "Book Borivali to Pune Cab Online"],
  ["Borivali to Pune Outstation Cab", "Borivali to Pune Airport Cab"],
  ["24x7 Borivali to Pune Taxi Service", "Best Borivali to Pune Cab Service"]
],





whychoose: [
  {
    WhyChooseheading: "Trusted Borivali to Pune Cab Service",
    WhyChoosedescription: "Trustline Travels offers reliable Borivali to Pune cab services with comfortable cars, experienced drivers, and smooth travel solutions for business and personal journeys."
  },
  {
    WhyChooseheading: "Convenient Pickup from Borivali",
    WhyChoosedescription: "Get doorstep pickup from Borivali East, Borivali West, railway station, hotels, offices, and nearby areas with direct drop anywhere in Pune."
  },
  {
    WhyChooseheading: "Safe & Comfortable Expressway Travel",
    WhyChoosedescription: "Our professional drivers ensure a secure journey through the Mumbai-Pune route with proper planning and excellent road knowledge."
  },
  {
    WhyChooseheading: "Wide Selection of Vehicles",
    WhyChoosedescription: "Choose from Sedan, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers according to your passenger count and comfort needs."
  },
  {
    WhyChooseheading: "Transparent Borivali Pune Cab Pricing",
    WhyChoosedescription: "Enjoy affordable fares with clear pricing details and no hidden charges before confirming your Borivali to Pune cab booking."
  },
  {
    WhyChooseheading: "One Way & Round Trip Cab Options",
    WhyChoosedescription: "Book convenient one-way cabs, return trips, or customized travel packages based on your schedule and requirements."
  },
  {
    WhyChooseheading: "Suitable for Families & Corporate Travel",
    WhyChoosedescription: "Our Borivali to Pune cabs are perfect for family trips, office travel, airport transfers, medical visits, and personal journeys."
  },
  {
    WhyChooseheading: "Easy Booking with 24/7 Support",
    WhyChoosedescription: "Get quick booking assistance, instant confirmation, and continuous support for a comfortable Borivali to Pune travel experience."
  }
]

};

const faqData = [
  {
    question: "Does Trustline Travels provide Borivali to Pune cab service?",
    answer: "Yes, Trustline Travels offers dependable Borivali to Pune cab services for one-way trips, round trips, corporate travel, and personal journeys."
  },
  {
    question: "Can I book a one-way cab from Borivali to Pune?",
    answer: "Yes, one-way cab booking is available from Borivali to Pune with flexible pickup and drop facilities."
  },
  {
    question: "Do you provide pickup from Borivali East and Borivali West?",
    answer: "Yes, we provide pickup services from both Borivali East and Borivali West along with nearby Mumbai locations."
  },
  {
    question: "Which vehicles are available for Borivali to Pune travel?",
    answer: "We provide Sedan cars, Ertiga, Innova, Innova Crysta, SUVs, and Tempo Travellers based on travel requirements."
  },
  {
    question: "Is Borivali to Pune cab service available 24 hours?",
    answer: "Yes, our cab service operates 24/7 for convenient travel at any preferred time."
  },
  {
    question: "Can I book a return cab from Pune to Borivali?",
    answer: "Yes, round-trip cab options are available for passengers who require return travel arrangements."
  },
  {
    question: "Are toll and parking charges included in the cab fare?",
    answer: "Toll charges, parking fees, and applicable taxes are generally charged separately unless included in your booking quotation."
  },
  {
    question: "Can I schedule my Borivali to Pune cab in advance?",
    answer: "Yes, advance booking is recommended to secure your preferred vehicle and pickup timing."
  },
  {
    question: "Do you provide Borivali to Pune cabs for business travel?",
    answer: "Yes, our services are suitable for corporate meetings, office travel, employee transportation, and professional journeys."
  },
  {
    question: "How can I book Borivali to Pune Cabs with Trustline Travels?",
    answer: "Share your pickup location, Pune destination, travel date, passenger details, and preferred vehicle to receive an instant quotation and booking confirmation."
  }
];

const testimonials = [
  {
    id: 1,
    name: "Mr. Karan Joshi",
    feedback: "The Borivali to Pune cab service was excellent with timely pickup, a clean vehicle, and a professional driver. The complete journey was smooth and comfortable from start to finish.",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Aarti Mehra",
    feedback: "Trustline Travels provided a reliable travel experience with easy coordination and excellent service quality. The comfortable cab made our long-distance journey relaxing.",
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
  "name": "Borivali to Pune Cabs Service",
  "image": "https://www.trustlinetravels.com/assets/images/borivali-to-pune-cabs.webp",
  "description": "Book Borivali to Pune cab service with Trustline Travels for safe, comfortable, and affordable intercity travel. Get one-way, round-trip, airport, and outstation taxi services from Borivali Mumbai to Pune with Sedan, Ertiga, SUV, Innova, Innova Crysta, and premium cab options available 24x7.",
  "brand": {
    "@type": "Brand",
    "name": "Trustline Travels"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "bestRating": "5",
    "worstRating": "1",
    "ratingValue": "4.8",
    "ratingCount": "8175"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Starting From ₹12/Km",
    "availability": "https://schema.org/InStock",
    "url": "https://www.trustlinetravels.com/borivali-to-pune-cabs"
  }
};






  return (
    <div>
<Helmet>
  <title>Borivali to Pune Cabs | One Way Taxi Service | +91 8087080034</title>

  <meta
    name="description"
    content="Book Borivali to Pune cab service with Trustline Travels for reliable and affordable intercity travel. Get one-way, round-trip, airport, and private taxi services with Sedan, Ertiga, SUV, Innova, and Innova Crysta cabs available 24x7."
  />

  <meta
    name="keywords"
    content="borivali to pune cab service, borivali to pune car, borivali to pune taxi, borivali to pune taxi service, borivali to pune taxi fare, borivali to pune cab, borivali to pune car rental, borivali to pune one way cab, pune to borivali cab, borivali to pune innova taxi, borivali to pune ertiga taxi, Borivali to Pune Cabs, Borivali Pune Taxi Booking, Borivali Pune Outstation Cab, Borivali Pune Airport Taxi"
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
              <img src='/images/keyword/99.jpg' alt='img' className='img-fluid' />
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

export default Borivalitopunecabs;