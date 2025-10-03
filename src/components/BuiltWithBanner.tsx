import { motion } from "framer-motion";
import { Figma, Bot, Smartphone, Code, FileCode, Palette, Sparkles } from "lucide-react";

export const BuiltWithBanner = () => {
  const tools = [
    { name: "Figma", icon: Figma },
    { name: "GPT", icon: Bot },
    { name: "Mobbin", icon: Smartphone },
    { name: "React", icon: Code },
    { name: "TypeScript", icon: FileCode },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Lovable", icon: Sparkles }
  ];

  return (
    <motion.div 
      className="w-full py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[16px] border border-border bg-muted shadow-sm">
          <div className="px-6 md:px-8 py-5 md:py-6 text-center">
            {/* Title */}
            <h3 className="text-[16px] md:text-[18px] font-[600] text-foreground mb-1">
              Site built with
            </h3>
            
            {/* Subtitle */}
            <p className="text-[12px] md:text-[13px] text-muted-foreground mb-4">
              Crafted with modern tools and AI-powered development
            </p>
            
            {/* Tools in horizontal layout */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {tools.map((tool) => (
                <div 
                  key={tool.name} 
                  className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                >
                  <tool.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground/70" />
                  <span className="text-[13px] md:text-[14px] font-[500] text-foreground/80">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
