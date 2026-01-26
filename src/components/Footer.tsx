import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Security", href: "/#features" },
      { name: "Downloads", href: "/#download" },
      { name: "Business", href: "/#download" },
    ],
    company: [
      { name: "About Us", href: "https://mail.google.com/mail/?view=cm&fs=1&to=support@wotpan.com" },
      { name: "Disclaimer", href: "/disclaimer" } // ✅ Added as Link
    ],
    support: [
      { name: "Help Center", href: "/#footer" },
      { name: "Contact Us", href: "https://mail.google.com/mail/?view=cm&fs=1&to=support@wotpan.com" },
      { name: "System Status", href: "/#footer" },
      { name: "Community", href: "/#footer" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie" },
      { name: "DMCA", href: "/dmca" },
    ],
  };

  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com/@wotpan", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/wotpan", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/wotpanapp", label: "Facebook" },
  ];

  return (
    <footer id="footer" className="bg-foreground text-background py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={wotpanLogo} 
                alt="WotPan Logo" 
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-xl font-bold">WotPan</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Simple, secure, and reliable messaging for everyone.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href} // ✅ Use React Router Link for internal navigation
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-background/50 text-sm">
              © {currentYear} WotPan. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-12">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Download CTA */}
            <Button
              variant="hero"
              size="lg"
              className="shadow-lg"
              asChild
            >
              <a href="/#download">Download</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
