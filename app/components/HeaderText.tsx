"use client";

import { motion, Variants } from "framer-motion";
import { angkor, lux_roman } from "../fonts";

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function HeaderText() {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.5 }}
      className="self-end xl:max-w-[30%] lg:lg:max-w-[50%] p-4 xl:flex xl:flex-col col gap-4"
    >
      <motion.h1 variants={childVariants} className={`lg:text-4xl text-6xl font-bold ${angkor.className}`}>
        Jeffrey van Tillo
      </motion.h1>

      <motion.p variants={childVariants} className={`lg:text-lg text-2xl ${lux_roman.className}`}>
        Front-End React Developer / Designer based in The Netherlands.
      </motion.p>

      <motion.p variants={childVariants} className={`lg:text-lg text-2xl ${lux_roman.className}`}>
        I’m a designer who cares about creating <span className="animate-rainbow">magical </span> things that everyone can experience.
      </motion.p>
    </motion.div>
  );
}
