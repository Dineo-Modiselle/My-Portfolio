import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Github,
  Linkedin,
  Mail,
  Maximize2,
  Volume2,
  Battery,
  Wifi,
  MessageSquare,
  FolderIcon,
  ExternalLink,
} from "lucide-react";
import windows from "../assets/windows.png";
import computer from "../assets/computer.png";
import dciCertificate from "../assets/DCI_CERTIFICATE.pdf";
import culturalDiversity from "../assets/CulturalDiversity .pdf";
import onlineTeamwork from "../assets/OnlineTeamwork.pdf";
import digitalTransformation from "../assets/DigitalTransformation.pdf";
import designThinking from "../assets/DesignThinking .pdf";
import socialIntelligence from "../assets/SocialIntelligence.pdf";
import languangeCertificate from "../assets/languageCertificate.pdf";
import windowsFolder from "../assets/windowsFolder.png";
import windowsContact from "../assets/windowsContact.png";
import Paint from "../assets/pain.webp";

const Windows95Portfolio = () => {
    
    
  const [activeWindow, setActiveWindow] = useState("about");
  const navigate = useNavigate();
  const handlePaintGame = () => {

    navigate("/paint-game");
    };

  const [isMinimized, setIsMinimized] = useState(false);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState(["portfolio"]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [desktopIcons, setDesktopIcons] = useState([
    {
      id: "about-me",
      name: "About Me",
      icon: `${computer}`,
      window: "about",
    },
    {
      id: "projects",
      name: "Projects",
      icon: `${ windowsFolder }`,
      window: "projects",
    },
    {
      id: "contact",
      name: "Contact",
      icon: `${ windowsContact }`,
      window: "contact",
    },
    {
        id: "pain",
        name: "Paint",
        icon: `${ Paint }`,
        window: handlePaintGame,
        className: "w-10 h-10"
      },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  

 

  // Updated professional profile data
  const profileData = {
    name: "Dineo Modiselle",
    title: "Full Stack Software Developer",
    email: "dineo.modiselle@icloud.com",
    github: "https://github.com/Dineo-Modiselle",
    linkedin: "https://linkedin.com/in/dineo-modiselle-65096833a/",
    portfolio: "https://yourportfolio.com",
    summary:
      "Motivated and detail-oriented Software Developer with a strong foundation in modern web development technologies. Proficient in JavaScript, React, Node.js, and MongoDB, with hands-on experience building full-stack applications. Passionate about writing clean, efficient code and continuously learning new technologies. Adept at problem-solving, collaborating in team environments, and delivering user-focused solutions. Excited to contribute technical skills and creativity to dynamic development teams.",
    skills: [
      {
        category: "Frontend",
        items: ["React", "Bootstrap", "SCSS", "Tailwind CSS", "Modern HTML and CSS", ""],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Cybersecurity Concept", "Authentication with JWTs and Cookies", "RESTful APIs"],
      },
      {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
      },
      { category: "Language Skills", items: ["Docker", "AWS", "CI/CD", "Git"] },
      {
        category: "Soft Skills",
        items: [
          {
            name: "Online Team Work",
            certificate: `${onlineTeamwork}`,
          },
          {
            name: "Digital Transformation",
            certificate: `${digitalTransformation}`,
          },
          {
            name: "Cultural Diversity",
            certificate: `${culturalDiversity}`,
          },
          {
            name: "Social Intelligence",
            certificate: `${socialIntelligence}`,
          },
          {
            name: "Design Thinking",
            certificate: `${designThinking}`,
          },
          {
            name: "German A2.1",
            certificate: `${languangeCertificate}`,
          },
          
        ],
      },
    ],
    experience: [
      {
        company: "Tech Innovations Inc.",
        title: "Senior Full Stack Developer",
        duration: "2022 - Present",
        description:
          "Lead development of customer-facing web applications using React, Node.js, and AWS. Improved application performance by 40% and implemented CI/CD pipelines that reduced deployment time by 60%.",
      },
      {
        company: "Digital Solutions Group",
        title: "Frontend Developer",
        duration: "2020 - 2022",
        description:
          "Developed responsive web interfaces using React and TypeScript. Collaborated with UX designers to implement user-centered designs and improved accessibility across all company products.",
      },
      {
        company: "StartUp Networks",
        title: "Junior Web Developer",
        duration: "2018 - 2020",
        description:
          "Built and maintained company website and internal tools using JavaScript, HTML, and CSS. Assisted in the migration of legacy systems to modern web frameworks.",
      },
    ],
    education: [
      {
        institution: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        duration: "2014 - 2018",
        achievements:
          "Graduated with honors. Specialized in web development and algorithms.",
      },
    ],
    projects: [
      {
        title: "E-Commerce Platform",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        description:
          "Fully-featured online store with user authentication, product catalog, shopping cart, and payment processing.",
        link: "https://github.com/yourusername/ecommerce-platform",
      },
      {
        title: "Task Management App",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        description:
          "Collaborative task manager with real-time updates, user roles, and progress tracking.",
        link: "https://github.com/yourusername/task-manager",
      },
      {
        title: "API Gateway Service",
        technologies: ["Node.js", "Express", "Docker", "AWS Lambda"],
        description:
          "Microservice architecture for handling API requests with rate limiting, caching, and authentication.",
        link: "https://github.com/yourusername/api-gateway",
      },
    ],
  };

 
  const renderContent = () => {
    switch (activeWindow) {
      case "about":
        return (
          <div className="p-4 h-full overflow-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3">
                <div className="border border-gray-400 p-4 bg-gray-100">
                  <h2 className="font-bold text-lg">{profileData.name}</h2>
                  <h3 className="text-sm text-gray-700">{profileData.title}</h3>
                  <div className="mt-4 flex flex-col space-y-2">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="flex items-center text-xs"
                    >
                      <Mail size={14} className="mr-2" /> {profileData.email}
                    </a>
                    <a
                      href={profileData.github}
                      className="flex items-center text-xs"
                    >
                      <Github size={14} className="mr-2" /> GitHub
                    </a>
                    <a
                      href={profileData.linkedin}
                      className="flex items-center text-xs"
                    >
                      <Linkedin size={14} className="mr-2" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="font-bold mb-2">About Me</h2>
                <p className="text-sm mb-4">{profileData.summary}</p>
                <h3 className="font-bold mt-4 mb-2">Skills</h3>
                {profileData.skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="mb-2">
                    <div className="text-sm font-bold">
                      {skillGroup.category}:
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {skillGroup.category !== "Soft Skills"
                        ? skillGroup.items.map((skill) => (
                            <div
                              key={skill}
                              className="bg-gray-200 border border-gray-400 px-2 py-1 text-xs"
                            >
                              {skill}
                            </div>
                          ))
                        : skillGroup.items.map((skill) => (
                            <a
                              key={skill.name}
                              href={skill.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-200 border border-gray-400 px-2 py-1 text-xs flex items-center hover:bg-blue-100"
                            >
                              {skill.name}
                              <Award
                                size={12}
                                className="ml-1 text-yellow-600"
                              />
                            </a>
                          ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="p-4 h-full overflow-auto">
            <h2 className="font-bold mb-4">Work Experience</h2>
            {profileData.experience.map((job, index) => (
              <div
                key={index}
                className="mb-4 p-3 border border-gray-400 bg-gray-100"
              >
                <div className="font-bold">{job.title}</div>
                <div className="text-sm">{job.company}</div>
                <div className="text-xs text-gray-600">{job.duration}</div>
                <p className="mt-2 text-xs">{job.description}</p>
              </div>
            ))}

            <h2 className="font-bold mb-4 mt-6">Education</h2>
            {profileData.education.map((edu, index) => (
              <div
                key={index}
                className="mb-4 p-3 border border-gray-400 bg-gray-100"
              >
                <div className="font-bold">{edu.degree}</div>
                <div className="text-sm">{edu.institution}</div>
                <div className="text-xs text-gray-600">{edu.duration}</div>
                <p className="mt-1 text-xs">{edu.achievements}</p>
              </div>
            ))}

            <h2 className="font-bold mb-4 mt-6">
              Certifications & Soft Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {profileData.skills
                .filter((skillGroup) => skillGroup.category === "Soft Skills")
                .flatMap((skillGroup) => skillGroup.items)
                .map((skill, index) => (
                  <a
                    key={index}
                    href={skill.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-400 bg-gray-100 flex items-center hover:bg-blue-100"
                  >
                    <Award size={16} className="mr-2 text-yellow-600" />
                    <div>
                      <div className="font-bold">{skill.name}</div>
                      <div className="text-xs text-blue-600">
                        View Certificate
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        );
      case "projects":
        return (
          <div className="p-4 h-full overflow-auto">
            <h2 className="font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-4">
              {profileData.projects.map((project, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-400 bg-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <div className="font-bold">{project.title}</div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-blue-700"
                    >
                      <ExternalLink size={12} className="mr-1" /> View
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-100 border border-blue-300 px-1 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-xs">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="p-4 h-full overflow-auto">
            <h2 className="font-bold mb-4">Contact Information</h2>
            <div className="border border-gray-400 p-4 bg-gray-100">
              <div className="flex flex-col space-y-4">
                <div>
                  <div className="text-sm font-bold mb-1">Email:</div>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm text-blue-700 flex items-center"
                  >
                    <Mail size={14} className="mr-2" /> {profileData.email}
                  </a>
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">GitHub:</div>
                  <a
                    href={profileData.github}
                    className="text-sm text-blue-700 flex items-center"
                  >
                    <Github size={14} className="mr-2" />{" "}
                    {profileData.github.replace("https://github.com/", "")}
                  </a>
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">LinkedIn:</div>
                  <a
                    href={profileData.linkedin}
                    className="text-sm text-blue-700 flex items-center"
                  >
                    <Linkedin size={14} className="mr-2" />{" "}
                    {profileData.linkedin.replace(
                      "https://linkedin.com/in/",
                      ""
                    )}
                  </a>
                </div>
              </div>

              <div className="mt-6 p-3 border border-gray-400 bg-white">
                <h3 className="text-sm font-bold mb-2">Get In Touch</h3>
                <p className="text-xs mb-2">
                  Feel free to reach out for job opportunities, collaborations,
                  or just to say hello!
                </p>
                <p className="text-xs">
                  I'm currently{" "}
                  {Math.random() > 0.5
                    ? "open to new opportunities"
                    : "available for freelance work"}
                  .
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleIconClick = (windowName) => {
    setActiveWindow(windowName);
    setIsMinimized(false);
  };

  // Custom styles for toolbar buttons
  const toolbarButtonStyle = (isActive) => {
    return {
      backgroundColor: isActive ? "#FFFFFF" : "#C0C0C0",
      borderTop: isActive ? "1px solid #808080" : "1px solid #FFFFFF",
      borderLeft: isActive ? "1px solid #808080" : "1px solid #FFFFFF",
      borderBottom: isActive ? "1px solid #FFFFFF" : "1px solid #808080",
      borderRight: isActive ? "1px solid #FFFFFF" : "1px solid #808080",
      boxShadow: isActive ? "inset 1px 1px 0px #808080" : "none",
      padding: "3px 8px",
      margin: "0 2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: isActive ? "bold" : "normal",
      cursor: "pointer",
    };
  };

  return (
    <div
      className="bg-[#008080] w-full h-screen flex items-center justify-center font-ms-sans relative overflow-hidden"
      style={{
        fontFamily: "'MS Sans Serif', Tahoma, sans-serif",
        backgroundImage: 'url("/api/placeholder/1600/900")',
        backgroundSize: "cover",
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4  grid grid-cols-1 gap-6">
        {desktopIcons.map((icon) => (
          <div
            key={icon.id}
            className="flex flex-col items-center cursor-pointer  p-2 hover:bg-blue-200/30"
            onClick={() => handleIconClick(icon.window)}
          >
            <img src={icon.icon} alt={icon.name} className={ icon.className || "w-20 h-20"} />
            <span className="text-white text-xs mt-1 bg-black/50 px-1">
              {icon.name}
            </span>
          </div>
        ))}
      </div>

      {/* Portfolio Window */}
      <div
        className="w-[800px] h-[600px] bg-[#C0C0C0] border-4 border-[#808080] shadow-2xl mb-8 flex flex-col"
        style={{
          borderTopColor: "#FFFFFF",
          borderLeftColor: "#FFFFFF",
          borderBottomColor: "#808080",
          borderRightColor: "#808080",
        }}
      >
        {/* Window Title Bar */}
        <div
          className="bg-[#000080] text-white flex justify-between items-center px-2 py-1"
          style={{
            backgroundImage: "linear-gradient(to right, #000080, #1084D0)",
          }}
        >
          <div className="flex items-center space-x-2">
            <FolderIcon size={16} className="text-white" />
            <span>{profileData.name} - Professional Portfolio</span>
          </div>
          <div className="flex space-x-1">
            <button
              className="w-6 h-6 bg-[#C0C0C0] border-2 border-white flex items-center justify-center"
              style={{
                borderBottomColor: "#808080",
                borderRightColor: "#808080",
              }}
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? "☐" : "_"}
            </button>
            <button
              className="w-6 h-6 bg-[#C0C0C0] border-2 border-white flex items-center justify-center"
              style={{
                borderBottomColor: "#808080",
                borderRightColor: "#808080",
              }}
            >
              <Maximize2 size={12} />
            </button>
            <button
              className="w-6 h-6 bg-[#C0C0C0] border-2 border-white flex items-center justify-center text-red-600 font-bold"
              style={{
                borderBottomColor: "#808080",
                borderRightColor: "#808080",
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Menu Bar */}
            <div className="bg-[#C0C0C0] border-b border-gray-400 flex px-1">
              <div className="px-3 py-1 hover:bg-[#1084D0] hover:text-white cursor-pointer">
                File
              </div>
              <div className="px-3 py-1 hover:bg-[#1084D0] hover:text-white cursor-pointer">
                Edit
              </div>
              <div className="px-3 py-1 hover:bg-[#1084D0] hover:text-white cursor-pointer">
                View
              </div>
              <div className="px-3 py-1 hover:bg-[#1084D0] hover:text-white cursor-pointer">
                Help
              </div>
            </div>

            {/* Enhanced Toolbar with better styling */}
            <div className="bg-[#C0C0C0] border-b border-gray-400 flex items-center px-3 py-2">
              <button
                onClick={() => setActiveWindow("about")}
                style={toolbarButtonStyle(activeWindow === "about")}
              >
                <Users size={14} style={{ marginRight: "6px" }} />
                <span>About</span>
              </button>
              <button
                onClick={() => setActiveWindow("experience")}
                style={toolbarButtonStyle(activeWindow === "experience")}
              >
                <Briefcase size={14} style={{ marginRight: "6px" }} />
                <span>Experience</span>
              </button>
              <button
                onClick={() => setActiveWindow("projects")}
                style={toolbarButtonStyle(activeWindow === "projects")}
              >
                <Code size={14} style={{ marginRight: "6px" }} />
                <span>Projects</span>
              </button>
              <button
                onClick={() => setActiveWindow("contact")}
                style={toolbarButtonStyle(activeWindow === "contact")}
              >
                <Mail size={14} style={{ marginRight: "6px" }} />
                <span>Contact</span>
              </button>
            </div>

            {/* Main Content */}
            <div
              className="bg-white border-2 border-[#808080] m-2 flex-grow overflow-hidden"
              style={{ height: "calc(100% - 90px)" }}
            >
              {renderContent()}
            </div>

            {/* Status Bar */}
            <div
              className="bg-[#C0C0C0] border-t border-white px-2 py-1 text-xs flex justify-between"
              style={{
                borderTopColor: "#808080",
                borderBottomColor: "#FFFFFF",
              }}
            >
              <span>Ready</span>
              <span>{formatTime(currentTime)}</span>
            </div>
          </>
        )}
      </div>

      {/* Start Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 h-8 bg-[#C0C0C0] border-t-2 border-white flex justify-between items-center"
        style={{
          borderTopColor: "#808080",
        }}
      >
        {/* Start Button */}
        <div className="relative">
          <button
            className="bg-[#C0C0C0] border-2 border-white flex items-center  p-auto m-auto font-bold"
            style={{
              borderTopColor: "#808080",
              borderLeftColor: "#808080",
              borderBottomColor: "#FFFFFF",
              borderRightColor: "#FFFFFF",
            }}
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          >
            <img
              src={windows}
              alt="Windows Logo"
              className="w-4 h-4  mr-1"
            />
            Start
          </button>

          {isStartMenuOpen && (
            <div
              className="absolute bottom-full left-0 w-64 bg-[#C0C0C0] border-2 border-white"
              style={{
                borderTopColor: "#808080",
                borderLeftColor: "#808080",
                borderBottomColor: "#FFFFFF",
                borderRightColor: "#FFFFFF",
              }}
            >
              <div className="flex">
                <div className="w-12 bg-[#1084D0] text-white flex flex-col justify-center">
                  <div className="transform -rotate-90 whitespace-nowrap">
                    Portfolio
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className="p-2 hover:bg-[#1084D0] hover:text-white cursor-pointer flex items-center"
                    onClick={() => {
                      setActiveWindow("about");
                      setIsStartMenuOpen(false);
                    }}
                  >
                    <Users size={16} className="mr-2" />
                    About Me
                  </div>
                  <div
                    className="p-2 hover:bg-[#1084D0] hover:text-white cursor-pointer flex items-center"
                    onClick={() => {
                      setActiveWindow("experience");
                      setIsStartMenuOpen(false);
                    }}
                  >
                    <Briefcase size={16} className="mr-2" />
                    Experience
                  </div>
                  <div
                    className="p-2 hover:bg-[#1084D0] hover:text-white cursor-pointer flex items-center"
                    onClick={() => {
                      setActiveWindow("projects");
                      setIsStartMenuOpen(false);
                    }}
                  >
                    <Code size={16} className="mr-2" />
                    Projects
                  </div>
                  <div
                    className="p-2 hover:bg-[#1084D0] hover:text-white cursor-pointer flex items-center"
                    onClick={() => {
                      setActiveWindow("contact");
                      setIsStartMenuOpen(false);
                    }}
                  >
                    <Mail size={16} className="mr-2" />
                    Contact
                  </div>
                  <div className="border-t border-gray-400 p-2 hover:bg-[#1084D0] hover:text-white cursor-pointer">
                    Resume (PDF)

                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* System Tray */}
        <div className="flex items-center space-x-2 mr-2">
          <Volume2 size={16} className="text-black" />
          <Wifi size={16} className="text-black" />
          <Battery size={16} className="text-black" />
          <MessageSquare size={16} className="text-black" />
          <div className="w-16 bg-[#808080] flex items-center justify-center text-white text-xs">
            {formatTime(currentTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Windows95Portfolio;
