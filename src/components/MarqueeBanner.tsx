import * as React from "react";

type Props = {
  phrases: string[];
  className?: string;
};

export function MarqueeBanner({ phrases, className = "" }: Props) {
  return (
    <div className={["w-full overflow-hidden", className].join(" ")}>
      <div className="relative flex">
        {/* First set of phrases */}
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {phrases.map((phrase, index) => (
            <React.Fragment key={`phrase-1-${index}`}>
              <span className="text-[15px] font-[500] tracking-[0.01em] text-[#4B5563]">
                {phrase}
              </span>
              {index < phrases.length - 1 && (
                <span className="text-[#CBD5E1]">•</span>
              )}
            </React.Fragment>
          ))}
          <span className="text-[#CBD5E1]">•</span>
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" aria-hidden="true">
          {phrases.map((phrase, index) => (
            <React.Fragment key={`phrase-2-${index}`}>
              <span className="text-[15px] font-[500] tracking-[0.01em] text-[#4B5563]">
                {phrase}
              </span>
              {index < phrases.length - 1 && (
                <span className="text-[#CBD5E1]">•</span>
              )}
            </React.Fragment>
          ))}
          <span className="text-[#CBD5E1]">•</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
