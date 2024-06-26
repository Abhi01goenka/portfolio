import { useEffect } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { skills } from "../components/skills";
import { aboutme } from "../components/about-me-content";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";

export default function AboutMe() {
  const dummyContent = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat
            incididunt incididunt enim magna id est qui sunt fugiat. Laboris do
            duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
            reprehenderit dolore nisi velit exercitation Lorem qui do enim
            culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud
            fugiat voluptate do Lorem culpa officia sint labore. Tempor
            consectetur excepteur ut fugiat veniam commodo et labore dolore
            commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia
            qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla
            nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "React",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Changelog",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Launch Week",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAchievements = () => {
    const achievementsSection = document.getElementById("achievements");
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e : TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e : TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe left (to achievements)
        scrollToAchievements();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right (to projects)
        scrollToProjects();
      }
    };

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.addEventListener("touchstart", handleTouchStart, false);
      skillsSection.addEventListener("touchend", handleTouchEnd, false);
    }

    return () => {
      if (skillsSection) {
        skillsSection.removeEventListener("touchstart", handleTouchStart, false);
        skillsSection.removeEventListener("touchend", handleTouchEnd, false);
      }
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        {/* About Me */}
        <div
          className="flex flex-col w-[60vw] min-h-screen justify-center items-center"
          id="about-me"
        >
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <TextGenerateEffect className="text-center" words={aboutme} />
          </BackgroundGradient>

          {/* Swipe Down button */}
          <button
            onClick={scrollToSkills}
            className="mt-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
              Skills
            </span>
          </button>
        </div>

        {/* Skills */}
        <div
          className="flex flex-col items-center w-full min-h-screen justify-center"
          id="skills"
        >
          <h1 className="text-4xl text-center font-semibold text-black dark:text-white">
            Skills
          </h1>
          <div className="max-w-5xl mx-auto px-8 mt-6">
            <HoverEffect items={skills} />
          </div>

          {/* Swipe Left and Right buttons */}
          <div className="flex mt-10 space-x-4">
            <button
              onClick={scrollToProjects}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Swipe Right to Projects
            </button>
            <button
              onClick={scrollToAchievements}
              className="p-2 bg-green-500 text-white rounded"
            >
              Swipe Left to Achievements
            </button>
          </div>
        </div>

        {/* Projects */}
        <div
          className="flex flex-col items-center w-full min-h-screen justify-center"
          id="projects"
        >
          <h1 className="text-4xl text-center font-semibold text-black dark:text-white">
            Projects
          </h1>
          {/* <div className="max-w-5xl mx-auto px-8 mt-6 overflow-auto"> */}
          <TracingBeam className="max-w-5xl mx-auto px-8 mt-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative overflow-y-scroll">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>

                  <p className="text-xl mb-4">{item.title}</p>

                  <div className="text-sm  prose prose-sm dark:prose-invert">
                    {item?.image && (
                      <Image
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    )}
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
          {/* </div> */}
        </div>

        {/* Achievements */}
        <div
          className="flex flex-col items-center w-full min-h-screen justify-center"
          id="achievements"
        >
          <h1 className="text-4xl text-center font-semibold text-black dark:text-white">
            Achievements
          </h1>
          <div className="max-w-5xl mx-auto px-8 mt-6">
            {/* Add your achievements content here */}
          </div>
        </div>
      </div>
    </>
  );
}
