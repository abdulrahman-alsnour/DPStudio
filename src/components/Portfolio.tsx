import { ExternalLink, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-triplet.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing real projects with measurable results
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,168,232,0.25)] bg-card">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 md:h-auto overflow-hidden bg-muted">
                <img
                  src={projectImage}
                  alt="Triplet Learning Center"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Education Platform
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold">
                      Triplet Learning Center
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Professional tutoring platform for IGCSE, AP, IB & A-Level students
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Modern, responsive design with smooth animations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Subject showcase with detailed course information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Student testimonials and reviews section</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Contact integration with social media</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      asChild
                      className="bg-primary hover:bg-accent text-primary-foreground font-semibold"
                    >
                      <a
                        href="https://tripletlearningcenter.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Live Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                    >
                      <a href="#contact" className="inline-flex items-center gap-2">
                        Start Your Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground">
            This is just one example of what we can build together. Let's create something amazing for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
