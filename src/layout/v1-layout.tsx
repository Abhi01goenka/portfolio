import React from "react";
import Head from "next/head";
import { FloatingDock } from "@/components/ui/floating-dock";
import v1Links from "@/components/v1/navbar_items";

const V1Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="relative min-h-screen">
            <Head>
                <title>Abhishek's Portfolio | Cosmic Theme</title>
            </Head>
            <main className="pb-16">
                {children}
            </main>
            <FloatingDock items={v1Links} />
        </div>
    );
};

export default V1Layout;
