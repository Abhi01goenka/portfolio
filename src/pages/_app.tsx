import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@/layout/layout";
import V1Layout from "@/layout/v1-layout";
import '@/styles/skills_carousel.css';
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isV1Route = router.pathname.startsWith("/v1");
  const isStandalonePage = router.pathname === "/" || router.pathname === "/bento" || router.pathname === "/terminal";

  // Standalone pages (landing, bento, terminal) don't need layout wrapper
  if (isStandalonePage) {
    return (
      <>
        <Analytics />
        <Component {...pageProps} />
      </>
    );
  }

  // V1 routes use V1Layout with updated navigation
  if (isV1Route) {
    return (
      <>
        <Analytics />
        <V1Layout>
          <Component {...pageProps} />
        </V1Layout>
      </>
    );
  }

  // Fallback to default layout (for any legacy routes)
  return (
    <>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
