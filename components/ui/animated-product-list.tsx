"use client";

import { motion } from "framer-motion";

const products = [
  "hospitalityOS",
  "HospitalityOps",
  "HospitalityTV",
  "Mithaq",
  "Viyra",
  "Smart NFC Guest Pass",
  "Delicious Fitness"
];

export function ProductNameAnimation() {
  return (
    <motion.span
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      •
    </motion.span>
  );
}

export function AnimatedProductList() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.07, delayChildren: 0.08 }
        }
      }}
      className="mt-8 flex max-w-md flex-wrap gap-2 md:gap-3"
    >
      {products.map((name) => (
        <motion.div
          key={name}
          variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2, scale: 1.03 }}
          className="group rounded-full border border-black/20 bg-[#F3F2EE]/80 px-4 py-2 text-sm font-semibold tracking-tight text-black backdrop-blur-sm transition-colors duration-200 hover:bg-[#050505] hover:text-white"
        >
          {name}
        </motion.div>
      ))}
    </motion.div>
  );
}
