
import React from 'react';
import img1 from '../ui/h1.jpg'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center animate-scale-in">
            <div className="relative">
              <img
                src={img1}
                alt="Helly vyas - Professional Photo"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-scale-in hover:from-pink-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-500 cursor-default">
            Helly vyas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in hover:text-blue-600 transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
            Frontend Developer & Web Designer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in hover:text-purple-600 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
            Versatile Frontend Developer and Web Designer blending aesthetic design with functional code to craft seamless digital experiences. Known for transforming complex ideas into visually engaging, user-focused websites. Passionate about clean code, creative problem-solving, and pixel-perfect design.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/Hellyy26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="vyashelly501@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
