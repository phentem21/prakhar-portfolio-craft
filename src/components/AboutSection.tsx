
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="glass border-0 shadow-xl">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                    I'm a third-year Computer Science student at VIT Bhopal with a strong grasp on the MERN stack and a deep interest in scalable, impactful tech. I enjoy building smart, user-first applications, and I'm currently preparing for GATE 2026 alongside full-stack development.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-poppins font-semibold mb-4 text-primary">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xl font-poppins font-medium text-foreground">
                        Vellore Institute of Technology, Bhopal
                      </h4>
                      <p className="text-muted-foreground">B.Tech in Computer Science (2022–2026)</p>
                      <p className="text-primary font-semibold">CGPA: 8.84/10</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
