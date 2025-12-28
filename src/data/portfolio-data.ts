// Centralized portfolio data - Single source of truth for all themes

export const personalInfo = {
  name: "Abhishek Goenka",
  title: "Software Engineer",
  company: "Cisco",
  location: "Bangalore, India",
  email: "abhishekgoenka4@gmail.com",
  phone: "+91-829-9650-261",
  tagline: "Building secure network infrastructure at Cisco. Knight on LeetCode. Passionate about DSA and system design.",
  bio: "Software Engineer at Cisco working on Firepower Management Center (FMC) in the Network Security Team. I specialize in backend development using Java, Perl, and Python. With 1000+ problems solved across competitive programming platforms and a Knight badge on LeetCode (top 2.17%), I bring strong problem-solving skills to building scalable security solutions.",
  education: {
    degree: "B.Tech in Computer Science",
    institution: "IIIT Lucknow",
    year: "2025",
    cgpa: "9.03",
  },
};

export const socialLinks = {
  github: "https://github.com/Abhi01goenka",
  linkedin: "https://www.linkedin.com/in/abhishek-goenka-9b0374229/",
  twitter: "https://x.com/Lone_Rider_007",
  instagram: "https://www.instagram.com/__abg__001__/",
  email: "mailto:abhishekgoenka4@gmail.com",
  resume: "https://drive.google.com/file/d/1eGZ76lZ7m5Gkc6IhYL5jjnIf1Zi-saSa/view?usp=sharing",
};

export const skills = [
  { name: "C++", icon: "cpp", link: "https://cplusplus.com/" },
  { name: "Python", icon: "python", link: "https://www.python.org/" },
  { name: "Java", icon: "java", link: "https://www.java.com/en/" },
  { name: "C", icon: "c", link: "https://www.w3schools.com/c/c_intro.php" },
  { name: "HTML", icon: "html", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: "css", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: "javascript", link: "https://www.javascript.com/" },
  { name: "React.js", icon: "react", link: "https://react.dev/" },
  { name: "Next.js", icon: "nextjs", link: "https://nextjs.org/" },
  { name: "Firebase", icon: "firebase", link: "https://firebase.google.com/" },
  { name: "Flutter", icon: "flutter", link: "https://flutter.dev/" },
];

export const projects = [
  {
    id: "abilitysync",
    title: "AbilitySync",
    shortDescription: "Face recognition + NLG for accessibility",
    description: "A cutting-edge project that merges face recognition technology with natural language generation to produce detailed descriptions of detected faces in images. This innovative solution leverages CNN, machine learning, and advanced NLP to deliver precise and personalized descriptions. Designed to assist disabled individuals in using social media through its interactive tool.",
    techStack: ["Python", "CNN", "NLP", "Generative AI"],
    github: "https://github.com/Joywin2412/InternHackathon",
    image: "/AbilitySync.jpg",
    mainImage: "/AbilitySyncmain.png",
    year: "2024",
    context: "Cisco Intern Hackathon",
  },
  {
    id: "eduhub-ai",
    title: "EduHub-AI",
    shortDescription: "AI-powered educational platform",
    description: "An innovative platform designed to transform education through advanced AI technologies. Features include AI-generated quizzes and assignments tailored to individual student performance, live streaming classes for interactive remote learning, and dynamic learning tools that enhance engagement and understanding.",
    techStack: ["React", "Python", "AI/ML", "Firebase"],
    github: "https://github.com/superiorsd10/EduHub-AI",
    image: "/EduHubAI.webp",
    mainImage: "/EduHubAImain.png",
    year: "2024",
    context: "6th Semester Group Project",
  },
  {
    id: "college-gatekeeper",
    title: "College GateKeeper",
    shortDescription: "Smart attendance management system",
    description: "An advanced Flutter-based application integrated with Python Flask and Firebase technologies, revolutionizing college attendance management systems. Features efficient tracking of student in-time and out-time, defaulter list, and warning message functionality with real-time database synchronization.",
    techStack: ["Flutter", "Python Flask", "Firebase"],
    github: "https://github.com/Abhi01goenka/college-gatekeeper-1",
    image: "/CGK.webp",
    mainImage: "/CGKmain.png",
    year: "2023",
    context: "Python Project",
  },
  {
    id: "agrico",
    title: "Agrico",
    shortDescription: "Smart farming mobile app",
    description: "A mobile application aimed at revolutionizing the Indian agricultural sector by providing farmers with critical information on crop management. Provides guidance on optimal sowing and harvesting times, seed selection, fertilizer use, and tracks water content and weather conditions using IoT devices and sensors.",
    techStack: ["Flutter", "IoT", "Firebase"],
    github: "https://github.com/Abhi01goenka/Agrico",
    image: "/Agrico.jpg",
    mainImage: "/Agricomain.png",
    year: "2022",
    context: "Semester Group Project",
  },
  {
    id: "desktop-virtual-assistant",
    title: "Desktop Virtual Assistant",
    shortDescription: "Python-based personal assistant",
    description: "A robust Python codebase implementing extensive functionalities including real-time time and date display, personalized identification, intelligent reminders, location services, speed testing, dynamic content retrieval, email functionality, and seamless integration with platforms like Wikipedia, YouTube, Facebook, LinkedIn, and productivity tools.",
    techStack: ["Python", "APIs", "Automation"],
    github: "https://github.com/Abhi01goenka/Desktop-Virtual-Assistant",
    image: "/DVA.jpg",
    mainImage: "/DVAmain.png",
    year: "2022",
    context: "Personal Project",
  },
];

export const timeline = [
  {
    year: "2025",
    items: [
      { text: "Software Engineer Intern at Cisco – Contributed to Low-end Next Generation Firewall support and new feature implementation for Firepower Management Center.", highlight: "Software Engineer Intern" },
      { text: "Received formal recognition from the Director, mentor, and colleagues for outstanding contributions.", highlight: null },
      { text: "Graduated with a degree in Computer Science and Engineering.", highlight: null },
      { text: "Joined Cisco, Bangalore as a Software Engineer in the NetSec Team, Cisco Secure.", highlight: "Software Engineer" },
    ],
  },
  {
    year: "2024",
    items: [
      { text: "Developed EduHub-AI as part of a 6th semester group project, focusing on AI-driven educational solutions.", highlight: "EduHub-AI" },
      { text: "Software Engineer Intern at Cisco, Bangalore – Automated workflows and upgraded the SQLite library in the Network Security Team.", highlight: "Software Engineer Intern" },
      { text: "Engineered AbilitySync during the Cisco Intern Hackathon, delivering an innovative team productivity tool.", highlight: "AbilitySync" },
      { text: "Explored advanced topics in Natural Language Processing (NLP) and Artificial Intelligence (AI).", highlight: "NLP" },
      { text: "Initiated the development of my personal portfolio website.", highlight: "portfolio website" },
      { text: "Received a return offer from Cisco for a Spring Internship and Full-Time Employment (FTE).", highlight: "return offer" },
      { text: "Shortlisted for Spring internship interviews at Google (off-campus).", highlight: "Google" },
    ],
  },
  {
    year: "2023",
    items: [
      { text: "Shortlisted for interviews at Google and Cisco (off-campus), and Flipkart (on-campus).", highlight: "Google" },
      { text: "Secured a summer internship offer from Cisco.", highlight: "Cisco" },
      { text: "Served as Public Relations Lead for Equinox 2024, IIIT Lucknow's flagship techno-cultural fest.", highlight: "Public Relations Lead" },
      { text: "Contributed to Hacktoberfest through open-source projects.", highlight: "Hacktoberfest" },
      { text: "Collaborated on the College GateKeeper App as part of a Python project.", highlight: "College GateKeeper" },
      { text: "Prepared for summer internships by mastering Data Structures & Algorithms (DSA).", highlight: "DSA" },
    ],
  },
  {
    year: "2022",
    items: [
      { text: "Mastered the C language and foundational web technologies (HTML, CSS, JavaScript).", highlight: "C language" },
      { text: "Developed Electronic Voting Machine using C language for the semester curriculum.", highlight: "Electronic Voting Machine" },
      { text: "Shifted focus to Competitive Programming (CP) and Python development.", highlight: "Competitive Programming" },
      { text: "Engineered a personal Desktop Virtual Assistant from scratch using Python.", highlight: "Desktop Virtual Assistant" },
      { text: "Ventured into app development, building Agrico as part of a semester group project.", highlight: "Agrico" },
      { text: "Explored CTFs and practiced on platforms like picoCTF, OverTheWire, and TryHackMe.", highlight: "CTFs" },
    ],
  },
  {
    year: "2021",
    items: [
      { text: "Achieved 99.16 percentile (Rank 8642) in JEE Mains.", highlight: "99.16 percentile" },
      { text: "Secured Rank 7933 in JEE Advanced.", highlight: "7933" },
      { text: "Admitted to Indian Institute of Information Technology (IIIT), Lucknow as a Computer Science undergraduate.", highlight: "IIIT Lucknow" },
      { text: "Began learning Python and exploring programming fundamentals.", highlight: "Python" },
    ],
  },
  {
    year: "2020",
    items: [
      { text: "Graduated from Gurukul Academy, Lucknow as an ISC PCM student with 98.5%.", highlight: "98.5%" },
      { text: "Chose to pursue Engineering in Computer Science, inspired by a passion for coding.", highlight: null },
      { text: "Learned Java in school, which sparked my interest in programming.", highlight: "Java" },
      { text: "Scored 96 percentile in JEE Mains with only 5 months of preparation.", highlight: "96 percentile" },
    ],
  },
];

export const heroImages = [
  "/andy-holmes-rCbdp8VCYhQ-unsplash.jpg",
  "/billy-huynh-W8KTS-mhFUE-unsplash.jpg",
  "/greg-rakozy-0LU4vO5iFpM-unsplash.jpg",
  "/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
];
