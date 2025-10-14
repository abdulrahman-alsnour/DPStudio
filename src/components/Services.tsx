import { Monitor, Smartphone, Search, Palette, Wrench, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Custom-built, modern websites tailored to your business needs with clean code and intuitive interfaces.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly & Responsive Sites",
    description: "Seamless experiences across all devices - from desktop to tablet to mobile - ensuring your audience can access your site anywhere.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic with strategic SEO implementation and best practices.",
  },
  {
    icon: Palette,
    title: "Branding & UI/UX Design",
    description: "Create compelling visual identities and user experiences that resonate with your target audience and strengthen your brand.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your website secure, up-to-date, and performing at its best.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Build powerful online stores with secure payment integration, inventory management, and seamless shopping experiences.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Services That Drive{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive web solutions to establish and grow your digital presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,168,232,0.2)] animate-fade-in bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-foreground mb-4">
            Ready to build your digital future?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-lg transition-colors"
          >
            Let's start your project →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
