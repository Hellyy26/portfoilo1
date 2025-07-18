
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Web Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I’m a passionate Frontend Developer and Web Designer with a keen eye for detail and a love for creating immersive digital experiences. I specialize in crafting responsive, user-first interfaces that blend functionality with aesthetic precision. With every project, I aim to strike the perfect balance between visual storytelling and seamless user interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
             Driven by curiosity and creativity, I thrive on turning complex problems into elegant, scalable solutions. My toolkit includes HTML5, CSS3, JavaScript, and frameworks like React, alongside design platforms like Figma and Adobe XD. I have a strong understanding of design systems, usability principles, and performance optimization, allowing me to build websites that don’t just look good—they work beautifully across all devices.
            </p>
            <p className="text-foreground leading-relaxed">
              I believe in continuous learning, collaborative workflows, and delivering work that exceeds expectations. Whether I’m wireframing a concept or fine-tuning code, my goal is to create meaningful digital experiences that resonate with users and align with brand values. Let’s build something intuitive, modern, and impactful together..
            </p>
            <div className="pt-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
