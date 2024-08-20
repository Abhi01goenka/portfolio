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
        target: ""
    },

    {
        title: "About me",
        icon: (
            <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/aboutme",
        target: ""
    },
    {
        title: "Projects",
        icon: (
            <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/projects",
        target: ""
    },
    {
        title: "Resume",
        icon: (
            <IconStarFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://drive.google.com/file/d/1wWtmn7sgwAC9nmEL_Rh7aJQnKhh-X-Lm/view?usp=sharing",
        target: "_blank"
    },
    {
        title: "Mail",
        icon: (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "mailto:abhishekgoenka4@gmail.com",
        target: ""
    },
    {
        title: "LinkedIn",
        icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/abhishek-goenka-9b0374229/",
        target: "_blank"
    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/Abhi01goenka",
        target: "_blank"
    },

    {
        title: "Instagram",
        icon: (
            <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.instagram.com/goenka_abg242/",
        target: "_blank"
    },
    {
        title: "Twitter",
        icon: (
            <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://x.com/Lone_Rider_007",
        target: "_blank"
    },
];

export default links;