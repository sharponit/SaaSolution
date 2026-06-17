"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({ titleComponent, children }: { titleComponent: string | React.ReactNode; children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [isMobile ? 1 : 1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20" ref={containerRef}>
      <div className="pt-2 pb-10 md:pt-24 md:pb-40 w-full relative" style={{ perspective: "1000px" }}>
        <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
          {titleComponent}
        </motion.div>
        <motion.div
          style={{ rotateX: rotate, scale, boxShadow: "rgba(0, 0, 0, 0.08) 0px 30px 90px 0px, rgba(0, 0, 0, 0.08) 0px 8px 20px 0px", transformStyle: "preserve-3d" }}
          className="mx-auto max-w-5xl mt-6 md:mt-12 h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
          <div className={cn("h-full w-full overflow-hidden rounded-2xl bg-[#F3F2EE] md:rounded-2xl")}>{children}</div>
        </motion.div>
      </div>
    </div>
  );
};
