import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/layout";
import '@/styles/skills_carousel.css';
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
