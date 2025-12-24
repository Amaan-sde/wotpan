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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> October 5, 2025
                <br />
                <strong>Effective Date:</strong> October 5, 2025
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <p>
                WotPan ("we", "our", "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard
                information when you use the WotPan app and related services (including
                the website at <a href="https://wotpan.com">wotpan.com</a> and apps
                available on Android, iOS, Windows and macOS). If you do not agree with
                this Privacy Policy, please do not use WotPan.
              </p>

              <h2>1. Who we are</h2>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="mb-2"><strong>App / Company name:</strong> WotPan</p>
                <p className="mb-2">
                  <strong>Address:</strong> House 95, Longi Kala, Thakurdwara,
                  Moradabad, Uttar Pradesh 244601, India
                </p>
                <p className="mb-0"><strong>Support / Grievance contact:</strong></p>
                <ul className="mb-0">
                  <li><strong>Email:</strong> <a href="mailto:Support@wotpan.com">Support@wotpan.com</a></li>
                  <li><strong>Phone:</strong> +91-7017127130</li>
                </ul>
              </div>

              <h2>2. Scope & applicability</h2>
              <p>
                This Policy applies to personal data that we collect directly from you
                and data that third parties share with us in connection with your use of
                WotPan. It covers data collected via our website, mobile apps (Android,
                iOS), desktop apps (Windows, macOS), and any other services we operate.
              </p>
              <p>
                <strong>Note:</strong> WotPan is currently under active development.
                Some features may be provided in beta form; data collected during
                testing may be used to improve the product.
              </p>

              <h2>3. What data we collect</h2>
              <p>We collect the following categories of information:</p>
              <ul>
                <li><strong>Account & identity:</strong> name, username, email address, phone number, profile photo.</li>
                <li><strong>User content:</strong> messages, posts, images, videos, stories, live stream content and related metadata.</li>
                <li><strong>Communications & call data:</strong> audio/video call session metadata, call duration; note that message contents in E2E-encrypted chats are only accessible to participants.</li>
                <li><strong>Device & technical information:</strong> device identifiers, operating system, app version, IP address, device model, unique advertising IDs (where applicable).</li>
                <li><strong>Location data:</strong> if you permit it (for location-based features).</li>
                <li><strong>Usage & analytics:</strong> feature usage, timestamps, crash logs, performance metrics.</li>
                <li><strong>Payment & billing:</strong> payment tokens and billing contact details if you use in-app purchases or subscriptions.</li>
                <li><strong>Third-party & social login data:</strong> information you permit from Google, Facebook or other login providers.</li>
                <li><strong>Beta/test data:</strong> data created during early access, alpha/beta tests, or developer previews.</li>
              </ul>

              <h2>4. How we use your data</h2>
              <p>We use data to:</p>
              <ul>
                <li>Create and manage your account, authenticate and provide the service.</li>
                <li>Enable messaging, calls, group video, stories, live streaming, blue verification and hide features.</li>
                <li>Moderate user content, process reports and remove content that violates our Terms.</li>
                <li>Process payments, subscriptions, refunds and enforce billing.</li>
                <li>Provide in-app notifications, security alerts, and support communications.</li>
                <li>Improve, analyze and personalize the product, fix bugs and monitor performance.</li>
                <li>Prevent fraud and abuse, ensure platform safety and enforce our Terms & policies.</li>
                <li>Comply with legal obligations and respond to lawful requests.</li>
              </ul>

              <h2>5. Sharing & disclosure</h2>
              <ul>
                <li><strong>Third parties:</strong> At present, WotPan does not sell personal data to advertisers or third parties for marketing without your consent. We may share data with service providers who perform services on our behalf.</li>
                <li><strong>Social login providers:</strong> If you sign up via Google/Facebook etc., those providers share data with us as you authorize.</li>
                <li><strong>Legal requests & safety:</strong> We may disclose data to comply with applicable law, to protect rights and safety, prevent fraud, or respond to lawful requests.</li>
                <li><strong>Business transfers:</strong> If we reorganize, sell assets, or merge, user data may be transferred as part of the transaction.</li>
              </ul>

              <h2>6. Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes
                described. When data is no longer required, we will delete or anonymize
                it. If you delete your account, we will delete your personal data
                subject to retention for legal, tax, or fraud-prevention reasons.
              </p>

              <h2>7. Your rights</h2>
              <p>Under applicable law, you have rights to:</p>
              <ul>
                <li><strong>Access</strong> the personal data we hold about you.</li>
                <li><strong>Correction</strong> of inaccurate or incomplete data.</li>
                <li><strong>Deletion/erasure</strong> of personal data.</li>
                <li><strong>Withdraw consent</strong> where processing is based on consent.</li>
                <li><strong>Export / Portability</strong> of your data.</li>
                <li><strong>Object / Restrict</strong> certain processing where permitted by law.</li>
              </ul>
              <p>
                <strong>How to submit a request:</strong> Email <a href="mailto:Support@wotpan.com">Support@wotpan.com</a> with a clear subject and include your account username / email / phone.
              </p>

              <h2>8. Security & End-to-End Encryption</h2>
              <p>
                WotPan uses technical and organizational measures to protect data. For private chats, we provide end-to-end encryption which means message content is cryptographically accessible only to the communicating users. However, certain metadata may be processed by us to route and deliver messages.
              </p>

              <h2>9. Children</h2>
              <p>
                WotPan is for adults (18+). We do not knowingly collect personal data from children under 18.
              </p>

              <h2>10. Changes to this Policy</h2>
              <p>
                We may update this Policy. If we make material changes, we will post an updated version on our site and notify you in-app or by email.
              </p>

              <h2>11. Governing law</h2>
              <p>
                This Privacy Policy is governed by the laws of India, including the Digital Personal Data Protection Act, 2023.
              </p>

              <h2>12. Contact</h2>
              <p>
                For privacy enquiries: <a href="mailto:Support@wotpan.com">Support@wotpan.com</a> / +91-7017127130.
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
