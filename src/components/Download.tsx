import { motion } from "framer-motion";
import { Apple, Smartphone, Monitor, ArrowDown } from "lucide-react";
import { toast } from "sonner";

const DownloadSection = () => {
  const handleDownload = (platform: string) => {
    toast.success(`${platform} download coming soon!`, {
      description: "We're working hard to bring WotPan to all platforms.",
    });
  };

  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(193 66% 45%) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8"
          >
            <ArrowDown className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get <span className="text-gradient">WotPan</span> Today
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Available for all your devices. Download now and start chatting
            securely.
          </p>

          {/* Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => handleDownload("App Store")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="store-button"
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => handleDownload("Google Play")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="store-button"
            >
              <Smartphone className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </motion.button>
          </motion.div>

          {/* Desktop Download */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <button
              onClick={() => handleDownload("Desktop")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Monitor className="w-5 h-5" />
              <span className="font-medium">Also available for Desktop</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">App Rating</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
