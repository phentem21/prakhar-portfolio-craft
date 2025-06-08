
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";

import photo from "./photo.png"

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "MERN Stack Developer",
    "Hackathon Enthusiast", 
    "GATE 2026 Aspirant",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Enhanced Profile Image with 3D effect */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent p-1 group-hover:scale-110">
                <img 
                  src={photo} 
                  alt="Prakhar Malviya" 
                  className="w-full h-full rounded-full object-cover transform group-hover:scale-105"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enhanced Name and Title with 3D text effect */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-foreground transform hover:scale-105 transition-transform duration-300">
              Prakhar <span className="text-gradient animate-pulse">Malviya</span>
            </h1>
            
            {/* Typewriter effect for roles */}
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
                <span className="text-primary font-semibold">
                  {roles[currentRole]}
                </span>
                <span className="animate-ping text-primary">|</span>
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons with 3D hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transform hover:-translate-y-2"
            >
              <Download className="mr-2 h-5 w-5 animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 transform hover:-translate-y-2 glass"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Enhanced Social Links with 3D effects */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="#" 
              className="p-4 rounded-full glass hover:glass-light transition-all duration-300 hover:scale-125 hover:animate-glow transform hover:-translate-y-2 group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="p-4 rounded-full glass hover:glass-light transition-all duration-300 hover:scale-125 hover:animate-glow transform hover:-translate-y-2 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
