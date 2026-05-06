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
                WotPan Terms of Service
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> January 23, 2026
                <br />
                <strong>Effective Date:</strong> January 23, 2026
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <div className="legal-warning">
                <strong>
                  PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE
                  USING THE WOTPAN SERVICE.
                </strong>{" "}
                BY INSTALLING, ACCESSING OR USING WOTPAN (THE "SERVICE"), YOU
                AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT
                USE THE SERVICE.
              </div>

              <h2>1. Parties & Agreement</h2>
              <p>
                These Terms are a legally binding agreement between you
                ("User") and WotPan, located at House 95, Longi Kala,
                Thakurdwara, Moradabad, Uttar Pradesh 244601, India.
              </p>

              <h2>2. Eligibility</h2>
              <p>
                You must be 13 years or older to use WotPan. By creating an
                account, you represent that you have the legal capacity to
                enter into this agreement under the Indian Contract Act,
                1872.
              </p>

              <h2>3. Accounts & Security</h2>
              <ul>
                <li>You must provide a valid phone number or email for registration.</li>
                <li>You are responsible for all activities under your account.</li>
                <li>
                  <strong>Account Deletion:</strong> You have the right to delete
                  your account at any time. WotPan reserves the right to
                  terminate accounts for violation of Section 5.
                </li>
              </ul>

              <h2>4. Service Features & Contact Sync</h2>
              <p>
                WotPan provides messaging, audio/video calls, stories, live
                streaming, and WotPan Blue features.
              </p>
              <p>
                <strong>Contact Sync:</strong> By enabling the contact sync
                feature, you grant WotPan permission to access your phone book
                to identify other WotPan users. We do not store these contacts
                for any purpose other than friend-matching.
              </p>

              <h2>5. Prohibited Conduct (Strict Policy)</h2>
              <p>You agree NOT to:</p>
              <ul>
                <li>
                  Post or share any content that is illegal, defamatory,
                  obscene, or promotes violence or hatred.
                </li>
                <li>
                  Use the service for spamming, phishing, or spreading
                  malware.
                </li>
                <li>
                  Harass other users or impersonate any person or brand.
                </li>
              </ul>
              <p>
                <strong>Zero Tolerance:</strong> Any content involving child
                abuse or terrorism will result in immediate termination and
                reporting to authorities (CERT-In).
              </p>

              <h2>6. WotPan Blue & Subscriptions</h2>
              <p>
                WotPan Blue is a premium subscription service.
              </p>
              <ul>
                <li>
                  <strong>Payments:</strong> All payments are final and
                  processed through secure third-party gateways or app stores.
                </li>
                <li>
                  <strong>Refunds:</strong> Refunds are subject to the policies
                  of the payment processor (Google Play / App Store). WotPan
                  does not provide direct refunds for partial subscription
                  periods.
                </li>
              </ul>

              <h2>7. User Content License</h2>
              <p>
                You own the content you post. However, by posting on public
                sections of WotPan, you grant us a worldwide, royalty-free
                license to host, display, and distribute that content to
                provide the service.
              </p>

              <h2>8. Privacy & Data Protection</h2>
              <p>
                Your use of the service is also governed by our Privacy Policy,
                which is compliant with the Digital Personal Data Protection
                Act (DPDP), 2023.
              </p>

              <h2>9. Intellectual Property</h2>
              <p>
                WotPan, its logo, and its code are the exclusive property of
                WotPan. You may not reverse-engineer, copy, or modify any part
                of the app without written consent.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>
                The Service is provided <strong>"AS IS"</strong>. WotPan shall
                not be liable for any data loss, service interruptions, or
                damages arising from your use of the platform.
              </p>

              <h2>11. Governing Law & Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of India. All disputes are
                subject to the exclusive jurisdiction of the courts in
                Moradabad, Uttar Pradesh, India.
              </p>

              <h2>12. Contact & Grievance</h2>
              <p>
                In compliance with Information Technology Rules, for any
                grievances:
              </p>
              <ul>
                <li><strong>Grievance Officer:</strong> Support Team</li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Support@wotpan.com">
                    Support@wotpan.com
                  </a>
                </li>
                <li><strong>Phone:</strong> +91-9876543210</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
