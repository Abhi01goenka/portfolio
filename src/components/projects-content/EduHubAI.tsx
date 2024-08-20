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
                        {/* <Image
                            src="/EduHubAImain.png"
                            alt="EduHub AI main page"
                            height="1000"
                            width="1000"
                            className="md:w-full md:h-full h-full w-full mx-auto object-contain"
                        /> */}
                        <Image
                            src='/EduHubAImain.png'
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                        />

                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
                            <LinkPreview url="https://github.com/superiorsd10/EduHub-AI" className="font-bold">
                                EduHub-AI
                            </LinkPreview> {" "}is an innovative platform designed to transform education through the integration of advanced artificial intelligence technologies. EduHub-AI addresses the inefficiencies of traditional educational systems by offering personalized learning experiences, real-time collaboration, and comprehensive assessment tools. Key features include AI-generated quizzes and assignments tailored to individual student performance, live streaming classes for interactive remote learning, and dynamic learning tools that enhance engagement and understanding. With robust security and collaboration features, EduHub-AI creates a safe and supportive online learning environment. This project represents a significant leap in educational technology, aiming to provide a personalized, engaging, and efficient learning platform for students and educators alike.
                        </p>
                    </div>
                );
            })}
        </>
    );
};