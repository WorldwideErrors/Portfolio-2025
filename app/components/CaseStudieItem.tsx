"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { gilda, angkor } from "../fonts";

const childVariant: Variants = {
  hidden: { opacity: 0, x: 70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

interface CaseStudieProps {
  children: string;
}

export default function CaseStudieItem({ children }: CaseStudieProps) {
  return (
    <motion.div variants={childVariant}>
      
        <span
          className={`text-1xl sm:text-2xl md:text-2xl lg:text-5xl ${angkor.className} hover:text-secondary transition-colors duration-300 `}
        >
          {children}
        </span>
      
    </motion.div>
  );
}
