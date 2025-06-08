
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-gradient">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <Card className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ml-16 animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-poppins font-semibold text-primary">
                      Amazon Sambhav Hackathon
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground font-inter mt-1">
                      November 2024
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    Selected
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Built a waste-sorting Python app with data analysis and real-time visualizations using Streamlit and Pandas. 
                  Selected for prototype phase among thousands of participants.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Python", "Streamlit", "Pandas", "Data Analysis", "Machine Learning"].map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/20 text-primary border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
