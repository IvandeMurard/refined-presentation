import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, Linkedin, Twitter } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/15 dark:to-primary/20" />
      
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[70vh]"
        >
          {/* Colonne de gauche - Message friendly */}
          <div className="space-y-6 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight text-foreground">
                Well, I never let perfection get in the way of shipping,
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-foreground/90">
                but,<br />
                this is still a little early.
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Come back soon, and I'll have something for you!
              </p>
              <motion.p 
                className="text-xl md:text-2xl font-medium text-primary pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Keep in touch?
              </motion.p>
            </motion.div>

            {/* Icônes social media */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
          </div>

          {/* Colonne de droite - Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:pt-8"
          >
            <div className="bg-primary text-primary-foreground p-6 md:p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-sans font-bold mb-2">
                Let's connect
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-sm">
                It's on me, give me a chance to get back to you
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
