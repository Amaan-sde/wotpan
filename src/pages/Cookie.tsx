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
            <Link to="/" className="flex items-center gap-2 group">
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
                Cookie Policy
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> October 5, 2025
                <br />
                <strong>Effective Date:</strong> October 5, 2025
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <p>
                This Cookie Policy explains how WotPan ("we", "our", "us") uses cookies
                and similar technologies when you visit our website (wotpan.com) or use
                our mobile and desktop applications (the "Service").
              </p>

              <h2>1. What are Cookies?</h2>
              <p>
                Cookies are small text files placed on your computer or mobile device
                when you visit a website. They are widely used to make websites work, or
                work more efficiently, as well as to provide reporting information. When
                referring to "cookies" in this policy, we include other technologies
                like pixel tags, web beacons, and device identifiers.
              </p>

              <h2>2. How We Use Cookies</h2>
              <p>We use cookies and similar technologies for several purposes, including:</p>
              <ul>
                <li><strong>Authentication:</strong> To identify you and keep you logged in to the Service.</li>
                <li><strong>Security:</strong> To support or enable security features and to help detect malicious activity.</li>
                <li><strong>Functionality:</strong> To remember your preferences and settings (like language or region).</li>
                <li><strong>Performance and Analytics:</strong> To help us understand how the Service is being used, measure the effectiveness of our features, and monitor overall performance.</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>
              <p>We use both session and persistent cookies, and first-party and third-party cookies:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> These are strictly necessary for the operation of our Service, enabling core functions like logging in, making purchases, and securing your account. The Service cannot function properly without these cookies.</li>
                <li><strong>Analytics/Performance Cookies:</strong> These cookies collect information about how you use our Service, such as which pages you visit and if you experience any errors. This data is aggregated and anonymous, and is used solely to improve how the Service works.</li>
                <li><strong>Third-Party Cookies:</strong> Our Service integrates features from third-party service providers (e.g., for analytics, crash reporting, or social login functionality). These third parties may set their own cookies to perform their services.</li>
              </ul>

              <h2>4. Your Choices and Control</h2>
              <p>You have the ability to control and manage cookies:</p>
              <ul>
                <li><strong>Browser Settings:</strong> Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
                <li><strong>Device Settings:</strong> For mobile applications, your device may offer settings that enable you to control advertising tracking identifiers.</li>
                <li><strong>Third-Party Opt-Outs:</strong> You may be able to opt out of certain third-party services directly through their websites.</li>
              </ul>

              <h2>5. Changes to this Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in
                our practices or for other operational, legal, or regulatory reasons. We
                will post the updated policy on our website and update the "Last
                Updated" date above.
              </p>

              <h2>6. Contact Us</h2>
              <p>For any questions regarding this Cookie Policy, please contact us at:</p>
              <p><strong>Email:</strong> <a href="mailto:Support@wotpan.com">Support@wotpan.com</a></p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookie;
