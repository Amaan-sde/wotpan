import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const Cookie = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={wotpanLogo}
                alt="WotPan Logo"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-xl font-bold text-foreground">WotPan</span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <div className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-card rounded-2xl p-8 lg:p-12 shadow-soft"
          >
            <header className="border-b border-border pb-6 mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                WotPan Cookie Policy
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> January 23, 2026
                <br />
                <strong>Effective Date:</strong> January 23, 2026
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <p>
                This Cookie Policy explains how WotPan ("we", "our", "us") uses
                cookies and similar technologies (such as device identifiers,
                pixels, and local storage) when you visit wotpan.com or use our
                applications.
              </p>

              <h2>1. What are Cookies & Similar Technologies?</h2>
              <p>
                Cookies are small data files stored on your device. In addition
                to cookies, we use the following technologies:
              </p>
              <ul>
                <li>
                  <strong>Local Storage:</strong> Used by our infrastructure
                  (Supabase / Cloudflare) to keep you securely logged in.
                </li>
                <li>
                  <strong>Device Identifiers:</strong> Unique identifiers that
                  help us recognize your device for security and WotPan Blue
                  verification.
                </li>
              </ul>

              <h2>2. How We Use These Technologies</h2>
              <p>We use cookies and similar technologies for essential purposes:</p>
              <ul>
                <li>
                  <strong>Authentication:</strong> To keep you logged into your
                  account across sessions.
                </li>
                <li>
                  <strong>Security & Fraud Prevention:</strong> To detect
                  suspicious login attempts and prevent unauthorized access.
                </li>
                <li>
                  <strong>Service Performance:</strong> Cloudflare cookies help
                  load photos and videos faster and protect our servers from bot
                  attacks.
                </li>
                <li>
                  <strong>Preferences:</strong> To remember settings such as
                  notification preferences and hide/unhide status.
                </li>
              </ul>

              <h2>3. Categories of Cookies We Use</h2>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for core features
                  like secure login, messaging, and WotPan Blue payments.
                </li>
                <li>
                  <strong>Infrastructure Cookies:</strong> Set by partners such
                  as Supabase (session management) and Cloudflare (content
                  delivery and security).
                </li>
                <li>
                  <strong>Analytics & Crash Reporting:</strong> Used to
                  understand crashes and improve stability. This data is
                  anonymized.
                </li>
              </ul>

              <h2>4. Your Choices & Management</h2>
              <p>You have full control over cookie usage:</p>
              <ul>
                <li>
                  <strong>Web Browsers:</strong> You can block or delete cookies
                  through your browser settings.
                </li>
                <li>
                  <strong>Mobile Apps:</strong> You can manage permissions and
                  advertising identifiers via your device’s privacy settings.
                </li>
              </ul>
              <p>
                <strong>Note:</strong> Blocking essential cookies may cause some
                features of WotPan (such as login or messaging) to stop working
                properly.
              </p>

              <h2>5. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy to reflect changes in our
                services or legal requirements. Any significant changes will be
                communicated via in-app notifications or updates on our website.
              </p>

              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, you can
                contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:Support@wotpan.com">
                  Support@wotpan.com
                </a>
                <br />
                <strong>Address:</strong> House 95, Longi Kala, Moradabad, Uttar
                Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookie;
