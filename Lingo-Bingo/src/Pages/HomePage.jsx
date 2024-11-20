import React, { useEffect } from "react";
import { BannerSlider } from "../Components/BannerSlider";
import { AboutSection } from "../Components/AboutSection";
import { SuccessSection } from "../Components/SuccessSection";
import { LanguageLevelsSection } from "../Components/LanguageLevelsSection";
import { LearningJourneySection } from "../Components/LearningJourneySection";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      delay: 50,
      easing: 'ease-in-out',
      mirror: true,  
      once: false    
    });

    
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div 
        data-aos="fade-up" 
        data-aos-duration="1200"
      >
        <BannerSlider />
      </div>
      
      <div 
        data-aos="slide-right" 
        data-aos-delay="200"
      >
        <AboutSection />
      </div>
      
      <div 
        data-aos="zoom-in-up" 
        data-aos-duration="1500"
      >
        <SuccessSection />
      </div>
      
      <div 
        data-aos="fade-left"
      >
        <LanguageLevelsSection />
      </div>
      
      <div 
        data-aos="flip-up" 
        data-aos-delay="300"
      >
        <LearningJourneySection />
      </div>
    </div>
  );
};

export default HomePage;