"use client";

import { motion, Variants } from "framer-motion";
import Container from "./components/Container";
import NavItems from "./components/NavItems";
import Image from "next/image";
import { gilda, lux_roman } from "./fonts";

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function NotFound() {
  const url: string =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG55eW41cmYxbDlrbThxdTlwazg3Z3BjMHVvOXk1YXV5eW5pdGtuZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9jCW99FeHU8dQhW/giphy.gif";

  return (
    <div className="flex flex-col min-h-screen p-6 lg:p-10 relative">
      <Container>
        <div className="gap-10">
          <NavItems url="/">GO BACK</NavItems>
        </div>

        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-6 items-start bottom-0"
        >
          <h1 className={`text-4xl xs:text-2xl ${gilda.className}`}>404 - Page Not Found</h1>
          <p className={`p-5 text-xl sm:text-3xl  italic ${lux_roman.className}`}>
            Hiya, Georgie! What a nice boat. Do you want it back?
          </p>
        </motion.div>
      </Container>

      <motion.div
        variants={childVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="fixed bottom-0 right-0  w-full max-w-md sm:max-w-sm md:max-w-md p-4"
      >
        <Image
          src={url}
          alt="Not Found GIF"
          width={500}
          height={300}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  );
}
