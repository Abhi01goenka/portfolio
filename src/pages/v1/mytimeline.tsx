import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timeline } from "@/data/portfolio-data";

export default function V1Timeline() {
    const data = timeline.map((item) => ({
        title: item.year,
        content: (
            <div>
                <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
                    {item.items.map((entry, idx) => (
                        <li key={idx}>
                            {entry.highlight ? (
                                <>
                                    {entry.text.split(entry.highlight).map((part, i, arr) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <span className="font-semibold">{entry.highlight}</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </>
                            ) : (
                                entry.text
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        ),
    }));

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
