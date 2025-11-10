"use client";

import { motion, Variants } from 'framer-motion'
import React from 'react'
import Container from '../components/Container';
import Title from '../components/Title';
import HomeButton from '../components/HomeButton';
import Link from 'next/link';
import { angkor, lux_roman } from '../fonts';
import Image from 'next/image';

const navContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
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
              <motion.div className='col-span-7'
                // variants={}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }} >
                <Image src="/globe.svg" width={50} height={50} alt="jeffrey"/>
              </motion.div>
              <motion.div className='col-span-5'
              // variants={}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }} >
              <p className={`text-2xl ${angkor.className}`}>
                Jeffrey van Tillo
              </p>
            </motion.div>
            </div>
        </Container>
      </div>
    );
}
