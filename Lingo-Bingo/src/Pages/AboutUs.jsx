import React from "react";
import { FaGithub, FaLinkedin, FaGlobeAmericas } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import Profile from "../assets/Profile.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-rose-200 to-pink-300 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-3xl overflow-hidden flex flex-col md:flex-row transform hover:scale-[1.01] transition-all duration-300">
        {/* Profile Image Section */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center p-8">
          <div className="rounded-full overflow-hidden border-4 border-white shadow-xl w-64 h-64 transform hover:scale-105 transition-transform duration-300">
            <img
              src={Profile}
              alt="Najib Hossain"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-8 space-y-8">
          <div className="transform hover:-translate-y-1 transition-transform duration-300">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Najib Hossain
            </h1>
            <p className="text-xl text-indigo-600 font-medium">
              Frontend Web Developer
            </p>
          </div>

          {/* Professional Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Detail-oriented Frontend Web Developer with a strong foundation in
              modern web technologies. Passionate about creating responsive,
              user-friendly web applications with clean, efficient code. Skilled
              in React.js and modern frontend practices.
            </p>
          </div>

          {/* Project Description */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Language Learning App
            </h2>
            <p className="text-gray-700 leading-relaxed">
              An innovative language learning application designed to make
              vocabulary acquisition fun and interactive. The app leverages
              modern web technologies to provide an engaging learning
              experience, helping users overcome challenges in language learning
              through intuitive design and interactive features.
              <a
                href="https://github.com/NajibHossain49?tab=stars"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 underline mt-4 inline-block transition-colors duration-300"
              >
                See my more projects
              </a>
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript (ES6+)",
                "React.js",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Firebase",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 pt-6">
            {[
              { Icon: FaGithub, url: "https://github.com/NajibHossain49" },
              { Icon: FaLinkedin, url: "https://www.linkedin.com/in/md-najib-hossain/" },
              { Icon: IoMailSharp, url: "mailto:najibhossain1234@gmail.com" },
              { Icon: FaGlobeAmericas, url: "https://meet-najib.vercel.app/" }
            ].map(({ Icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-125 transition-all duration-300"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;