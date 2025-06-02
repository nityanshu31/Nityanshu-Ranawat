import React from 'react';
import { 
  Download, MapPin, Phone, Mail, Linkedin, Github, 
  Code, Award, Star, Calendar, ExternalLink, Trophy,
  GraduationCap, Briefcase, Target
} from 'lucide-react';

const Resume = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java"],
    "Frameworks & Libraries": ["React.js", "Node.js", "Express.js", "Flask", "Flutter", "React Native", "Tailwind CSS"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools & Technologies": ["Git", "RESTful APIs", "JWT Authentication", "Vite", "Vercel"],
    "Development": ["Full-Stack Web Development", "Mobile App Development", "API Integration"],
    "Other": ["Data Structures and Algorithms", "AI/ML Implementation", "Agile Development"]
  };

  const projects = [
    {
      title: "Relief Bridge: Emergency Coordination Platform",
      year: "2024",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      achievements: [
        "Winner at Vadodara Hackathon 5.0",
        "JWT-based secure authentication",
        "6-member team collaboration",
        "Scalable disaster response system"
      ],
      links: { demo: "https://relief-bridge.vercel.app", code: "https://github.com/nityanshu31/Relief-Bridge" }
    },
    {
      title: "Stock AI Predictor",
      year: "2025",
      technologies: ["React", "Vite", "Python", "Flask", "Binance API"],
      achievements: [
        "Algorithmic forecasting models",
        "Real-time market data integration",
        "ML-powered predictions",
        "Interactive trading insights"
      ],
      links: { demo: "https://stock-predictor-ai.vercel.app/", code: "https://github.com/nityanshu31/Stock-Predictor-Ai" }
    },
    {
      title: "Link Shortener Web Application",
      year: "2025",
      technologies: ["React", "Vite", "Python", "Flask"],
      achievements: [
        "Custom short code generation",
        "URL validation system",
        "Mobile-friendly interface",
        "Copy-to-clipboard functionality"
      ],
      links: { code: "https://github.com/nityanshu31/link-shortner" }
    },
    {
      title: "Far and Away Tourism Platform",
      year: "2023",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      achievements: [
        "Interactive city guides",
        "Recommendation system",
        "Intuitive UI/UX design",
        "Positive user feedback"
      ],
      links: { demo: "https://far-and-away.vercel.app", code: "https://github.com/nityanshu31/Far-and-Away" }
    }
  ];

  const certifications = [
    {
      title: "Computer Networks and Internet Protocol",
      issuer: "NPTEL - IIT Kharagpur",
      year: "2024",
      score: "Elite Certification - Score: 67/100",
      description: "Comprehensive study of networking protocols, layered architecture, and problem-solving"
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "Cisco Networking Academy",
      year: "2024",
      description: "Foundation knowledge in IoT ecosystems, networking principles, and automation"
    },
    {
      title: "Database and SQL Certification",
      issuer: "Infosys-Springboard",
      year: "2023",
      description: "Mastered relational database architecture, SQL syntax, data manipulation, and query optimization"
    },
    {
      title: "Advanced iOS and Android Ethical Hacking",
      issuer: "Udemy",
      year: "2021",
      description: "Learned vulnerability assessments and cybersecurity techniques for mobile platforms"
    }
  ];

  const achievements = [
    {
      title: "Winner - Vadodara Hackathon 5.0",
      organization: "Parul University",
      year: "2024",
      description: "Led team of 6 developers to create innovative disaster response solution using MERN stack",
      icon: <Trophy className="text-yellow-600" size={16} />
    },
    {
      title: "Top 5 - HEREVolution Hackathon",
      organization: "BITS Pilani APOGEE 2024",
      year: "2024",
      description: "Recognized among 200+ participants for innovative use of location-based services",
      icon: <Award className="text-blue-600" size={16} />
    },
    {
      title: "Hackathon Participation",
      organization: "AugustCode Solutions Pvt. Ltd.",
      year: "2024",
      description: "Contributed to JavaScript-based eCommerce platform development",
      icon: <Star className="text-purple-600" size={16} />
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        {/* Professional Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-2">Nityanshu Ranawat</h1>
            <div className="flex flex-wrap gap-3 text-slate-700 text-sm">
              <div className="flex items-center gap-1">
                <Phone size={14} className="text-emerald-600" />
                <span>+91-7877640913</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} className="text-blue-600" />
                <span>ranawatnityanshu31@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} className="text-red-600" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <a href="https://www.linkedin.com/in/nityanshu-ranawat-a0556a219/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/nityanshu31" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900">
                <Github size={16} />
              </a>
            </div>
          </div>
          <a
            href="/Nityanshu_CV_WebDev.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-sm"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="space-y-6">
          {/* Career Objective */}
          <section className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Target className="text-blue-600" size={18} />
              <h2 className="text-lg font-semibold text-slate-800">Career Objective</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Motivated Computer Science student with hands-on experience in full-stack web development using MERN stack, 
              Python Flask, and mobile app development. Proven ability to build scalable applications with RESTful APIs, 
              implement AI/ML solutions, and collaborate effectively in team environments.
            </p>
          </section>

          {/* Education */}
          <section className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-emerald-600" size={18} />
              <h2 className="text-lg font-semibold text-slate-800">Education</h2>
            </div>
            <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-base font-semibold text-slate-800">Bachelor of Technology in Computer Science and Engineering</h3>
                  <p className="text-blue-600 font-medium text-sm">Parul University, Vadodara, Gujarat</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-emerald-600 font-medium text-sm">CGPA: 7.61</span>
                  <p className="text-slate-600 text-xs">Expected: 2026</p>
                </div>
              </div>
              <p className="text-slate-700 text-xs">
                <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Web Development, Operating Systems, Database Management
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-purple-600" size={18} />
              <h2 className="text-lg font-semibold text-slate-800">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {skillList.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-orange-600" size={18} />
              <h2 className="text-lg font-semibold text-slate-800">Projects</h2>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-orange-50/50 p-4 rounded-lg border border-orange-100 hover:border-orange-200 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-slate-800 mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs border border-emerald-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-md text-xs border border-blue-200">
                      {project.year}
                    </span>
                  </div>
                  
                  <ul className="space-y-1 mb-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-700 flex items-center gap-2 text-xs">
                        <Star size={12} className="text-yellow-600 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-600 hover:text-slate-800 text-xs"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="text-yellow-600" size={18} />
              <h2 className="text-lg font-semibold text-slate-800">Achievements</h2>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                  <div className="flex items-start gap-3">
                    {achievement.icon}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <h3 className="text-sm font-semibold text-slate-800">{achievement.title}</h3>
                        <span className="text-blue-600 text-xs">{achievement.year}</span>
                      </div>
                      <p className="text-slate-600 font-medium mb-1 text-xs">{achievement.organization}</p>
                      <p className="text-slate-700 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-indigo-600" size={18} />
              <h2 className="text-lg font-semibold text-slate-800">Certifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-semibold text-slate-800">{cert.title}</h3>
                    <span className="text-blue-600 text-xs">{cert.year}</span>
                  </div>
                  <p className="text-slate-600 font-medium mb-1 text-xs">{cert.issuer}</p>
                  {cert.score && (
                    <p className="text-emerald-600 text-xs mb-1">{cert.score}</p>
                  )}
                  <p className="text-slate-700 text-xs">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-1">
                  {['English', 'Hindi', 'Gujarati'].map((lang, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-xs border border-purple-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-2">Interests</h3>
                <div className="flex flex-wrap gap-1">
                  {['Open Source Contribution', 'Emerging Technologies', 'Mobile App Development', 'AI/ML Research'].map((interest, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs border border-orange-200">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
