import React from 'react';
import { 
  BookOpenIcon, 
  ClockIcon, 
  TrendingUpIcon 
} from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-300 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800 tracking-tight">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We believe that vocabulary is the foundation of language mastery. Our platform 
            provides an innovative approach to learning new words through interactive 
            lessons, spaced repetition, and contextual learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpenIcon,
                title: "Interactive Learning",
                description: "Engage with vocabulary through immersive, gamified exercises",
                color: "text-violet-600"
              },
              {
                icon: ClockIcon,
                title: "Spaced Repetition",
                description: "Optimize memory retention with scientifically-proven techniques",
                color: "text-cyan-600"
              },
              {
                icon: TrendingUpIcon,
                title: "Progress Tracking",
                description: "Visualize your learning journey with comprehensive analytics",
                color: "text-emerald-600"
              }
            ].map(({ icon: Icon, title, description, color }) => (
              <div 
                key={title} 
                className="p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group border"
              >
                <Icon 
                  className={`mx-auto mb-6 ${color} w-16 h-16 group-hover:scale-110 transition-transform`} 
                />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;