
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "chatgpt clone",
      description: "A ChatGpt clone create using a Html,css,Bootstap,Reactjs and the Chatgpt Api",
      image: "/img1.png",
      technologies: ["React", "Bootstap", "Javascript", "Css"],
      liveUrl: "https://react1-nine-iota.vercel.app/",
      githubUrl: "https://github.com/Hellyy26/React1",
      featured: true
    },
    {
      title: "Real esatate",
      description: "🏡 Find your dream home — buy, sell, or rent with ease.",
      image: "/real.png",
      technologies: ["Javascript", "Reactjs", "css", "Tailwind"],
      liveUrl: "https://real-eastate-five.vercel.app/",
      githubUrl: "https://github.com/Hellyy26/Real_eastate",
      featured: true
    },
    {
      title: "Qrcode generator",
      description: "Instant QR Code Generator – Just enter a name, and get a QR code instantly!",
      image: "/img4.png",
      technologies: ["Javascript", "Qrcode api",  "Tailwind"],
      liveUrl: "https://hellyy26.github.io/Qrcode/",
      githubUrl: "https://github.com/Hellyy26/Qrcode",
      featured: true
    },
    {
      title: "Music player app",
      description: "Your music, your vibe — play it your way",
      image: "/img6.png",
      technologies: ["Javascript", "Css",  "Tailwind"],
      liveUrl: "https://hellyy26.github.io/Music-player/",
      githubUrl: "https://github.com/Hellyy26/Music-player",
      featured: true
    },
    {
      title: "Facebook loginpage clone",
      description: "just made up Using pure Tailwind Css only",
      image: "/fbclone.png",
      technologies: ["Tailwind"],
      liveUrl: "https://hellyy26.github.io/Facebookloginpageclone/",
      githubUrl: "https://github.com/Hellyy26/Facebookloginpageclone",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather app with detailed forecasts and maps",
      image: "/img3.png",
      technologies: ["React", "Javascript", "Weather API", "Charts"],
      liveUrl: "https://hellyy26.github.io/Weatherapp/",
      githubUrl: "https://github.com/Hellyy26/Weatherapp",
      featured: false
    },
    {
      title: "Random password Genetaror",
      description: "Generate random, secure passwords instantly to keep your accounts safe. Simple, fast, and reliable",
      image: "/img5.png",
      technologies: ["React", "Javascript", "css"],
      liveUrl: "https://hellyy26.github.io/Random-password-generator/",
      githubUrl: "https://github.com/Hellyy26/Random-password-generator",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  selectedProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
