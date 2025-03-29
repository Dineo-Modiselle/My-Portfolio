import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import profileImage from '../assets/profileImage.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen bg-black/20  text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-gray-800 to-black p-6 bg-green-500 text-white rounded-lg transform hover:rotate-6 transition"></div>

      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        {/* Profile Image */}
        <div className="mx-auto w-50 h-65 mb-6 rounded-full overflow-hidden border-4 border-gray-700">
          <img 
            src={profileImage} 
            alt="Dineo Modiselle" 
            className="w-full h-66 object-cover"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl font-bold font-[Monsieur_La_Doulaise] mb-2 text-black">
          Dineo Modiselle
        </h1>
        <h2 className="text-6xl text-neutral-500 mb-4">
          SOFTWARE DEVELOPER
        </h2>

        {/* Introduction */}
        <p className="max-w-xl mx-auto text-black mb-8  ">
          Hello, My Name Is Dineo Modiselle. I am a software developer. 
          Please click the links below to learn more about me!
        </p>

        {/* Navigation Links */}
        <div className="space-y-4 max-w-xs mx-auto p-6  rounded-lg transform hover:scale-110 transition duration-300">
          {[
            { label: 'Cover Letter', path: '/cover-letter' },
            { label: 'Resume', path: '/resume' },
            { label: 'Portfolio', path: '/portfolio' }
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block w-full py-3 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Icons */}
        
      </motion.div>
    </div>
  );
};

export default Home;