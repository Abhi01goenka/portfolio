import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconMail,
  IconFileText,
  IconExternalLink,
  IconArrowLeft,
  IconMapPin,
  IconBriefcase,
  IconSchool,
  IconCode,
  IconX,
  IconChevronRight,
  IconCalendar,
  IconTrophy,
  IconRocket,
  IconAward,
  IconTargetArrow,
  IconSparkles,
  IconBrandLeetcode,
  IconDownload,
  IconSend,
} from "@tabler/icons-react";
import { personalInfo, socialLinks, skills, projects, timeline } from "@/data/portfolio-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const hoverScale = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

const tapScale = {
  scale: 0.98,
};

// Skill icon colors
const skillColors: { [key: string]: string } = {
  "C++": "from-blue-500 to-blue-700",
  "Python": "from-yellow-400 to-blue-500",
  "Java": "from-red-500 to-orange-500",
  "C": "from-blue-600 to-indigo-600",
  "HTML": "from-orange-500 to-red-500",
  "CSS": "from-blue-400 to-blue-600",
  "JavaScript": "from-yellow-400 to-yellow-600",
  "React.js": "from-cyan-400 to-blue-500",
  "Next.js": "from-neutral-600 to-neutral-900",
  "Firebase": "from-yellow-500 to-orange-500",
  "Flutter": "from-cyan-400 to-blue-600",
};

// Project Modal Component
const ProjectModal = ({ project, onClose }: { project: typeof projects[0] | null; onClose: () => void }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-neutral-200 dark:border-neutral-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {project.context} • {project.year}
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <IconX className="w-5 h-5" />
            </button>
          </div>

          {project.mainImage && (
            <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <IconBrandGithub className="w-5 h-5" />
            View on GitHub
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function BentoPortfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>{personalInfo.name} | Bento Portfolio</title>
        <meta name="description" content={personalInfo.bio} />
      </Head>

      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white p-4 md:p-8 overflow-x-hidden">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-40"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800 transition-all shadow-lg text-sm font-medium"
          >
            <IconArrowLeft className="w-4 h-4" />
            <span className="hidden md:inline">Back to Themes</span>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto pt-16"
        >
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[minmax(100px,auto)]">
            
            {/* Profile Photo Card - Full Bleed */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="col-span-1 md:col-span-1 lg:col-span-3 row-span-2 rounded-3xl overflow-hidden relative group"
            >
              <Image
                src="/my-photo.jpeg"
                alt={personalInfo.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Online indicator */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
              />
            </motion.div>

            {/* Hero Card - Large */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-3 lg:col-span-9 row-span-2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group cursor-default"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                />
                <motion.div
                  animate={{
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
                />
              </div>

              <div className="relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-emerald-100 text-sm font-medium mb-3 tracking-wider uppercase"
                >
                  Welcome to my portfolio
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                >
                  {personalInfo.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-emerald-50 text-lg md:text-xl max-w-lg leading-relaxed"
                >
                  {personalInfo.tagline}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative z-10 flex flex-wrap items-center gap-3 mt-6"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
                  <IconBriefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">{personalInfo.title} @ {personalInfo.company}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
                  <IconMapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{personalInfo.location}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-1 lg:col-span-3 row-span-1 bg-white dark:bg-neutral-900 rounded-3xl p-5 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-center"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { icon: IconBrandGithub, href: socialLinks.github, label: "GitHub", color: "hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900" },
                  { icon: IconBrandLinkedin, href: socialLinks.linkedin, label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
                  { icon: IconBrandTwitter, href: socialLinks.twitter, label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
                  { icon: IconBrandInstagram, href: socialLinks.instagram, label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white" },
                  { icon: IconMail, href: socialLinks.email, label: "Email", color: "hover:bg-red-500 hover:text-white" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-xl transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Status + CTA Card */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-2 lg:col-span-5 row-span-1 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
              />
              <div className="relative z-10">
                <h2 className="text-sm font-semibold mb-2 text-amber-100 uppercase tracking-wider">Current Status</h2>
                <p className="text-white font-bold text-lg mb-3">Software Engineer @ Cisco</p>
                <div className="flex flex-wrap gap-2">
                  <motion.a
                    href={socialLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    <IconDownload className="w-4 h-4" />
                    Resume
                  </motion.a>
                  <motion.a
                    href={socialLinks.email}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-orange-600 rounded-full text-sm font-bold hover:bg-orange-50 transition-colors"
                  >
                    <IconSend className="w-4 h-4" />
                    Let's Connect
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6 relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
              />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <IconSchool className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{personalInfo.education.institution}</h3>
                  <p className="text-violet-100 text-sm">{personalInfo.education.degree}</p>
                  <p className="text-violet-200 text-xs mt-1">Class of {personalInfo.education.year}</p>
                </div>
              </div>
            </motion.div>

            {/* About Card */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-4 lg:col-span-8 row-span-2 bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  <IconRocket className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">About Me</h2>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">5+</p>
                  <p className="text-xs text-neutral-500 mt-1">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">11+</p>
                  <p className="text-xs text-neutral-500 mt-1">Technologies</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">99%</p>
                  <p className="text-xs text-neutral-500 mt-1">JEE Percentile</p>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 relative overflow-hidden"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <IconAward className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-sm font-semibold mb-4 text-rose-200 uppercase tracking-wider">Achievements</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconTargetArrow className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">JEE Mains 99.16%ile</p>
                      <p className="text-rose-200 text-xs">AIR 8642</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconTrophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Cisco Intern Hackathon</p>
                      <p className="text-rose-200 text-xs">AbilitySync Project</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <IconSparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Google Interview</p>
                      <p className="text-rose-200 text-xs">Shortlisted Off-Campus</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Card - Enhanced with Categories */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 md:col-span-4 lg:col-span-8 row-span-2 bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <IconCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Tech Stack</h2>
              </div>
              
              {/* Languages */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Python", "Java", "C", "JavaScript"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Frameworks */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">Frameworks & Libraries</p>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Flutter", "Flask"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-xl text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Tools & Others */}
              <div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">Tools & Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {["Firebase", "Git", "Linux", "HTML", "CSS", "SQL"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Competitive Programming Card */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full"
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <IconBrandLeetcode className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium">CP Enthusiast</span>
                </div>
                <h2 className="text-sm font-semibold mb-2 text-cyan-100 uppercase tracking-wider">Competitive Programming</h2>
                <p className="text-white text-sm mb-3">Passionate problem solver with focus on DSA and algorithmic thinking</p>
                <div className="flex gap-4">
                  <a 
                    href="https://leetcode.com/u/Abhi01goenka/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-100 hover:text-white text-xs underline underline-offset-2"
                  >
                    LeetCode →
                  </a>
                  <a 
                    href="https://codeforces.com/profile/Abhi01goenka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-100 hover:text-white text-xs underline underline-offset-2"
                  >
                    Codeforces →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* GitHub Activity Card */}
            <motion.div
              variants={itemVariants}
              whileHover={hoverScale}
              className="col-span-1 md:col-span-2 lg:col-span-8 row-span-1 bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center">
                    <IconBrandGithub className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">GitHub Activity</h2>
                </div>
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                >
                  View Profile →
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">15+</p>
                  <p className="text-xs text-neutral-500">Repositories</p>
                </div>
                <div className="text-center p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">200+</p>
                  <p className="text-xs text-neutral-500">Contributions</p>
                </div>
                <div className="text-center p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">5+</p>
                  <p className="text-xs text-neutral-500">Open Source</p>
                </div>
              </div>
            </motion.div>

            {/* Projects Section - Enhanced */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 md:col-span-4 lg:col-span-12 bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                    <IconTrophy className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Featured Projects</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={tapScale}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
                  >
                    {/* Project Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3 py-1 bg-white/90 dark:bg-neutral-900/90 rounded-full text-xs font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <IconChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                        {project.context}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg text-xs font-medium text-neutral-500">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline Section - Enhanced */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 md:col-span-4 lg:col-span-12 bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center">
                  <IconCalendar className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">My Journey</h2>
              </div>
              
              <div className="relative">
                {/* Timeline line - centered on desktop, left-aligned on mobile */}
                <div className="absolute left-[7px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-cyan-500 to-violet-500" />
                
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                      className="relative"
                    >
                      {/* Timeline dot - centered on the line */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-4 border-emerald-500 z-10 shadow-lg shadow-emerald-500/30"
                      />
                      
                      {/* Content wrapper - alternating sides on desktop */}
                      <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} pl-8 md:pl-0`}>
                        {/* Year badge */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`mb-3 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                        >
                          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-md">
                            {item.year}
                          </span>
                        </motion.div>
                        
                        {/* Content list */}
                        <motion.ul 
                          className={`space-y-3 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                        >
                          {item.items.map((entry, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                            >
                              {entry.highlight ? (
                                <span>
                                  {entry.text.split(entry.highlight)[0]}
                                  <span className="font-semibold text-neutral-900 dark:text-white bg-emerald-100 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">
                                    {entry.highlight}
                                  </span>
                                  {entry.text.split(entry.highlight)[1]}
                                </span>
                              ) : (
                                entry.text
                              )}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12 mt-8"
          >
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} {personalInfo.name}. Crafted with ❤️ using Next.js & Tailwind CSS.
            </p>
            <p className="text-xs text-neutral-400 mt-2">
              Bento Grid Theme • One-Pager Portfolio
            </p>
          </motion.footer>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
