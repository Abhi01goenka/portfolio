import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function MyTimeline() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li><span className="font-semibold">Software Engineer Intern</span> at Cisco – Contributed to the development of Low-end Next Generation Firewall support and new feature implementation for Firepower Management Center in the Network Security Team of Cisco Secure.</li>
                        <li>Received formal recognition from the Director, mentor, and colleagues for outstanding contributions.</li>
                        <li>Graduated with a degree in Computer Science and Engineering.</li>
                        <li>Joined Cisco, Bangalore as a <span className="font-semibold">Software Engineer</span> in the NetSec Team, Cisco Secure.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li>Developed <span className="font-semibold">EduHub-AI</span> as part of a 6th semester group project, focusing on AI-driven educational solutions.</li>
                        <li><span className="font-semibold">Software Engineer Intern</span> at Cisco, Bangalore – Automated workflows and upgraded the SQLite library in the Network Security Team of Cisco Secure.</li>
                        <li>Engineered <span className="font-semibold">AbilitySync</span> during the Cisco Intern Hackathon, delivering an innovative team productivity tool.</li>
                        <li>Explored advanced topics in <span className="font-semibold">Natural Language Processing (NLP)</span> and <span className="font-semibold">Artificial Intelligence (AI)</span>.</li>
                        <li>Initiated the development of my personal <span className="font-semibold">portfolio website</span>.</li>
                        <li>Received a return offer from Cisco for a <span className="font-semibold">Spring Internship</span> and <span className="font-semibold">Full-Time Employment (FTE)</span>.</li>
                        <li>Shortlisted for Spring internship interviews at <span className="font-semibold">Google</span> (off-campus).</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Later 2023",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li>Shortlisted for interviews at <span className="font-semibold">Google</span> and <span className="font-semibold">Cisco</span> (off-campus), and <span className="font-semibold">Flipkart</span> (on-campus).</li>
                        <li>Secured a summer internship offer from <span className="font-semibold">Cisco</span>.</li>
                        <li>Served as <span className="font-semibold">Public Relations Lead</span> for Equinox 2024, IIIT Lucknow's flagship techno-cultural fest.</li>
                        <li>Contributed to <span className="font-semibold">Hacktoberfest</span> through open-source projects.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li>Served as <span className="font-semibold">Events Executive</span> for Equinox 2023, IIIT Lucknow's premier techno-cultural festival.</li>
                        <li>Collaborated on the <span className="font-semibold">College GateKeeper App</span> as part of a Python project for the college curriculum.</li>
                        <li>Prepared for summer internships by mastering <span className="font-semibold">Data Structures & Algorithms (DSA)</span>, practicing on <span className="font-semibold">LeetCode</span>, and participating in regular coding contests.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Later 2022",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li>Shifted focus to Competitive Programming (CP) and Python development.</li>
                        <li>Began participating in regular contests on <span className="font-semibold">CodeForces</span>.</li>
                        <li>Engineered a personal <span className="font-semibold">Desktop Virtual Assistant</span> from scratch using Python.</li>
                        <li>Ventured into app development, building <span className="font-semibold">Agrico</span> as part of a semester group project.</li>
                        <li>Contributed to <span className="font-semibold">Hacktoberfest</span> through open-source contributions.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Early 2022",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li>Mastered the <span className="font-semibold">C language</span> and foundational web technologies (<span className="font-semibold">HTML, CSS, JavaScript</span>) as part of the college curriculum.</li>
                        <li>Developed a group project: <span className="font-semibold">Electronic Voting Machine</span> using C language for the semester curriculum.</li>
                        <li>Created a basic <span className="font-semibold">Shopping Website</span> using HTML and CSS as a group project.</li>
                        <li>Deepened my interest in <span className="font-semibold">Competitive Programming</span> and <span className="font-semibold">Cybersecurity</span>.</li>
                        <li>Explored CTFs and practiced on platforms like <span className="font-semibold">picoCTF</span>, <span className="font-semibold">OverTheWire</span>, and <span className="font-semibold">TryHackMe</span>. Became well-known in college for cybersecurity skills.</li>
                        <li>Began learning <span className="font-semibold">C++</span> and started competitive programming in C++.</li>
                        <li>Started participating in regular contests on <span className="font-semibold">CodeChef</span>.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li>Achieved <span className="font-semibold">99.16 percentile</span> (Rank <span className="font-semibold">8642</span>) in JEE Mains.</li>
                        <li>Secured Rank <span className="font-semibold">7933</span> in JEE Advanced.</li>
                        <li>Admitted to <span className="font-semibold">Indian Institute of Information Technology (IIIT), Lucknow</span> as a Computer Science undergraduate.</li>
                        <li>Began learning <span className="font-semibold">Python</span> and exploring programming fundamentals.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                        <li>Graduated from <span className="font-semibold">Gurukul Academy, Lucknow</span> as an ISC PCM student with <span className="font-semibold">98.5%</span>.</li>
                        <li>Chose to pursue Engineering in Computer Science, inspired by a passion for coding and problem-solving.</li>
                        <li>Learned <span className="font-semibold">Java</span> in school, which sparked my interest in programming.</li>
                        <li>Began JEE preparation at <span className="font-semibold">SFA (Student Friendly Academy)</span>, Lucknow.</li>
                        <li>Scored <span className="font-semibold">96 percentile</span> in JEE Mains and <span className="font-semibold">14989 rank</span> in JEE Advanced, both with only <span className="font-semibold">5 months</span> of preparation.</li>
                    </ul>
                </div>
                
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
