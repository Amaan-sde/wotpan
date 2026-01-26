import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
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
                WotPan Disclaimer
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> January 23, 2026
                <br />
                <strong>Effective Date:</strong> January 23, 2026
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <p>
                This Disclaimer governs your use of the WotPan application,
                website (wotpan.com), and related services (collectively, the
                “Service”). By accessing or using WotPan, you acknowledge that
                you have read, understood, and agree to this Disclaimer.
              </p>

              <h2>1. No Professional Advice</h2>
              <p>
                WotPan is a social communication and content-sharing platform.
                All content is provided for general information and
                entertainment purposes only. Nothing on WotPan constitutes
                legal, medical, financial, or professional advice.
              </p>

              <h2>2. User-Generated Content</h2>
              <p>
                WotPan acts as an intermediary platform. All content posted or
                shared by users is the sole responsibility of the individual
                user.
              </p>
              <p>
                We do not endorse, verify, or guarantee the accuracy,
                reliability, or legality of user-generated content.
              </p>

              <h2>3. No Warranties</h2>
              <p>
                The Service is provided on an “as is” and “as available” basis.
                WotPan disclaims all warranties, whether express or implied,
                including merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>

              <h2>4. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, WotPan and its
                affiliates shall not be liable for any indirect, incidental,
                consequential, or special damages arising from your use of
                the Service.
              </p>

              <h2>5. External Links</h2>
              <p>
                WotPan may contain links to third-party websites. We are not
                responsible for the content, policies, or practices of any
                third-party platforms.
              </p>

              <h2>6. Compliance With Laws</h2>
              <p>
                You are responsible for ensuring that your use of WotPan
                complies with all applicable laws, including the Information
                Technology Act, 2000, and related Indian regulations.
              </p>

              <h2>7. Changes to This Disclaimer</h2>
              <p>
                We may update this Disclaimer periodically. Continued use of
                WotPan after changes are posted constitutes acceptance of the
                revised Disclaimer.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                For any questions regarding this Disclaimer, contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:Support@wotpan.com"
                  className="text-primary underline"
                >
                  Support@wotpan.com
                </a>
                <br />
                <strong>Address:</strong> House 95, Longi Kala, Thakurdwara,
                Moradabad, Uttar Pradesh 244601, India
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
