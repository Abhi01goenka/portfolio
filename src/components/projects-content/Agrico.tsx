import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";

export default function Agrico() {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <Image
                            src='/Agricomain.png'
                            alt="blog thumbnail"
                            height="1000"
                            width="1000"
                            className="rounded-lg mb-10 object-cover"
                        />
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto text-justify">
                            <LinkPreview url="https://github.com/Abhi01goenka/Agrico" className="font-bold">
                                Agrico
                            </LinkPreview> {" "}is a mobile application aimed at revolutionizing the Indian agricultural sector by providing farmers with critical information on crop management. Inspired by a desire to leverage our programming skills for societal benefit, we created Agrico to assist farmers with essential agricultural decisions. The app provides guidance on optimal sowing and harvesting times, seed selection, fertilizer use, and tracks water content and weather conditions, effectively supporting farmers' hard work with digital solutions. Agrico utilizes IoT devices and sensors to gather precise agricultural data, including soil moisture and the presence of harmful gases.
                        </p>
                    </div>
                );
            })}
        </>
    );
};