import { motion } from "framer-motion";
import { Shield, Zap, Globe, Users, Phone, Gift } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description:
      "Your messages are protected with advanced encryption technology, ensuring only you and your contacts can read them.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Send messages, photos, and files instantly to anyone, anywhere in the world with our optimized delivery system.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description:
      "Use WotPan on your phone, tablet, or computer. Your conversations sync seamlessly across all devices.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Group Chats",
    description:
      "Create group chats with up to 256 participants. Share moments with family, friends, and colleagues effortlessly.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Phone,
    title: "Voice & Video Calls",
    description:
      "Make crystal-clear voice and video calls to your contacts for free, no matter where they are in the world.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Gift,
    title: "Always Free",
    description:
      "WotPan is completely free to use with no subscription fees, hidden costs, or premium tiers to worry about.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">WotPan</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience messaging the way it should be – fast, secure, and
            beautifully simple.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
