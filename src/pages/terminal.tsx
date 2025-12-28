import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";
import { personalInfo, socialLinks, projects, timeline } from "@/data/portfolio-data";

// Synced with Bento theme
const terminalSkills = {
  languages: ["C++", "Python", "Java", "C", "Perl", "JavaScript", "SQL"],
  frameworks: ["React.js", "Next.js", "Flutter", "Flask", "Lucene", "Pandas"],
  tools: ["Git", "Linux", "Firebase", "MongoDB", "MySQL", "REST APIs"],
};

const achievements = [
  { title: "Cisco Intern Recognition", desc: "Spring '25 Award" },
  { title: "Knight @ LeetCode", desc: "Rating 2069 • Top 2.17%" },
  { title: "ICPC 2023 Prelims", desc: "Global Rank 506" },
];

const cpRatings = [
  { platform: "LeetCode", rating: "2069", rank: "Knight • Top 2.17%", url: "https://leetcode.com/u/abg_001/" },
  { platform: "Codeforces", rating: "1468", rank: "Specialist", url: "https://codeforces.com/profile/abg_001" },
  { platform: "CodeChef", rating: "1740", rank: "3 Star", url: "https://www.codechef.com/users/abg_007" },
  { platform: "AtCoder", rating: "912", rank: "6 Kyu", url: "https://atcoder.jp/users/Abg_001" },
];

const AVAILABLE_COMMANDS = [
  "help", "whoami", "skills", "projects", "achievements", "cp", "timeline", "contact", "clear", "neofetch", "banner", "quote", "matrix", "sudo", "cowsay", "fortune", "hack", "weather", "time", "joke", "ascii", "tree", "ping", "whoisthat", "rickroll", "coffee", "vim", "emacs"
];

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const TerminalPrompt = () => (
  <span className="text-emerald-400">abhishek@portfolio</span>
);

const CommandLine = ({ command, showCursor = false }: { command: string; showCursor?: boolean }) => (
  <div className="flex items-center gap-2 flex-wrap">
    <TerminalPrompt />
    <span className="text-neutral-500">~</span>
    <span className="text-cyan-400">$</span>
    <span className="text-white">{command}</span>
    {showCursor && <span className="animate-pulse text-white">▋</span>}
  </div>
);

// Command output generators
const getHelpOutput = () => (
  <div className="pl-4 text-sm space-y-1">
    <p className="text-neutral-300 mb-2">📋 Available commands:</p>
    <p className="text-neutral-500 mt-3 mb-1">── Info ──</p>
    <p><span className="text-cyan-400">whoami</span> <span className="text-neutral-500">- Display personal info</span></p>
    <p><span className="text-cyan-400">skills</span> <span className="text-neutral-500">- Show technical skills</span></p>
    <p><span className="text-cyan-400">projects</span> <span className="text-neutral-500">- List all projects</span></p>
    <p><span className="text-cyan-400">achievements</span> <span className="text-neutral-500">- Show achievements</span></p>
    <p><span className="text-cyan-400">cp</span> <span className="text-neutral-500">- Competitive programming ratings</span></p>
    <p><span className="text-cyan-400">timeline</span> <span className="text-neutral-500">- Career timeline</span></p>
    <p><span className="text-cyan-400">contact</span> <span className="text-neutral-500">- Contact information</span></p>
    <p className="text-neutral-500 mt-3 mb-1">── Fun ──</p>
    <p><span className="text-emerald-400">neofetch</span> <span className="text-neutral-500">- System info style display</span></p>
    <p><span className="text-emerald-400">banner</span> <span className="text-neutral-500">- Show ASCII art banner</span></p>
    <p><span className="text-emerald-400">quote</span> <span className="text-neutral-500">- Random programming quote</span></p>
    <p><span className="text-emerald-400">fortune</span> <span className="text-neutral-500">- Get your coding fortune</span></p>
    <p><span className="text-emerald-400">joke</span> <span className="text-neutral-500">- Random programming joke</span></p>
    <p><span className="text-emerald-400">matrix</span> <span className="text-neutral-500">- Enter the Matrix</span></p>
    <p><span className="text-emerald-400">cowsay</span> <span className="text-neutral-500">- Cow says moo (or your message)</span></p>
    <p><span className="text-emerald-400">ascii</span> <span className="text-neutral-500">- Cool ASCII art</span></p>
    <p><span className="text-emerald-400">coffee</span> <span className="text-neutral-500">- Get a virtual coffee ☕</span></p>
    <p><span className="text-emerald-400">rickroll</span> <span className="text-neutral-500">- You know the rules...</span></p>
    <p className="text-neutral-500 mt-3 mb-1">── Tools ──</p>
    <p><span className="text-purple-400">hack</span> <span className="text-neutral-500">- Hack the mainframe 😎</span></p>
    <p><span className="text-purple-400">weather</span> <span className="text-neutral-500">- Check the weather</span></p>
    <p><span className="text-purple-400">time</span> <span className="text-neutral-500">- Current date and time</span></p>
    <p><span className="text-purple-400">tree</span> <span className="text-neutral-500">- Show directory structure</span></p>
    <p><span className="text-purple-400">ping</span> <span className="text-neutral-500">- Ping the portfolio</span></p>
    <p><span className="text-purple-400">whoisthat</span> <span className="text-neutral-500">- Identity card</span></p>
    <p className="text-neutral-500 mt-3 mb-1">── Easter Eggs ──</p>
    <p><span className="text-red-400">sudo</span> <span className="text-neutral-500">- Try your luck...</span></p>
    <p><span className="text-red-400">vim</span> <span className="text-neutral-500">- Enter vim mode</span></p>
    <p><span className="text-red-400">emacs</span> <span className="text-neutral-500">- The other editor</span></p>
    <p className="text-neutral-500 mt-3 mb-1">── System ──</p>
    <p><span className="text-yellow-400">clear</span> <span className="text-neutral-500">- Clear terminal</span></p>
    <p><span className="text-yellow-400">help</span> <span className="text-neutral-500">- Show this help message</span></p>
    <p className="text-neutral-600 text-xs mt-4">💡 Tip: Use ↑/↓ for history, Tab for autocomplete</p>
  </div>
);

const getWhoamiOutput = () => (
  <div className="pl-4 text-neutral-300 space-y-1">
    <p className="text-xl font-bold text-white">{personalInfo.name}</p>
    <p className="text-cyan-400">Software Engineer I @ {personalInfo.company}</p>
    <p className="text-neutral-400 text-sm mt-2 max-w-2xl">
      Software Engineer at Cisco working in the Network Security Team on Cisco Secure products. I specialize in backend development using Java, Perl, and Python. With 1000+ problems solved across competitive programming platforms and a Knight badge on LeetCode (top 2.17%), I bring strong problem-solving skills to building scalable security solutions.
    </p>
    <p className="text-neutral-500 text-sm mt-2">
      📍 {personalInfo.location} | 🎓 {personalInfo.education.institution} &apos;{personalInfo.education.year.slice(-2)}
    </p>
  </div>
);

const getSkillsOutput = () => (
  <div className="pl-4 text-neutral-300">
    <span className="text-neutral-500">{"{"}</span>
    <div className="pl-4">
      <span className="text-purple-400">&quot;languages&quot;</span>
      <span className="text-neutral-500">: [</span>
      <span className="text-yellow-400">&quot;{terminalSkills.languages.join('", "')}&quot;</span>
      <span className="text-neutral-500">],</span>
    </div>
    <div className="pl-4">
      <span className="text-purple-400">&quot;frameworks&quot;</span>
      <span className="text-neutral-500">: [</span>
      <span className="text-yellow-400">&quot;{terminalSkills.frameworks.join('", "')}&quot;</span>
      <span className="text-neutral-500">],</span>
    </div>
    <div className="pl-4">
      <span className="text-purple-400">&quot;tools&quot;</span>
      <span className="text-neutral-500">: [</span>
      <span className="text-yellow-400">&quot;{terminalSkills.tools.join('", "')}&quot;</span>
      <span className="text-neutral-500">]</span>
    </div>
    <span className="text-neutral-500">{"}"}</span>
  </div>
);

const getProjectsOutput = () => (
  <div className="pl-4 text-sm">
    <div className="text-neutral-500 mb-2">total {projects.length}</div>
    {projects.map((project) => (
      <a
        key={project.id}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 py-2 hover:bg-[#161b22] px-2 -mx-2 rounded group cursor-pointer"
      >
        <span className="text-cyan-400">📁</span>
        <div className="flex-1">
          <span className="text-emerald-400 group-hover:underline font-semibold">
            {project.title}
          </span>
          <span className="text-neutral-500 ml-2">({project.year})</span>
          <p className="text-neutral-400 text-xs mt-1">{project.shortDescription}</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs text-purple-400">
                #{tech.toLowerCase().replace(/[.\s]/g, "")}
              </span>
            ))}
          </div>
        </div>
      </a>
    ))}
  </div>
);

const getAchievementsOutput = () => (
  <div className="pl-4 text-sm space-y-2">
    {achievements.map((achievement, idx) => (
      <div key={idx} className="flex items-center gap-3">
        <span className="text-yellow-400">🏆</span>
        <div>
          <span className="text-emerald-400 font-semibold">{achievement.title}</span>
          <span className="text-neutral-500 ml-2">— {achievement.desc}</span>
        </div>
      </div>
    ))}
  </div>
);

const getCpOutput = () => (
  <div className="pl-4 text-sm">
    <div className="text-neutral-500 mb-2">1000+ Problems Solved</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {cpRatings.map((cp) => (
        <a
          key={cp.platform}
          href={cp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 hover:bg-[#161b22] rounded group"
        >
          <span className="text-cyan-400">⚡</span>
          <div>
            <span className="text-purple-400">{cp.platform}:</span>
            <span className="text-emerald-400 ml-2 font-bold">{cp.rating}</span>
            <span className="text-neutral-500 text-xs ml-2">({cp.rank})</span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const getTimelineOutput = () => (
  <div className="pl-4 text-sm space-y-3">
    {timeline.map((item, index) => (
      <div key={item.year} className="flex gap-3">
        <div className="flex flex-col items-center">
          <span className="text-yellow-400">●</span>
          {index < timeline.length - 1 && <div className="w-px h-full bg-[#30363d] my-1" />}
        </div>
        <div>
          <span className="text-cyan-400 font-bold">{item.year}</span>
          <ul className="mt-1 space-y-1">
            {item.items.map((entry, idx) => (
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
      </div>
    ))}
  </div>
);

const getContactOutput = () => (
  <div className="pl-4 text-sm space-y-2">
    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
      <span className="text-neutral-600">→</span>
      <span className="text-purple-400">GitHub:</span>
      <span className="text-cyan-400 hover:underline">github.com/Abhi01goenka</span>
    </a>
    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
      <span className="text-neutral-600">→</span>
      <span className="text-purple-400">LinkedIn:</span>
      <span className="text-cyan-400 hover:underline">linkedin.com/in/abhishek-goenka</span>
    </a>
    <a href={socialLinks.email} className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
      <span className="text-neutral-600">→</span>
      <span className="text-purple-400">Email:</span>
      <span className="text-cyan-400 hover:underline">{personalInfo.email}</span>
    </a>
    <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
      <span className="text-neutral-600">→</span>
      <span className="text-purple-400">Twitter:</span>
      <span className="text-cyan-400 hover:underline">@Lone_Rider_007</span>
    </a>
    <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
      <span className="text-neutral-600">→</span>
      <span className="text-purple-400">Resume:</span>
      <span className="text-yellow-400 hover:underline">[Click to download]</span>
    </a>
  </div>
);

const getNeofetchOutput = () => (
  <div className="flex gap-6 items-start flex-wrap">
    <pre className="text-emerald-400 text-xs leading-tight">
{`    _    _     _     _ 
   / \\  | |__ | |__ (_)
  / _ \\ | '_ \\| '_ \\| |
 / ___ \\| |_) | | | | |
/_/   \\_\\_.__/|_| |_|_|`}
    </pre>
    <div className="text-sm space-y-1">
      <p><span className="text-cyan-400">abhishek</span><span className="text-neutral-500">@</span><span className="text-purple-400">portfolio</span></p>
      <p className="text-neutral-600">─────────────────</p>
      <p><span className="text-cyan-400">OS:</span> <span className="text-neutral-300">Developer v2025</span></p>
      <p><span className="text-cyan-400">Role:</span> <span className="text-neutral-300">Software Engineer I</span></p>
      <p><span className="text-cyan-400">Company:</span> <span className="text-neutral-300">Cisco (NetSec Team)</span></p>
      <p><span className="text-cyan-400">Location:</span> <span className="text-neutral-300">{personalInfo.location}</span></p>
      <p><span className="text-cyan-400">Education:</span> <span className="text-neutral-300">B.Tech CSE @ IIIT Lucknow</span></p>
      <p><span className="text-cyan-400">Languages:</span> <span className="text-neutral-300">C++, Python, Java, Perl</span></p>
      <p><span className="text-cyan-400">Problems:</span> <span className="text-emerald-400">1000+</span> <span className="text-neutral-500">solved</span></p>
      <p><span className="text-cyan-400">LeetCode:</span> <span className="text-yellow-400">Knight</span> <span className="text-neutral-500">(2069)</span></p>
      <div className="flex gap-1 mt-2">
        <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
        <span className="w-3 h-3 bg-orange-500 rounded-sm"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-sm"></span>
        <span className="w-3 h-3 bg-green-500 rounded-sm"></span>
        <span className="w-3 h-3 bg-cyan-500 rounded-sm"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
        <span className="w-3 h-3 bg-purple-500 rounded-sm"></span>
        <span className="w-3 h-3 bg-pink-500 rounded-sm"></span>
      </div>
    </div>
  </div>
);

const quotes = [
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Any fool can write code that a computer can understand.", author: "Martin Fowler" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
];

const fortunes = [
  "You will mass mass AC today! 🎯",
  "A bug-free day awaits you... just kidding, good luck debugging! 🐛",
  "Your next PR will be approved on the first try! ✨",
  "The algorithm you've been stuck on will click today! 💡",
  "Coffee + Code = Success. Go grab a cup! ☕",
  "Your code will compile on the first try today! 🚀",
  "A senior developer will appreciate your clean code! 🌟",
  "You're one commit away from greatness! 💪",
];

const getBannerOutput = () => (
  <pre className="text-emerald-400 text-xs md:text-sm leading-tight">
{`
 █████╗ ██████╗ ██╗  ██╗██╗███████╗██╗  ██╗███████╗██╗  ██╗
██╔══██╗██╔══██╗██║  ██║██║██╔════╝██║  ██║██╔════╝██║ ██╔╝
███████║██████╔╝███████║██║███████╗███████║█████╗  █████╔╝ 
██╔══██║██╔══██╗██╔══██║██║╚════██║██╔══██║██╔══╝  ██╔═██╗ 
██║  ██║██████╔╝██║  ██║██║███████║██║  ██║███████╗██║  ██╗
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
`}
    <span className="text-cyan-400">        Software Engineer I @ Cisco | Knight @ LeetCode</span>
  </pre>
);

const getQuoteOutput = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="pl-4">
      <p className="text-yellow-400 italic">&quot;{quote.text}&quot;</p>
      <p className="text-neutral-500 mt-1">— {quote.author}</p>
    </div>
  );
};

const getFortuneOutput = () => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  return (
    <div className="pl-4">
      <p className="text-emerald-400">🔮 {fortune}</p>
    </div>
  );
};

const getMatrixOutput = () => (
  <div className="pl-4 space-y-1">
    <p className="text-emerald-400 animate-pulse">Wake up, Neo...</p>
    <p className="text-emerald-400">The Matrix has you...</p>
    <p className="text-emerald-400">Follow the white rabbit. 🐇</p>
    <pre className="text-emerald-500/70 text-xs mt-2 overflow-hidden">
{`01001000 01100101 01101100 01101100 01101111
01010111 01101111 01110010 01101100 01100100
01000001 01100010 01101000 01101001 01110011
01101000 01100101 01101011 00100000 01000111`}
    </pre>
  </div>
);

const getSudoOutput = () => (
  <div className="pl-4">
    <p className="text-red-400">Permission denied: Nice try! 😏</p>
    <p className="text-neutral-500 text-xs mt-1">This incident will be reported... just kidding!</p>
  </div>
);

const getCowsayOutput = (message?: string) => {
  const msg = message || "Moo! I'm a cow in a terminal!";
  const border = "─".repeat(Math.min(msg.length + 2, 40));
  return (
    <pre className="text-yellow-400 text-xs">
{` ${border}
< ${msg} >
 ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
    </pre>
  );
};

const jokes = [
  { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs! 🐛" },
  { setup: "Why do Java developers wear glasses?", punchline: "Because they can't C#! 👓" },
  { setup: "A SQL query walks into a bar, walks up to two tables and asks...", punchline: "Can I join you? 🍺" },
  { setup: "Why was the JavaScript developer sad?", punchline: "Because he didn't Node how to Express himself! 😢" },
  { setup: "What's a programmer's favorite hangout place?", punchline: "Foo Bar! 🍻" },
  { setup: "Why do programmers hate nature?", punchline: "It has too many bugs! 🌲🐛" },
  { setup: "How many programmers does it take to change a light bulb?", punchline: "None, that's a hardware problem! 💡" },
  { setup: "What do you call 8 hobbits?", punchline: "A hobbyte! 🧙" },
];

const getJokeOutput = () => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  return (
    <div className="pl-4 space-y-2">
      <p className="text-cyan-400">{joke.setup}</p>
      <p className="text-yellow-400 mt-2">{joke.punchline}</p>
    </div>
  );
};

const getHackOutput = () => (
  <div className="pl-4 space-y-1">
    <p className="text-emerald-400">Initializing hack sequence...</p>
    <p className="text-emerald-400">[▓▓▓▓▓▓▓▓▓▓] 100% - Bypassing firewall...</p>
    <p className="text-emerald-400">[▓▓▓▓▓▓▓▓▓▓] 100% - Accessing mainframe...</p>
    <p className="text-emerald-400">[▓▓▓▓▓▓▓▓▓▓] 100% - Downloading secrets...</p>
    <pre className="text-emerald-500/80 text-xs mt-2">
{`ACCESS GRANTED
================
Secret: Abhishek is actually a pretty cool developer 😎
Mission: Build awesome things
Status: Always learning`}
    </pre>
    <p className="text-red-400 mt-2 text-xs">Just kidding! No actual hacking here 🙃</p>
  </div>
);

const getWeatherOutput = () => {
  const conditions = ["☀️ Sunny", "🌤️ Partly Cloudy", "☁️ Cloudy", "🌧️ Rainy", "⛈️ Stormy", "❄️ Snowy"];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  const temp = Math.floor(Math.random() * 20) + 15;
  return (
    <div className="pl-4">
      <p className="text-cyan-400 text-lg">{condition}</p>
      <p className="text-neutral-300">Temperature: <span className="text-yellow-400">{temp}°C</span></p>
      <p className="text-neutral-500 text-xs mt-1">📍 Bangalore, India (simulated)</p>
      <p className="text-neutral-600 text-xs">Perfect weather for coding! 💻</p>
    </div>
  );
};

const getTimeOutput = () => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: true });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="pl-4">
      <p className="text-emerald-400 text-2xl font-mono">{timeStr}</p>
      <p className="text-neutral-400 mt-1">{dateStr}</p>
      <p className="text-neutral-600 text-xs mt-2">🕐 Time flies when you&apos;re coding!</p>
    </div>
  );
};

const getAsciiOutput = () => (
  <pre className="text-cyan-400 text-xs pl-4">
{`
    ╔══════════════════════════════════════╗
    ║                                      ║
    ║   ██████╗ ██████╗ ██████╗ ███████╗   ║
    ║  ██╔════╝██╔═══██╗██╔══██╗██╔════╝   ║
    ║  ██║     ██║   ██║██║  ██║█████╗     ║
    ║  ██║     ██║   ██║██║  ██║██╔══╝     ║
    ║  ╚██████╗╚██████╔╝██████╔╝███████╗   ║
    ║   ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝   ║
    ║                                      ║
    ║      < Code. Create. Conquer. >      ║
    ║                                      ║
    ╚══════════════════════════════════════╝
`}
  </pre>
);

const getTreeOutput = () => (
  <pre className="text-emerald-400 text-xs pl-4">
{`📁 abhishek-portfolio/
├── 📁 skills/
│   ├── 📄 languages.json
│   ├── 📄 frameworks.json
│   └── 📄 tools.json
├── 📁 projects/
│   ├── 📁 EduHub-AI/
│   ├── 📁 AbilitySync/
│   ├── 📁 Agrico/
│   └── 📁 Desktop-VA/
├── 📁 achievements/
│   ├── 🏆 cisco-recognition
│   ├── 🏆 leetcode-knight
│   └── 🏆 icpc-2023
├── 📄 README.md
└── 📄 contact.txt

4 directories, 10 files`}
  </pre>
);

const getPingOutput = () => (
  <div className="pl-4 text-sm space-y-1">
    <p className="text-neutral-400">PING portfolio.abhishek.dev (127.0.0.1): 56 data bytes</p>
    <p className="text-emerald-400">64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms</p>
    <p className="text-emerald-400">64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms</p>
    <p className="text-emerald-400">64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.041 ms</p>
    <p className="text-neutral-400 mt-2">--- portfolio.abhishek.dev ping statistics ---</p>
    <p className="text-neutral-300">3 packets transmitted, 3 received, <span className="text-emerald-400">0% packet loss</span></p>
    <p className="text-neutral-500 text-xs mt-1">✨ Portfolio is up and running!</p>
  </div>
);

const getWhoisthatOutput = () => (
  <div className="pl-4 space-y-2">
    <pre className="text-yellow-400 text-xs">
{`
   ╭─────────────────────────────────╮
   │  👤 IDENTITY VERIFIED          │
   ├─────────────────────────────────┤
   │  Name: Abhishek Goenka          │
   │  Alias: abg_001, Lone_Rider_007 │
   │  Class: Software Engineer       │
   │  Guild: Cisco (NetSec Team)     │
   │  Level: Knight (LeetCode)       │
   │  XP: 1000+ Problems Solved      │
   │  Special: Backend Wizard 🧙     │
   ╰─────────────────────────────────╯
`}
    </pre>
  </div>
);

const getRickrollOutput = () => (
  <div className="pl-4 space-y-1">
    <p className="text-red-400 animate-pulse">🎵 Never gonna give you up...</p>
    <p className="text-orange-400">🎵 Never gonna let you down...</p>
    <p className="text-yellow-400">🎵 Never gonna run around and desert you...</p>
    <p className="text-emerald-400">🎵 Never gonna make you cry...</p>
    <p className="text-cyan-400">🎵 Never gonna say goodbye...</p>
    <p className="text-purple-400">🎵 Never gonna tell a lie and hurt you!</p>
    <p className="text-neutral-500 text-xs mt-3">You just got rickrolled! 🕺</p>
  </div>
);

const getCoffeeOutput = () => (
  <div className="pl-4">
    <pre className="text-yellow-600 text-xs">
{`
       ( (
        ) )
      ........
      |      |]
      \\      /
       \`----'
`}
    </pre>
    <p className="text-yellow-400">☕ Here&apos;s your virtual coffee!</p>
    <p className="text-neutral-500 text-xs mt-1">Fuel for coding sessions since forever...</p>
    <p className="text-emerald-400 text-xs mt-2">+10 Energy | +5 Focus | -1 Sleep</p>
  </div>
);

const getVimOutput = () => (
  <div className="pl-4">
    <p className="text-emerald-400">Vim mode activated!</p>
    <p className="text-neutral-500 text-xs mt-1">Good luck exiting... 😈</p>
    <p className="text-neutral-600 text-xs mt-2">Hint: Type <span className="text-cyan-400">:q!</span> to quit (just kidding, this is a fake terminal)</p>
    <p className="text-yellow-400 text-xs mt-2">Pro tip: Real devs use :wq</p>
  </div>
);

const getEmacsOutput = () => (
  <div className="pl-4">
    <p className="text-purple-400">Emacs? In this economy?</p>
    <p className="text-neutral-500 text-xs mt-1">Just use VS Code like a normal person 😄</p>
    <p className="text-neutral-600 text-xs mt-2">(No offense to Emacs users, you&apos;re cool too)</p>
  </div>
);

export default function TerminalPortfolio() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showIntro, setShowIntro] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Process command
  const processCommand = (cmd: string): React.ReactNode => {
    const command = cmd.trim().toLowerCase();
    const args = cmd.trim().split(" ").slice(1).join(" ");
    
    switch (command.split(" ")[0]) {
      case "help":
        return getHelpOutput();
      case "whoami":
        return getWhoamiOutput();
      case "skills":
        return getSkillsOutput();
      case "cat":
        if (command.includes("skills")) return getSkillsOutput();
        if (command.includes("contact")) return getContactOutput();
        return <p className="text-red-400">cat: No such file</p>;
      case "projects":
      case "ls":
        return getProjectsOutput();
      case "achievements":
        return getAchievementsOutput();
      case "cp":
      case "ratings":
        return getCpOutput();
      case "timeline":
        return getTimelineOutput();
      case "git":
        if (command.includes("log")) return getTimelineOutput();
        return <p className="text-neutral-500">git: Try &apos;git log&apos; for timeline</p>;
      case "contact":
        return getContactOutput();
      case "neofetch":
        return getNeofetchOutput();
      case "banner":
        return getBannerOutput();
      case "quote":
        return getQuoteOutput();
      case "fortune":
        return getFortuneOutput();
      case "matrix":
        return getMatrixOutput();
      case "sudo":
        return getSudoOutput();
      case "cowsay":
        return getCowsayOutput(args || undefined);
      case "hack":
        return getHackOutput();
      case "weather":
        return getWeatherOutput();
      case "time":
      case "date":
        return getTimeOutput();
      case "joke":
        return getJokeOutput();
      case "ascii":
        return getAsciiOutput();
      case "tree":
        return getTreeOutput();
      case "ping":
        return getPingOutput();
      case "whoisthat":
        return getWhoisthatOutput();
      case "rickroll":
        return getRickrollOutput();
      case "coffee":
        return getCoffeeOutput();
      case "vim":
      case "vi":
        return getVimOutput();
      case "emacs":
        return getEmacsOutput();
      case "clear":
        return "CLEAR";
      case "exit":
      case "quit":
        return <p className="text-neutral-500">Use the &apos;Exit Terminal&apos; button or click <a href="/" className="text-cyan-400 hover:underline">here</a> to leave.</p>;
      case "":
        return null;
      default:
        return (
          <p className="text-red-400">
            Command not found: {cmd}. Type <span className="text-cyan-400">help</span> for available commands.
          </p>
        );
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    const output = processCommand(currentInput);
    
    if (output === "CLEAR") {
      setHistory([]);
      setShowIntro(false);
    } else {
      setHistory(prev => [...prev, { command: currentInput, output }]);
      if (currentInput.trim()) {
        setCommandHistory(prev => [...prev, currentInput]);
      }
    }
    
    setCurrentInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matches = AVAILABLE_COMMANDS.filter(cmd => cmd.startsWith(currentInput.toLowerCase()));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Head>
        <title>{personalInfo.name} | Terminal Portfolio</title>
        <meta name="description" content={personalInfo.bio} />
      </Head>

      <div className="min-h-screen bg-[#0d1117] text-white font-mono" onClick={focusInput}>
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
              className="bg-[#0d1117] p-6 min-h-[70vh] max-h-[80vh] overflow-y-auto space-y-4"
            >
              {/* Welcome ASCII Art */}
              {showIntro && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-400 text-xs md:text-sm whitespace-pre leading-tight mb-4"
                >
{`    _    _     _     _     _          _    
   / \\  | |__ | |__ (_)___| |__   ___| | __
  / _ \\ | '_ \\| '_ \\| / __| '_ \\ / _ \\ |/ /
 / ___ \\| |_) | | | | \\__ \\ | | |  __/   < 
/_/   \\_\\_.__/|_| |_|_|___/_| |_|\\___|_|\\_\\`}
                  <p className="text-neutral-500 mt-2">Welcome to my interactive terminal portfolio!</p>
                  <p className="text-neutral-500">Type <span className="text-cyan-400">help</span> to see available commands.</p>
                </motion.div>
              )}

              {/* Command History */}
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <CommandLine command={item.command} />
                  {item.output && <div className="mt-2">{item.output}</div>}
                </motion.div>
              ))}

              {/* Current Input Line */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap">
                <TerminalPrompt />
                <span className="text-neutral-500">~</span>
                <span className="text-cyan-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none text-white min-w-[200px]"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="animate-pulse text-white">▋</span>
              </form>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-6 text-xs text-neutral-600"
          >
            <p>© {new Date().getFullYear()} {personalInfo.name} | Built with Next.js</p>
            <p className="mt-1">
              <kbd className="px-1.5 py-0.5 bg-[#161b22] rounded border border-[#30363d]">↑</kbd>/<kbd className="px-1.5 py-0.5 bg-[#161b22] rounded border border-[#30363d]">↓</kbd> history • 
              <kbd className="px-1.5 py-0.5 bg-[#161b22] rounded border border-[#30363d] ml-2">Tab</kbd> autocomplete
            </p>
          </motion.footer>
        </div>
      </div>
    </>
  );
}
