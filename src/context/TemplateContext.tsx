import React, { createContext, useContext, useState, useEffect } from "react";
import { templates, TemplateData } from "../data";

export interface BrandColor {
  id: string;
  name: string;
  role: string;
  hex: string;
  desc: string;
  textColor: string;
  glowColor: string;
}

export const RUMAH_TROPIS_COLORS: BrandColor[] = [
  {
    id: "copper",
    name: "Premium Copper-Bronze",
    role: "(The Gateway Metal)",
    hex: "#B88A6E",
    desc: "Rich, reflective",
    textColor: "text-[#B88A6E]",
    glowColor: "rgba(184, 138, 110, 0.22)"
  },
  {
    id: "travertine",
    name: "Sandy Travertine",
    role: "(The Foundation Stone)",
    hex: "#F5E6D3",
    desc: "Warm, grounded neutral",
    textColor: "text-[#F5E6D3]",
    glowColor: "rgba(245, 230, 211, 0.16)"
  },
  {
    id: "teak",
    name: "Aged Teak",
    role: "(The Structural Wood)",
    hex: "#4D3C2F",
    desc: "Deep, warm dark",
    textColor: "text-[#4D3C2F]",
    glowColor: "rgba(77, 60, 47, 0.28)"
  },
  {
    id: "moss",
    name: "Rainforest Moss",
    role: "(The Lush Mineral)",
    hex: "#5B6A56",
    desc: "Muted, organic green",
    textColor: "text-[#5B6A56]",
    glowColor: "rgba(91, 106, 86, 0.2)"
  },
  {
    id: "sunbeam",
    name: "Filtered Sunbeam",
    role: "(The Warm Glow)",
    hex: "#FEF9ED",
    desc: "Soft, luminous cream",
    textColor: "text-[#FEF9ED]",
    glowColor: "rgba(254, 249, 237, 0.15)"
  }
];

export interface ThemeConfig {
  primary: string;
  secondary: string;
  bg: string;
  card: string;
  cardHover: string;
  textMuted: string;
  fontTitle: string;
  glowIntensity: string;
  gradient: string;
  borderColor: string;
  darkRing: string;
}

export const themes: Record<string, ThemeConfig> = {
  "arsitetika-studio": {
    primary: "#B88A6E", // Premium Copper-Bronze
    secondary: "#F5E6D3", // Sandy Travertine
    bg: "#050505",
    card: "#0D0D0D",
    cardHover: "#151515",
    textMuted: "#A3A3A3",
    fontTitle: '"Playfair Display", Georgia, serif',
    glowIntensity: "rgba(184, 138, 110, 0.15)",
    gradient: "from-[#B88A6E] to-[#FAF3E8]",
    borderColor: "border-[#B88A6E]",
    darkRing: "ring-[#B88A6E]/20"
  },
  "akademicrypto": {
    primary: "#00FC8B",
    secondary: "#6cfcb3",
    bg: "#030308",
    card: "#0A0A16",
    cardHover: "#121226",
    textMuted: "#8D8D9F",
    fontTitle: '"JetBrains Mono", monospace',
    glowIntensity: "rgba(0, 252, 139, 0.18)",
    gradient: "from-[#00FC8B] to-[#10b981]",
    borderColor: "border-[#00FC8B]",
    darkRing: "ring-[#00FC8B]/20"
  },
  "akademicreator": {
    primary: "#D846EF",
    secondary: "#f472b6",
    bg: "#08040F",
    card: "#110920",
    cardHover: "#1c1130",
    textMuted: "#9C8EB9",
    fontTitle: '"Inter", sans-serif',
    glowIntensity: "rgba(216, 70, 239, 0.18)",
    gradient: "from-[#D846EF] to-[#8b5cf6]",
    borderColor: "border-[#D846EF]",
    darkRing: "ring-[#D846EF]/20"
  }
};

interface TemplateContextType {
  activeTemplate: string;
  setActiveTemplate: (t: string) => void;
  data: TemplateData;
  theme: ThemeConfig;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTemplate, setActiveTemplateState] = useState<string>("arsitetika-studio");

  const setActiveTemplate = (t: string) => {
    setActiveTemplateState(t);
  };

  const data = templates[activeTemplate] || templates["arsitetika-studio"];
  const theme = themes[activeTemplate] || themes["arsitetika-studio"];

  console.log("TEMPLATE DEBUG:", { activeTemplate, hasData: !!data, rbTitle: data?.rebateTitle });

  // Dynamically update CSS Variables on :root so that global selectors in index.css automatically adapt
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-primary-hover", theme.secondary);
    root.style.setProperty("--color-bg", theme.bg);
    root.style.setProperty("--color-card", theme.card);
    root.style.setProperty("--font-title-family", theme.fontTitle);
    
    // Also update document title for high fidelity experience
    document.title = data.name + " - " + data.subName;
  }, [activeTemplate, theme, data]);

  return (
    <TemplateContext.Provider value={{ activeTemplate, setActiveTemplate, data, theme }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplate must be used within a TemplateProvider");
  }
  return context;
};
