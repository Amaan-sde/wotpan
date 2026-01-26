import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const DMCA = () => {
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
                WotPan DMCA & Copyright Infringement Policy
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> January 23, 2026
                <br />
                <strong>Effective Date:</strong> January 23, 2026
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <p>
                WotPan respects the intellectual property rights of others. This
                policy explains our process for responding to claims of copyright
                infringement in accordance with the Digital Millennium Copyright
                Act (DMCA) and the Indian Copyright Act, 1957.
              </p>

              <h2>1. Designated Agent for Copyright Notices</h2>
              <p>
                If you believe that your work has been copied in a way that
                constitutes copyright infringement, please send your notice to
                our Designated Agent:
              </p>

              <div className="legal-notice">
                <p>
                  <strong>Copyright Agent:</strong> WotPan Legal Team
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Support@wotpan.com">
                    Support@wotpan.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> House 95, Longi Kala,
                  Thakurdwara, Moradabad, Uttar Pradesh 244601, India
                </p>
              </div>

              <h2>2. How to File a Takedown Notice</h2>
              <p>
                To be valid, your notice must be in writing and include the
                following:
              </p>

              <ul>
                <li>
                  <strong>Signature:</strong> A physical or electronic
                  signature of the copyright owner or authorized person.
                </li>
                <li>
                  <strong>Identification of Work:</strong> Clear description
                  of the copyrighted work you claim is being infringed.
                </li>
                <li>
                  <strong>Location of Material:</strong> The exact URL or
                  location within the WotPan app where the infringing material
                  is located.
                </li>
                <li>
                  <strong>Contact Info:</strong> Your address, phone number,
                  and email address.
                </li>
                <li>
                  <strong>Good Faith Statement:</strong> A statement that you
                  have a good faith belief that the use is not authorized.
                </li>
                <li>
                  <strong>Accuracy Statement:</strong> A statement that the
                  information is accurate and, under penalty of perjury, that
                  you are authorized to act for the owner.
                </li>
              </ul>

              <h2>3. Counter-Notice Procedures</h2>
              <p>
                If your content was removed by mistake or misidentification,
                you may submit a counter-notice. It must include:
              </p>

              <ul>
                <li>
                  Identification of the removed material and its original
                  location.
                </li>
                <li>
                  A statement under penalty of perjury that you believe the
                  removal was a mistake.
                </li>
                <li>Your name, address, and telephone number.</li>
                <li>
                  Consent to the jurisdiction of the courts in Moradabad,
                  Uttar Pradesh (Indian users) or the appropriate federal
                  court (international users).
                </li>
              </ul>

              <h2>4. Repeat Infringer Policy</h2>
              <p>
                Accounts that repeatedly upload infringing content (more than
                3 valid strikes) will be permanently terminated without notice.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                As an intermediary under the Information Technology Act,
                WotPan is not liable for user-generated content provided that
                infringing material is removed promptly upon receiving a
                valid notice.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DMCA;
