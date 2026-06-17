"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";

export type Product = { name: string; image: string };

type HoverSliderContextValue = {
  activeSlide: number;
  changeSlide: (index: number) => void;
};

const HoverSliderContext = createContext<HoverSliderContextValue | null>(null);

export function useHoverSliderContext() {
  const context = useContext(HoverSliderContext);
  if (!context) throw new Error("useHoverSliderContext must be used inside HoverSlider");
  return context;
}

export function HoverSlider({ children, className }: { children: React.ReactNode; className?: string }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const value = useMemo(() => ({ activeSlide, changeSlide: setActiveSlide }), [activeSlide]);

  return (
    <MotionConfig transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <HoverSliderContext.Provider value={value}>
        <div className={cn("mt-12 w-full max-w-xl", className)}>{children}</div>
      </HoverSliderContext.Provider>
    </MotionConfig>
  );
}

export const products: Product[] = [
  { name: "hospitalityOS", image: "/projects/placeholders/hospitalityos.svg" },
  { name: "HospitalityOps", image: "/projects/placeholders/hospitalityops.svg" },
  { name: "HospitalityTV", image: "/projects/placeholders/hospitalitytv.svg" },
  { name: "Mithaq", image: "/projects/mithaq.png" },
  { name: "Viyra", image: "/projects/viyra.png" },
  { name: "Smart NFC Guest Pass", image: "/projects/smart-nfc.png" },
  { name: "Delicious Fitness", image: "/projects/deliciousfitness.png" }
];

export function ProductHoverSlider({ onActiveProductChange }: { onActiveProductChange?: (product: Product) => void }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const updateActiveProduct = (index: number) => {
    setActiveSlide(index);
    onActiveProductChange?.(products[index]);
  };

  return (
    <HoverSlider>
      <div className="space-y-2" onMouseLeave={() => updateActiveProduct(0)}>
        {products.map((product, index) => {
          const isActive = activeSlide === index;
          return (
            <button
              key={product.name}
              type="button"
              onMouseEnter={() => updateActiveProduct(index)}
              onFocus={() => updateActiveProduct(index)}
              className="group flex w-full items-center gap-3 text-left"
              aria-label={product.name}
            >
              <span
                className={cn(
                  "text-[36px] leading-none tracking-tight md:text-[56px] transition-colors duration-300",
                  isActive ? "text-black" : "text-black/25"
                )}
              >
                {product.name}
              </span>
              <span className={cn("h-px flex-1 transition-colors duration-300", isActive ? "bg-[#050505]/20" : "bg-[#050505]/12")} />
              <span className={cn("w-8 text-right text-2xl tabular-nums transition-colors duration-300", isActive ? "text-black/70" : "text-black/30")}>{String(index + 1).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
    </HoverSlider>
  );
}
