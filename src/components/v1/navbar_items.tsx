import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconUser,
    IconCode,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconStarFilled,
    IconMail,
    IconTimeline
} from "@tabler/icons-react";

const v1Links = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/v1",
        target: ""
    },
    {
        title: "About me",
        icon: (
            <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/v1/aboutme",
        target: ""
    },
    {
        title: "Projects",
        icon: (
            <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/v1/projects",
        target: ""
    },
    {
        title: "Timeline",
        icon: (
            <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/v1/mytimeline",
        target: ""
    },
    {
        title: "Resume",
        icon: (
            <IconStarFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://drive.google.com/file/d/1eGZ76lZ7m5Gkc6IhYL5jjnIf1Zi-saSa/view?usp=sharing",
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
        href: "https://www.instagram.com/__abg__001__/",
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

export default v1Links;
