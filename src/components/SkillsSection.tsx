
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
      color: "bg-blue-500/20 text-blue-300 border-blue-500/30"
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS", "Next.js", "Ajax"],
      color: "bg-green-500/20 text-green-300 border-green-500/30"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Appwrite"],
      color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Vercel"],
      color: "bg-orange-500/20 text-orange-300 border-orange-500/30"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-gradient">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-poppins font-semibold text-primary text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${category.color} font-inter font-medium px-3 py-1 transition-all duration-300 hover:scale-110 cursor-default`}
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
