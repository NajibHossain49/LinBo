import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Volume2, ArrowLeft, Info, X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

const LessonDetail = () => {
  const { lessonNo } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const lessonData = location.state?.lessonData || [];
  const [activeWordId, setActiveWordId] = useState(null);
  const [selectedVocab, setSelectedVocab] = useState(null);

  // Refined Difficulty color mapping
  const getDifficultyStyles = (difficulty) => {
    const normalizedDifficulty = difficulty.toLowerCase() === "difficult" ? "hard" : difficulty.toLowerCase();
    const styles = {
      easy: {
        card: "bg-green-50 border-green-200",
        text: "text-green-800",
        icon: "text-green-600",
      },
      medium: {
        card: "bg-yellow-50 border-yellow-200",
        text: "text-yellow-800",
        icon: "text-yellow-600",
      },
      hard: {
        card: "bg-red-50 border-red-200",
        text: "text-red-800",
        icon: "text-red-600",
      },
      difficult: {
        card: "bg-red-50 border-red-200",
        text: "text-red-800",
        icon: "text-red-600",
      },
    };
  
    if (!styles[normalizedDifficulty]) {
      console.warn(`Unexpected difficulty value: ${difficulty}`);
    }
  
    return styles[normalizedDifficulty] || styles.medium;
  };
  


  // Function to pronounce the word
  const pronounceWord = (pronunciation) => {
    const utterance = new SpeechSynthesisUtterance(pronunciation);
    utterance.lang = "fr-FR";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-rose-200 to-pink-300">
      <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="container mx-auto">
        {/* Back Button */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-blue-600 flex items-center transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" /> Back to Lessons
          </button>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Lesson {lessonNo} Vocabulary
        </h1>

        {/* Vocabulary Cards */}
        {lessonData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No vocabulary words found for this lesson.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessonData.map((word) => {
              const difficultyStyles = getDifficultyStyles(word.difficulty);
              const isActive = activeWordId === word.id;
              
              return (
                <div
                  key={word.id}
                  className={`
                    ${difficultyStyles.card} ${difficultyStyles.text}
                    rounded-xl shadow-lg p-6 border 
                    transition-all duration-300 
                    ${isActive ? "scale-105" : "hover:scale-105"}
                  `}
                  onMouseEnter={() => setActiveWordId(word.id)}
                  onMouseLeave={() => setActiveWordId(null)}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{word.word}</h2>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => pronounceWord(word.pronunciation)}
                        className={`
                          p-2 rounded-full hover:bg-opacity-50 
                          transition-colors ${difficultyStyles.icon}
                        `}
                      >
                        <Volume2 />
                      </button>
                      <button
                        onClick={() => setSelectedVocab(word)}
                        className={`
                          p-2 rounded-full hover:bg-opacity-50 
                          transition-colors ${difficultyStyles.icon}
                        `}
                      >
                        <Info />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Pronunciation:</p>
                      <p className="italic">/{word.pronunciation}/</p>
                    </div>

                    <div>
                      <p className="font-semibold">Meaning:</p>
                      <p>{word.meaning}</p>
                    </div>

                    <div>
                      <p className="font-semibold">Part of Speech:</p>
                      <p className="capitalize">{word.part_of_speech}</p>
                    </div>

                    <div className="text-sm font-medium rounded-full px-3 py-1 inline-block">
                      {word.difficulty.charAt(0).toUpperCase() + 
                       word.difficulty.slice(1)} Difficulty
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Modal */}
        <Modal 
          isOpen={!!selectedVocab} 
          onClose={() => setSelectedVocab(null)}
        >
          {selectedVocab && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedVocab.word}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Meaning:</h3>
                  <p className="text-gray-800">{selectedVocab.meaning}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">When to Say:</h3>
                  <p className="text-gray-800">{selectedVocab.when_to_say}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Example:</h3>
                  <p className="text-gray-800 italic">{selectedVocab.example}</p>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
    </div>
  );
};

export default LessonDetail;