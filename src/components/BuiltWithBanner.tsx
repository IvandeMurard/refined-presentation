import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Tool {
  name: string;
  icon: string;
  iconSize?: "normal" | "large";
}

export const BuiltWithBanner = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Gestion du thème
  useEffect(() => {
    setMounted(true);
    
    if (theme === "dark") {
      setIsDark(true);
    } else if (theme === "light") {
      setIsDark(false);
    } else if (theme === "system" || !theme) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  // Calcul de l'icon Cursor selon le thème
  const getCursorIcon = () => {
    if (!mounted) return "/img/cursor-icon.svg";
    return isDark ? "/img/cursor-icon2.svg" : "/img/cursor-icon.svg";
  };

  // Organisation en 3 lignes équilibrées
  const line1: Tool[] = [
    { name: "Claude AI", icon: "/img/claude_icon.svg" },
    { name: "Obsidian", icon: "/img/obsidian-icon.svg" },
    { name: "Figma", icon: "/img/figma-icon.svg" },
    { name: "Mobbin", icon: "/img/mobbin_icon.svg", iconSize: "large" },
  ];

  const line2: Tool[] = [
    { name: "Cursor", icon: getCursorIcon() },
    { name: "React", icon: "/img/react-native-icon.png" },
    { name: "TypeScript", icon: "/img/typescript_icon.png" },
    { name: "Tailwind CSS", icon: "/img/tailwind-icon.svg" },
  ];

  const line3: Tool[] = [
    { name: "Eleven Labs", icon: "/img/elevenlabs-icon.svg", iconSize: "large" },
    { name: "Lovable", icon: "/img/lovable_icon.svg" },
    { name: "GitHub", icon: "/img/github-icon.svg" },
  ];

  const lines = [line1, line2, line3];

  // Animation variants améliorées avec glow/shadow
  const toolVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    hover: {
      scale: 1.2,
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div 
      className="w-full py-16 bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Titre discret */}
        <h3 className="text-xl text-foreground/60 font-[500] mb-12 text-center">
          Site built with
        </h3>
        
        {/* 3 lignes équilibrées */}
        <div className="flex flex-col items-center gap-8 md:gap-10">
          {lines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 md:gap-x-6 md:gap-y-4 w-full"
            >
              {line.map((tool) => {
                // Taille des logos : responsive avec taille réduite sur mobile
                const logoSize = tool.iconSize === "large" 
                  ? "w-10 h-10 sm:w-12 sm:h-12" 
                  : "w-8 h-8 sm:w-10 sm:h-10";
                
                const isElevenLabs = tool.name === "Eleven Labs";
                
                return (
                  <motion.div
                    key={tool.name}
                    variants={toolVariants}
                    initial="rest"
                    whileHover="hover"
                    className={`flex items-center gap-3 cursor-pointer group ${
                      isElevenLabs ? "px-2 py-1" : ""
                    }`}
                    aria-label={tool.name}
                    title={tool.name}
                  >
                    <img 
                      src={tool.icon} 
                      alt={`${tool.name} logo`}
                      className={`${logoSize} object-contain flex-shrink-0 transition-all duration-300 group-hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)]`}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        console.error(`Failed to load logo for ${tool.name}: ${tool.icon}`);
                        target.style.opacity = '0.4';
                        target.style.filter = 'grayscale(100%)';
                      }}
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '1';
                        target.style.filter = 'none';
                      }}
                    />
                    <span className="text-sm sm:text-base md:text-lg font-[500] text-foreground/80 whitespace-nowrap transition-colors duration-300 group-hover:text-foreground">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
