import React from 'react';

export const LearningJourneySection = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-500">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p>Determine your current level</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-500">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalization</h3>
              <p>Custom learning path created</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-500">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Practice</h3>
              <p>Interactive daily exercises</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-blue-500">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mastery</h3>
              <p>Achieve your goals</p>
            </div>
          </div>
        </div>
      </section>
    );
  };