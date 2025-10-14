import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Web Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "0.1s", fontFamily: "'Space Grotesk', sans-serif" }}>
            Bring Your Business to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Life Online
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Modern Websites • Real Growth • Digital Success
          </p>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We help businesses build a strong online presence through cutting-edge web solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold text-lg px-8 py-6 group"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground mb-4">Contact</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-foreground">
              <a
                href="mailto:digitalpulsestudio03@gmail.com"
                className="hover:text-primary transition-colors flex items-center gap-2"
              >
                📧 digitalpulsestudio03@gmail.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a
                href="https://instagram.com/DigitalPulseStudio.jo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @DigitalPulseStudio.jo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
