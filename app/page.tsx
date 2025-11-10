"use client";

import { motion, Variants } from "framer-motion";
import Container from "./components/Container";
import HeaderText from "./components/HeaderText";
import NavItems from "./components/NavItems";
import Socials from "./components/Socials";
import ThemeSelect from "./components/ThemeSelect";

const navContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

export default function Home() {
  return (
    <div className="flex h-screen p-6 lg:p-10">
      <Container>
        <motion.div
          variants={navContainerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 items-start"
        >
          <NavItems url="/case-studies">CASE STUDIES</NavItems>
          <NavItems url="/about">ABOUT</NavItems>
          <NavItems url="mailto:jeffreyvantillo@gmail.com">CONNECT</NavItems>
          <ThemeSelect/>
        </motion.div>
        <HeaderText />
      </Container>

      <Socials alignment="left-1/2"/>
    </div>
  );
}
