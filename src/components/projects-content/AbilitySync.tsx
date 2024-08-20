import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";

export default function AbilitySync() {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <Image
                            src='/AbilitySyncmain.png'
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                        />
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
                            <LinkPreview url="https://github.com/Joywin2412/InternHackathon" className="font-bold">
                                AbilitySync
                            </LinkPreview> {" "}is a cutting-edge project that merges face recognition technology with natural language generation to produce detailed descriptions of detected faces in images. This innovative solution leverages a combination of convolutional neural networks (CNN), state-of-the-art machine learning techniques, and advanced natural language processing to deliver precise and personalized descriptions.
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
                            This project was developed for the Intern Hackathon at Cisco, which focused on using Generative AI tools, showcasing the integration of various advanced technologies in a competitive setting. AbilitySync is designed to assist disabled individuals in using social media through its interactive tool.
                        </p>
                    </div>
                );
            })}
        </>
    );
};