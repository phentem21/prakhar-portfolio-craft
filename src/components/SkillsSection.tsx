
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      category: "languages"
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS", "Next.js", "Ajax"],
      color: "bg-green-500/20 text-green-300 border-green-500/30",
      category: "frontend"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Appwrite"],
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      category: "backend"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Vercel"],
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      category: "tools"
    }
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" }
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === activeCategory);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-8 text-gradient">
          Skills & Technologies
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "glass hover:glass-light text-muted-foreground hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group cursor-pointer transform hover:-translate-y-4"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transformStyle: "preserve-3d"
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-16px) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-semibold text-primary text-center group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${category.color} font-inter font-medium px-3 py-1 transition-all duration-300 hover:scale-110 cursor-default transform hover:-translate-y-1 hover:shadow-lg`}
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
