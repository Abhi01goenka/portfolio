import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/layout";
import '@/styles/skills_carousel.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
