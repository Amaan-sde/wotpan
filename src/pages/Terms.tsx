import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const Terms = () => {
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
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> October 5, 2025
                <br />
                <strong>Effective Date:</strong> October 5, 2025
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <div className="legal-warning">
                <strong>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE WOTPAN SERVICE.</strong>
                {" "}BY INSTALLING, ACCESSING OR USING WOTPAN (THE "SERVICE"), YOU AGREE TO BE BOUND BY THESE TERMS AND THE PRIVACY POLICY. IF YOU DO NOT AGREE, DO NOT USE THE SERVICE.
              </div>

              <h2>1. Parties</h2>
              <p>
                These Terms are between <strong>you</strong> ("you", "user", "data principal") and <strong>WotPan</strong> (we, our, us), located at House 95, Longi Kala, Thakurdwara, Moradabad, Uttar Pradesh 244601, India.
              </p>

              <h2>2. Eligibility</h2>
              <p>
                You must be <strong>18 years or older</strong> to use WotPan. By registering, you confirm you are 18+ and have authority to enter into this agreement.
              </p>

              <h2>3. Accounts & registration</h2>
              <ul>
                <li>You must provide accurate information (email, phone) when creating an account.</li>
                <li>You are responsible for keeping login credentials secure and for all activity that occurs under your account.</li>
                <li>We may suspend or close accounts that violate these Terms or for abuse, fraud, or at our discretion.</li>
              </ul>

              <h2>4. Service features</h2>
              <p>
                WotPan offers chat messaging, audio/video calls, group video, stories, live streaming, blue verification badge, hide/unhide options and other features. Features may change, be added or removed at our discretion.
              </p>

              <h2>5. Acceptable use & user conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use WotPan to violate any law, infringe rights, distribute illegal content, or facilitate illegal activity.</li>
                <li>Post or transmit abusive, defamatory, obscene, pornographic, hateful, harassing, or violent material.</li>
                <li>Impersonate any person or entity, or falsely state affiliation.</li>
                <li>Upload malware, spam, or try to gain unauthorized access to systems.</li>
                <li>Circumvent security or attempt to reverse-engineer the app.</li>
              </ul>

              <h2>6. User-generated content & moderation</h2>
              <p>
                You retain ownership of the content you post. By posting content you grant WotPan a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute and display such content in connection with providing and promoting the service.
              </p>

              <h2>7. Blue verification badge</h2>
              <p>
                Verification badges are granted at our sole discretion. A badge does not confer special legal rights. We may revoke verification at any time.
              </p>

              <h2>8. Payments, subscriptions & refunds</h2>
              <p>
                WotPan may offer paid features, in-app purchases or subscriptions. All payments are processed by platform providers (App Store / Play Store) or third-party processors.
              </p>

              <h2>9. End-to-End encryption & metadata</h2>
              <p>
                Private chats use <strong>end-to-end encryption</strong>; message content cannot be read by WotPan. However, we process metadata (timestamps, sender/recipient IDs, message size) to deliver service and prevent abuse.
              </p>

              <h2>10. Intellectual property</h2>
              <ul>
                <li>WotPan retains all rights to the app, code, designs, logos and trademarks.</li>
                <li>You keep rights to content you create, subject to the license you grant above.</li>
              </ul>

              <h2>11. Reporting infringement / DMCA</h2>
              <p>
                If you believe content on WotPan infringes your copyright, provide a DMCA notice to <a href="mailto:Support@wotpan.com">Support@wotpan.com</a>.
              </p>

              <h2>12. Termination & suspension</h2>
              <p>
                We may suspend, restrict or terminate accounts for breach of these Terms, fraud, or legal obligations. You may delete your account from within the app or by contacting support.
              </p>

              <h2>13. Disclaimers</h2>
              <p>
                The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong>. We make no warranties about uninterrupted access, fitness for a particular purpose, or accuracy of content.
              </p>

              <h2>14. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, WotPan and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h2>15. Indemnity</h2>
              <p>
                You agree to indemnify and hold WotPan harmless from claims arising from your use of the service or violation of these Terms.
              </p>

              <h2>16. Modifications to Terms</h2>
              <p>
                We may update these Terms. If we make material changes we will notify you via email or in-app notification.
              </p>

              <h2>17. Governing law & dispute resolution</h2>
              <p>
                These Terms are governed by the laws of <strong>India</strong>. Any disputes will be subject to the exclusive jurisdiction of the courts in Moradabad, Uttar Pradesh, India.
              </p>

              <h2>18. Contact</h2>
              <p>
                Support & legal notices: <a href="mailto:Support@wotpan.com">Support@wotpan.com</a> / +91-7017127130
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
