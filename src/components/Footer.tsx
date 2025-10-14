import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="DigitalPulseStudio" className="h-14 w-auto" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Bringing Business to Life Online
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
            <a
              href="mailto:contact.digitalpulsestudio@gmail.com"
              className="hover:text-primary transition-colors"
            >
              contact.digitalpulsestudio@gmail.com
            </a>
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

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} DigitalPulseStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
