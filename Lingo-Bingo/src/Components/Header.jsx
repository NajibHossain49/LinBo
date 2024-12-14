import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import UsersIcon from "../assets/user.png";

const Header = () => {
  const { user, signOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    signOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Start Learning', href: '/start-learning' },
    { title: 'Tutorials', href: '/tutorials' },
    { title: 'About Dev', href: '/about-us' },
    ...(user ? [{ title: 'My Profile', href: '/my-profile' }] : []),
  ];

  return (
    <header className="bg-gradient-to-r from-teal-500 via-lavender-400 to-indigo-400">
      {/* Welcome Message */}
      {user && (
        <div className="bg-white/10 backdrop-blur-sm py-2">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-white text-sm">
              Welcome back, <span className="font-semibold">{user.displayName || 'User'}</span>! 👋
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Header Section */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-3xl font-bold text-white hover:text-pink-200 transition-colors duration-300"
            >
              <span>LinBo</span>
            </NavLink>
          </div>

          {/* Desktop Navigation (Only visible on lg and above) */}
          <div className="hidden lg:flex items-center space-x-8 ml-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.href}
                className={({ isActive }) =>
                  `text-white/90 hover:text-white transition-colors duration-300 ${
                    isActive ? 'font-medium border-b-2 border-pink-300' : ''
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          {/* Desktop Login/Profile Section (Only visible on lg and above) */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/20 p-0.5 backdrop-blur-sm">
                  <img
                    src={user.photoURL || UsersIcon}
                    alt="User"
                    className="w-full h-full rounded-full object-cover ring-2 ring-white/50"
                  />
                </div>
                <span className="text-sm font-medium text-white">{user.displayName || 'User'}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/30"
              >
                Login
              </button>
            )}
          </div>

          {/* Menu Button (visible on lg and below) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-200 p-2 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Responsive Navigation Menu (visible on lg and below) */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="py-4 bg-white/10 backdrop-blur-md rounded-2xl mb-4 animate-slideDown">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-base font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-white bg-white/20' 
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
              <div className="mt-4 pt-4 border-t border-white/20 px-4">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 p-0.5 backdrop-blur-sm">
                        <img
                          src={user.photoURL || UsersIcon}
                          alt="User"
                          className="w-full h-full rounded-full object-cover ring-2 ring-white/50"
                        />
                      </div>
                      <span className="text-sm font-medium text-white">{user.displayName || 'User'}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/30"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;