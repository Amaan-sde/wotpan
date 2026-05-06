import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Eye, Shield, Mic, Share2, Globe, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import wotpanLogo from "@/assets/wotpan-logo.jpg";

const About = () => {
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

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-muted/30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
                  About WotPan
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  WotPan is a global social networking and secure messaging platform. 
                  This journey began in India and is now poised to connect users around the world.
                </p>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft border border-border"
              >
                <div className="flex items-center gap-3 text-primary mb-6">
                  <Target className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to make communication safe, simple, and accessible through cutting-edge technology. 
                  We believe that everyone deserves a secure space to connect, share, and grow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft border border-border"
              >
                <div className="flex items-center gap-3 text-primary mb-6">
                  <Eye className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Founder's Vision</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong>Mohd Arif</strong> is the founder and owner of WotPan. As a project manager and app owner, 
                    Mohammad Arif aims to create a digital ecosystem where user privacy is paramount.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Special Features</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Privacy First",
                  desc: "All your private conversations are end-to-end encrypted, ensuring only you and your recipient can read them."
                },
                {
                  icon: Mic,
                  title: "Voice Assistance (New)",
                  desc: "Introducing our new 'Voice Assistance' feature to simplify communication, allowing users to control the app with their voice."
                },
                {
                  icon: Share2,
                  title: "WotPan Stories",
                  desc: "Share your everyday memories through our secure story feature, designed to keep your updates safe."
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach & Address */}
        <section className="py-20 lg:py-32 bg-foreground text-background">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8">
                <Globe className="w-5 h-5" />
                <span className="font-bold uppercase tracking-wider text-sm">Global Reach</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Poised for Global Impact</h2>
              <p className="text-xl text-background/60 mb-16 leading-relaxed">
                Operating from India (Moradabad, UP), we provide services across India and are expanding into other countries to connect the world securely.
              </p>

              <div className="bg-background/5 border border-background/10 p-12 rounded-[2.5rem] inline-block text-left">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Registered Address</h3>
                    <p className="text-xl text-background/60">
                      Moradabad, Uttar Pradesh,<br />
                      India - 244001.<br />
                      Phone: +91-9876543210
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
