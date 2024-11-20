import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const TutorialPage = () => {
  const { videoLinks } = useLoaderData();
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/start-learning");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-rose-200 to-pink-300 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Learn French: Video Tutorials
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ready to start learning?
          </h2>
          <p className="text-indigo-700">
            Comprehensive lessons to boost your French skills
          </p>
        </div>

        {/* Video Grid - Optimized for playback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videoLinks.map((video) => (
            <div
              key={video.id}
              className="bg-gray-200 rounded-lg overflow-hidden"
            >
              {/* Video Container with 16:9 Aspect Ratio */}
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full border-none"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-teal-600 truncate">
                  {video.title}
                </h3>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Ready to play</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="text-center">
          <button
            onClick={handleStartLearning}
            className="bg-indigo-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Continue to Vocabulary Practice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
