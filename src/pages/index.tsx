import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { personalInfo } from "@/data/portfolio-data";
import {
  IconSparkles,
  IconLayoutGrid,
  IconTerminal2,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const themes = [
  {
    id: "cosmic",
    name: "Cosmic",
    description: "Multi-page with stunning animations",
    icon: IconSparkles,
    href: "/v1",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    bgGradient: "from-purple-500/10 to-indigo-500/10",
  },
  {
    id: "bento",
    name: "Bento Grid",
    description: "Minimalistic one-pager layout",
    icon: IconLayoutGrid,
    href: "/bento",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-500/10 to-cyan-500/10",
  },
  {
    id: "terminal",
    name: "Terminal",
    description: "Developer-centric aesthetic",
    icon: IconTerminal2,
    href: "/terminal",
    gradient: "from-green-400 via-emerald-400 to-teal-400",
    bgGradient: "from-green-500/10 to-teal-500/10",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Goenka | Portfolio</title>
        <meta name="description" content="Software Engineer at Cisco. Passionate Competitive Programmer and Web Developer." />
      </Head>

      <div className="min-h-screen bg-neutral-950 text-white relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              {personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-2">
              {personalInfo.title} @ {personalInfo.company}
            </p>
            <p className="text-sm md:text-base text-neutral-500 max-w-md mx-auto">
              {personalInfo.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                href="https://github.com/Abhi01goenka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
              >
                <IconBrandGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-goenka-9b0374229/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abhishekgoenka4@gmail.com"
                className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
              >
                <IconMail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Theme Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-xl md:text-2xl font-medium text-neutral-300 mb-2">
              Choose Your Experience
            </h2>
            <p className="text-sm text-neutral-500">
              Three unique ways to explore my portfolio
            </p>
          </motion.div>

          {/* Theme Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4"
          >
            {themes.map((theme, index) => (
              <Link key={theme.id} href={theme.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative group cursor-pointer
                    p-6 rounded-2xl
                    bg-gradient-to-br ${theme.bgGradient}
                    border border-neutral-800 hover:border-neutral-700
                    backdrop-blur-sm
                    transition-all duration-300
                  `}
                >
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-xl mb-4
                    bg-gradient-to-br ${theme.gradient}
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <theme.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {theme.name}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {theme.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-neutral-400">→</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-sm text-neutral-600"
          >
            Built with Next.js, Tailwind CSS & Framer Motion
          </motion.p>
        </div>
      </div>
    </>
  );
}
