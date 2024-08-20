import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";

export default function EduHubAI() {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <Image
                            src='/DVAmain.png'
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                        />
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
                            <LinkPreview url="https://github.com/Abhi01goenka/Desktop-Virtual-Assistant" className="font-bold">
                                Desktop Virtual Assistant
                            </LinkPreview> {" "}is a robust codebase leveraging Python’s versatility to implement an extensive range of functionalities, including
                            real-time time and date display, personalized identification, intelligent reminders, location services, speed testing, dynamic
                            content retrieval, email functionality, and seamless integration with popular platforms like Wikipedia, YouTube, Facebook,
                            LinkedIn, and more.
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
                            It also involves the integration of productivity tools such as Microsoft Office Suite (Excel, PowerPoint, Word), Google
                            Classroom, Git Bash, Figma, virtual machines, and collaborative platforms like Webex and Google Meet, enhancing
                            workflow optimization and seamless project management.
                        </p>
                    </div>
                );
            })}
        </>
    );
};