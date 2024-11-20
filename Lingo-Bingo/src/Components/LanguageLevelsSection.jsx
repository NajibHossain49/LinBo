import React from 'react';
import { 
  PenToolIcon, 
  BookIcon, 
  GlobeIcon 
} from 'lucide-react';

export const LanguageLevelsSection = () => {
  const levels = [
    {
      title: "Beginner",
      color: "text-blue-600",
      icon: PenToolIcon,
      items: [
        "Basic vocabulary sets",
        "Simple grammar concepts", 
        "Daily conversational phrases",
        "Interactive foundation exercises"
      ]
    },
    {
      title: "Intermediate", 
      color: "text-green-600",
      icon: BookIcon,
      items: [
        "Advanced vocabulary expansion",
        "Complex sentence structures",
        "Idiomatic expression mastery",
        "Immersive conversation practice"
      ]
    },
    {
      title: "Advanced",
      color: "text-purple-600", 
      icon: GlobeIcon,
      items: [
        "Specialized professional terminology",
        "Native content comprehension",
        "Deep cultural language insights",
        "Comprehensive mastery challenges"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-300 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
          Choose Your Learning Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map(({ title, color, icon: Icon, items }) => (
            <div 
              key={title}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group border"
            >
              <div className="flex items-center mb-6">
                <Icon 
                  className={`mr-4 ${color} w-12 h-12 group-hover:scale-110 transition-transform`} 
                />
                <h3 className={`text-3xl md:text-lg font-bold ${color}`}>{title}</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                {items.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center"
                  >
                    <span className={`mr-2 ${color}`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageLevelsSection;