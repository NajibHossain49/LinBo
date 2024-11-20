import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-pink-200 via-red-100 to-yellow-50 text-gray-700 p-6">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Store Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Lingo Bingo</h2>
            <p className="text-gray-700 text-sm">
              Your One-Stop Destination for Language Mastery
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-500">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-500">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-500">
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/NajibHossain49"
                className="hover:text-gray-500"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/start-learning"
                  className="text-gray-700 hover:text-gray-500"
                >
                  Start Learning
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-700 hover:text-gray-500"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-700 hover:text-gray-500"
                >
                  About Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-700">
                <Phone size={16} />
                <span>(+880) 1534-633727</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-700 flex-nowrap">
                <Mail size={16} />
                <a
                  href="mailto:MNHnajib@outlook.com"
                  className="text-gray-700 hover:text-gray-800 truncate max-w-xs md:max-w-full"
                >
                  MNHnajib@outlook.com
                </a>
              </li>

              <li className="flex items-center space-x-2 text-gray-700">
                <MapPin size={18} />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-700 text-sm">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2  rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-700 text-sm">
            <p>
              © {new Date().getFullYear()} Lingo Bingo. All rights reserved.
            </p>
            <div className="mt-2 space-x-4">
              <Link to="/privacy" className="hover:text-gray-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gray-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
