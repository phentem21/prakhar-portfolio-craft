
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass border-primary/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 h-6 w-6 text-primary transition-all duration-500 ${
            theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-6 w-6 text-primary transition-all duration-500 ${
            theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
