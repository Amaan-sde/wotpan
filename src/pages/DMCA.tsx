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
                DMCA Copyright Infringement Policy
              </h1>
              <p className="text-muted-foreground">
                <strong>Last Updated:</strong> October 5, 2025
                <br />
                <strong>Effective Date:</strong> October 5, 2025
              </p>
            </header>

            <div className="legal-content prose prose-slate max-w-none">
              <p>
                WotPan respects the intellectual property rights of others and asks its
                users to do the same. This policy describes our process for receiving
                and responding to claims of copyright infringement, consistent with the
                Digital Millennium Copyright Act (DMCA) and other applicable laws.
              </p>

              <h2>1. Designated Agent for DMCA Notices</h2>
              <p>
                All notifications of claimed copyright infringement on the Service must
                be submitted in writing to our Designated Agent:
              </p>

              <div className="legal-notice">
                <p className="mb-2"><strong>Designated Copyright Agent:</strong></p>
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:Support@wotpan.com">Support@wotpan.com</a></p>
                <p className="mb-0"><strong>Address:</strong> House 95, Longi Kala, Thakurdwara, Moradabad, Uttar Pradesh 244601, India</p>
              </div>

              <h2>2. Takedown Notice Requirements</h2>
              <p>
                To be effective, your written notification of claimed infringement must
                include substantially all of the following:
              </p>
              <ol>
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works.</li>
                <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit WotPan to locate the material.</li>
                <li>Information reasonably sufficient to permit WotPan to contact the complaining party, such as an address, telephone number, and email address.</li>
                <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner.</li>
              </ol>
              <p>
                Upon receipt of a valid Takedown Notice, WotPan will take appropriate
                action, which may include removing or disabling access to the allegedly
                infringing material.
              </p>

              <h2>3. Counter-Notice Procedures</h2>
              <p>
                If your content was removed or access was disabled as a result of a
                copyright infringement notice, and you believe the content was removed
                by mistake or misidentification, you may submit a Counter-Notice to our
                Designated Agent.
              </p>
              <p>
                To be effective, your Counter-Notice must include substantially all of
                the following:
              </p>
              <ol>
                <li>Your physical or electronic signature.</li>
                <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed.</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
                <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located.</li>
              </ol>

              <h2>4. Repeat Infringers</h2>
              <p>
                It is the policy of WotPan to terminate, in appropriate circumstances,
                the account of any user who is a repeat infringer of copyright or other
                intellectual property rights.
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
