import { Mail, Instagram, Laptop, MessageSquare, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to take your business online? Get in touch and let's discuss your project
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <Card className="group hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,168,232,0.2)] animate-fade-in bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Email Us</CardTitle>
              <CardDescription>Send us a message anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:digitalpulsestudio03@gmail.com"
                className="text-primary hover:text-accent transition-colors font-semibold text-lg break-all"
              >
                digitalpulsestudio03@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="group hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,168,232,0.2)] animate-fade-in bg-card/80 backdrop-blur" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-xl">WhatsApp</CardTitle>
              <CardDescription>Chat with us instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://wa.me/962798159012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-semibold text-lg"
              >
                +962 79 815 9012
              </a>
            </CardContent>
          </Card>

          {/* Instagram Card */}
          <Card className="group hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,168,232,0.2)] animate-fade-in bg-card/80 backdrop-blur" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Follow Us</CardTitle>
              <CardDescription>Stay updated with our latest work</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://instagram.com/DigitalPulseStudio.jo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-semibold text-lg"
              >
                @DigitalPulseStudio.jo
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold">
                Why Choose DigitalPulseStudio?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Modern Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Built with the latest web technologies for optimal performance
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Clear Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular updates and transparent collaboration throughout the project
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated support to ensure your website stays perfect
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
