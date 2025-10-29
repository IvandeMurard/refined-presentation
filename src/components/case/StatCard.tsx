import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  color?: "accent" | "primary" | "success" | "info";
  delay?: number;
}

export function StatCard({ value, label, icon: Icon, color = "accent", delay = 0 }: StatCardProps) {
  const colorClasses = {
    accent: "from-accent/20 to-accent/5 border-accent/30 text-accent",
    primary: "from-primary/20 to-primary/5 border-primary/30 text-primary",
    success: "from-green-500/20 to-green-500/5 border-green-500/30 text-green-500",
    info: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`
        relative overflow-hidden rounded-2xl p-6
        bg-gradient-to-br ${colorClasses[color]}
        border backdrop-blur-sm
        shadow-sm hover:shadow-xl
        transition-shadow duration-300
        group
      `}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 space-y-3">
        {/* Icon */}
        <div className={`inline-flex p-2 rounded-lg bg-background/40`}>
          <Icon className="w-5 h-5" />
        </div>
        
        {/* Value */}
        <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {value}
        </div>
        
        {/* Label */}
        <div className="text-sm text-foreground/80 leading-snug">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
