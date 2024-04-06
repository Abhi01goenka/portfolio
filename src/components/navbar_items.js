import { IconHome, IconMessage, IconPresentation, IconUser } from "@tabler/icons-react";
export const navItems = [
    {
        name: "Home",
        link: "/",
        icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Projects",
        link: "/projects",
        icon: <IconPresentation className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "About Me",
        link: "/aboutme",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Contact",
        link: "/contact",
        icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
];