import { useEffect } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { IconArrowDown } from "@tabler/icons-react";
import { personalInfo } from "@/data/portfolio-data";
import { skills as skillsData } from "@/components/skills";

export default function V1AboutMe() {
    const scrollToSkills = () => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="relative flex flex-col items-center">
                <div className="absolute inset-0 z-10">
                    <ShootingStars className="w-full h-full" />
                    <StarsBackground className="w-full h-full" />
                </div>
                <div
                    className="relative z-20 flex flex-col w-[60vw] min-h-screen justify-center items-center"
                    id="about-me"
                >
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <TextGenerateEffect className="text-center" words={personalInfo.bio} />
                    </BackgroundGradient>

                    <button
                        onClick={scrollToSkills}
                        className="mt-10 relative z-30 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
                            <IconArrowDown className="h-5 w-5"></IconArrowDown>
                        </span>
                    </button>
                </div>
            </div>

            <div
                className="relative z-20 flex flex-col items-center w-full min-h-screen justify-center"
                id="skills"
            >
                <h1 className="text-4xl text-center font-semibold text-black dark:text-white">
                    Skills
                </h1>
                <div className="max-w-5xl mx-auto px-8 mt-6">
                    <HoverEffect items={skillsData} />
                </div>
            </div>
        </>
    );
}
