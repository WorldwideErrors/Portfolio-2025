"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { gilda } from "../fonts";

const childVariant: Variants = {
  hidden: { opacity: 0, x: -70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

interface NavItemsProps {
  children: string;
  url: string;
}

export default function NavItems({ children, url }: NavItemsProps) {
  return (
    <motion.div variants={childVariant}>
      <Link href={url}>
        <span
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${gilda.className} hover:text-accent transition-colors duration-300`}
        >
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
