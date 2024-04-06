import React, { useContext } from "react";
import Head from "next/head";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/components/navbar_items";

const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <Head>Abhishek's Portfolio</Head>
            <FloatingNav navItems={navItems} />
            {children}
        </>
    );
};

export default Layout;