import React from 'react';
import Carousel from './Carousel';
import WideRangeSection from '../pages/WideRangeSection';
import ExploreBrandsSection from '../pages/ExploreBrandsSection';
import ClientSlider from '../pages/ClientSlider';
import AboutSection from '../pages/AboutSection';
import AdventureSection from '../pages/AdventureSection ';
import VehicleFleet from '../pages/VehicleFleet ';
import WhyChooseUs from '../pages/WhyChooseUs ';
import WorkingSteps from '../pages/WorkingSteps ';
import Testimonials from '../pages/Testimonials';
import BlogSection from '../pages/BlogSection';
import VideoSlider from './VideoSlider';




const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              {/* <Carousel/> */}
              <VideoSlider/>
              <WideRangeSection/>
              <ExploreBrandsSection/>
              {/* <ClientSlider/> */}
{/* <AboutSection/> */}
<AdventureSection/>
<VehicleFleet/>
<WhyChooseUs/>
<WorkingSteps/>
<Testimonials/>
<BlogSection/>
    </div>
  );
};

export default HeroSection;
