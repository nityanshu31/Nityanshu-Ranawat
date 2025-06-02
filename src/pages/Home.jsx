import React, { useEffect, useRef } from 'react';
import { 
  Github as GitHub, Linkedin, Mail, Download, 
  ArrowRight, Zap
} from 'lucide-react';
import Typed from 'typed.js';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'Computer Science Student', 'Problem Solver', 'MERN Stack Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Background Graphics - Better positioned */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-24 left-8 text-4xl animate-pulse">💻</div>
        <div className="absolute top-40 right-16 text-3xl animate-bounce">⚡</div>
        <div className="absolute bottom-32 left-16 text-4xl animate-pulse">🚀</div>
        <div className="absolute bottom-16 right-8 text-3xl animate-bounce">✨</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl animate-pulse opacity-30">🎯</div>
      </div>

      {/* Floating Elements - Better distributed */}
      <div className="absolute top-20 right-12 w-24 h-24 bg-gradient-to-r from-orange-200/30 to-rose-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-12 w-32 h-32 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Large Profile Image - Left Side with perfect positioning */}
          <div className="flex-shrink-0 relative lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 p-2 shadow-2xl">
                <img 
                  src="/Nityanshu.jpg" 
                  alt="Nityanshu Ranawat" 
                  className="w-full h-full rounded-full object-cover border-6 border-amber-50"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-emerald-500 w-14 h-14 rounded-full border-6 border-amber-50 flex items-center justify-center shadow-xl">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-300/20 animate-pulse scale-110"></div>
              <div className="absolute inset-0 rounded-full border border-rose-300/15 animate-pulse scale-125 delay-1000"></div>
            </div>
          </div>

          {/* Content - Right Side with perfect spacing */}
          <div className="flex-1 lg:w-3/5 text-center lg:text-left space-y-8">
            {/* Main Heading with perfect sizing */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">Nityanshu</span>
              </h1>

              {/* Typed Text with perfect alignment */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl h-10 lg:h-12 flex items-center justify-center lg:justify-start text-slate-700">
                <span>I'm a </span>
                <span ref={el} className="ml-2 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent font-semibold"></span>
                <span className="animate-pulse ml-1 text-orange-600">|</span>
              </h2>
            </div>

            {/* Description with perfect width */}
            <p className="text-lg sm:text-xl lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Computer Science student passionate about building innovative web applications 
              and solving real-world problems through technology.
            </p>
            
            {/* Social Links with perfect spacing */}
            <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6">
              <a
                href="https://github.com/nityanshu31"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:p-4 rounded-full bg-white/90 hover:bg-white border border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <GitHub size={22} className="text-slate-700 hover:text-slate-900 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/nityanshu-ranawat-a0556a219/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:p-4 rounded-full bg-white/90 hover:bg-white border border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <Linkedin size={22} className="text-slate-700 hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="mailto:ranawatnityanshu31@gmail.com"
                className="p-3 lg:p-4 rounded-full bg-white/90 hover:bg-white border border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <Mail size={22} className="text-slate-700 hover:text-emerald-600 transition-colors" />
              </a>
            </div>

            {/* Action Buttons with perfect layout */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
              <a
                href="#projects"
                className="group px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                <Zap size={18} />
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border-2 border-orange-300 hover:border-orange-400 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="/Nityanshu_CV_WebDev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
