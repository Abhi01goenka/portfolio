import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import {
  IconLayoutGrid,
  IconTerminal2,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconArrowRight,
} from "@tabler/icons-react";

const themes = [
  {
    id: "bento",
    name: "Bento Grid",
    description: "Clean, minimalistic one-pager with a modern grid layout",
    icon: IconLayoutGrid,
    href: "/bento",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "emerald",
  },
  {
    id: "terminal",
    name: "Terminal",
    description: "Interactive CLI experience for the developer in you",
    icon: IconTerminal2,
    href: "/terminal",
    gradient: "from-green-400 via-emerald-400 to-teal-400",
    accentColor: "green",
  },
];

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="text-emerald-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Goenka | Portfolio</title>
        <meta name="description" content="Software Engineer at Cisco. Passionate Competitive Programmer and Web Developer." />
      </Head>

      <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black" />
        
        {/* Floating orbs */}
        <FloatingOrb className="top-20 left-[10%] w-72 h-72 bg-emerald-500/20" delay={0} />
        <FloatingOrb className="top-40 right-[15%] w-96 h-96 bg-cyan-500/15" delay={2} />
        <FloatingOrb className="bottom-20 left-[20%] w-80 h-80 bg-teal-500/15" delay={4} />
        <FloatingOrb className="bottom-40 right-[10%] w-64 h-64 bg-emerald-500/10" delay={1} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          {/* Main content */}
          <div className="max-w-4xl w-full">
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <span className="text-emerald-400 text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </div>
            </motion.div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-6"
            >
              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-neutral-300">
                  {personalInfo.name}
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-neutral-300 mb-4 h-8">
                <TypewriterText 
                  texts={[
                    "Competitive Programmer",
                    "Problem Solver",
                    "Web Developer",
                    "Software Engineer",
                  ]} 
                />
              </div>

            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-16"
            >
              {[
                { icon: IconBrandGithub, href: socialLinks.github, label: "GitHub" },
                { icon: IconBrandLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: IconBrandTwitter, href: socialLinks.twitter, label: "Twitter" },
                { icon: IconMail, href: socialLinks.email, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 hover:border-neutral-600 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Theme Selector Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8"
            >
              <h2 className="text-lg md:text-xl font-medium text-neutral-300 mb-2">
                Choose Your Experience
              </h2>
              <p className="text-sm text-neutral-500">
                Two unique ways to explore my work
              </p>
            </motion.div>

            {/* Theme Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            >
              {themes.map((theme, index) => (
                <Link key={theme.id} href={theme.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group cursor-pointer h-full"
                  >
                    {/* Card glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    <div className="relative p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 group-hover:border-neutral-700 backdrop-blur-sm transition-all duration-300 h-full">
                      {/* Icon with gradient background */}
                      <div className={`w-14 h-14 rounded-xl mb-5 bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <theme.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {theme.name}
                      </h3>
                      <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                        {theme.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm text-neutral-500 group-hover:text-emerald-400 transition-colors">
                        <span>Explore</span>
                        <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-6 left-0 right-0 text-center"
          >
            <p className="text-xs text-neutral-600">
              Crafted with <span className="text-emerald-500">♥</span> using Next.js, Tailwind CSS & Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
