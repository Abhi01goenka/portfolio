import React from "react";
import Head from "next/head";
import { FloatingDock } from "@/components/ui/floating-dock";
import links from "@/components/navbar_items";

const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="relative min-h-screen">
            <Head>
                <title>Abhishek's Portfolio</title>
            </Head>
            <main className="pb-16">
                {children}
            </main>
            <FloatingDock items={links} />
        </div>
    );
};


export default Layout;
