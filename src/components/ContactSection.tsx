
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-gradient">
          Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass border-0 shadow-xl animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-semibold text-foreground">
                Let's Connect
              </CardTitle>
              <CardDescription className="text-muted-foreground font-inter">
                Have a project in mind? Let's discuss how we can work together.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Input 
                  placeholder="Your Name" 
                  className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  className="bg-background/50 border-primary/30 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold py-3 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="glass border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground font-inter">prakharmalviya.2105@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground font-inter">+91 9098913411</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
