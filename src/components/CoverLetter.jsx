import React from 'react';
import { 
  Laptop, 
  Code, 
  Server, 
  Database, 
  Shield, 
  Terminal, 
  GitBranch, 
  Layout, 
  Book,
  Award 
} from 'lucide-react';
import profilePicture from "../assets/profilePicture.jpeg";
import pdf from "../assets/languageCertificate.pdf"
import {Link} from "react-router-dom";

const CoverLetter = () => {
  const skillCategories = [
    {
      name: 'Basic Digital Literacy',
      totalUnits: 64,
      icon: <Laptop className="text-blue-500" />,
      skills: [
        'Foundational computer skills',
        'Basic digital tools and applications'
      ]
    },
    {
      name: 'Development Tools',
      totalUnits: null,
      icon: <Terminal className="text-green-500" />,
      skills: [
        'Linux',
        'Git',
        'GitHub',
        'VS Code'
      ]
    },
    {
      name: 'UI Basics',
      totalUnits: 288,
      icon: <Layout className="text-purple-500" />,
      skills: [
        'Modern HTML and CSS',
        'Design Fundamentals',
        'SCSS',
        'Bootstrap',
        'Tailwind CSS (Self Taught)'
      ]
    },
    {
      name: 'Programming Basics',
      totalUnits: 288,
      icon: <Code className="text-red-500" />,
      skills: [
        'Modern JavaScript',
        'Node and NPM',
        'OOP and Functional Programming Concepts',
        'Algorithms'
      ]
    },
    {
      name: 'Single Page Application',
      totalUnits: 288,
      icon: <Database className="text-indigo-500" />,
      skills: [
        'DOM Manipulation',
        'Fetch API',
        'Promises',
        'ESM Modules',
        'Vite',
        'React'
      ]
    },
    {
      name: 'Backend Development',
      totalUnits: 288,
      icon: <Server className="text-gray-500" />,
      skills: [
        'REST API Development with Express',
        'MongoDB / Mongoose',
        'Cybersecurity Concepts',
        'Authentication with JWTs and Cookies'
      ]
    },
    {
      name: 'Final Project',
      totalUnits: 224,
      icon: <Shield className="text-green-600" />,
      skills: [
        'Project Management',
        'Agile Development',
        'DEDSV Luxury Clothing (Group Project)'
      ]
    },
    {
      name: 'Language Skills',
      totalUnits: 200,
      icon: <Book className="text-yellow-500" />,
      skills: [
        'Deutsch Level A2.1'
      ],
      certificateLink: pdf
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl">
       <div className="text-center mb-8">
        <img 
          src={profilePicture}
          alt="Dineo Modiselle" 
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200 shadow-md"
        />
        <h1 className="text-3xl font-bold text-gray-800">Full Stack Software Developer</h1>
        <p className="text-xl text-gray-600">Dineo Modiselle</p>
        <div className="mt-4 flex justify-center space-x-4 text-gray-600">
          <span>dineo.modiselle@icloud.com</span>
          <span>|</span>
          <span>+49 15510 940338</span>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-700">
          A passionate MERN stack developer with a proven track record of building robust, 
          scalable web applications. Transforming complex challenges into elegant, 
          efficient digital solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
          Comprehensive Hard Skill Breakdown
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-2">
                <div className="mr-4 text-3xl">{category.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800">{category.name}</h3>
                  {category.totalUnits && (
                    <span className="text-sm text-gray-600">
                      {category.totalUnits} Training Units
                    </span>
                  )}
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
                {category.certificateLink && (
                  <li className="mt-2">
                    <a 
                      href={category.certificateLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline"
                    >
                      View Language Certificate
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoverLetter;