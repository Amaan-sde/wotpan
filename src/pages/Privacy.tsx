import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const Privacy = () => {
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
              <span className="text-xl font-bold text-foreground">
                WotPan
              </span>
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
                WotPan Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> January 23, 2026
                <br />
                <strong>Effective Date:</strong> January 23, 2026
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <p>
                WotPan ("we", "our", "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard information when you use the WotPan
                app and related services (including the website at wotpan.com
                and apps available on Android, iOS, Windows and macOS). If you
                do not agree with this Privacy Policy, please do not use
                WotPan.
              </p>

              <h2>1. Who we are</h2>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p><strong>App / Company name:</strong> WotPan</p>
                <p>
                  <strong>Address:</strong> House 95, Longi Kala,
                  Thakurdwara, Moradabad, Uttar Pradesh 244601, India
                </p>
                <p className="mb-0">
                  <strong>Support / Grievance contact:</strong>
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:Support@wotpan.com">
                      Support@wotpan.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong> +91-0000000000
                  </li>
                </ul>
              </div>

              <h2>2. Scope & applicability</h2>
              <p>
                This Policy applies to personal data that we collect directly
                from you and data that third parties share with us in
                connection with your use of WotPan. It covers data collected
                via our website, mobile apps, and any other services we
                operate.
              </p>
              <p>
                <strong>Note:</strong> WotPan is currently under active
                development. Some features may be provided in beta form; data
                collected during testing may be used to improve the product.
              </p>

              <h2>3. What data we collect</h2>
              <p>We collect the following categories of information:</p>
              <ul>
                <li>
                  <strong>Account & identity:</strong> Name, username, email
                  address, phone number, profile photo.
                </li>
                <li>
                  <strong>User content:</strong> Messages, posts, images,
                  videos, stories, live stream content and related metadata.
                </li>
                <li>
                  <strong>Contacts (Sync Feature):</strong> If you permit it,
                  we collect phone numbers from your device address book to
                  identify friends who are already on WotPan. This data is
                  encrypted and not shared with third parties.
                </li>
                <li>
                  <strong>Communications & call data:</strong> Audio/video call
                  session metadata; note that E2E-encrypted chat contents are
                  only accessible to participants.
                </li>
                <li>
                  <strong>Device & technical information:</strong> Device
                  identifiers, operating system, IP address, device model.
                </li>
                <li>
                  <strong>Location data:</strong> If you permit it (for
                  location-based features).
                </li>
                <li>
                  <strong>Payment & billing:</strong> Payment tokens and
                  billing contact details for subscriptions like WotPan Blue.
                </li>
              </ul>

              <h2>4. How we use your data</h2>
              <ul>
                <li>Create and manage your account and provide services.</li>
                <li>
                  Enable Contact Syncing to connect you with existing
                  contacts.
                </li>
                <li>
                  Facilitate messaging, calls, stories, and blue verification.
                </li>
                <li>
                  Moderate content and remove material that violates our
                  Terms.
                </li>
                <li>Process payments and manage subscriptions.</li>
                <li>Improve performance and fix bugs using analytics.</li>
              </ul>

              <h2>5. Sharing & disclosure</h2>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We use industry-standard
                  providers like Supabase for database management and
                  Cloudflare for secure media storage.
                </li>
                <li>
                  <strong>No Selling of Data:</strong> We do not sell your
                  personal data to advertisers.
                </li>
                <li>
                  <strong>Legal requests:</strong> We may disclose data to
                  comply with applicable laws or safety requirements.
                </li>
              </ul>

              <h2>6. Retention</h2>
              <p>
                We retain personal data only as long as necessary. If you
                delete your account, we will delete your personal data subject
                to legal or tax retention reasons.
              </p>

              <h2>7. Your rights</h2>
              <ul>
                <li>Access, correct, or delete your personal data.</li>
                <li>
                  Withdraw consent for data processing (like contact syncing).
                </li>
                <li>Export your data.</li>
              </ul>
              <p>
                Submit a request:{" "}
                <a href="mailto:Support@wotpan.com">
                  Support@wotpan.com
                </a>
                .
              </p>

              <h2>8. Security & End-to-End Encryption</h2>
              <p>
                WotPan uses technical measures to protect data. Private chats
                are end-to-end encrypted, meaning only the communicating users
                can access the message content.
              </p>

              <h2>9. Children</h2>
              <p>
                WotPan is for adults (13+). We do not knowingly collect
                personal data from children under 13.
              </p>

              <h2>10. Governing law</h2>
              <p>
                This Privacy Policy is governed by the laws of India, including
                the Digital Personal Data Protection Act, 2023.
              </p>

              <h2>11. Contact</h2>
              <p>
                For privacy enquiries:{" "}
                <a href="mailto:Support@wotpan.com">
                  Support@wotpan.com
                </a>{" "}
                / +91-0000000000.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
