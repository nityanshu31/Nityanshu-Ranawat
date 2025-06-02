import React from 'react';
import { 
  Code, Database, Layout, Server, Smartphone, Terminal,
  Star, Award, Coffee, Heart, Zap, Globe, Users, TrendingUp,
  CheckCircle, ArrowRight, Target, Lightbulb,
  GraduationCap, Trophy, MapPin, Calendar
} from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: "Frontend", 
      icon: <Layout size={20} />, 
      items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      gradient: "from-orange-500 to-rose-500",
      bgPattern: "🎨"
    },
    { 
      category: "Backend", 
      icon: <Server size={20} />, 
      items: ["Node.js", "Express.js", "Python", "Flask", "RESTful APIs"],
      gradient: "from-emerald-500 to-teal-500",
      bgPattern: "⚙️"
    },
    { 
      category: "Database", 
      icon: <Database size={20} />, 
      items: ["MongoDB", "MySQL", "Database Management"],
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "🗄️"
    },
    { 
      category: "Mobile", 
      icon: <Smartphone size={20} />, 
      items: ["React Native", "Flutter", "Mobile App Development"],
      gradient: "from-amber-500 to-orange-500",
      bgPattern: "📱"
    },
    { 
      category: "Tools & Tech", 
      icon: <Terminal size={20} />, 
      items: ["Git", "Vite", "Vercel", "JWT Authentication", "Cloud deployment"],
      gradient: "from-indigo-500 to-purple-500",
      bgPattern: "🚀"
    },
    { 
      category: "Languages", 
      icon: <Code size={20} />, 
      items: ["JavaScript", "Python", "Java"],
      gradient: "from-yellow-500 to-amber-500",
      bgPattern: "💻"
    }
  ];

  const achievements = [
    {
      title: "Winner - Vadodara Hackathon 5.0",
      organization: "Parul University",
      year: "2024",
      description: "Led team of 6 developers to create innovative disaster response solution using MERN stack",
      icon: "🏆",
      type: "Hackathon Victory"
    },
    {
      title: "Top 5 - HEREVolution Hackathon",
      organization: "BITS Pilani APOGEE 2024",
      year: "2024",
      description: "Recognized among 200+ participants for innovative use of location-based services",
      icon: "🥇",
      type: "Competition"
    },
    {
      title: "Computer Networks Certification",
      organization: "NPTEL - IIT Kharagpur",
      year: "2024",
      description: "Elite Certification with Score: 67/100 in networking protocols and architecture",
      icon: "🎓",
      type: "Certification"
    }
  ];

  const stats = [
    { icon: <Coffee size={18} />, value: "500+", label: "Cups of Coffee", color: "text-amber-600" },
    { icon: <Code size={18} />, value: "5+", label: "Projects Built", color: "text-emerald-600" },
    { icon: <Trophy size={18} />, value: "2", label: "Hackathon Wins", color: "text-yellow-600" },
    { icon: <Award size={18} />, value: "4+", label: "Certifications", color: "text-purple-600" }
  ];

  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "Parul University, Vadodara, Gujarat",
    cgpa: "7.61",
    expectedGrad: "2026",
    coursework: ["Data Structures and Algorithms", "Web Development", "Operating Systems", "Database Management"]
  };

  const personalInfo = {
    location: "Vadodara, Gujarat, India",
    languages: ["English", "Hindi", "Gujarati"],
    interests: ["Open Source Contribution", "Emerging Technologies", "Mobile App Development", "AI/ML Research"]
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        {/* Organized Header Section */}
        <div className="text-center mb-10">
          {/* Main Title */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-6">
            About Nityanshu
          </h1>
          
          {/* Personal Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
                <MapPin size={18} />
                <span className="font-medium">Location</span>
              </div>
              <p className="text-slate-700">{personalInfo.location}</p>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                <GraduationCap size={18} />
                <span className="font-medium">Education</span>
              </div>
              <p className="text-slate-700">CSE Student at Parul University</p>
            </div>
            
            <div className="bg-white/80 p-4 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <div className="flex items-center justify-center gap-2 text-emerald-600 mb-2">
                <Calendar size={18} />
                <span className="font-medium">Graduation</span>
              </div>
              <p className="text-slate-700">Expected: {education.expectedGrad}</p>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 p-4 rounded-lg backdrop-blur-sm border border-orange-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* About Description */}
          <div className="max-w-4xl mx-auto bg-white/80 p-6 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
            <p className="text-slate-700 text-lg mb-4 leading-relaxed">
              I'm a motivated Computer Science student <Heart className="inline text-red-500" size={20} /> with hands-on experience in 
              full-stack web development using MERN stack, Python Flask, and mobile app development. 
              I have proven ability to build scalable applications with RESTful APIs and implement AI/ML solutions.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              I enjoy collaborating effectively in team environments <Target className="inline text-blue-500" size={20} /> and have 
              demonstrated problem-solving skills through hackathon victories and comprehensive project portfolio. <TrendingUp className="inline text-emerald-500" size={20} />
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Education Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 p-6 rounded-lg backdrop-blur-sm border border-orange-200 h-full shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="text-emerald-600" size={22} />
                <h2 className="text-xl font-semibold text-slate-800">Education</h2>
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{education.degree}</h3>
                  <p className="text-blue-600 font-medium">{education.university}</p>
                </div>
                <div className="text-right mt-3 md:mt-0">
                  <div className="text-emerald-600 font-bold text-xl">CGPA: {education.cgpa}</div>
                  <div className="text-slate-600">Expected: {education.expectedGrad}</div>
                </div>
              </div>
              
              <div className="mt-5">
                <h4 className="text-slate-800 font-medium mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-5">
            <div className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Globe size={20} className="text-blue-600" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-200">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Heart size={20} className="text-red-500" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-5">
            <Zap className="text-yellow-600" size={22} />
            <h2 className="text-xl font-semibold text-slate-800">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="relative group">
                <div className="absolute -top-1 -right-1 text-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  {skill.bgPattern}
                </div>
                
                <div className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 relative overflow-hidden shadow-sm hover:shadow-md">
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${skill.gradient}`}></div>
                  
                  <div className="flex items-center mb-4">
                    <div className={`text-white p-2 bg-gradient-to-r ${skill.gradient} rounded-lg shadow-lg`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-base font-semibold ml-3 text-slate-800">{skill.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-700 hover:text-slate-900 transition-colors duration-200 cursor-default flex items-center gap-2 text-sm">
                        <CheckCircle size={14} className="text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="text-yellow-600" size={22} />
            <h2 className="text-xl font-semibold text-slate-800">Achievements & Recognition</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/80 p-5 rounded-lg backdrop-blur-sm border border-orange-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-slate-800 mb-1">{achievement.title}</h3>
                        <p className="text-blue-600 font-medium text-sm">{achievement.organization}</p>
                      </div>
                      <span className="text-emerald-600 font-medium bg-emerald-100 px-2 py-1 rounded-full text-sm border border-emerald-200">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-2">{achievement.description}</p>
                    <p className="text-slate-600 text-xs">{achievement.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
