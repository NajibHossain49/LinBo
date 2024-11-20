import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Play, ChevronRight } from "lucide-react";

const LearnPage = () => {
  const navigate = useNavigate();
  const [vocabularyData, setVocabularyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllLessons, setShowAllLessons] = useState(false);

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch("/FrenchVocabulary.json");
        if (!response.ok) {
          throw new Error("Failed to fetch vocabulary data");
        }
        const data = await response.json();
        setVocabularyData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVocabulary();
  }, []);

  const lessons = vocabularyData.reduce((acc, item) => {
    const lessonNo = item.lesson_no;
    if (!acc[lessonNo]) {
      acc[lessonNo] = {
        id: lessonNo,
        title: `Lesson ${lessonNo}`,
        words: [],
      };
    }
    acc[lessonNo].words.push(item);
    return acc;
  }, {});

  const sortedLessons = Object.values(lessons).sort((a, b) => a.id - b.id);
  const displayedLessons = showAllLessons
    ? sortedLessons
    : sortedLessons.slice(0, 10);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-xl shadow-lg">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
          <div className="text-xl text-indigo-900">Loading lessons...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-xl text-red-600 bg-white p-6 rounded-lg shadow-md">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-rose-200 to-pink-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-transform">
            Learn French Vocabulary
          </div>
          <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
            Your Journey to Fluency Begins Here
          </h1>
          <p className="text-xl text-indigo-700 max-w-2xl mx-auto">
            Explore structured lessons, dive into vocabulary, and enhance your
            French language skills.
          </p>
        </div>

        {/* Lessons Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-indigo-900 flex items-center">
              <BookOpen className="mr-3 text-indigo-600" /> Lessons
            </h2>
            {!showAllLessons && sortedLessons.length > 10 && (
              <button
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                onClick={() => setShowAllLessons(true)}
              >
                View All <ChevronRight className="ml-2" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {displayedLessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() =>
                  navigate(`/lesson/${lesson.id}`, {
                    state: { lessonData: lesson.words },
                  })
                }
                className="
                  bg-white rounded-xl shadow-md 
                  hover:shadow-xl transform hover:-translate-y-2 
                  transition-all duration-300 ease-in-out 
                  border border-indigo-100 
                  cursor-pointer group
                  overflow-hidden
                  hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50
                "
              >
                <div className="p-6 text-center">
                  <div
                    className="
                    w-16 h-16 mx-auto mb-4 
                    bg-gradient-to-br from-indigo-500 to-purple-500
                    text-white 
                    rounded-full flex items-center justify-center 
                    group-hover:from-indigo-600 group-hover:to-purple-600
                    transition-all duration-300
                  "
                  >
                    <span className="text-2xl font-bold">{lesson.id}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-indigo-600">
                    {lesson.words.length} Words
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorial Section */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100">
          <div className="p-6 flex items-center justify-between border-b border-indigo-100">
            <h2 className="text-3xl font-bold text-indigo-900 flex items-center">
              <Play className="mr-3 text-indigo-600" /> Video Tutorials
            </h2>
            <button
              onClick={() => navigate("/tutorials")}
              className="
        px-6 py-2 rounded-full
        bg-gradient-to-r from-indigo-500 to-purple-500
        text-white 
        hover:from-indigo-600 hover:to-purple-600
        transition-all duration-300
        flex items-center
        transform hover:scale-105
      "
            >
              View More <ChevronRight className="ml-2" />
            </button>
          </div>

          <div className="aspect-w-16 aspect-h-9 flex flex-col justify-center items-center p-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zzGVV5fG6Ec?si=h7FnLJ2EkJTlV0pW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          <div className="mt-4 px-4 py-2 bg-indigo-100 text-indigo-900 rounded-lg shadow-sm">
            <p className="text-lg font-semibold text-center">
              The French Alphabet for Beginners
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnPage;
