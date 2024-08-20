import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";

export default function CollegeGateKeeper() {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <Image
                            src='/CGKmain.png'
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                        />
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
                            <LinkPreview url="https://github.com/Abhi01goenka/college-gatekeeper-1" className="font-bold">
                                College GateKeeper
                            </LinkPreview> {" "}is an advanced Flutter-based application integrated with Python Flask and Firebase technologies, revolutionizing college attendance management systems. Created a user-friendly interface enabling efficient tracking of student in-time and out-time, with additional features like defaulter list and warning message functionality. Leveraged Firebase’s real-time database for secure data storage and synchronization, while ensuring cross-platform accessibility through Flutter framework.
                        </p>
                    </div>
                );
            })}
        </>
    );
};