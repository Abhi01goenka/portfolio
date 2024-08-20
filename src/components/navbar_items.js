import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconUser,
    IconCode,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconStarFilled,
    IconMail
} from "@tabler/icons-react";
import Image from "next/image";
const links = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/",
    },

    {
        title: "About me",
        icon: (
            <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/aboutme",
    },
    {
        title: "Projects",
        icon: (
            <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/projects",
    },
    {
        title: "Resume",
        icon: (
            <IconStarFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://drive.google.com/file/d/1wWtmn7sgwAC9nmEL_Rh7aJQnKhh-X-Lm/view?usp=sharing",
    },
    {
        title: "Mail",
        icon: (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "mailto:abhishekgoenka4@gmail.com",
    },
    {
        title: "LinkedIn",
        icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/abhishek-goenka-9b0374229/",
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/Abhi01goenka",
    },

    {
        title: "Instagram",
        icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.instagram.com/goenka_abg242/",
    },
    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://x.com/Lone_Rider_007",
    },
];

export default links;