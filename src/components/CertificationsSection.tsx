
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "2024",
      type: "Professional Certificate"
    },
    {
      title: "Front-End Development",
      issuer: "Meta",
      date: "2024",
      type: "Professional Certificate"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2023",
      type: "Course Certificate"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-gradient">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg font-poppins font-semibold text-foreground">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-primary font-inter font-medium">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {cert.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-inter">{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
