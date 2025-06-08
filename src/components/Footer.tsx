
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground font-inter">
            Made with <span className="text-primary">💙</span> by Prakhar Malviya
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
