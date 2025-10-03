import { motion } from "framer-motion";

export const BuiltWithBanner = () => {
  const tools = [
    { name: "Figma", icon: "/img/figma-icon.svg" },
    { name: "GPT", icon: "/img/openai-icon.svg" },
    { name: "Mobbin", icon: "/img/mobbin_icon.svg" },
    { name: "React", icon: "/img/react-native-icon.png" },
    { name: "TypeScript", icon: "/img/typescript_icon.png" },
    { name: "Tailwind CSS", icon: "/img/tailwind-icon.svg" },
    { name: "Lovable", icon: "/img/lovable_icon.svg" }
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
            <h3 className="text-[18px] md:text-[22px] font-[700] text-foreground mb-6">
              Site built with
            </h3>
            
            {/* Tools in horizontal layout */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {tools.map((tool) => (
                <div 
                  key={tool.name} 
                  className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                >
                  <img src={tool.icon} alt={tool.name} className="w-6 h-6 md:w-7 md:h-7 object-contain" />
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
