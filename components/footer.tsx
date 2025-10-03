import * as React from "react";
import { Mail, Calendar, Linkedin, MessageCircle } from "lucide-react";

type Props = {
  siteName: string;
  tagline: string;
  sections: Array<{ id: string; label: string }>;
  onSectionClick?: (sectionId: string) => void;
  className?: string;
};

export function Footer({
  siteName,
  tagline,
  sections,
  onSectionClick,
  className = "",
}: Props) {
  const [hoveredIcon, setHoveredIcon] = React.useState<string | null>(null);

  const socialLinks = [
    { id: "mail", icon: Mail, label: "Email" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "linkedin", icon: Linkedin, label: "LinkedIn" },
    { id: "whatsapp", icon: MessageCircle, label: "WhatsApp" },
  ];

  return (
    <footer className={["w-full bg-[#0B1220] text-white", className].join(" ")}>
      <div className="max-w-[1360px] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Column 1: Name & Tagline */}
          <div>
            <h3 className="text-[20px] font-[700] text-white mb-2">
              {siteName}
            </h3>
            <p className="text-[14px] font-[400] leading-[1.6] text-white/70">
              {tagline}
            </p>
          </div>

          {/* Column 2: Sections - Split into 2 columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[13px] font-[600] tracking-[0.15em] uppercase text-white/60 mb-4">
                Navigation
              </h4>
              <nav className="space-y-2">
                {sections.slice(0, Math.ceil(sections.length / 2)).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => onSectionClick?.(section.id)}
                    className="block text-[15px] font-[400] text-white/80 hover:text-[#065f46] transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="text-[13px] font-[600] tracking-[0.15em] uppercase text-white/60 mb-4">
                &nbsp;
              </h4>
              <nav className="space-y-2">
                {sections.slice(Math.ceil(sections.length / 2)).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => onSectionClick?.(section.id)}
                    className="block text-[15px] font-[400] text-white/80 hover:text-[#065f46] transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Column 4: Social Icons */}
          <div>
            <h4 className="text-[13px] font-[600] tracking-[0.15em] uppercase text-white/60 mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <div
                    key={social.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredIcon(social.id)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    role="img"
                    aria-label={social.label}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className={[
                        "transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        hoveredIcon === social.id
                          ? "text-[#065f46]"
                          : "text-white/70",
                      ].join(" ")}
                    />
                  </div>
                );
              })}
              
              {/* X (Twitter) Icon - Custom SVG */}
              <div
                className="relative group"
                onMouseEnter={() => setHoveredIcon("x")}
                onMouseLeave={() => setHoveredIcon(null)}
                role="img"
                aria-label="X (Twitter)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={[
                    "transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    hoveredIcon === "x"
                      ? "stroke-[#065f46]"
                      : "stroke-white/70",
                  ].join(" ")}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                  <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] bg-white/20 mb-6" />

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-[13px] font-[400] text-white/60 leading-[1.6]">
            © 2025 Ivan de Murard. All rights reserved.
            <br className="md:hidden" />
            <span className="hidden md:inline"> • </span>
            Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
