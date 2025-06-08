
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
    {
      title: "Eco Sort App",
      description: "Waste Sorting App built with Python & Streamlit. Selected in Amazon Sambhav Hackathon (Prototype Phase)",
      details: "An innovative waste sorting application that uses machine learning algorithms to categorize waste materials. Features real-time image processing, data visualization with Streamlit, and comprehensive analytics dashboard.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop",
      tags: ["Python", "Streamlit", "Data Analysis", "Machine Learning"],
      github: "#",
      demo: "#",
      achievement: "🏆 Amazon Sambhav Hackathon Finalist"
    },
    {
      title: "Patient Health Tracker",
      description: "Full-stack AI-powered mental health app with comprehensive tracking and insights",
      details: "A comprehensive mental health tracking platform with AI-driven insights, mood analysis, and personalized recommendations. Built with modern React patterns and secure backend architecture.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "AI/ML"],
      github: "#",
      demo: "#",
      achievement: "💡 AI-Powered Insights"
    },
    {
      title: "Path Finder App",
      description: "Shortest path visualization using Dijkstra's Algorithm with interactive interface",
      details: "An interactive pathfinding visualizer that demonstrates various algorithms including Dijkstra's, A*, and BFS. Features real-time animation, custom maze generation, and educational tooltips.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop",
      tags: ["JavaScript", "Algorithms", "Visualization", "CSS"],
      github: "#",
      demo: "#",
      achievement: "🎯 Algorithm Visualization"
    },
    {
      title: "Quiz Master Web App",
      description: "Real-time quiz platform for VIT students with leaderboards and analytics",
      details: "A comprehensive quiz platform featuring real-time multiplayer functionality, advanced analytics, custom quiz creation tools, and gamification elements to enhance student engagement.",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=200&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
      achievement: "🚀 Real-time Multiplayer"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="perspective-1000"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card 
                className={`glass border-0 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden animate-fade-in group cursor-pointer h-[500px] transform-style-preserve-3d ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                onMouseMove={(e) => {
                  if (flippedCard !== index) {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (flippedCard !== index) {
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
                  }
                }}
              >
                {/* Front of card */}
                <div className={`absolute inset-0 backface-hidden ${flippedCard === index ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      {project.achievement}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground font-inter">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-primary/20 text-primary border-primary/30 font-inter font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </CardFooter>
                </div>

                {/* Back of card */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 ${flippedCard === index ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                  <div className="p-6 h-full flex flex-col justify-center glass">
                    <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Project Details</h3>
                    <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                      {project.details}
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
