import React, { useState } from 'react';
import { 
  Github, ExternalLink, Calendar, Award, Users, 
  TrendingUp, Globe, Code2, Star, Zap, Target, 
  Sparkles, ArrowRight, User
} from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const groupProjects = [
    {
      title: "Relief Bridge: Emergency Coordination Platform",
      description: "Full-stack emergency response platform using MERN stack, winner at Vadodara Hackathon 5.0",
      year: "2024",
      image: "https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800&h=400",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/nityanshu31/Relief-Bridge",
      live: "https://relief-bridge.vercel.app",
      highlights: ["🏆 Hackathon Winner", "👥 6-member team", "🔐 JWT Authentication"],
      gradient: "from-red-500 to-orange-500",
      icon: "🚨",
      teamSize: "6 members"
    },
    {
      title: "Far and Away Tourism Platform",
      description: "Web platform showcasing city landmarks and tourist attractions with guided tours",
      year: "2023",
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800&h=400",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/nityanshu31/Far-and-Away",
      live: "https://far-and-away.vercel.app",
      highlights: ["🗺️ Interactive guides", "🎯 Smart recommendations", "✨ Great UI/UX"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🏛️",
      teamSize: "Team project"
    }
  ];

  const soloProjects = [
    {
      title: "Stock AI Predictor",
      description: "Stock and cryptocurrency prediction app using ML algorithms with real-time market data",
      year: "2025",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=400",
      technologies: ["React", "Python", "Flask", "Binance API"],
      github: "https://github.com/nityanshu31/Stock-Predictor-Ai",
      live: "https://stock-predictor-ai.vercel.app/",
      highlights: ["📈 ML predictions", "🔄 Real-time data", "📊 Trading insights"],
      gradient: "from-green-500 to-emerald-500",
      icon: "📈"
    },
    {
      title: "Link Shortener Web App",
      description: "URL shortening service with custom algorithms and mobile-friendly interface",
      year: "2025",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400",
      technologies: ["React", "Python", "Flask"],
      github: "https://github.com/nityanshu31/link-shortner",
      live: "#",
      highlights: ["🔗 Custom algorithms", "📱 Mobile-optimized", "📋 Copy feature"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🔗"
    }
  ];

  const stats = [
    { icon: <Code2 size={16} />, value: "4", label: "Projects", color: "text-blue-600" },
    { icon: <Award size={16} />, value: "1", label: "Hackathon Won", color: "text-yellow-600" },
    { icon: <Users size={16} />, value: "2", label: "Group Projects", color: "text-emerald-600" },
    { icon: <User size={16} />, value: "2", label: "Solo Projects", color: "text-purple-600" }
  ];

  const ProjectCard = ({ project, index, isGroup = false }) => (
    <div 
      className="group relative"
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="bg-white/80 rounded-xl overflow-hidden backdrop-blur-sm border border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
        
        {/* Compact Image */}
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            <div className={`px-2 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-md text-xs font-medium flex items-center gap-1 shadow-sm`}>
              <span className="text-sm">{project.icon}</span>
              {project.year}
            </div>
            {isGroup && (
              <div className="bg-emerald-500/90 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1 shadow-sm">
                <Users size={12} />
                Team
              </div>
            )}
          </div>
        </div>

        {/* Compact Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-slate-700 text-sm mb-3 line-clamp-2">{project.description}</p>
          
          {/* Compact Highlights */}
          <div className="mb-3">
            <div className="flex flex-wrap gap-1 text-xs">
              {project.highlights.map((highlight, hIndex) => (
                <span key={hIndex} className="text-slate-600">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          
          {/* Compact Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs border border-blue-200"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs border border-slate-200">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-slate-600 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md text-sm transition-all duration-300 shadow-sm"
            >
              <Github size={14} />
              Code
            </a>
            
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 bg-gradient-to-r ${project.gradient} text-white px-3 py-1.5 rounded-md text-sm transition-all duration-300 shadow-sm`}
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-4xl">🚀</div>
        <div className="absolute top-40 right-20 text-3xl">💻</div>
        <div className="absolute bottom-40 left-20 text-4xl">⚡</div>
        <div className="absolute bottom-20 right-10 text-3xl">✨</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            A showcase of my technical journey - from hackathon winners to innovative solutions
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 p-4 rounded-xl backdrop-blur-sm border border-orange-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Group Projects Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-emerald-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-800">Group Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isGroup={true} />
            ))}
          </div>
        </div>

        {/* Solo Projects Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-purple-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-800">Solo Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soloProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index + groupProjects.length} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/60 p-8 rounded-xl border border-orange-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-3 text-slate-800 flex items-center justify-center gap-2">
            <Zap className="text-yellow-600" size={20} />
            Want to Collaborate?
          </h2>
          <p className="text-slate-700 mb-6 max-w-xl mx-auto">
            I'm always excited to work on innovative projects. Let's build something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-white text-sm shadow-sm">
              <Github size={16} />
              View All Projects
            </button>
            <button className="border-2 border-orange-400 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm">
              <Globe size={16} />
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
