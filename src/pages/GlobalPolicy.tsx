import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Scale, Globe, MessageSquare, AlertCircle, Copyright } from "lucide-react";
import Footer from "@/components/Footer";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const GlobalPolicy = () => {
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
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 lg:p-16 shadow-soft border border-border overflow-hidden relative">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <header className="relative z-10 border-b border-border pb-10 mb-12">
                <div className="flex items-center gap-3 text-primary mb-4">
                  <ShieldCheck className="w-8 h-8" />
                  <span className="font-bold tracking-wider uppercase text-sm">Legal Framework</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                  Global Privacy & Legal Policy
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="bg-muted px-3 py-1 rounded-full">
                    <strong>Last Updated:</strong> April 19, 2026
                  </div>
                  <div className="bg-muted px-3 py-1 rounded-full">
                    <strong>Effective Region:</strong> Worldwide
                  </div>
                </div>
              </header>

              <div className="relative z-10 legal-content space-y-12">
                
                {/* 1. Global Privacy Policy */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">1. Global Privacy Policy</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                    <div className="bg-muted/50 p-6 rounded-2xl border border-border">
                      <h3 className="font-semibold text-foreground mb-2">Entity Information</h3>
                      <p>WotPan is a registered entity under the laws of India. All services provided are governed by our official registration and GST compliance.</p>
                    </div>
                    <p><strong>Commitment:</strong> WotPan is committed to privacy worldwide, complying with India’s DPDP Act, Europe’s GDPR, and USA’s CCPA.</p>
                    <p><strong>Data Collection:</strong> We collect your name, phone number, and device info to provide secure messaging.</p>
                    <p><strong>Encryption:</strong> Private chats and calls are End-to-End Encrypted (E2EE); only participants can read or listen to them.</p>
                  </div>
                </section>

                {/* 2. Intellectual Property & Trademark */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Scale className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">2. Intellectual Property & Trademark</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                    <p><strong>Trademark Protection:</strong> "WotPan" and the WotPan logo are registered trademarks. Any unauthorized use of the name, logo, or brand assets is strictly prohibited and protected under global trademark laws.</p>
                  </div>
                </section>

                {/* 3. User Features: "Stories" */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">3. User Features: "Stories"</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                    <p><strong>Stories Feature:</strong> WotPan allows users to share temporary updates via the "Stories" feature.</p>
                    <p><strong>User Responsibility:</strong> Users are solely responsible for the content (images, videos, or text) they post in their Stories.</p>
                    <p><strong>Data Handling:</strong> Stories are temporary and are handled securely via our global infrastructure (Cloudflare/Supabase).</p>
                  </div>
                </section>

                {/* 4. Global Terms of Service */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">4. Global Terms of Service</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                    <p><strong>Eligibility:</strong> You must be 13 years or older to use WotPan.</p>
                    <p><strong>Prohibited Conduct:</strong> Users are forbidden from sharing illegal, obscene, or hateful content.</p>
                    <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-2xl">
                      <p className="text-foreground font-semibold mb-2">Zero-Tolerance Policy</p>
                      <p>Accounts involved in harassment, spam, or abuse will be terminated immediately. We use Anomaly Detection to keep the platform safe.</p>
                    </div>
                  </div>
                </section>

                {/* 5. DMCA & Copyright Policy */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Copyright className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">5. DMCA & Copyright Policy</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                    <p><strong>Protection:</strong> We respect intellectual property. If your work is copied on WotPan, email <a href="mailto:support@wotpan.com" className="text-primary hover:underline font-medium">support@wotpan.com</a>.</p>
                    <p><strong>Repeat Infringers:</strong> Users with more than 3 verified copyright strikes will be permanently banned.</p>
                  </div>
                </section>

                {/* 6. Global Disclaimer */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">6. Global Disclaimer</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed pl-13">
                    <p><strong>"As Is" Basis:</strong> WotPan is provided for communication and entertainment; it does not provide professional or financial advice. This applies across all services under the global policy.</p>
                  </div>
                </section>

              </div>

              {/* Footer inside card */}
              <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-muted-foreground">
                  © 2026 WotPan. All rights reserved.
                </p>
                <Link to="/" className="text-primary hover:underline font-medium">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GlobalPolicy;
