import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";
import { personalInfo, socialLinks, skills, projects, timeline } from "@/data/portfolio-data";

interface TerminalLine {
  type: "command" | "output" | "prompt";
  content: string | React.ReactNode;
  delay?: number;
}

const TypingText = ({ text, speed = 30, onComplete }: { text: string; speed?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

const TerminalPrompt = () => (
  <span className="text-emerald-400">abhishek@portfolio</span>
);

const CommandLine = ({ command, showCursor = false }: { command: string; showCursor?: boolean }) => (
  <div className="flex items-center gap-2">
    <TerminalPrompt />
    <span className="text-neutral-500">~</span>
    <span className="text-cyan-400">$</span>
    <span className="text-white">{command}</span>
    {showCursor && <span className="animate-pulse text-white">▋</span>}
  </div>
);

export default function TerminalPortfolio() {
  const [visibleSections, setVisibleSections] = useState<string[]>(["intro"]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = ["intro", "whoami", "skills", "projects", "timeline", "contact"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < sections.length) {
        setVisibleSections((prev) => [...prev, sections[currentIndex]]);
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleSections]);

  return (
    <>
      <Head>
        <title>{personalInfo.name} | Terminal Portfolio</title>
        <meta name="description" content={personalInfo.bio} />
      </Head>

      <div className="min-h-screen bg-[#0d1117] text-white font-mono">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-50"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#161b22] border border-[#30363d] hover:bg-[#21262d] transition-colors text-sm text-neutral-400 hover:text-white"
          >
            <IconArrowLeft className="w-4 h-4" />
            <span className="hidden md:inline">Exit Terminal</span>
          </Link>
        </motion.div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto p-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl overflow-hidden border border-[#30363d] shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-[#30363d]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-4 text-sm text-neutral-500">abhishek@portfolio ~ zsh</span>
            </div>

            {/* Terminal Body */}
            <div
              ref={terminalRef}
              className="bg-[#0d1117] p-6 min-h-[70vh] max-h-[80vh] overflow-y-auto space-y-6"
            >
              {/* Welcome ASCII Art */}
              <AnimatePresence>
                {visibleSections.includes("intro") && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-emerald-400 text-xs md:text-sm whitespace-pre leading-tight mb-8"
                  >
{`
    _    _     _     _     _          _    
   / \\  | |__ | |__ (_)___| |__   ___| | __
  / _ \\ | '_ \\| '_ \\| / __| '_ \\ / _ \\ |/ /
 / ___ \\| |_) | | | | \\__ \\ | | |  __/   < 
/_/   \\_\\_.__/|_| |_|_|___/_| |_|\\___|_|\\_\\
                                           
`}
                    <span className="text-neutral-500">Welcome to my interactive portfolio. Type commands or scroll to explore.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* whoami */}
              <AnimatePresence>
                {visibleSections.includes("whoami") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <CommandLine command="whoami" />
                    <div className="pl-4 text-neutral-300 space-y-1">
                      <p className="text-xl font-bold text-white">{personalInfo.name}</p>
                      <p className="text-cyan-400">{personalInfo.title} @ {personalInfo.company}</p>
                      <p className="text-neutral-400 text-sm mt-2 max-w-2xl">{personalInfo.bio}</p>
                      <p className="text-neutral-500 text-sm mt-2">
                        📍 {personalInfo.location} | 🎓 {personalInfo.education.institution} '{personalInfo.education.year.slice(-2)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* skills */}
              <AnimatePresence>
                {visibleSections.includes("skills") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <CommandLine command="cat skills.json" />
                    <div className="pl-4 text-neutral-300">
                      <span className="text-neutral-500">{"{"}</span>
                      <div className="pl-4">
                        <span className="text-purple-400">"languages"</span>
                        <span className="text-neutral-500">: [</span>
                        <span className="text-yellow-400">"C++", "Python", "Java", "C", "JavaScript"</span>
                        <span className="text-neutral-500">],</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">"frameworks"</span>
                        <span className="text-neutral-500">: [</span>
                        <span className="text-yellow-400">"React.js", "Next.js", "Flutter", "Flask"</span>
                        <span className="text-neutral-500">],</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-purple-400">"tools"</span>
                        <span className="text-neutral-500">: [</span>
                        <span className="text-yellow-400">"Firebase", "Git", "Linux"</span>
                        <span className="text-neutral-500">]</span>
                      </div>
                      <span className="text-neutral-500">{"}"}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* projects */}
              <AnimatePresence>
                {visibleSections.includes("projects") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <CommandLine command="ls -la ~/projects/" />
                    <div className="pl-4 text-sm">
                      <div className="text-neutral-500 mb-2">total {projects.length}</div>
                      {projects.map((project, index) => (
                        <motion.a
                          key={project.id}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 py-2 hover:bg-[#161b22] px-2 -mx-2 rounded group cursor-pointer"
                        >
                          <span className="text-cyan-400">📁</span>
                          <div className="flex-1">
                            <span className="text-emerald-400 group-hover:underline font-semibold">
                              {project.title}
                            </span>
                            <span className="text-neutral-500 ml-2">({project.year})</span>
                            <p className="text-neutral-400 text-xs mt-1">{project.shortDescription}</p>
                            <div className="flex gap-2 mt-1">
                              {project.techStack.slice(0, 3).map((tech) => (
                                <span key={tech} className="text-xs text-purple-400">
                                  #{tech.toLowerCase().replace(/[.\s]/g, "")}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* timeline */}
              <AnimatePresence>
                {visibleSections.includes("timeline") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <CommandLine command="git log --oneline --graph career" />
                    <div className="pl-4 text-sm space-y-3">
                      {timeline.slice(0, 4).map((item, index) => (
                        <motion.div
                          key={item.year}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 }}
                          className="flex gap-3"
                        >
                          <div className="flex flex-col items-center">
                            <span className="text-yellow-400">●</span>
                            {index < 3 && <div className="w-px h-full bg-[#30363d] my-1" />}
                          </div>
                          <div>
                            <span className="text-cyan-400 font-bold">{item.year}</span>
                            <ul className="mt-1 space-y-1">
                              {item.items.slice(0, 2).map((entry, idx) => (
                                <li key={idx} className="text-neutral-400 text-xs">
                                  <span className="text-neutral-600">→</span>{" "}
                                  {entry.highlight ? (
                                    <>
                                      {entry.text.split(entry.highlight)[0]}
                                      <span className="text-emerald-400">{entry.highlight}</span>
                                      {entry.text.split(entry.highlight)[1]}
                                    </>
                                  ) : (
                                    entry.text
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* contact */}
              <AnimatePresence>
                {visibleSections.includes("contact") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <CommandLine command="cat contact.txt" />
                    <div className="pl-4 text-sm space-y-2">
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                      >
                        <span className="text-neutral-600">→</span>
                        <span className="text-purple-400">GitHub:</span>
                        <span className="text-cyan-400 hover:underline">github.com/Abhi01goenka</span>
                      </a>
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                      >
                        <span className="text-neutral-600">→</span>
                        <span className="text-purple-400">LinkedIn:</span>
                        <span className="text-cyan-400 hover:underline">linkedin.com/in/abhishek-goenka</span>
                      </a>
                      <a
                        href={socialLinks.email}
                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                      >
                        <span className="text-neutral-600">→</span>
                        <span className="text-purple-400">Email:</span>
                        <span className="text-cyan-400 hover:underline">{personalInfo.email}</span>
                      </a>
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                      >
                        <span className="text-neutral-600">→</span>
                        <span className="text-purple-400">Twitter:</span>
                        <span className="text-cyan-400 hover:underline">@Lone_Rider_007</span>
                      </a>
                      <a
                        href={socialLinks.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                      >
                        <span className="text-neutral-600">→</span>
                        <span className="text-purple-400">Resume:</span>
                        <span className="text-yellow-400 hover:underline">[Click to download]</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Final prompt */}
              {isTypingComplete && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <CommandLine command="" showCursor />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center py-6 text-xs text-neutral-600"
          >
            <p>© {new Date().getFullYear()} {personalInfo.name} | Built with Next.js</p>
            <p className="mt-1">Press <kbd className="px-1.5 py-0.5 bg-[#161b22] rounded border border-[#30363d]">↑</kbd> to scroll up</p>
          </motion.footer>
        </div>
      </div>
    </>
  );
}
