
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Eco Sort App",
      description: "Waste Sorting App built with Python & Streamlit. Selected in Amazon Sambhav Hackathon (Prototype Phase)",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop",
      tags: ["Python", "Streamlit", "Data Analysis", "Machine Learning"],
      github: "#",
      demo: "#"
    },
    {
      title: "Patient Health Tracker",
      description: "Full-stack AI-powered mental health app with comprehensive tracking and insights",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "AI/ML"],
      github: "#",
      demo: "#"
    },
    {
      title: "Path Finder App",
      description: "Shortest path visualization using Dijkstra's Algorithm with interactive interface",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop",
      tags: ["JavaScript", "Algorithms", "Visualization", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Quiz Master Web App",
      description: "Real-time quiz platform for VIT students with leaderboards and analytics",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=200&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#"
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
            <Card 
              key={project.title} 
              className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-semibold text-foreground">
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
                      className="bg-primary/20 text-primary border-primary/30 font-inter font-medium"
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
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
