"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0, // optional
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, x: -70 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

interface SocialsProps {
  alignment: string;
}

export default function Socials({alignment}: SocialsProps ) {
  return (
    <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`absolute bottom-5 ${alignment} -translate-x-1/2 flex gap-6 justify-center sticky-bottom`}
    >
      <Link
        href="https://wa.me/+31683395955"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
        aria-label="WhatsApp link"
      >
        {/* child motion wrapper */}
        <motion.span variants={childVariants} className="inline-block">
          <FaWhatsapp className="text-4xl hover:text-accent transition-colors duration-300" />
        </motion.span>
      </Link>

      <Link
        href="https://github.com/WorldwideErrors"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
      >
        <motion.span variants={childVariants} className="inline-block">
          <FaGithub className="text-4xl hover:text-accent transition-colors duration-300" aria-label="github link"/>
        </motion.span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/jeffrey-van-tillo/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
      >
        <motion.span variants={childVariants} className="inline-block">
          <FaLinkedin className="xs:text-xl text-4xl hover:text-accent transition-colors duration-300" aria-label="linkedin link" />
        </motion.span>
      </Link>
    </motion.div>
  );
}
