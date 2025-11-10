"use client";

import { AnimatePresence, motion, Variants } from 'framer-motion'
import React, { useState } from 'react'
import Container from '../components/Container';
import Title from '../components/Title';
import HomeButton from '../components/HomeButton';
import CaseStudieItem from '../components/CaseStudieItem';
import Image from 'next/image';

import { CaseStudies } from '../../lib/case-studies';
import Link from 'next/link';
import { angkor, lux_roman } from '../fonts';
import { FaNode, FaPaperPlane, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiAngularjsFill, RiJavaLine } from 'react-icons/ri';

const navContainerVariants: Variants = {
  hidden: { opacity: 0.0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut", repeat: 0 },
  },
};

const casestudiesVariants: Variants = {
  hidden: {opacity: 0, x:50},
  show: {
    x:0,
    opacity: 1,
    transition: { duration: 0.45, staggerChildren: 0.3 },
  },
  whileTap: { scale: 0.95 },
};

const casestudiesVariants_L: Variants = {
  hidden: {opacity: 0, x:-50},
  show: {
    x:0,
    opacity: 1,
    transition: { duration: 0.45, staggerChildren: 0.3, ease: "easeOut"  },
  }
};

const casestudiesVariants_R: Variants = {
  hidden: {opacity: 0, x:50},
  show: {
    x:0,
    opacity: 1,
    transition: { duration: 0.45, staggerChildren: 0.3, ease: "easeOut"  },
  }
};

const techIcons: { [key: string]: React.ReactNode } = {
  React: <div className='shadow-xl bg-[var(--color-foreground)] rounded-xl'><FaReact className="m-2 text-[var(--color-secondary)]"/></div>,
  TypeScript: <div className='shadow-xl bg-[var(--color-foreground)] rounded-xl'><BiLogoTypescript className="m-2 text-[var(--color-secondary)]" /></div>,
  "Next.js": (
  <div className='shadow-xl bg-[var(--color-foreground)] rounded-xl'>
    <SiNextdotjs className="m-2 text-[var(--color-secondary)]"/>
  </div>
),
  Java: <div className='shadow-xl bg-[var(--color-foreground)] rounded-xl'><RiJavaLine className="m-2 text-[var(--color-secondary)]" /></div>,
  Paper: <div className='shadow-xl bg-[var(--color-foreground)] rounded-xl'><FaPaperPlane className="m-2 text-[var(--color-secondary)]" /></div>,
  Angular: <div className='shadow-xl bg-[var(--color-foreground)] rounded-xl'><RiAngularjsFill className="m-2 text-[var(--color-secondary)]"/></div>,
  NodeJS: <div className='shadow-xl bg-[var(--color-foreground)] rounded-xl'><FaNode className="m-2 text-[var(--color-secondary)]"/></div>,
};



export default function Page() {
  const [selectedCase, setSelectedCase] = useState(CaseStudies[0]);
  
  return (
      <div className="p-6 lg:p-10">
        <Container>
          <motion.div
            variants={navContainerVariants}
            initial="hidden"
            animate="show"
            className='left-0 top-0'
          >
            <Title name="casestudies"  />
          </motion.div>
          <Link href="/">
            <HomeButton />
          </Link>
        </Container>
        <Container>
          <div className='grid grid-cols-12 gap-6 pt-10'>
            <motion.div className='col-span-7'
              key={selectedCase.id}
              variants={casestudiesVariants_L}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }} >
              <p className={`text-2xl ${lux_roman.className}`}>
              {selectedCase.content.heading}
              </p>
              <div>
                <div
                  className="flex flex-wrap self-end gap-4 mt-2"
                >
                  {selectedCase.techstack.map((tech) => (
                    <span key={tech} className="lg:text-4xl text-2xl flex pr-2 pt-2  ">
                      {techIcons[tech] || tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
            <div className="col-span-5 flex flex-col overflow-hidden">
              {CaseStudies.map((item) => (
                <motion.button
                variants={casestudiesVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }} 
                whileTap={selectedCase.id !== item.id ? { scale: 0.95, opacity: 0.8 } : {}}
                  key={item.id}
                  onClick={() => setSelectedCase(item)}
                  className={`text-left text-nowrap transition-colors  ${
                    selectedCase.id === item.id
                      ? "text-secondary font-semibold "
                      : "text-primary hover:text-secondary cursor-pointer"
                  }`}
                >
                  <CaseStudieItem>{item.title}</CaseStudieItem>
                </motion.button>
              ))}
            </div>
            
            <div className='row-span-1 col-span-12 grid grid-cols-12 gap-6 pt-32'>
              <AnimatePresence mode="wait">
              <motion.div className='col-span-6'
              key={selectedCase.id}
              variants={casestudiesVariants_L}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }} 
              >
                <Image
                src={selectedCase.content.image}
                alt={selectedCase.title}
                width={600}
                height={300}
                className="rounded-xl shadow-xl"
                />
              </motion.div>
              </AnimatePresence>
              <motion.div className='col-span-6'
              key={selectedCase.id}
              variants={casestudiesVariants_R}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }} 
              >
                <p className={`text-2xl ${lux_roman.className}`}>
                  {selectedCase.content.body}
                </p>
              </motion.div>
            </div>
            <div className='row-span-1 col-span-12 grid grid-cols-12 gap-6 pt-32'>
              <div className='col-span-12'>
                <p className={`text-2xl mb-4 ${lux_roman.className}`}>
                  {selectedCase.content.conclusion}
                </p>
              </div>
            </div>
            <div className='row-span-1 col-span-12 grid grid-cols-12 gap-6 '>
              <div className='col-span-12 flex justify-center'>
                <Link target="_blank" href={selectedCase.url} className='bg-[var(--color-foreground)] p-3 rounded-xl shadow-xl'>
                    <span className={`${angkor.className} text-2xl text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300`}>OPEN IN GITHUB</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
    
}
