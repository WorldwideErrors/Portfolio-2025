"use client";

import { AnimatePresence, motion, Variants } from 'framer-motion'
import React from 'react'
import Container from '../components/Container';
import Title from '../components/Title';
import HomeButton from '../components/HomeButton';
import Link from 'next/link';
import { angkor, lux_roman } from '../fonts';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
};

const navContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const Variants_L: Variants = {
  hidden: {opacity: 0, x:-50},
  show: {
    x:0,
    opacity: 1,
    transition: { duration: 0.45, staggerChildren: 0.3, ease: "easeOut"  },
  }
};

const Variants_R: Variants = {
  hidden: {opacity: 0, x:50},
  show: {
    x:0,
    opacity: 1,
    transition: { duration: 0.45, staggerChildren: 0.3, ease: "easeOut"  },
  }
};

export default function page() {
  return (
      <div className="p-6 lg:p-10 ">
        <Container>
          <motion.div
            variants={navContainerVariants}
            initial="hidden"
            animate="show"
          >
            <Title name="about" />
            <Link href="/">
            <HomeButton />
            </Link>
          </motion.div>
        </Container>
        <Container>
            <div className='grid grid-cols-12 gap-6 pt-10'>
              <AnimatePresence mode="wait">
                <motion.div className='col-span-12 md:col-span-6'
                variants={Variants_L}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }} 
                >
                  <Image
                  src="/propedeuse.JPG"
                  alt="Jeffrey van Tillo"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-xl"
                  />
                </motion.div>
              </AnimatePresence>
              <motion.div className='col-span-12 md:col-span-6'
              variants={Variants_R}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }} >
                <h1 className={`text-1xl sm:text-2xl md:text-2xl lg:text-5xl ${angkor.className}`}>
                  Hi! My name is...
                </h1>
                <p className={`text-2xl ${lux_roman.className}`}>
                  ...Jeffrey! A passionate and dedicated react developer. I love creating beautiful and functional web applications 
                  that provide a trustworthy user experience. With a strong foundation in both front-end and back-end development, 
                  I offer my perspective on the entire development process. I am constantly trying to improve my skills and stay up-to-date
                  with the latest trends of the industry. 
                </p>
              </motion.div>
              <motion.div className='col-span-12 md:col-span-8 pt-10 flex items-end gap-6'
              variants={Variants_L}
              initial="hidden"
              whileInView="show">
                <p className={`text-2xl ${lux_roman.className}`}>
                  When I&apos;m not coding, you probably have to find me somewhere with Google Maps... I can be at quite some places.
                  In my free time I fullfill my passion for moving by going to the gym. I also enjoy spending time with friends and family,
                  exploring new places, and indulging in my love for gaming. None of those activities can be done without a good soundtrack, 
                  thanks to technology, we can take our music everywhere these days. 
                </p>
              </motion.div>
            </div>
        </Container>
      </div>
    );
}
