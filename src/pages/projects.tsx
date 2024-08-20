"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import AbilitySync from "@/components/projects-content/AbilitySync"
import EduHubAI from "@/components/projects-content/EduHubAI";
import CollegeGateKeeper from "@/components/projects-content/CollegeGateKeeper";
import Agrico from "@/components/projects-content/Agrico";
import DesktopVirtualAssistant from "@/components/projects-content/DesktopVirtualAssistant";

export default function Projects() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Projects
            </h2>
            <Carousel items={cards} />
        </div>
    );
}


const data = [
    {
        category: "",
        title: "AbilitySync",
        src: "/AbilitySync.jpg",
        content: <AbilitySync />,
    },
    {
        category: "",
        title: "EduHub-AI",
        src: "/EduHubAI.webp",
        content: <EduHubAI />,
    },
    {
        category: "",
        title: "College GateKeeper",
        src: "/CGK.webp",
        content: <CollegeGateKeeper />,
    },

    {
        category: "",
        title: "Agrico",
        src: "/Agrico.jpg",
        content: <Agrico />,
    },
    {
        category: "",
        title: "Desktop Virtual Assistant",
        src: "/DVA.jpg",
        content: <DesktopVirtualAssistant />,
    },
];
