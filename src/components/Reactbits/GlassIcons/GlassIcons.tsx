
import React from "react";

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  link?: string; 
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  
  facebook: "linear-gradient(120deg, #1877F2, #4267B2, #6D84B4)", 
  instagram: "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  linkedin: "linear-gradient(180deg, #0077B5, #ADD8E6)",
  tiktok: "linear-gradient(180deg, #000000, #000000 90%, #00FFFF 95%, #FF00FF 100%)",
};


const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div
      className={`grid gap-[5em] grid-cols-2 md:grid-cols-3 mx-auto py-[3em] overflow-visible ${
        className || ""
      }`}
    >
      {items.map((item, index) => {
        const Wrapper = item.link ? "a" : "div"; 
        const wrapperProps = item.link
          ? {
              href: item.link,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {};

        return (
          <Wrapper
            key={index}
            {...wrapperProps}
            aria-label={item.label}
            className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
              item.customClass || ""
            }`}
          >
            {/* Back layer */}
            <span
              className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
              style={{
                ...getBackgroundStyle(item.color),
                boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
              }}
            ></span>

            {/* Front layer */}
            <span
              className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
              style={{
                boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
              }}
            >
              <span
                className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center"
                aria-hidden="true"
              >
                {item.icon}
              </span>
            </span>

            {/* Label */}
            <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
              {item.label}
            </span>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default GlassIcons;
