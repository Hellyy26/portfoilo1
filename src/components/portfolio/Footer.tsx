
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Hellyy26", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/feed/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <Mail size={20} />, href: "mailto:vyashelly501@gmail.com", label: "Email", color: "hover:bg-purple-500" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-pink-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-500 cursor-default mb-2">
              Helly vyas
            </div>
            <p className="text-muted-foreground hover:text-blue-600 transition-colors duration-300">
              Building digital experiences with passion
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`p-3 rounded-full bg-secondary ${link.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1 hover:text-purple-600 transition-colors duration-300">
            <span>Hellyy Made with</span>
            <Heart size={16} className="text-red-500 hover:text-pink-500 transition-colors duration-300" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
